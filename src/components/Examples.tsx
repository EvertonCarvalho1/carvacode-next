import { CalendarClock, PackageSearch, PlugZap, UserRound } from 'lucide-react';

import SectionHeading from './SectionHeading';

// Situações ilustrativas. Não são projetos entregues nem casos de clientes.
const EXAMPLES = [
  {
    icon: PackageSearch,
    title: 'Acompanhamento de pedidos',
    situation: 'A equipe responde, um por um, em que etapa está cada pedido.',
    solution: 'Área onde o cliente consulta o andamento, atualizada em um painel interno.',
  },
  {
    icon: UserRound,
    title: 'Portal de clientes',
    situation: 'Documentos e solicitações se perdem entre e-mail e WhatsApp.',
    solution: 'Portal com acesso individual para documentos e solicitações.',
  },
  {
    icon: CalendarClock,
    title: 'Agendamentos',
    situation: 'Horários marcados por mensagem, com risco de conflito.',
    solution: 'Agenda online com regras de disponibilidade e confirmação.',
  },
  {
    icon: PlugZap,
    title: 'Integração entre ferramentas',
    situation: 'O mesmo dado é digitado na loja virtual, na planilha e no financeiro.',
    solution: 'Integração que leva os dados entre as ferramentas e registra o envio.',
  },
];

export default function Examples() {
  return (
    <section id="exemplos" aria-labelledby="exemplos-titulo" className="section-y bg-surface-muted">
      <div className="container-site">
        <SectionHeading
          id="exemplos-titulo"
          eyebrow="Exemplos de aplicação"
          title="Situações em que um software sob medida ajuda"
        >
          <p>Exemplos ilustrativos do tipo de problema que resolvemos. Não são projetos de clientes.</p>
        </SectionHeading>

        <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {EXAMPLES.map((example) => (
            <li
              key={example.title}
              className="reveal rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_20px_40px_-24px_rgb(12_18_22/0.35)]"
            >
              <div className="flex items-center gap-3 xl:block">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-brand-blue-ink">
                  <example.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-semibold text-fg xl:mt-4">{example.title}</h3>
              </div>
              <dl className="mt-4 space-y-3 text-[0.9375rem] leading-snug">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-fg-muted">Situação</dt>
                  <dd className="mt-1 text-fg">{example.situation}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-blue-ink">
                    Possível solução
                  </dt>
                  <dd className="mt-1 text-fg">{example.solution}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
