import type { LucideIcon } from "lucide-react";

export type SocialProfile = {
  label: string;
  handle: string;
  url: string;
  description: string;
};

export type FeaturedContent = {
  title: string;
  platform: "TikTok" | "Instagram" | "GitHub" | "LinkedIn";
  url: string;
  metric: string;
  summary: string;
  focus: string[];
};

export type SocialCardMeta = SocialProfile & {
  icon: LucideIcon;
};
