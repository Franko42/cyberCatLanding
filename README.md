# 🐾 CyberCat Linux — Official Landing Page

> A sleek, high-performance landing page for **CyberCat Linux** — the minimalist cyberpunk Linux distribution engineered for developers, power users, and creators.

![CyberCat Preview](public/preview.png)

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions + GitHub Pages

## 🎨 Color Palette

| Token | Hex | RGB | Role |
| :--- | :--- | :--- | :--- |
| **Neon Cyan** | `#2198FF` | `rgb(33, 152, 255)` | Active borders, accents, prompts |
| **Electric Purple** | `#995BFB` | `rgb(153, 91, 251)` | Brand highlights, selection |
| **Vivid Magenta** | `#D748FB` | `rgb(215, 72, 251)` | Spinner accents, alerts |
| **Void Dark** | `#07090E` | `rgb(7, 9, 14)` | Low-eye-strain base background |

## 🚀 Development & Build

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm dev

# Build for production
pnpm build

# Preview build locally
pnpm preview
```

## 🌐 Deployment to GitHub Pages

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).
When pushed to `main`, GitHub Actions automatically builds the project and deploys it to GitHub Pages.

---
© CyberCat Linux Project. Released under GPL-3.0 License.
