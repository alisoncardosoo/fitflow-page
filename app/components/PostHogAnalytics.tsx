"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { PostHogConfig } from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";

type PostHogAnalyticsProps = Readonly<{
  children: React.ReactNode;
}>;

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

const posthogOptions: Partial<PostHogConfig> = {
  capture_pageview: false,
  debug: process.env.NODE_ENV === "development",
  person_profiles: "identified_only",
  ...(posthogHost ? { api_host: posthogHost } : {})
};

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const search = searchParams.toString();
    const currentUrl = new URL(
      search ? `${pathname}?${search}` : pathname,
      window.location.origin
    ).toString();

    posthog.capture("$pageview", {
      $current_url: currentUrl
    });
  }, [pathname, posthog, searchParams]);

  return null;
}

export function PostHogAnalytics({ children }: PostHogAnalyticsProps) {
  if (!posthogKey) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider apiKey={posthogKey} options={posthogOptions}>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}
