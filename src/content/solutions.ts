import { Globe, LayoutDashboard, Smartphone, Workflow, type LucideIcon } from 'lucide-react';

import type { Interest } from '@/lib/contact';

export interface Solution {
  id: string;
  interest: Interest;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  cta: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'solucao-sites',
    interest: 'sites',
    icon: Globe,
    title: 'Sites e presença digital',
    description:
      'Para apresentar sua empresa com clareza e facilitar o contato de novos clientes.',
    items: [
      'Site institucional ou página para uma campanha',
      'Boa leitura no celular, com base de SEO',
      'Formulário e WhatsApp ligados ao atendimento',
    ],
    cta: 'Conversar sobre um site',
  },
  {
    id: 'solucao-sistemas',
    interest: 'sistemas',
    icon: LayoutDashboard,
    title: 'Sistemas e portais para empresas',
    description:
      'Para organizar processos que hoje dependem de planilhas, e-mails e mensagens soltas.',
    items: [
      'Painéis administrativos e cadastros',
      'Portal para clientes, parceiros ou fornecedores',
      'Acesso por perfil e relatórios',
    ],
    cta: 'Conversar sobre um sistema',
  },
  {
    id: 'solucao-aplicativos',
    interest: 'aplicativos',
    icon: Smartphone,
    title: 'Aplicativos',
    description:
      'Para quando sua equipe ou seus clientes precisam usar o serviço no celular.',
    items: [
      'Android e iOS com uma base de código',
      'Conectados ao sistema e aos dados da empresa',
      'Telas pensadas para uso rápido',
    ],
    cta: 'Conversar sobre um aplicativo',
  },
  {
    id: 'solucao-integracoes',
    interest: 'integracoes',
    icon: Workflow,
    title: 'Integrações, automações e evolução',
    description:
      'Para conectar ferramentas, reduzir tarefas manuais e melhorar um software existente.',
    items: [
      'Integração entre sistemas por meio de APIs',
      'Automação de tarefas repetitivas',
      'Manutenção, novas funcionalidades e publicação',
    ],
    cta: 'Conversar sobre integrações',
  },
];
