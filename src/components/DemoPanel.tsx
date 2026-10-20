import { cn } from '@/lib/utils';

// Interface demonstrativa, com dados fictícios, para mostrar o tipo de sistema que
// desenvolvemos. Não reproduz tela, marca ou dado de nenhum cliente.

const TILES = [
  { label: 'Novos', value: '12' },
  { label: 'Em produção', value: '8' },
  { label: 'Prontos', value: '5' },
];

const STATUS = {
  novo: { label: 'Novo', className: 'bg-brand-coral/15 text-brand-coral-hover' },
  producao: { label: 'Em produção', className: 'bg-brand-blue/15 text-brand-blue-light' },
  pronto: { label: 'Pronto para envio', className: 'bg-emerald-400/15 text-emerald-300' },
  entregue: { label: 'Entregue', className: 'bg-white/10 text-on-dark-muted' },
} as const;

const ORDERS: Array<{ id: string; client: string; progress: number; status: keyof typeof STATUS }> = [
  { id: '#1048', client: 'Cliente A', progress: 20, status: 'novo' },
  { id: '#1047', client: 'Cliente B', progress: 60, status: 'producao' },
  { id: '#1046', client: 'Cliente C', progress: 85, status: 'pronto' },
  { id: '#1045', client: 'Cliente D', progress: 100, status: 'entregue' },
];

export default function DemoPanel() {
  return (
    <figure>
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-xs font-medium text-on-dark-muted">Painel de pedidos</span>
          <span className="ml-auto rounded-full bg-white/[0.06] px-2 py-0.5 text-[0.6875rem] text-on-dark-muted">
            Demonstração
          </span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {TILES.map((tile) => (
              <div key={tile.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <p className="text-[0.6875rem] uppercase tracking-wide text-on-dark-muted">{tile.label}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-white">{tile.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-5 divide-y divide-white/[0.06]">
            {ORDERS.map((order) => {
              const status = STATUS[order.status];
              return (
                <li key={order.id} className="flex items-center gap-3 py-3 text-sm">
                  <span className="w-12 shrink-0 font-medium text-white">{order.id}</span>
                  <span className="w-20 shrink-0 text-on-dark-muted">{order.client}</span>
                  <span className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <span
                      className="block h-full rounded-full bg-brand-blue/70"
                      style={{ width: `${order.progress}%` }}
                    />
                  </span>
                  <span className={cn('shrink-0 rounded-full px-2 py-0.5 text-xs font-medium', status.className)}>
                    {status.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-on-dark-muted">
        Demonstração com dados fictícios: ilustra o tipo de painel que desenvolvemos. Não é um
        projeto de cliente.
      </figcaption>
    </figure>
  );
}
