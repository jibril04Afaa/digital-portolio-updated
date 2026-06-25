import type { FeaturedContent, SocialProfile } from "../types/social";
import { profile } from "./profile";

export const socialProfiles: SocialProfile[] = [
  {
    label: "TikTok",
    handle: profile.social.tiktok.handle,
    url: profile.social.tiktok.url,
    description: "Quick bench clips — bus debugging, firmware bring-up, and project walkthroughs in under 60 seconds."
  },
  {
    label: "Instagram",
    handle: profile.social.instagram.handle,
    url: profile.social.instagram.url,
    description: "Workbench photos, circuit close-ups, and visual breakdowns of embedded systems concepts."
  },
  {
    label: "GitHub",
    handle: "jibril04Afaa",
    url: "https://github.com/jibril04Afaa",
    description: "Firmware repos with READMEs, architecture notes, and reproducible build instructions."
  },
  {
    label: "LinkedIn",
    handle: "Jibril Afaa",
    url: "https://www.linkedin.com/in/jibrilafaa/",
    description: "Professional profile, project updates, and career milestones."
  }
];

export const featuredContent: FeaturedContent[] = [
  {
    title: "Tracing an I2C Bus Fault at the Bench",
    platform: "TikTok",
    url: profile.social.tiktok.url,
    metric: "Debugging series",
    summary:
      "Step-by-step isolation of a sensor communication failure — scope capture, register reads, and the fix.",
    focus: ["Firmware", "I2C", "Debugging"]
  },
  {
    title: "User Space vs Kernel Space — Visual Notes",
    platform: "Instagram",
    url: profile.social.instagram.url,
    metric: "Educational carousel",
    summary:
      "A visual thread explaining device files, driver boundaries, and how an embedded Linux app reaches hardware.",
    focus: ["Embedded Linux", "Drivers", "Education"]
  },
  {
    title: "RTOS Control Loop Tuning",
    platform: "TikTok",
    url: profile.social.tiktok.url,
    metric: "Build log",
    summary:
      "Capturing PID telemetry without disturbing the control task — timing tradeoffs on a real-time scheduler.",
    focus: ["RTOS", "Robotics", "Control systems"]
  },
  {
    title: "Mini SSD1306 OLED Driver",
    platform: "GitHub",
    url: "https://github.com/jibril04Afaa/mini_ssd1306_oled_driver",
    metric: "Open source",
    summary:
      "Lightweight I2C display driver on STM32F411 with a RAM frame buffer, pixel primitives, and a starfield animation demo.",
    focus: ["Firmware", "I2C", "Drivers"]
  },
  {
    title: "Smart Fan Controller",
    platform: "GitHub",
    url: "https://github.com/jibril04Afaa/smart_fan_controller",
    metric: "Dual-node system",
    summary:
      "FreeRTOS on STM32 for state management and user input, bare-metal Pico firmware for PWM motor control, linked over a shared bus.",
    focus: ["RTOS", "STM32", "PWM"]
  },
  {
    title: "PCB Bring-Up Checklist",
    platform: "Instagram",
    url: profile.social.instagram.url,
    metric: "Reference post",
    summary:
      "Power sequencing, first-boot checks, and the order of operations I follow when validating a new board.",
    focus: ["Electronics", "PCB", "Bring-up"]
  }
];
