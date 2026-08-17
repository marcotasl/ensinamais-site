<?php
/**
 * Plugin Name: Ensina Mais - Hero API
 * Description: Registra o CPT "banner" do hero da home do Ensina Mais, expoe os 6 campos editoriais em REST sob a chave "acf" e cria a capability dedicada "edit_hero_banner". Nao inclui segredos e nao cria/altera nenhum conteudo ao ativar.
 * Version: 1.0.0
 * Author: Virtus Design
 * Text Domain: ensina-mais-hero-api
 * Requires at least: 6.0
 * Requires PHP: 7.4
 *
 * MVE-175 Stage 1 - repositorio ensinamais-site, wordpress-plugins/ensina-mais-hero-api/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Sem acesso direto.
}

define( 'EMHA_CPT', 'banner' );
define( 'EMHA_CAP', 'edit_hero_banner' );

/**
 * CPT usado somente como fonte de dados REST para o hero da home.
 * public=false + publicly_queryable=false: nao existe URL/template de site para
 * "banner" (nunca deve virar uma pagina navegavel); show_in_rest=true e o unico
 * canal de acesso, junto com a tela nativa em wp-admin (show_ui=true) como
 * fallback manual caso o admin Next.js (Stage 3) fique indisponivel.
 */
function emha_register_banner_cpt() {
	register_post_type(
		EMHA_CPT,
		array(
			'labels'              => array(
				'name'          => __( 'Banners do Hero', 'ensina-mais-hero-api' ),
				'singular_name' => __( 'Banner do Hero', 'ensina-mais-hero-api' ),
				'add_new_item'  => __( 'Adicionar banner', 'ensina-mais-hero-api' ),
				'edit_item'     => __( 'Editar banner', 'ensina-mais-hero-api' ),
				'all_items'     => __( 'Banners do Hero', 'ensina-mais-hero-api' ),
				'menu_name'     => __( 'Banners do Hero', 'ensina-mais-hero-api' ),
			),
			'public'               => false,
			'publicly_queryable'   => false,
			'exclude_from_search'  => true,
			'show_ui'              => true,
			'show_in_menu'         => true,
			'show_in_nav_menus'    => false,
			'show_in_admin_bar'    => false,
			'show_in_rest'         => true,
			'rest_base'            => 'banner',
			'menu_icon'            => 'dashicons-images-alt2',
			'menu_position'        => 25,
			'hierarchical'         => false,
			'has_archive'          => false,
			'rewrite'              => false,
			'query_var'            => false,
			// 'page-attributes' e o unico motivo de existir: expoe menu_order em
			// REST e habilita orderby=menu_order, que o front-end ja usa.
			'supports'             => array( 'title', 'page-attributes', 'author', 'revisions' ),
			// Uma unica capability dedicada gate tudo (ver comentario acima da
			// definicao de EMHA_CAP): sem distincao de autoria/status, sem
			// map_meta_cap, previsivel de auditar.
			'capability_type'      => EMHA_CPT,
			'map_meta_cap'         => false,
			// array_fill_keys em vez de repetir "=> EMHA_CAP" 9x: deixa o invariante
			// "todas as acoes mapeiam pra mesma capability" impossivel de divergir
			// por typo.
			'capabilities'         => array_fill_keys(
				array(
					'edit_post',
					'read_post',
					'delete_post',
					'edit_posts',
					'edit_others_posts',
					'publish_posts',
					'read_private_posts',
					'delete_posts',
					'delete_others_posts',
				),
				EMHA_CAP
			),
		)
	);
}
add_action( 'init', 'emha_register_banner_cpt' );

/**
 * Ativacao: concede EMHA_CAP ao Administrator e cria o papel dedicado
 * "hero_editor" (read + EMHA_CAP + upload_files, nada alem disso). Nao cria
 * nenhum post "banner", nao altera conteudo, nao grava segredo. Reversivel:
 * desativar o plugin nao remove a capability nem o papel (evita travar
 * contas caso o plugin seja temporariamente desligado); remocao manual, se
 * um dia necessaria, e `get_role('administrator')->remove_cap(EMHA_CAP)` e
 * `remove_role('hero_editor')`.
 *
 * O papel existe porque o WP core nao tem tela de gerenciar capabilities:
 * sem um papel pronto, o caminho manual mais obvio seria dar EMHA_CAP ao
 * papel Editor, que tambem enxerga o blog inteiro. Com o "API Middleware" do
 * Simple JWT Login ligado (exigido pelo fluxo do admin), isso faria um JWT
 * de quem so deveria editar o hero valer como editor do blog inteiro.
 *
 * upload_files e obrigatoria, nao opcional: tanto POST /wp/v2/media (upload
 * da imagem de fundo pelo admin Next.js) quanto o seletor de midia do campo
 * ACF na tela nativa do wp-admin exigem essa capability especifica no WP
 * core, alem de edit_hero_banner. Sem ela o editor autentica e edita texto,
 * mas o upload de imagem, que e o proprio motivo da issue, volta 403.
 */
function emha_on_activate() {
	$admin_role = get_role( 'administrator' );
	if ( $admin_role && ! $admin_role->has_cap( EMHA_CAP ) ) {
		$admin_role->add_cap( EMHA_CAP );
	}

	if ( ! get_role( 'hero_editor' ) ) {
		add_role(
			'hero_editor',
			__( 'Editor do Hero', 'ensina-mais-hero-api' ),
			array(
				'read'         => true,
				EMHA_CAP       => true,
				'upload_files' => true,
			)
		);
	}
}
register_activation_hook( __FILE__, 'emha_on_activate' );

/**
 * Field group ACF do hero, registrado em codigo (versionado, sem depender de
 * export/import manual no wp-admin). Roda apenas se ACF (free ou PRO) estiver
 * ativo; caso contrario o site continua funcionando com o fallback de
 * get_post_meta()/update_post_meta() usado pelo REST shim abaixo.
 */
function emha_register_acf_fields() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group(
		array(
			'key'      => 'group_emha_hero_banner',
			'title'    => 'Conteudo do Hero',
			'fields'   => array(
				array(
					'key'       => 'field_emha_subtitulo',
					'label'     => 'Subtitulo',
					'name'      => 'subtitulo',
					'type'      => 'text',
					'required'  => 1,
					'maxlength' => 80,
				),
				array(
					'key'       => 'field_emha_descricao',
					'label'     => 'Descricao',
					'name'      => 'descricao',
					'type'      => 'textarea',
					'required'  => 1,
					'maxlength' => 320,
					'rows'      => 4,
				),
				array(
					'key'       => 'field_emha_cta_texto',
					'label'     => 'Texto do CTA',
					'name'      => 'cta_texto',
					'type'      => 'text',
					'required'  => 1,
					'maxlength' => 60,
				),
				array(
					'key'          => 'field_emha_cta_link',
					'label'        => 'Link do CTA',
					'name'         => 'cta_link',
					'type'         => 'text',
					'required'     => 1,
					'instructions' => 'Ancora (#id), caminho interno (/rota) ou URL HTTPS. Esquema validado neste plugin na escrita (rejeita javascript:, data:, etc); o admin Next.js (Stage 3) e uma segunda camada.',
				),
				array(
					'key'      => 'field_emha_cor_overlay',
					'label'    => 'Cor do overlay',
					'name'     => 'cor_overlay',
					'type'     => 'color_picker',
					'required' => 1,
				),
				array(
					'key'           => 'field_emha_imagem_fundo',
					'label'         => 'Imagem de fundo',
					'name'          => 'imagem_fundo',
					'type'          => 'image',
					'required'      => 1,
					'return_format' => 'id',
					'preview_size'  => 'medium',
					'library'       => 'all',
					'mime_types'    => 'jpg,jpeg,png,webp',
				),
			),
			'location' => array(
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => EMHA_CPT,
					),
				),
			),
			// Exposicao REST fica por conta do register_rest_field() abaixo, que
			// normaliza o formato (ex.: resolve imagem_fundo para URL) e funciona
			// mesmo sem ACF. Deixar o show_in_rest nativo do ACF ligado aqui
			// registraria um segundo campo "acf" concorrente com o nosso.
			'show_in_rest' => 0,
		)
	);
}
add_action( 'acf/init', 'emha_register_acf_fields' );

/**
 * Chaves dos campos editoriais expostos em REST sob "acf". "title" fica de
 * fora de propósito: e o post_title nativo do WP, ja exposto automaticamente
 * pelo core em title.rendered, e editavel via o campo padrao "title" do REST
 * (gated pela mesma EMHA_CAP atraves de edit_post).
 *
 * @return string[]
 */
function emha_hero_field_keys() {
	return array( 'subtitulo', 'descricao', 'cta_texto', 'cta_link', 'cor_overlay', 'imagem_fundo' );
}

/**
 * Resolve o valor bruto de imagem_fundo (ID de anexo, array de retorno do ACF
 * ou uma URL ja resolvida) para uma URL simples, formato que o front-end
 * (src/lib/wordpress.ts) espera em WPBanner.acf.imagem_fundo.
 *
 * @param mixed $value Valor bruto vindo de get_field()/get_post_meta().
 * @return string
 */
function emha_resolve_image_url( $value ) {
	if ( is_array( $value ) && ! empty( $value['url'] ) ) {
		return (string) $value['url'];
	}
	if ( is_numeric( $value ) ) {
		$url = wp_get_attachment_url( (int) $value );
		return $url ? $url : '';
	}
	return is_string( $value ) ? $value : '';
}

/**
 * GET: le via ACF quando disponivel, senao cai para post meta puro. Sempre
 * devolve os 6 campos, mesmo vazios, para o shape do REST ser previsivel.
 *
 * @param array $object Representacao do post no response REST (ja inclui 'id').
 * @return array<string,string>
 */
function emha_get_acf_rest_value( $object ) {
	$post_id = $object['id'];
	$values  = array();

	foreach ( emha_hero_field_keys() as $key ) {
		$raw = function_exists( 'get_field' )
			? get_field( $key, $post_id )
			: get_post_meta( $post_id, $key, true );

		$values[ $key ] = ( 'imagem_fundo' === $key )
			? emha_resolve_image_url( $raw )
			: (string) $raw;
	}

	return $values;
}

/**
 * cta_link so aceita ancora (#...), caminho interno de um unico separador
 * (/...) ou HTTPS. Nunca javascript:, data: ou outro esquema executavel.
 *
 * Isso precisa ser recusado aqui dentro, nao so no admin Next.js (Stage 3):
 * o valor vai direto pra um `<a href>` na home publica (Hero.tsx), e existem
 * dois caminhos de escrita que nao passam pelo Stage 3 - PATCH direto em
 * /wp/v2/banner com qualquer JWT que carregue EMHA_CAP, e a tela nativa do
 * wp-admin (show_ui=true). Sem essa checagem aqui, e XSS armazenado.
 *
 * "Um unico separador" barra tanto "//evil.com" quanto "/\evil.com": o WHATWG
 * URL Standard trata "\" como equivalente a "/" pra esquemas especiais
 * (http/https), entao um navegador resolve "/\evil.com" como referencia
 * absoluta pro host evil.com, nao como caminho interno - so bloquear "//"
 * deixaria esse desvio aberto.
 *
 * @param string $value
 * @return bool
 */
function emha_is_valid_cta_link( $value ) {
	if ( 0 === strpos( $value, '#' ) ) {
		return true;
	}
	if ( 0 === strpos( $value, '/' ) && ! in_array( substr( $value, 1, 1 ), array( '/', '\\' ), true ) ) {
		return true;
	}
	// stripos, nao strpos: esquema de URL nao tem caixa (HTTPS://... e valido
	// pra qualquer navegador); rejeitar por causa de maiuscula so gera 400
	// confuso pra quem colou o link assim, sem reduzir superficie de ataque.
	if ( 0 === stripos( $value, 'https://' ) ) {
		return true;
	}
	return false;
}

/**
 * PATCH/POST: grava via ACF quando disponivel, senao update_post_meta().
 * imagem_fundo aceita o ID do anexo (nao URL) - decisao que resolve o item em
 * aberto do Stage 1 "confirmar se imagem_fundo usa ID de anexo ou URL": grava
 * ID, le URL (assimetria padrao para campos de imagem ACF com return_format
 * "url" ligado ao get_field, que e o que emha_resolve_image_url replica).
 *
 * O core ja bloqueia este callback para quem nao tem EMHA_CAP (a rota
 * PATCH/POST /wp/v2/banner/<id> so chega aqui apos current_user_can(
 * 'edit_post', $id ) passar, que sob map_meta_cap=false resolve direto pra
 * EMHA_CAP). A checagem abaixo e redundancia proposital: um limite de
 * autorizacao nao deve depender apenas do controller que o chama. Sem
 * segundo parametro porque EMHA_CAP nao e meta cap reconhecida pelo core -
 * o post ID nao muda o resultado, so seria ruido.
 *
 * @param mixed    $value  Valor recebido no corpo da requisicao para a chave "acf".
 * @param \WP_Post $object Post sendo atualizado.
 * @return true|\WP_Error
 */
function emha_update_acf_rest_value( $value, $object ) {
	if ( ! is_array( $value ) ) {
		return new WP_Error( 'emha_invalid_acf', __( 'O campo acf precisa ser um objeto.', 'ensina-mais-hero-api' ), array( 'status' => 400 ) );
	}

	if ( ! current_user_can( EMHA_CAP ) ) {
		return new WP_Error( 'emha_forbidden', __( 'Sem permissao para editar o hero.', 'ensina-mais-hero-api' ), array( 'status' => rest_authorization_required_code() ) );
	}

	foreach ( emha_hero_field_keys() as $key ) {
		if ( ! array_key_exists( $key, $value ) ) {
			continue;
		}

		$raw = $value[ $key ];

		switch ( $key ) {
			case 'imagem_fundo':
				$raw = absint( $raw );
				break;

			case 'cor_overlay':
				$raw = sanitize_hex_color( (string) $raw );
				if ( null === $raw || '' === $raw ) {
					return new WP_Error( 'emha_invalid_color', __( 'cor_overlay precisa ser um hexadecimal valido.', 'ensina-mais-hero-api' ), array( 'status' => 400 ) );
				}
				break;

			case 'cta_link':
				// Valida o formato ANTES de limpar, nao depois: esc_url_raw() descarta
				// "\" por nao estar na whitelist de caracteres do core, entao
				// "/\evil.com" viraria "/evil.com" (inofensivo) se passasse por
				// esc_url_raw() primeiro - o valor seria aceito e gravado calado,
				// diferente do que o editor digitou, em vez de recusado com erro
				// claro. Validando o bruto primeiro, emha_is_valid_cta_link() recusa
				// esse caso (e "//evil.com") explicitamente, como qualquer outro
				// esquema fora do allowlist.
				$candidate = (string) $raw;
				if ( ! emha_is_valid_cta_link( $candidate ) ) {
					return new WP_Error( 'emha_invalid_cta_link', __( 'cta_link precisa ser uma ancora (#...), caminho interno (/...) ou URL HTTPS.', 'ensina-mais-hero-api' ), array( 'status' => 400 ) );
				}
				// esc_url_raw, nao sanitize_text_field: este e' um valor de URL, e
				// sanitize_text_field descarta qualquer sequencia %XX (parte da
				// limpeza de texto do core), corrompendo query strings com
				// acento/emoji percent-encoded (ex.: link de WhatsApp). Roda so
				// depois da validacao acima, sobre um valor ja aprovado.
				$raw = esc_url_raw( $candidate );
				break;

			case 'descricao':
				// sanitize_text_field colapsaria as quebras de linha do textarea.
				$raw = sanitize_textarea_field( (string) $raw );
				break;

			default:
				$raw = sanitize_text_field( (string) $raw );
				break;
		}

		if ( function_exists( 'update_field' ) ) {
			update_field( $key, $raw, $object->ID );
		} else {
			update_post_meta( $object->ID, $key, $raw );
		}
	}

	return true;
}

function emha_register_rest_acf_field() {
	register_rest_field(
		EMHA_CPT,
		'acf',
		array(
			'get_callback'    => 'emha_get_acf_rest_value',
			'update_callback' => 'emha_update_acf_rest_value',
			'schema'          => array(
				'description' => __( 'Campos editoriais do hero.', 'ensina-mais-hero-api' ),
				'type'        => 'object',
				'context'     => array( 'view', 'edit' ),
			),
		)
	);
}
add_action( 'rest_api_init', 'emha_register_rest_acf_field' );
