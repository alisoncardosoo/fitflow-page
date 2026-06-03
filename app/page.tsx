"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles
} from "lucide-react";
import { FaqAccordion } from "./components/FaqAccordion";
import { Header } from "./components/Header";
import { MobileProductPreview } from "./components/ProductMockups";
import { Reveal, SectionHeading } from "./components/Reveal";
import { ScrollProductVideo } from "./components/ScrollProductVideo";
import { SmoothScroll } from "./components/SmoothScroll";
import { assetPath } from "./lib/assets";
import {
  audience,
  benefits,
  features,
  navItems,
  painCards,
  positioningCards,
  timeline
} from "./lib/content";

const WHATSAPP_URL =
  "https://wa.me/5551982024533?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%20FitFlow.";

const PRICING_FEATURES = [
  "Dashboard inteligente",
  "Gestão de alunos e planos",
  "Treinos, exercícios e check-ins",
  "Financeiro com visão clara"
];

const PRICING_PERKS = [
  "Demonstração guiada",
  "Interface responsiva",
  "Relatórios para decisão",
  "Fluxo pronto para crescer"
];

function PrimaryButton({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="focus-ring group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-lime px-7 text-base font-semibold text-ink shadow-[0_22px_80px_rgba(199,255,74,0.2)] transition duration-700 ease-smooth hover:scale-[1.02] hover:bg-mist"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {label}
      <ArrowRight className="h-5 w-5 transition duration-500 group-hover:translate-x-1" />
    </a>
  );
}

function PricingBulletList({ items, tone = "lime" }: { items: string[]; tone?: "lime" | "soft" }) {
  const iconClassName =
    tone === "lime"
      ? "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/[0.12] text-lime"
      : "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/[0.06] text-lime";

  return (
    <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <div className="flex items-center gap-3 text-sm leading-6 text-ice md:text-base" key={item}>
          <span className={iconClassName}>
            <Check className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SecondaryButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.05] px-7 text-base font-semibold text-ice backdrop-blur-xl transition duration-700 ease-smooth hover:border-white/20 hover:bg-white/[0.085]"
      href={href}
    >
      {label}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="hero-vignette absolute inset-0 -z-20">
        <Image
          src={assetPath("/images/fitflow-hero-gym.jpg")}
          alt="Academia moderna com treino acompanhado por instrutora"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
      </div>
      <div className="grid-mask absolute inset-0 -z-10 opacity-[0.35]" />
      <div className="absolute left-1/2 top-[14%] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-lime/10 blur-3xl drift" />

      <div className="section-shell flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-ice md:text-6xl xl:text-[5rem]">
            Gestão mais leve para academias que querem crescer com controle.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted md:text-xl">
            O FitFlow conecta alunos, treinos, check-ins, financeiro e comunicação em uma
            experiência simples, fluida e profissional.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <PrimaryButton href="#precos" label="Solicitar demonstração" />
            <SecondaryButton href="#experiencia" label="Ver experiência" />
          </div>
          <p className="mt-7 text-sm leading-6 text-muted">
            Menos planilhas. Menos ruído. Mais clareza para a sua operação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PositioningSection() {
  return (
    <section id="produto" className="relative pb-24 pt-4 md:pb-32 md:pt-4">
      <div className="section-shell">
        <SectionHeading
          title="Não é apenas um sistema. É a central de controle da sua academia."
          description="O FitFlow reúne o que antes ficava espalhado em planilhas, mensagens e controles manuais. Tudo ganha fluxo, clareza e uma experiência mais profissional para equipe, gestão e alunos."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {positioningCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal delay={index * 0.08} key={card.title}>
                <div className="glass-panel group h-full rounded-[28px] p-6 transition duration-700 ease-smooth hover:-translate-y-1 hover:border-lime/[0.22]">
                  <span className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-lime/[0.12] text-lime transition duration-700 group-hover:bg-lime group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-ice">{card.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PainSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 opacity-50">
        <Image
          src={assetPath("/images/fitflow-gym-background.jpg")}
          alt="Aula em grupo em academia moderna"
          fill
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#070707_0%,rgba(7,7,7,0.72)_44%,#070707_100%)]" />
      </div>
      <div className="section-shell">
        <SectionHeading title="Quando a academia cresce, os detalhes começam a escapar." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal delay={index * 0.05} key={card.title}>
                <div className="glass-panel group flex min-h-36 items-start gap-4 rounded-[26px] p-5 transition duration-700 ease-smooth hover:-translate-y-1 hover:border-lime/20">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-lime">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold leading-7 text-ice">{card.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section id="recursos" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading title="Tudo conectado, sem complexidade." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal delay={(index % 4) * 0.05} key={feature.title}>
                <div className="group h-full rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-5 transition duration-700 ease-smooth hover:-translate-y-1 hover:border-lime/[0.24] hover:bg-white/[0.06]">
                  <span className="mb-7 grid h-11 w-11 place-items-center rounded-2xl bg-lime/10 text-lime">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-ice">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AppleStatementSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-ice md:text-6xl">
            Simples na superfície. Poderoso na gestão.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Para o gestor",
              description: "Mais visão, controle e dados para tomar decisões."
            },
            {
              title: "Para a equipe",
              description: "Menos confusão na rotina e mais clareza nos processos."
            },
            {
              title: "Para o aluno",
              description: "Uma experiência mais organizada, moderna e profissional."
            }
          ].map((item, index) => (
            <Reveal delay={index * 0.08} key={item.title}>
              <div className="border-t border-white/10 pt-7">
                <h3 className="text-xl font-semibold text-ice">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterfaceSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          align="left"
          title="A interface trabalha como a sua equipe precisa operar."
          description="Menu lateral, métricas essenciais, gráfico de evolução, alunos recentes e notificações em uma leitura limpa."
        />
        <Reveal>
          <div className="glass-panel lime-glow relative overflow-hidden rounded-[34px] p-2 md:p-3">
            <Image
              src={assetPath("/images/fitflow-dashboard-preview.png")}
              alt="Tela real do dashboard administrativo do FitFlow"
              width={1920}
              height={1080}
              className="aspect-[16/9] w-full rounded-[26px] object-cover object-left-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading title="Comece simples. Ganhe controle com o tempo." />
        <div className="grid gap-4 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.title}>
              <div className="relative h-full rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6">
                <span className="mb-10 grid h-10 w-10 place-items-center rounded-full bg-lime text-sm font-semibold text-ink">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold leading-7 text-ice">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-ice md:text-6xl">
            Mais leveza para operar. Mais estrutura para crescer.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm font-medium text-ice"
                key={benefit}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime/[0.12] text-lime">
                  <Check className="h-4 w-4" />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={assetPath("/images/fitflow-kettlebell.jpg")}
          alt="Treino funcional com kettlebells"
          fill
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(199,255,74,0.12),transparent_34rem),linear-gradient(180deg,#070707_0%,rgba(7,7,7,0.82)_45%,#070707_100%)]" />
      </div>
      <div className="section-shell">
        <SectionHeading title="Feito para academias que querem evoluir com organização." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audience.map((item, index) => (
            <Reveal delay={index * 0.05} key={item}>
              <div className="glass-panel flex min-h-40 flex-col justify-between rounded-[26px] p-5">
                <Sparkles className="h-5 w-5 text-lime" />
                <h3 className="mt-12 text-xl font-semibold leading-7 text-ice">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="precos" className="py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <div>
            <h3 className="text-xl font-semibold text-ice">Recursos inclusos:</h3>
            <PricingBulletList items={PRICING_FEATURES} />
          </div>

          <div className="mt-9 border-t border-white/[0.1] pt-8">
            <h3 className="text-xl font-semibold text-ice">Vantagens:</h3>
            <PricingBulletList items={PRICING_PERKS} tone="soft" />
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[36px] p-6 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(199,255,74,0.16),transparent_22rem)]" />

          <div className="relative z-10">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-lime/80">
              Plano completo
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-ice md:text-6xl">
              FitFlow para academias em crescimento.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
              A central para organizar gestão, alunos, treinos e financeiro em um fluxo mais claro
              e profissional.
            </p>

            <div className="mt-9">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="text-5xl font-semibold leading-none text-lime md:text-6xl">
                  R$ 149,00
                </span>
                <span className="pb-1 text-base font-medium text-muted">
                  <span className="text-ice line-through decoration-lime/70">R$ 599,00</span>
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Condição especial para demonstração.
              </p>
              <div className="mt-7 max-w-sm">
                <PrimaryButton href={WHATSAPP_URL} label="Solicitar demonstração" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppPreviewSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1fr_0.72fr]">
        <Reveal>
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-lime/80">
              Produto vivo
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-ice md:text-6xl">
              A gestão da academia e a experiência do aluno no mesmo fluxo.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              O painel administrativo dá clareza para a equipe, enquanto o app mantém o aluno perto
              do treino, metas, progresso e rotina.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <MobileProductPreview />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={assetPath("/images/logo-fitflow.png")}
              alt="FitFlow"
              width={4290}
              height={2292}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-muted">Gestão premium para academias em fluxo.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted">
          {navItems.map((item) => (
            <a className="focus-ring rounded-full transition hover:text-ice" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="focus-ring rounded-full transition hover:text-ice"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
        </nav>
        <p className="text-sm text-muted">© 2026 FitFlow. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <PositioningSection />
        <PainSection />
        <ScrollProductVideo />
        <FeatureSection />
        <AppleStatementSection />
        <InterfaceSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <BenefitsSection />
        <AudienceSection />
        <section id="faq" className="py-24 md:py-32">
          <div className="section-shell">
            <SectionHeading title="Perguntas frequentes" />
            <Reveal>
              <FaqAccordion />
            </Reveal>
          </div>
        </section>
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
