# Zyvo

A modern, responsive web app built with React, TypeScript, Vite, and custom CSS. Includes dark/light theme support, context-based state, and a modular component structure.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **@tanstack/react-query** - Data fetching and caching
- **react-router-dom** - Routing
- **Pure CSS** - Custom styling, no frameworks

## 📁 Project Structure

```

zyvo-pixel-perfect-main/
├── public/ # Static assets (favicon, robots.txt, images)
├── src/
│ ├── assets/ # Images and static assets
│ ├── components/
│ │ ├── footer/
│ │ ├── header/
│ │ └── home/
│ ├── context/ # React Context (ThemeContext)
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page components (Index, SignIn, NotFound)
│ ├── styles/ # Global and theme CSS
│ ├── App.tsx # Root component
│ ├── main.tsx # App entry point
│ └── vite-env.d.ts # Vite/TS types
├── index.html # Main HTML file
├── package.json # Project metadata & scripts
├── vite.config.ts # Vite config
└── ... # Other config and lock files

```

## 🎨 Features

- 🌗 Light/Dark theme toggle (via context, persists preference)
- ✅ Fully responsive design (mobile-first, CSS media queries)
- 🧩 Modular, component-based architecture
- 🛡️ TypeScript for type safety
- ⚡ Fast Vite dev/build
- 🧹 Clean, maintainable code
- ♻️ Custom hooks for scroll reveal, mobile detection, toasts
- 🔄 Data fetching with React Query

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or yarn/pnpm)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd zyvo-pixel-perfect-main
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🧩 Component & Feature Overview

- **Header** - Navigation bar with logo, menu, search, sign-in, and theme toggle
- **Hero** - Main hero section with headline, CTA, and carousel
- **PowerOfData** - Data-driven feature highlights
- **Features** - Grid of differentiators
- **Testimonials** - Client stories with ratings
- **CTABanner** - Call-to-action for HR solutions
- **ContactSection** - Contact form and info
- **Footer** - Site footer with links and branding

## 🎨 Styling & Theming

- Global styles: `src/styles/global.css`
- Theme variables: `src/styles/theme.css`, `src/styles/theme-overrides.css`
- Each component has its own CSS file for isolated styling
- Responsive design via CSS media queries
- CSS custom properties for theming

## 🌗 Theme Support

- Theme is managed via React Context (`src/context/ThemeContext.tsx`)
- Toggle button in the header
- Theme preference is saved in localStorage
- All main backgrounds, text, and cards adapt to theme
- On first load, the app automatically adopts the user’s system (OS) preference — dark or light

## 📱 Responsive Design

Breakpoints:

- Mobile: < 576px
- Tablet: < 768px
- Desktop: < 992px
- Large Desktop: 1200px+

## 🔧 Development Guidelines

1. **Component Structure**: Each component has its own `.tsx` and `.css` file
2. **Naming Convention**: PascalCase for components, kebab-case for CSS classes
3. **Type Safety**: Always define TypeScript interfaces for props
4. **CSS Organization**: Keep styles modular and component-specific
5. **Code Quality**: Follow ESLint rules and maintain consistent formatting

## 📄 License

This project is created as a test assignment.

## 🤝 Contributing

This is a test project. For any questions or improvements, please contact the development team.
