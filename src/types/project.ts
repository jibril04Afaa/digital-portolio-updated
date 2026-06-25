export type ProjectTag =
  | "Firmware"
  | "Embedded Systems"
  | "Embedded Linux"
  | "Drivers"
  | "RTOS"
  | "Electronics"
  | "PCB Design"
  | "Robotics"
  | "Tools"
  | "Software";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectDiagram = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  technologies: string[];
  githubUrl: string;
  images: ProjectImage[];
  diagrams: ProjectDiagram[];
  lessonsLearned: string[];
  technicalChallenges: string[];
  writeup: string;
  featured?: boolean;
};
