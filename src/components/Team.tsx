import { FileCheck2, MessagesSquare, Wrench } from 'lucide-react';

import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  {
    icon: Wrench,
    title: 'Participação direta',
    text: 'Quem conversa com você trabalha no desenvolvimento, sem intermediários.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicação clara',
    text: 'Decisões técnicas explicadas em linguagem simples, com andamento visível.',
  },
  {
    icon: FileCheck2,
    title: 'Escopo definido',
    text: 'Combinamos o que será construído antes de começar, com prioridades claras.',
  },
];

const TECH_GROUPS = [
  { label: 'Sites e sistemas web', items: 'TypeScript, React, Next.js, Tailwind CSS' },
  { label: 'Aplicativos', items: 'React Native' },
  { label: 'Servidor e dados', items: 'Node.js, APIs REST, PostgreSQL, Prisma' },
  { label: 'Publicação', items: 'Docker, Linux / VPS, Git' },
];

export default function Team() {
  return (
    <section id="about" aria-labelledby="equipe-titulo" className="section-y bg-surface-muted">
      <div className="container-site">
        <SectionHeading id="equipe-titulo" eyebrow="Sobre a equipe" title="Conversa direta com quem desenvolve">
          <p>
            A CarvaCode é formada por quatro pessoas que trabalham diretamente nos projetos, da
            definição do escopo à publicação.
          </p>
        </SectionHeading>

        <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <li
              key={principle.title}
              className="reveal rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-blue/35 hover:shadow-[0_16px_32px_-22px_rgb(12_18_22/0.35)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-ink">
                  <principle.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-semibold text-fg">{principle.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-fg-muted">{principle.text}</p>
            </li>
          ))}
        </ul>

        {/* Tecnologias como apoio: texto discreto, uma linha por grupo, rótulos alinhados. */}
        <section id="tecnologias" aria-labelledby="tecnologias-titulo" className="reveal mt-8 border-t border-line pt-6 sm:mt-10">
          <h3 id="tecnologias-titulo" className="text-sm font-semibold text-fg">
            Tecnologias que usamos com frequência
          </h3>
          <dl className="mt-3 grid gap-x-8 gap-y-2 text-sm lg:grid-cols-2">
            {TECH_GROUPS.map((group) => (
              <div key={group.label} className="grid gap-x-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="text-fg-muted">{group.label}</dt>
                <dd className="text-fg">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
