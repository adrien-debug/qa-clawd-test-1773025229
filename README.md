# QA Clean Build

A minimal dark landing page built with Next.js 15 and Tailwind CSS 4.

## Features

- ⚡ **Next.js 15** - Latest version with App Router and Server Components
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework with native design tokens
- 🔧 **TypeScript** - Full type safety and better developer experience
- 📱 **Responsive Design** - Mobile-first approach that works on all devices
- 🌙 **Dark Theme** - Beautiful minimal dark theme with carefully crafted colors
- 🚀 **Performance** - Optimized for speed with lazy loading and code splitting
- ♿ **Accessibility** - Built with accessibility best practices
- 🎯 **SEO Ready** - Proper meta tags and structured data

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React meta-framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React 18](https://react.dev/) - UI library

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error UI
│   └── not-found.tsx     # 404 page
├── components/            # Reusable components
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── CTA.tsx           # Call-to-action section
│   ├── Footer.tsx        # Footer component
│   ├── Button.tsx        # Button component
│   ├── Card.tsx          # Card component
│   └── LoadingSpinner.tsx # Loading spinner
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0a0a',
  foreground: '#fafafa',
  // ... other colors
}
```

### Typography

Custom fonts are configured in `tailwind.config.ts` and imported in `app/globals.css`.

### Components

All components are built with TypeScript and use Tailwind CSS for styling. They're fully customizable and reusable.

## Deployment

This project can be deployed on any platform that supports Next.js:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [Heroku](https://heroku.com/)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
