# swatch

**swatch** is a visual archive of 3D printed filament swatches from brands available in India.

It was created to solve a common problem faced by makers and 3D printing enthusiasts: when buying filament online, it's often hard to tell what a color will actually look like once printed. Most product photos are digital renders or inconsistent lighting shots that don’t represent real-world output.

swatch fixes that by photographing physical swatches under consistent lighting and layout. This archive helps buyers see how a filament looks once printed—before they buy it.

---

## Purpose

- Provide a visual reference of filament colors as they appear after printing
- Help buyers choose colors more confidently by seeing accurate, real-world results
- Focus on filaments from brands available in India
- Make a simple, fast, low-maintenance static site that can be updated easily

---

## Features

- Static React-based frontend
- No database, backend, or CMS — just JSON and images
- Filament swatches stored in a structured format
- Fast-loading and lightweight by design
- Built with developer experience and minimal upkeep in mind

---

## Stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [ShadCN UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- [pnpm](https://pnpm.io/) package manager

### Installation

```bash
git clone https://github.com/yourusername/swatch.git
cd swatch
pnpm install
pnpm dev
```
Then open http://localhost:5173 in your browser.

## Future Plans

- Build a better photo capture setup with controlled and consistent lighting
- Add metadata to each swatch (e.g. printer settings, lighting, swatch model)
- Improve mobile responsiveness and visual layout
- Support filtering by material type, brand, or finish (e.g. silk, matte, PETG)

## Contributing

Community contributions are welcome. Here are some ways to help:
- Improve the visual design and layout
- Propose better UX patterns for browsing or filtering swatches
- Contribute swatch images and details (especially Indian brands)
- Help define a metadata standard for filament entries
- Design a simple brand/logo for the site

Open a pull request or issue if you’d like to collaborate.

## License

MIT License