export const profile = {
  name: "Jibril Afaa",
  role: "Embedded Systems & Firmware Engineer",
  roles: [
    "Embedded Systems Engineer",
    "Firmware Developer",
    "Embedded Linux Enthusiast"
  ],
  location: "United States",
  tagline:
    "I write firmware, bring up hardware, and document what I learn along the way.",
  personalStatement:
    "I'm a recent graduate who'd rather be at the bench than in a slide deck. I like the part of engineering where software meets silicon — reading schematics, chasing bus errors, and shipping code that actually runs on the target.",
  email: "jibrilBA04@gmail.com",
  availability: "Open to firmware, embedded Linux, and hardware-adjacent roles",
  github: "https://github.com/jibril04Afaa",
  photo: "/assets/profile/jibril-portrait.png",
  social: {
    tiktok: { handle: "@jibrilinux", url: "https://www.tiktok.com/@jibrilinux" },
    instagram: { handle: "@jib.untu", url: "https://www.instagram.com/jib.untu" }
  },
  about: {
    intro:
      "I got into embedded systems because I wanted to understand what happens below the application layer — registers, interrupts, timing, and the hardware that makes everything else possible.",
    paragraphs: [
      "Most of my project work sits at the intersection of firmware and hardware. I spend time on peripheral bring-up, driver boundaries, control loops, and the kind of debugging that starts with a scope trace and ends with a cleaner state machine.",
      "Embedded Linux is where I'm pushing next — understanding how user space talks to kernel space, how device files map to real hardware, and how to structure driver code so someone else can actually maintain it.",
      "I also create engineering content as @jibrilinux and @jib.untu — short videos and posts that break down what I'm building and why. Teaching forces clarity, and clarity makes better firmware."
    ],
    focusAreas: [
      { label: "Firmware", detail: "C/C++, RTOS tasks, peripheral drivers, boot sequences" },
      { label: "Hardware integration", detail: "I2C/SPI/UART, sensors, actuators, bench validation" },
      { label: "Embedded Linux", detail: "Device nodes, driver stacks, build and debug workflows" },
      { label: "Continuous learning", detail: "Documentation, content, and deliberate skill building" }
    ]
  },
  highlights: [
    "Shipped firmware projects from schematic review to on-target validation",
    "Comfortable at the bench with a scope, a logic analyzer, and a serial console",
    "Documents architecture decisions so reviewers can evaluate systems quickly"
  ]
};
