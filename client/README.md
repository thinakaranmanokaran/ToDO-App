# React Vite + Tailwind CSS

This is a simple React project using Vite and Tailwind CSS for fast development and styling.

## 🚀 Getting Started

### 1️⃣ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js) or yarn

### 2️⃣ Create a New Vite Project
Run the following command to create a new Vite project:
```sh
npm create vite@latest my-app --template react
```
OR (if using yarn)
```sh
yarn create vite@latest my-app --template react
```

### 3️⃣ Navigate to Project Folder
```sh
cd my-app
```

### 4️⃣ Install Dependencies
```sh
npm install
```
OR
```sh
yarn install
```

### 5️⃣ Install Tailwind CSS
Run the following command:
```sh
npm install -D tailwindcss postcss autoprefixer
```

### 6️⃣ Initialize Tailwind CSS
```sh
npx tailwindcss init -p
```
This creates `tailwind.config.js` and `postcss.config.js`.

### 7️⃣ Configure Tailwind
Edit `tailwind.config.js` to enable Tailwind in all files:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 8️⃣ Add Tailwind to CSS
Replace the content of `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 9️⃣ Start the Development Server
```sh
npm run dev
```
OR
```sh
yarn dev
```

## 📁 Project Structure
```
my-app/
│-- src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry file
│-- public/            # Static files
│-- index.html         # Root HTML file
│-- package.json       # Project dependencies
│-- tailwind.config.js # Tailwind configuration
│-- vite.config.js     # Vite configuration
```

## ✅ Deployment
To build your project for production, run:
```sh
npm run build
```
Then, you can deploy the `dist` folder to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

## 🎯 Additional Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---
Happy Coding! 🚀

