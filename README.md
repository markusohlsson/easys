# 💼 Easy’s Redovisning Website  

A modern single-page application for **Easy’s Redovisning**, showcasing accounting, bookkeeping, and tax advisory services — along with contact information and an overview of services offered.  

🚀 **Live Demo:** *Coming soon*  

---

## 📸 Features  
- **Responsive SPA** built with **Vue 3** & **Vite**  
- Interactive **map integration** using [Vue Leaflet](https://vue-leaflet.org/) & [Leaflet](https://leafletjs.com/)  
- Clean **about & services sections** with smooth UI  
- **Contact form** for inquiries (front-end ready)  
- **Reusable components** for cards, buttons, and modals  
- Fully structured for easy maintainability  

---

## 🛠️ Tech Stack  
- [Vue 3](https://vuejs.org/) – UI framework  
- [Vue Router](https://router.vuejs.org/) – client-side routing  
- [Vite](https://vitejs.dev/) – fast development & build tool  
- [Leaflet](https://leafletjs.com/) & [Vue Leaflet](https://vue-leaflet.org/) – interactive maps  
- [Lucide Icons](https://lucide.dev/) – modern icon set  
- **ESLint** & **Stylelint** – code quality and linting  

---

## 📦 Installation & Setup  

Clone the repository:  
```bash
git clone https://github.com/yourusername/easys.git
cd easys
```

Install dependencies:  
```bash
npm install
```

Run locally in development mode:  
```bash
npm run dev
```

Build for production:  
```bash
npm run build
```

Preview production build:  
```bash
npm run preview
```

---

## 🧹 Linting & Code Quality  

Run ESLint for JavaScript & Vue files:  
```bash
npm run lint
```

Automatically fix lint issues:  
```bash
npm run lint:fix
```

Run Stylelint for CSS & Vue styles:  
```bash
npm run lint:css
```

Automatically fix CSS lint issues:  
```bash
npm run lint:css:fix
```

---

## 📂 Project Structure  

```bash
easys/
├── src/                
│   ├── assets/         
│   │   ├── img/        # Images
│   │   └── style/      # CSS stylesheets
│   ├── components/     # Reusable Vue components
│   ├── data/           # JSON data files & icons.js
│   ├── router/         # Vue Router setup
│   └── views/          # Pages (Home, Services, About, Contact, etc.)
├── App.vue            # Main App component
├── main.js            # Vue entry point
└── package.json       # Project metadata & scripts
```

## 📖 License  
This project is licensed under the **MIT License** – feel free to use and adapt it.
