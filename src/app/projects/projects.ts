import { 
  PythonOriginal,
  TypescriptOriginal,
  JavascriptOriginal, 
  PowershellOriginal,
  CsharpOriginal,
  BashOriginal,
  PostgresqlOriginal,
  DjangoPlain,
  ReactOriginal,
  TailwindcssOriginal,
  RedisOriginal,
  PlaywrightOriginal,
  MaterialuiOriginal,
  FastapiOriginal
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
    link: { href: "https://github.com/firstflush/street_ninja", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain, RedisOriginal, PostgresqlOriginal],
  },
  {
    name: 'Street Ninja Website',
    description:
      'The official website for the Street Ninja project. It serves as an informational hub for government officials, grant issuers, fundraisers, and NGOs to learn about the initiative. The site features an interactive map and a web-based chat that allows users to simulate the normally SMS-based service in their browser.',
    link: { href: 'https://github.com/firstflush/website_street_ninja', label: 'github.com' },
    logos: [TypescriptOriginal, ReactOriginal, TailwindcssOriginal],
  },
  {
    name: "Stegosaurus",
    description:
      "A C# steganography tool that allows users to hide and extract encrypted messages within images using LSB encoding and AES encryption.",
    link: { href: "https://github.com/firstflush/Stegosaurus", label: "github.com" },
    logos: [CsharpOriginal],
  },
  {
    name: "PowerSweep",
    description:
      "A PowerShell module designed for Windows privilege escalation in Capture The Flag (CTF) scenarios. Automates enumeration of misconfigurations that can lead to privilege escalation.",
    link: { href: "https://github.com/firstflush/PowerSweep", label: "github.com" },
    logos: [PowershellOriginal],
  },
  {
    name: "Webweaver",
    description:
      "A fully asynchronous web scraper using Playwright and aiohttp, designed for human-like bot behavior, efficient data extraction, and automated website interaction.",
    link: { href: "https://github.com/firstflush/webweaver", label: "github.com" },
    logos: [PythonOriginal, FastapiOriginal, PlaywrightOriginal, PostgresqlOriginal],
  },
  {
    name: "tire_codes",
    description:
      "A Python package for parsing and decoding automotive tire codes, providing detailed specifications such as tire width, aspect ratio, load index, and speed rating.",
    link: { href: "https://github.com/firstflush/tire_codes", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: "canatax",
    description:
      "A Python tool for quickly calculating Canadian income tax and sales tax rates across provinces, useful for personal finance and business applications.",
    link: { href: "https://github.com/firstflush/canatax", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: 'BlockchainExplorer',
    description:
      "A simple tool for querying the BTC blockchain on my BTCPayServer node. Built for the purpose of familiarizing myself with C#, .NET, and Entity Framework.",
    link: { href: "https://github.com/firstflush/BlockchainExplorer", label: "github.com" },
    logos: [CsharpOriginal],
  },
  {
    name: 'Nikki Racing',
    description:
      'A simple React-based project documenting the build of a Tesla Model 3 racecar. It includes progress updates, modifications, and technical details on the build process.',
    link: { href: 'https://github.com/firstflush/nikki', label: 'github.com' },
    logos: [JavascriptOriginal, ReactOriginal, MaterialuiOriginal],
  },
  {
    name: "Tortoise Shell",
    description:
      "A Python tool that provides an interactive shell with Tortoise-ORM model imports, streamlining database interactions for developers using Tortoise ORM.",
    link: { href: "https://github.com/firstflush/tortoise-shell", label: "github.com" },
    logos: [PythonOriginal],
  },
  {
    name: "django-affiliate-marketing",
    description:
      "A Django plugin for setting up an affiliate marketing program, allowing businesses to track referrals and commissions seamlessly.",
    link: { href: "https://github.com/firstflush/django-affiliate-marketing", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain],
  },
  {
    name: 'arduino-lib',
    description:
      'A Bash wrapper for Arduino CLI, allowing easier filtering of Arduino packages by name, author, and maintainer.',
    link: { href: 'https://github.com/firstflush/arduino-lib', label: 'github.com' },
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
