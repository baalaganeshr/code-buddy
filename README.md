# Code Buddy - Visual App Builder

A modern, neon-themed visual app builder that allows you to create production-ready web applications with a drag-and-drop interface. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Visual Builder**: Drag-and-drop interface powered by React Flow
- **Live Code Generation**: Real-time code generation with TypeScript support
- **Component Library**: Pre-built components (headings, buttons, cards, etc.)
- **Properties Panel**: Configure component properties and styling
- **Preview Panel**: Live preview of your components
- **Responsive Design**: Mobile-first responsive design
- **Dark Theme**: Beautiful neon-accent dark theme
- **Export Ready**: Export production-ready React components

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand
- **Visual Builder**: React Flow
- **Code Editor**: Monaco Editor
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation

1. Clone the repository:
```bash
git clone git@github.com:baalaganeshr/code-buddy.git
cd code-buddy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Design System

The app features a custom dark theme with neon accents:

- **Primary Color**: `#ff1a43` (Neon Pink/Red)
- **Background**: `#050505` (Deep Black)
- **Surface**: `#0a0a0f` (Dark Gray)
- **Text Primary**: `#fefefe` (White)
- **Text Secondary**: `#b3b3c2` (Light Gray)

## 🚀 Usage

1. **Component Library**: Drag components from the left panel
2. **Canvas**: Drop components on the visual canvas
3. **Properties Panel**: Configure selected component properties
4. **Preview Panel**: See live preview of your components
5. **Code Panel**: View and export generated code

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components
│   └── ui/             # UI components (Button, Badge, etc.)
├── features/           # Feature-specific components
│   ├── builder/        # Visual builder functionality
│   └── landing/        # Landing page components
├── store/              # Zustand state management
└── styles/             # Global styles
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier

## 📝 Issues Fixed

- ✅ React 19 compatibility issues resolved by downgrading to React 18
- ✅ React Flow infinite loop issues fixed
- ✅ Prettier plugin import errors resolved
- ✅ Maximum update depth exceeded errors fixed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React Flow team for the amazing flow library
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Monaco Editor for the code editing experience