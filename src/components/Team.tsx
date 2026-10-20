import { FileCheck2, MessagesSquare, Wrench } from 'lucide-react';

import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  {
    icon: MessagesSquare,
    title: 'Conversa direta',
    text: 'Você fala com quem participa do desenvolvimento, sem camadas de intermediários.',
  },
  {
    icon: FileCheck2,
    title: 'Escopo antes do código',
    text: 'Combinamos o que será construído antes de começar, para que prioridades e expectativas fiquem claras.',
  },
  {
    icon: Wrench,
    title: 'Software para manter e evoluir',
    text: 'Código organizado, pensado para receber ajustes e novas funcionalidades ao longo do tempo.',
  },
];

const TECH_GROUPS = [
  { label: 'Sites e sistemas web', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { label: 'Aplicativos', items: ['React Native'] },
  { label: 'Servidor e dados', items: ['Node.js', 'APIs REST', 'PostgreSQL', 'Prisma'] },
  { label: 'Publicação', items: ['Docker', 'Linux / VPS', 'Git'] },
];

export default function Team() {
  return (
    <section id="about" aria-labelledby="equipe-titulo" className="section-y bg-surface-muted">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading id="equipe-titulo" eyebrow="Sobre a equipe" title="Uma equipe pequena, perto do seu projeto">
            <p>
              A CarvaCode é formada por quatro pessoas que trabalham diretamente no desenvolvimento.
              Quem conversa com você sobre o projeto participa da construção, e as decisões técnicas
              são explicadas em linguagem clara.
            </p>
            <p>
              Atendemos desde a definição do que precisa ser feito até a publicação e a evolução do
              software.
            </p>
          </SectionHeading>

          <ul className="space-y-4 lg:pt-10">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle.title}
                className="reveal flex gap-4 rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-blue/35 hover:shadow-[0_16px_32px_-22px_rgb(12_18_22/0.35)] sm:p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue-ink">
                  <principle.icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-fg">{principle.title}</h3>
                  <p className="mt-1 leading-relaxed text-fg-muted">{principle.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <section
          id="tecnologias"
          aria-labelledby="tecnologias-titulo"
          className="reveal mt-12 rounded-2xl border border-line bg-white p-6 sm:mt-16 sm:p-8"
        >
          <h3 id="tecnologias-titulo" className="text-lg font-semibold text-fg">
            Tecnologias que usamos com frequência
          </h3>
          <p className="mt-1 text-[0.9375rem] text-fg-muted">
            Ferramentas consolidadas, escolhidas conforme a necessidade de cada projeto.
          </p>
          {/* Uma linha por grupo: rótulo à esquerda e tecnologias alinhadas à direita. */}
          <dl className="mt-6 divide-y divide-line border-t border-line">
            {TECH_GROUPS.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-center sm:gap-6"
              >
                <dt className="text-sm font-semibold text-fg">{group.label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-surface-muted px-2.5 py-1 text-sm text-fg transition-colors duration-200 hover:border-brand-blue/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
