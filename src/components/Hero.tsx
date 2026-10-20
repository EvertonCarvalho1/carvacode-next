import type { CSSProperties } from 'react';

import DemoPanel from './DemoPanel';
import { WhatsAppIcon } from './icons';
import { buttonVariants } from './ui/button';
import { whatsappUrl } from '@/config/site';

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="surface-dark hero-backdrop text-on-dark"
    >
      <div className="container-site pb-12 pt-[calc(var(--header-height)+2rem)] sm:pb-16 lg:pb-20 lg:pt-[calc(var(--header-height)+4rem)] [@media(max-height:30rem)]:pt-[calc(var(--header-height)+1.5rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <p className="eyebrow-dark enter">Desenvolvimento de software sob medida</p>
            <h1
              id="hero-title"
              style={delay(80)}
              className="enter mt-4 text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1] lg:text-[3.25rem] [@media(max-height:30rem)]:text-[2rem]"
            >
              Sites, sistemas web e aplicativos para a rotina da sua empresa
            </h1>
            <p
              style={delay(160)}
              className="enter mt-5 max-w-xl text-base leading-relaxed text-on-dark-muted sm:mt-6 sm:text-lg"
            >
              Criamos sites, sistemas e aplicativos para organizar processos, conectar ferramentas e
              melhorar o atendimento da sua empresa.
            </p>

            <div style={delay(240)} className="enter mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href={whatsappUrl()}
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
            <p style={delay(320)} className="enter mt-5 text-sm text-on-dark-muted">
              Primeira conversa sem compromisso. Respondemos em horário comercial.
            </p>
          </div>

          <div style={delay(200)} className="enter hidden md:block">
            <DemoPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
