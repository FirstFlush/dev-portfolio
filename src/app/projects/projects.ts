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
  FastapiOriginal,
  DockerOriginal,
  NugetOriginal,
  PypiOriginal,
} from 'devicons-react'

interface Project {
  name: string
  description: string
  link: { href: string, label: string }
  logos: React.ComponentType<{ size?: string | number; color?: string }>[]
}

export const projects: Project[] = [
  {
    name: "Street Ninja",
    description:
      "A full-stack, non-profit project providing real-time resources for vulnerable people in Vancouver. Built with Django REST Framework, Next.js, PostgreSQL (GIS), Redis, Celery, and Twilio for SMS-based assistance.",
    link: { href: "https://github.com/firstflush/street_ninja", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain, RedisOriginal, PostgresqlOriginal, DockerOriginal],
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
      "A C# steganography tool that allows users to hide and extract encrypted messages within images using LSB encoding and AES encryption. Includes a CI pipeline with automated testing, and packaged on NuGet.",
    link: { href: "https://github.com/firstflush/Stegosaurus", label: "github.com" },
    logos: [CsharpOriginal, NugetOriginal],
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
      "A Python package for parsing and decoding automotive tire codes, providing detailed specifications such as tire width, aspect ratio, load index, and speed rating. Created a PyPI package.",
    link: { href: "https://github.com/firstflush/tire_codes", label: "github.com" },
    logos: [PythonOriginal, PypiOriginal],
  },
  {
    name: "canatax",
    description:
      "A Python tool for quickly calculating Canadian income tax and sales tax rates across provinces, useful for personal finance and business applications. Created a PyPI package.",
    link: { href: "https://github.com/firstflush/canatax", label: "github.com" },
    logos: [PythonOriginal, PypiOriginal],
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
      "A full-stack React/Django project documenting the build of a Tesla Model 3 racecar, nicknamed 'nikki'.",
    link: { href: 'https://github.com/firstflush/nikki', label: 'github.com' },
    logos: [JavascriptOriginal, ReactOriginal, MaterialuiOriginal, DjangoPlain],
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
      "A Django Rest Framework plugin for setting up an affiliate marketing program, allowing businesses to track referrals and commissions seamlessly.",
    link: { href: "https://github.com/firstflush/django-affiliate-marketing", label: "github.com" },
    logos: [PythonOriginal, DjangoPlain],
  },
  {
    name: 'kitchen_sink',
    description:
      'A Bash script that automates hash-cracking by recursively collecting every wordlist in a directory and feeding them to John the Ripper. Designed primarily for use with SecLists, it can also work with any custom wordlist collection. Used for capture-the-flag (CTF) challenges.',
    link: { href: 'https://github.com/firstflush/kitchen_sink', label: 'github.com' },
    logos: [BashOriginal],
  },
  {
    name: 'lukio',
    description:
      '(L)inux (U)nified (K)ey IO: A Bash script for mounting and unmounting LUKS-encrypted volumes via different backends. Originally designed to support zuluCrypt, cryptsetup, and udisksctl, it currently wraps zuluCrypt-cli, simplifying the syntax for easier usage',
    link: { href: 'https://github.com/firstflush/lukio', label: 'github.com' },
    logos: [BashOriginal],
  },
  {
    name: 'BTC/LTC payment processor',
    description:
      "A Django-based Bitcoin payment processor that integrates with the Electrum BTC wallet via JSON-RPC. It converts CAD to BTC using CoinMarketCap and CoinGecko APIs, generates unique deposit addresses from the merchant’s master public key, and ensures secure authentication with HMAC. Originally built as a proof of concept for handling crypto payments for online dispensaries—without ever controlling private keys. Also has support for Electrum's LTC wallet.",
    link: { href: 'https://github.com/firstflush/payment', label: 'github.com' },
    logos: [PythonOriginal, DjangoPlain],
  },
  {
    name: 'arduino-lib',
    description:
      'A Bash wrapper for Arduino CLI, allowing easier filtering of Arduino packages by name, author, and maintainer.',
    link: { href: 'https://github.com/firstflush/arduino-lib', label: 'github.com' },
    logos: [BashOriginal],
  },
  {
    name: 'Django HMAC Plugin',
    description:
      "A fork of github.com/aaronlelevier/django-rest-framework-hmac, originally built by another dev but left broken on Django 3+. I fixed the header handling, cleaned up some internals, and made it fully functional for modern Django/DRF setups.",
    link: { href: 'https://github.com/FirstFlush/django-rest-framework-hmac', label: 'github.com' },
    logos: [PythonOriginal, DjangoPlain],
  },
  {
    name: 'CTF Time',
    description:
      " A Python CLI tool to automate the initial recon steps of a Capture The Flag (CTF) challenge. It streamlines setup by creating a new directory, running an Nmap scan, saving results, querying Searchsploit for vulnerabilities on whichever services/versions are running on the open ports, and launching FFUF fuzzing on any detected web servers. Built with Python, Click, and the Python Nmap library.",
    link: { href: 'https://github.com/FirstFlush/ctf-time', label: 'github.com' },
    logos: [PythonOriginal],
  },
  {
    name: 'Sudoku Solver',
    description:
      'A simple Python script that takes a Sudoku board, as a 2D array of integers, and solves it using recursion and a backtracking algorithm. A fun project to build, although it definitely takes the fun out of playing Sudoku.',
    link: { href: 'https://github.com/firstflush/sudoku', label: 'github.com' },
    logos: [PythonOriginal],
  },
];

export default projects;
