import SectionHeading from './SectionHeading';

const STEPS = [
  {
    title: 'Entendimento da necessidade',
    text: 'Conversamos sobre o problema e como o trabalho é feito hoje, sem termos técnicos.',
  },
  {
    title: 'Definição do escopo',
    text: 'Definimos o que entra na primeira versão e o que pode ficar para depois.',
  },
  {
    title: 'Proposta',
    text: 'Você recebe escopo, etapas, prazo estimado e investimento para avaliar.',
  },
  {
    title: 'Desenvolvimento com validações',
    text: 'Construímos em etapas para você acompanhar, validar as entregas e alinhar ajustes dentro do escopo combinado.',
  },
  {
    title: 'Publicação',
    text: 'Colocamos o software no ar e conferimos o funcionamento com você.',
  },
  {
    title: 'Continuidade',
    text: 'Manutenção e novas funcionalidades podem ser combinadas depois da publicação.',
  },
];

export default function Process() {
  return (
    <section id="como-trabalhamos" aria-labelledby="processo-titulo" className="section-y bg-surface">
      <div className="container-site">
        <SectionHeading id="processo-titulo" eyebrow="Como trabalhamos" title="Do primeiro contato ao software em uso">
          <p>As mesmas etapas em todo projeto; o tamanho de cada uma depende do escopo.</p>
        </SectionHeading>

        <ol className="mt-8 grid gap-x-6 gap-y-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="reveal flex gap-4 border-t border-line pt-5">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-950 font-display text-sm font-semibold text-white"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-fg">
                  <span className="sr-only">Etapa {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-fg-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
