import type { Metadata } from "next";
import CoursesHubClient from "./CoursesHubClient";

export const metadata: Metadata = {
  title: "Cursos | Ensina Mais – Turma da Mônica",
  description: "Apoio Escolar, Robótica Educacional, Programação e Inglês para crianças e adolescentes de 4 a 15 anos. Encontre o curso ideal para seu filho.",
};

export default function CursosPage() {
  return <CoursesHubClient />;
}
