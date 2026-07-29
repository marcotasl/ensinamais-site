/**
 * Parser leve do subconjunto markdown usado em BlogPost.content.
 * Sem dependência externa — espelha as classes do lorem antigo da página.
 */

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

function parseBlocks(content: string): Block[] {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      i += 1;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      blocks.push({ type: "quote", text: trimmed.slice(2).trim() });
      i += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2).trim());
        i += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    // Paragraph: join consecutive non-empty, non-special lines
    const para: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t || t.startsWith("## ") || t.startsWith("> ") || t.startsWith("- ")) break;
      para.push(t);
      i += 1;
    }
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

export default function ArticleContent({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <div className="prose-article [&>p:first-of-type]:text-lg [&>p:first-of-type]:text-em-dark-soft">
      {blocks.map((block, idx) => {
        if (block.type === "h2") {
          return (
            <h2 key={idx} className="text-2xl font-black text-em-dark mt-10 mb-4">
              {renderInline(block.text)}
            </h2>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-em-yellow pl-6 my-8 italic text-xl text-em-dark leading-relaxed"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={idx} className="flex flex-col gap-2 mb-6">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="text-base text-em-dark-soft/85 leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-em-green-dark before:font-black"
                >
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-base text-em-dark-soft/85 leading-relaxed mb-6">
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}
