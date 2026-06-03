"use client";

import Image from "next/image";
import { Bell, CalendarCheck, Check, CircleDollarSign, Dumbbell, Users } from "lucide-react";
import { assetPath } from "../lib/assets";
import { dashboardMetrics, interfaceNotifications, recentStudents } from "../lib/content";

export function DashboardPreview() {
  return (
    <div className="glass-panel lime-glow relative overflow-hidden rounded-[32px] p-2">
      <div className="absolute left-8 top-8 z-10 hidden rounded-full border border-white/10 bg-ink/60 px-4 py-2 text-xs font-medium text-ice backdrop-blur-xl md:block">
        Operação em tempo real
      </div>
      <Image
        src={assetPath("/images/fitflow-dashboard-preview.png")}
        alt="Dashboard administrativo do FitFlow"
        width={1920}
        height={1080}
        priority
        className="aspect-[16/9] w-full rounded-[24px] object-cover object-left-top"
      />
      <div className="pointer-events-none absolute inset-x-2 bottom-2 h-28 rounded-b-[24px] bg-gradient-to-t from-ink/90 to-transparent" />
    </div>
  );
}

export function MobileProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[310px]">
      <div className="absolute -inset-5 rounded-[48px] bg-lime/10 blur-3xl" />
      <div className="glass-panel relative rounded-[42px] border-white/[0.12] bg-ink p-3 shadow-glass">
        <Image
          src={assetPath("/images/fitflow-mobile-preview.png")}
          alt="Tela mobile do FitFlow"
          width={945}
          height={2048}
          className="max-h-[640px] rounded-[32px] object-cover object-top"
        />
      </div>
    </div>
  );
}

export function InterfaceMockup() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[34px] p-4 md:p-6">
      <div className="absolute right-16 top-8 h-40 w-40 rounded-full bg-lime/10 blur-3xl" />
      <div className="relative grid gap-4 rounded-[26px] border border-white/[0.08] bg-graphite/[0.92] p-4 md:grid-cols-[220px_1fr] md:p-5">
        <aside className="hidden rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-4 md:block">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lime/[0.12] text-[10px] font-black uppercase text-lime">
              Fit
            </span>
            <span className="font-semibold text-ice">FitFlow.</span>
          </div>
          {[
            "Dashboard",
            "Alunos",
            "Check-ins",
            "Treinos",
            "Exercícios",
            "Financeiro",
            "Notificações"
          ].map((item, index) => (
            <div
              className={`mb-2 flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm ${
                index === 0 ? "bg-lime text-ink" : "text-muted"
              }`}
              key={item}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {item}
            </div>
          ))}
        </aside>

        <main className="min-w-0">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-muted">Visão operacional</p>
              <h3 className="text-2xl font-semibold text-ice">Dashboard</h3>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-lime" />
              Dados sincronizados
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardMetrics.map((metric) => (
              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.045] p-4" key={metric.label}>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs text-muted">{metric.label}</span>
                  <span className="rounded-full bg-lime/[0.12] px-2 py-1 text-[11px] font-semibold text-lime">
                    {metric.delta}
                  </span>
                </div>
                <p className="text-2xl font-semibold text-ice">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.85fr]">
            <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ice">Crescimento da base</p>
                  <p className="text-xs text-muted">Últimos 30 dias</p>
                </div>
                <LineChip label="+9,4%" />
              </div>
              <div className="relative h-52 overflow-hidden rounded-2xl bg-ink/60 p-4">
                <div className="absolute inset-x-4 bottom-8 top-5 grid grid-rows-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span className="border-t border-dashed border-white/[0.08]" key={index} />
                  ))}
                </div>
                <svg className="absolute inset-x-4 bottom-8 top-5 h-[calc(100%-52px)] w-[calc(100%-32px)]" viewBox="0 0 520 160" preserveAspectRatio="none">
                  <path
                    d="M0 136 C74 132 94 120 142 124 C214 130 235 68 298 78 C364 88 374 42 430 48 C470 52 486 28 520 18"
                    fill="none"
                    stroke="#C7FF4A"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M0 136 C74 132 94 120 142 124 C214 130 235 68 298 78 C364 88 374 42 430 48 C470 52 486 28 520 18 L520 160 L0 160 Z"
                    fill="url(#chartFade)"
                    opacity="0.32"
                  />
                  <defs>
                    <linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1">
                      <stop stopColor="#C7FF4A" />
                      <stop offset="1" stopColor="#C7FF4A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="mb-4 text-sm font-medium text-ice">Alunos recentes</p>
                <div className="space-y-3">
                  {recentStudents.map((student) => (
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-ink/[0.52] p-3" key={student.name}>
                      <div>
                        <p className="text-sm font-medium text-ice">{student.name}</p>
                        <p className="text-xs text-muted">{student.plan}</p>
                      </div>
                      <span className="rounded-full bg-lime/[0.12] px-2 py-1 text-[11px] font-medium text-lime">
                        {student.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="mb-4 text-sm font-medium text-ice">Notificações</p>
                <div className="space-y-2">
                  {interfaceNotifications.map((notification) => (
                    <div className="flex items-center gap-3 text-sm text-muted" key={notification}>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-lime/[0.12] text-lime">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {notification}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function ProductOrbitCards() {
  const cards = [
    { label: "Alunos", value: "248", icon: Users },
    { label: "Check-ins", value: "86", icon: CalendarCheck },
    { label: "Receita", value: "R$ 42k", icon: CircleDollarSign },
    { label: "Treinos", value: "132", icon: Dumbbell },
    { label: "Alertas", value: "3", icon: Bell }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const positions = [
          "left-8 top-[18%]",
          "right-4 top-[20%]",
          "left-24 bottom-[14%]",
          "right-24 bottom-[16%]",
          "left-[48%] top-4"
        ];

        return (
          <div
            className={`absolute ${positions[index]} glass-panel flex min-w-36 items-center gap-3 rounded-2xl px-4 py-3 opacity-90`}
            key={card.label}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lime/[0.12] text-lime">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs text-muted">{card.label}</span>
              <span className="block text-base font-semibold text-ice">{card.value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

function LineChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-lime/20 bg-lime/10 px-3 py-1 text-xs font-medium text-lime">
      {label}
    </span>
  );
}
