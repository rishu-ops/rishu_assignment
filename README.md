# Zyvo - Client Success Hub & Team Growth Platform

A modern, responsive website built with React, TypeScript, and vanilla CSS.

## 🚀 Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vanilla CSS** - Custom styling with CSS modules

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Header.css
│   ├── Hero.tsx
│   ├── Hero.css
│   ├── PowerOfData.tsx
│   ├── PowerOfData.css
│   ├── Features.tsx
│   ├── Features.css
│   ├── Testimonials.tsx
│   ├── Testimonials.css
│   ├── CTABanner.tsx
│   ├── CTABanner.css
│   ├── ContactSection.tsx
│   ├── ContactSection.css
│   ├── Footer.tsx
│   └── Footer.css
├── pages/              # Page components
│   └── Index.tsx
├── styles/             # Global styles
│   └── global.css
├── App.tsx             # Root component
└── main.tsx            # Application entry point
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Vanilla CSS (no framework dependencies)
- ✅ Clean and maintainable code structure
- ✅ Modern ES6+ syntax
- ✅ Optimized for performance

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd zyvo-website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🎯 Component Overview

- **Header** - Navigation bar with logo, menu links, search, and sign-in button
- **Hero** - Main hero section with headline, CTA, user testimonials, and image carousel
- **PowerOfData** - Feature section highlighting data-driven solutions
- **Features** - Grid layout showcasing key differentiators
- **Testimonials** - Client success stories with ratings
- **CTABanner** - Call-to-action banner for HR management solutions
- **ContactSection** - Contact form and business information card
- **Footer** - Site footer with links, branding, and social media

## 🎨 Styling Approach

Each component has its own CSS file for isolated styling:

- Global styles are defined in `src/styles/global.css`
- Component-specific styles use standard CSS
- Responsive design using CSS media queries
- CSS custom properties for consistent theming

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- Mobile: < 576px
- Tablet: < 768px
- Desktop: < 968px
- Large Desktop: 1200px+

## 🔧 Development Guidelines

1. **Component Structure**: Each component should have its own `.tsx` and `.css` file
2. **Naming Convention**: Use PascalCase for components, kebab-case for CSS classes
3. **Type Safety**: Always define TypeScript interfaces for props
4. **CSS Organization**: Keep styles modular and component-specific
5. **Code Quality**: Follow ESLint rules and maintain consistent formatting

## 📄 License

This project is created as a test assignment.

## 🤝 Contributing

This is a test project. For any questions or improvements, please contact the development team.
