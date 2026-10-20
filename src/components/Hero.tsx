import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';

import { WhatsAppIcon } from './icons';
import { buttonVariants } from './ui/button';
import { whatsappUrl } from '@/config/site';
import { SOLUTIONS } from '@/content/solutions';

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="surface-dark hero-backdrop text-on-dark"
    >
      <div className="container-site pb-12 pt-[calc(var(--header-height)+2rem)] sm:pb-16 lg:pb-20 lg:pt-[calc(var(--header-height)+4rem)] [@media(max-height:30rem)]:pt-[calc(var(--header-height)+1.5rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <p className="eyebrow-dark enter">Desenvolvimento de software sob medida</p>
            <h1
              id="hero-title"
              style={{ '--enter-delay': '80ms' } as CSSProperties}
              className="enter mt-4 text-[1.875rem] font-bold leading-[1.15] text-white min-[380px]:text-[2rem] sm:text-5xl sm:leading-[1.1] lg:text-[2.75rem] xl:text-[3.25rem] [@media(max-height:30rem)]:text-[2rem]"
            >
              {/* Espaços não separáveis evitam quebras como "sistemas / web" e "para a / rotina". */}
              Sites, sistemas{'\u00a0'}web e aplicativos para a{'\u00a0'}rotina da sua{'\u00a0'}empresa
            </h1>
            <p style={{ '--enter-delay': '160ms' } as CSSProperties} className="enter mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg text-on-dark-muted">
              Criamos sites, sistemas e aplicativos para organizar processos, conectar ferramentas e
              melhorar o atendimento da sua empresa.
            </p>

            <div style={{ '--enter-delay': '240ms' } as CSSProperties} className="enter mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href={whatsappUrl()}
                data-track-local="abertura"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: 'lg' })}
              >
                <WhatsAppIcon />
                Conversar pelo WhatsApp
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              <a href="#contact" className={buttonVariants({ variant: 'outlineDark', size: 'lg' })}>
                Enviar uma mensagem
              </a>
            </div>
            <p style={{ '--enter-delay': '320ms' } as CSSProperties} className="enter mt-5 text-sm text-on-dark-muted">
              Primeira conversa sem compromisso. Respondemos em horário comercial.
            </p>
          </div>

          {/* Atalhos por necessidade: ajudam quem chega por e-mail a ir direto ao que interessa. */}
          <nav
            aria-labelledby="hero-atalhos"
            style={{ '--enter-delay': '200ms' } as CSSProperties}
            className="enter hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:block"
          >
            <p id="hero-atalhos" className="text-sm font-semibold text-white">
              Do que sua empresa precisa?
            </p>
            <ul className="mt-2 divide-y divide-white/10">
              {SOLUTIONS.map((solution) => (
                <li key={solution.id}>
                  <a
                    href={`#${solution.id}`}
                    className="group -mx-2 flex items-center gap-4 rounded-lg px-2 py-3.5 transition-colors duration-200 hover:bg-white/[0.05]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue transition-colors duration-200 group-hover:bg-brand-blue/25">
                      <solution.icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-white">{solution.title}</span>
                      <span className="block text-sm text-on-dark-muted">{solution.need}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-on-dark-muted transition-[translate,color] duration-200 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
