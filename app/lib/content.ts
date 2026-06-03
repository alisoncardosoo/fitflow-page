import {
  BarChart3,
  Bell,
  CalendarCheck,
  Check,
  CircleDollarSign,
  ClipboardList,
  Dumbbell,
  FileText,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Produto", href: "#produto" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Recursos", href: "#recursos" },
  { label: "FAQ", href: "#faq" },
  { label: "Preços", href: "#precos" }
];

export const positioningCards = [
  {
    title: "Clareza operacional",
    description: "Veja o que está acontecendo sem depender de controles soltos.",
    icon: BarChart3
  },
  {
    title: "Rotina mais fluida",
    description: "Organize processos importantes em uma interface simples de usar.",
    icon: Sparkles
  },
  {
    title: "Gestão mais profissional",
    description: "Entregue uma experiência mais moderna para alunos e equipe.",
    icon: ShieldCheck
  }
];

export const painCards = [
  { title: "Alunos espalhados em planilhas", icon: Users },
  { title: "Treinos difíceis de manter atualizados", icon: Dumbbell },
  { title: "Check-ins sem visão clara", icon: CalendarCheck },
  { title: "Financeiro manual", icon: CircleDollarSign },
  { title: "Mensagens perdidas", icon: MessageCircle },
  { title: "Poucos dados para decidir", icon: LineChart }
];

export const features = [
  {
    title: "Dashboard inteligente",
    description: "Indicadores essenciais da academia em uma visão clara e visual.",
    icon: BarChart3
  },
  {
    title: "Gestão de alunos",
    description: "Cadastros, status, histórico e informações importantes em um só lugar.",
    icon: Users
  },
  {
    title: "Check-ins",
    description: "Acompanhe frequência e presença com mais controle.",
    icon: CalendarCheck
  },
  {
    title: "Treinos",
    description: "Organize treinos de forma visual, simples e acessível.",
    icon: Dumbbell
  },
  {
    title: "Exercícios",
    description: "Crie uma biblioteca de exercícios para padronizar a entrega.",
    icon: ClipboardList
  },
  {
    title: "Financeiro",
    description: "Tenha mais clareza sobre cobranças, pagamentos e receitas.",
    icon: CircleDollarSign
  },
  {
    title: "Notificações",
    description: "Comunique alunos e equipe sem perder mensagens importantes.",
    icon: Bell
  },
  {
    title: "Relatórios",
    description: "Transforme dados da operação em decisões mais seguras.",
    icon: FileText
  }
];

export const audience = [
  "Academias de bairro em crescimento",
  "Studios personalizados",
  "Boxes funcionais",
  "Personal trainers com equipe",
  "Pequenas redes de academias"
];

export const benefits = [
  "Reduz controles manuais",
  "Evita informações perdidas",
  "Melhora a experiência do aluno",
  "Dá mais clareza para a equipe",
  "Ajuda na retenção",
  "Facilita o acompanhamento financeiro",
  "Profissionaliza a operação"
];

export const timeline = [
  {
    title: "Configure sua academia",
    description: "Adapte o FitFlow à sua operação."
  },
  {
    title: "Cadastre alunos e equipe",
    description: "Centralize informações importantes."
  },
  {
    title: "Organize treinos, check-ins e financeiro",
    description: "Transforme a rotina em processos claros."
  },
  {
    title: "Acompanhe a evolução",
    description: "Use dados para crescer com mais segurança."
  }
];

export const faqItems = [
  {
    question: "O FitFlow serve para academias pequenas?",
    answer:
      "Sim. O FitFlow foi pensado para academias que querem crescer com mais organização, mesmo começando com uma estrutura enxuta."
  },
  {
    question: "Preciso instalar algo?",
    answer:
      "Não. O FitFlow funciona como uma plataforma online, acessível pelo navegador."
  },
  {
    question: "Consigo organizar alunos e treinos?",
    answer:
      "Sim. Você pode centralizar alunos, treinos, exercícios e informações importantes em uma única experiência."
  },
  {
    question: "O FitFlow tem controle financeiro?",
    answer:
      "Sim. A plataforma ajuda a acompanhar pagamentos, cobranças e visão geral financeira da operação."
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim. A interface é responsiva e funciona bem em telas menores."
  },
  {
    question: "Posso solicitar uma demonstração?",
    answer:
      "Sim. A página conduz para uma demonstração ou conversa pelo WhatsApp."
  }
];

export type IconItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

// Slides da seção "Experiência". `image` é o arquivo definitivo (adicione em
// public/images); enquanto ele não existir, `fallback` (uma imagem já presente)
// é exibido automaticamente para a tela não quebrar.
export const productSlides = [
  {
    label: "Dashboard",
    image: "/images/experiencia-dashboard.png",
    fallback: "/images/fitflow-dashboard-preview.png"
  },
  {
    label: "Alunos",
    image: "/images/experiencia-alunos.png",
    fallback: "/images/fitflow-dashboard-preview.png"
  },
  {
    label: "Check-ins",
    image: "/images/experiencia-checkins.png",
    fallback: "/images/fitflow-mobile-preview.png"
  },
  {
    label: "Treinos",
    image: "/images/experiencia-treinos.png",
    fallback: "/images/fitflow-mobile-workout.png"
  },
  {
    label: "Financeiro",
    image: "/images/experiencia-financeiro.png",
    fallback: "/images/fitflow-finance-preview.png"
  },
  {
    label: "Notificações",
    image: "/images/experiencia-notificacoes.png",
    fallback: "/images/fitflow-mobile-preview.png"
  }
];

export const dashboardMetrics = [
  { label: "Alunos ativos", value: "248", delta: "+12" },
  { label: "Check-ins hoje", value: "86", delta: "+18%" },
  { label: "Receita mensal", value: "R$ 42k", delta: "+9%" },
  { label: "Treinos criados", value: "132", delta: "+24" }
];

export const recentStudents = [
  { name: "Marina Lopes", plan: "Plano anual", status: "Ativa" },
  { name: "Thiago Ramos", plan: "Trimestral", status: "Check-in" },
  { name: "Beatriz Silva", plan: "Mensal", status: "Novo treino" }
];

export const interfaceNotifications = [
  "3 contratos renovados hoje",
  "12 alunos sem check-in na semana",
  "Recebimentos conciliados"
];

export const checkIcon = Check;
