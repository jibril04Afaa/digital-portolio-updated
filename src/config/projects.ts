import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "mini-ssd1306-oled-driver",
    title: "Mini SSD1306 OLED Driver",
    description:
      "A lightweight SSD1306 display driver on STM32 — I2C frame buffer, pixel drawing, and a starfield animation pushed to a 128×64 OLED.",
    tags: ["Firmware", "Embedded Systems", "Drivers", "Electronics"],
    technologies: ["C", "STM32F411", "STM32 HAL", "I2C", "SSD1306", "Frame buffer"],
    githubUrl: "https://github.com/jibril04Afaa/mini_ssd1306_oled_driver",
    images: [
      {
        src: "/assets/projects/firmware-console.svg",
        alt: "Pixel-art OLED display driver on a microcontroller bench setup"
      }
    ],
    diagrams: [
      {
        src: "/assets/projects/architecture-placeholder.svg",
        alt: "SSD1306 OLED driver architecture diagram",
        caption:
          "Application layer, 1 KB frame buffer, I2C command/data writes, and SSD1306 display hardware over I2C1 at 400 kHz."
      }
    ],
    technicalChallenges: [
      "Mapping x/y coordinates into the SSD1306 page-based memory layout without off-by-one errors at byte boundaries.",
      "Sending the correct initialization sequence — charge pump, addressing mode, and display on/off timing.",
      "Flushing the full frame buffer over I2C row-by-row without blocking the rest of the application longer than necessary."
    ],
    lessonsLearned: [
      "A small RAM buffer makes display logic much easier to reason about than writing directly to the panel on every pixel change.",
      "Display drivers are mostly register sequences — reading the datasheet and commenting each command pays off during debug.",
      "Keeping drawing primitives separate from the animation (starfield) makes the driver reusable across future projects."
    ],
    writeup:
      "This project is a from-scratch SSD1306 driver built on an STM32F411 Nucleo board using STM32CubeMX and the HAL I2C API. The driver maintains a 128×64 frame buffer in RAM, exposes init, fill, draw-pixel, and update-screen functions, and pushes the buffer to the display over I2C. A starfield animation module sits on top to prove the drawing pipeline works end-to-end — init the panel, render to the buffer, flush to hardware.",
    featured: true
  },
  {
    slug: "smart-fan-controller",
    title: "Smart Fan Controller",
    description:
      "A two-node embedded system — an STM32 running FreeRTOS handles user input and system states while a Raspberry Pi Pico drives the fan motor over PWM.",
    tags: ["Firmware", "RTOS", "Embedded Systems", "Electronics"],
    technologies: ["C", "FreeRTOS", "STM32", "Raspberry Pi Pico", "PWM", "State machines", "Inter-board comms"],
    githubUrl: "https://github.com/jibril04Afaa/smart_fan_controller",
    images: [
      {
        src: "/assets/projects/robotics-control.svg",
        alt: "Pixel-art dual-node fan controller with motor and status outputs"
      }
    ],
    diagrams: [
      {
        src: "/assets/projects/architecture-placeholder.svg",
        alt: "Smart fan controller dual-node architecture diagram",
        caption:
          "STM32 main node (FreeRTOS, buttons, LEDs, state machine) ↔ communication bus ↔ Pico motor node (bare-metal C, PWM fan drive)."
      }
    ],
    technicalChallenges: [
      "Splitting responsibilities across two MCUs — system logic on the STM32, motor control on the Pico — with a reliable command protocol between them.",
      "Implementing a clear state machine (Off, Low, High, Auto) that stays responsive to button input under FreeRTOS scheduling.",
      "Driving the DC fan smoothly with PWM on the Pico while keeping the motor node firmware simple and bare-metal."
    ],
    lessonsLearned: [
      "Multi-node firmware forces you to define message formats and ownership early — shared headers in a common folder keep both sides in sync.",
      "RTOS on the main controller makes button handling and status LEDs easier, but the motor node benefits from staying lean.",
      "Documenting the two-node architecture upfront makes the project much easier to demo and extend."
    ],
    writeup:
      "The smart fan controller splits the problem across two boards. Node 1 is an STM32 running FreeRTOS — it owns the system state machine (Off, Low, High, Auto), reads push-button input, drives status LEDs, and sends control commands to the motor node. Node 2 is a Raspberry Pi Pico running bare-metal C — it listens for commands and drives the DC fan with PWM. A shared communication layer links the two nodes, and the repo is organized into separate firmware trees plus shared protocol definitions.",
    featured: true
  }
];
