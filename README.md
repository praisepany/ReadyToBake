# 🍰 ReadyToBake

> **Make your own favorite dessert with us.**  
> ReadyToBake provides premium-quality ingredients, perfectly portioned for each recipe, along with easy-to-follow guides and video tutorials so anyone can bake bakery-quality desserts right from home.

---

## ✨ Features

- **🏠 Landing Page**: Welcoming hero section, mission statement, and quick navigation to the catalog.
- **🧁 Dessert Catalog**: Browse a wide selection of DIY baking kits—from Western classics (Chocolate Chip Cookies, Basque Burnt Cheesecake, Brownies, Macarons) to Thai favorites (Khanom Chan, Bua Loi, Intanin).
- **📋 Detailed Recipe & Kit View**:
  - Preparation and baking times, calories, and customer ratings.
  - Comprehensive checklist of portioned ingredients and required utensils.
  - Guide to instructions and step-by-step tutorial videos.
  - Interactive quantity selector and cart integration.
- **🛒 Shopping Cart**:
  - Real-time item count indicator in navigation.
  - Update item quantities or remove items dynamically.
  - Subtotal and order summary calculation.
  - Persistent cart state across sessions using `localStorage`.
- **🔐 User Authentication**: Login interface with credential verification and mock account fallback.
- **⚡ Seamless Offline / Mock Data**: Automatic fallback to local mock data (`db.json`) when an external API server is not running.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router v5](https://v5.reactrouter.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with `persist` middleware)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data & Mock API**: Custom `useFetch` hook with automatic local fallback + [json-server](https://github.com/typicode/json-server) support

---

## 📁 Project Structure

```text
ready-to-bake/
├── data/
│   ├── db.json                 # Mock database (menus, users)
│   └── picture/                # Raw product image assets
├── public/
│   └── data/picture/           # Publicly served static dessert images
├── src/
│   ├── assets/                 # Icons, logos, and illustration assets
│   ├── components/             # Reusable UI components
│   │   ├── MenuList.jsx        # Product grid component
│   │   └── Navbar.jsx          # Header navigation and cart counter
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.jsx        # Data fetching with automatic mock fallback
│   ├── pages/                  # Route views
│   │   ├── Cart.jsx            # Shopping cart & checkout summary
│   │   ├── Home.jsx            # Landing page
│   │   ├── LogIn.jsx           # User authentication
│   │   ├── Menu.jsx            # All products catalog
│   │   └── MenuDetails.jsx     # Individual product specifications
│   ├── store/                  # Global state stores
│   │   └── cartStore.js        # Cart items and quantity management
│   ├── App.jsx                 # Routing configuration & application layout
│   ├── index.css               # Global typography, color schemes & Tailwind imports
│   └── main.jsx                # React root entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Installation

Navigate into the project directory and install dependencies:

```bash
cd ready-to-bake
npm install
```

### 2. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

> **Note**: The application has built-in offline mock data support. The Menu and Menu Details pages will load immediately using [`data/db.json`](./data/db.json) even without starting a separate backend server.

### 3. Optional: Run JSON Server (Mock Backend)

If you would like to run a dedicated REST API on `http://localhost:8000`:

```bash
npm run server
```

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### 5. Code Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🔑 Demo Credentials

To test the login functionality on `/login`:

- **Email**: `admin@gmail.com`
- **Password**: `123`
