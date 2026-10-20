'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// Conta cliques nos links de WhatsApp sem transformar as seções em componentes de cliente.
// Cada link informa onde está na página por `data-track-local`.
// Nenhum dado digitado pela pessoa é enviado: apenas o nome do evento e o local do botão.
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]');
      if (!link) return;
      track('whatsapp_click', { local: link.dataset.trackLocal ?? 'outro' });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
