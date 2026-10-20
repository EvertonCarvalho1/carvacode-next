import { Check } from 'lucide-react';

import SectionHeading from './SectionHeading';

const PRINCIPLES = [
  'Quem conversa com você participa do desenvolvimento',
  'Escopo combinado antes de começar',
  'Decisões técnicas explicadas em linguagem clara',
  'Código organizado para manter e evoluir',
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div>
            <SectionHeading id="equipe-titulo" eyebrow="Sobre a equipe" title="Conversa direta com quem desenvolve">
              <p>
                A CarvaCode é formada por quatro pessoas que trabalham diretamente nos projetos, da
                definição do que será feito até a publicação e a evolução do software.
              </p>
            </SectionHeading>
            <ul className="reveal mt-6 space-y-3">
              {PRINCIPLES.map((principle) => (
                <li key={principle} className="flex gap-3 text-fg">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue-ink">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <section
            id="tecnologias"
            aria-labelledby="tecnologias-titulo"
            className="reveal rounded-2xl border border-line bg-white p-6 sm:p-7"
          >
            <h3 id="tecnologias-titulo" className="text-lg font-semibold text-fg">
              Tecnologias que usamos com frequência
            </h3>
            <p className="mt-1 text-[0.9375rem] text-fg-muted">
              Escolhidas conforme a necessidade de cada projeto.
            </p>
            {/* Uma linha por grupo: rótulo à esquerda e tecnologias alinhadas à direita. */}
            <dl className="mt-5 divide-y divide-line border-t border-line">
              {TECH_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-2 py-3.5 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:items-center sm:gap-5"
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
      </div>
    </section>
  );
}
