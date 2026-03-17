# React + Vite

# 🎌 NoraGami | Modern Creative Portfolio

NoraGami is a high-performance, visually immersive portfolio built with a focus on smooth interactions, physics-based animations, and a premium "agency-style" aesthetic. 

![Project Preview](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop)

## 🚀 The Vision
The goal of this project was to move away from static, "boring" websites and explore **dynamic storytelling** through code. By combining custom hover states with real-time video preloading and smooth inertia scrolling, NoraGami provides a tactile experience for the user.

## 🛠️ Tech Stack
* **React 19** – Component-based UI architecture.
* **Tailwind CSS v4** – Modern, high-performance styling using the new Oxide engine.
* **Framer Motion** – Physics-based animations and spring-based cursor tracking.
* **Locomotive Scroll** – Smooth, buttery inertia scrolling for a premium feel.
* **React Router Dom** – seamless client-side navigation.

## ✨ Key Features
* **Magnetic Hover Effects:** Projects feature a floating "preview" window that follows the mouse with spring physics.
* **Optimized Asset Loading:** Custom `useEffect` hooks to preload high-definition GIFs/Videos into the browser cache, ensuring zero-latency hover effects.
* **Responsive Design:** Fully optimized for mobile and large-scale 4K displays.
* **Clean Routing:** Integrated `vercel.json` configurations to handle SPA routing without 404 errors.

## 📂 Project Structure
* `Work.jsx`: The hero section focused on high-level visuals.
* `Products.jsx`: A data-driven list component that dynamically renders project details.
* `Marquees.jsx`: Infinite scrolling text layers to add motion to the page.
* `Footer.jsx`: A clean, functional navigation hub for internal and external links.

## 🔮 Future Upgrades
The roadmap for NoraGami includes several high-level features to further push the boundaries:
1.  **Three.js Integration:** Adding a 3D interactive hero element (like a floating crystal or grain effect).
2.  **Dark/Light Mode:** A custom theme switcher with a "morphing" transition animation.
3.  **Dynamic Case Studies:** Using MDX (Markdown for React) to write detailed stories for each project.
4.  **Custom Cursor:** A custom SVG cursor that reacts and changes shape when hovering over clickable elements.

## ⚙️ Local Setup
1. Clone the repository: `git clone https://github.com/Kvzbin/NoraGami.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
