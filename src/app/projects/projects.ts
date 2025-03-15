import { 
  PythonOriginal,
  TypescriptOriginal,
  JavascriptOriginal, 
  PowershellOriginal,
  CsharpOriginal,
  BashOriginal,
  PostgresqlOriginal,
  DjangorestOriginal,
  DjangoPlain,
  ReactOriginal,
  TailwindcssOriginal,
  RedisOriginal,
  PlaywrightOriginal,
  MaterialuiOriginal
} from 'devicons-react'

interface Project {
  name: string
  description: string
  link: { href: string, label: string }
  // logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
  logos: React.ComponentType<{ size?: string | number; color?: string }>[]
}


export const projects: Project[] = [
  {
    name: "Street Ninja",
    description:
      "A full-stack, non-profit project providing real-time resources for vulnerable people in Vancouver. Built with Django REST Framework, Next.js, PostgreSQL (GIS), Redis, Celery, and Twilio for SMS-based assistance.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain, RedisOriginal, PostgresqlOriginal],
  },
  {
    name: 'Street Ninja Website',
    description:
      'The official website for the Street Ninja project. It serves as an informational hub for government officials, grant issuers, fundraisers, and NGOs to learn about the initiative. The site features an interactive map and a web-based chat that allows users to simulate the normally SMS-based service in their browser.',
    link: { href: '#', label: 'github.com' },
    logos: [TypescriptOriginal, ReactOriginal, TailwindcssOriginal],
  },
  {
    name: "Stegosaurus",
    description:
      "A C# steganography tool that allows users to hide and extract encrypted messages within images using LSB encoding and AES encryption.",
    link: { href: "#", label: "github.com" },
    logos: [CsharpOriginal],
  },
  {
    name: "Powersweep",
    description:
      "A PowerShell module designed for Windows privilege escalation in Capture The Flag (CTF) scenarios. Automates enumeration of misconfigurations that can lead to privilege escalation.",
    link: { href: "#", label: "github.com" },
    logos: [PowershellOriginal],
  },
  {
    name: "tire_codes",
    description:
      "A Python package for parsing and decoding automotive tire codes, providing detailed specifications such as tire width, aspect ratio, and speed rating.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: "canatax",
    description:
      "A Python tool for quickly calculating Canadian income tax and sales tax rates across provinces, useful for personal finance and business applications.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: 'Nikki Racing',
    description:
      'A simple React-based project documenting the build of a Tesla Model 3 racecar. It includes progress updates, modifications, and technical details on the build process.',
    link: { href: '#', label: 'github.com' },
    logos: [JavascriptOriginal, ReactOriginal, MaterialuiOriginal],
  },
  {
    name: "Webweaver",
    description:
      "A fully asynchronous web scraper using Playwright and aiohttp, designed for human-like bot behavior, efficient data extraction, and automated website interaction.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal, PlaywrightOriginal, PostgresqlOriginal],
  },
  {
    name: "Tortoise Shell",
    description:
      "A Python tool that provides an interactive shell with Tortoise-ORM model imports, streamlining database interactions for developers using Tortoise ORM.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: "django-affiliate-marketing",
    description:
      "A Django plugin for setting up an affiliate marketing program, allowing businesses to track referrals and commissions seamlessly.",
    link: { href: "#", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain],
  },
  {
    name: 'arduino-lib',
    description:
      'A Bash wrapper for Arduino CLI, allowing easier filtering of Arduino packages by name, author, and maintainer.',
    link: { href: '#', label: 'github.com' },
    logos: [BashOriginal],
  },
  // {
  //   name: "Unnamed",
  //   description:
  //     "A Bash script for managing zuluCrypt volumes, offering quick and efficient encrypted volume mounting and unmounting via CLI.",
  //   link: { href: "#", label: "github.com" },
  //   logo: BashOriginal,
  // },
];

export default projects;
