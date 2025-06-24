module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        tienda: {
          primary: "#FFFAE5",
          secondary: "#FFC300",
          accent: "#FF5733",
          dark: "#C70039",
        },
        heladeria: {
          primary: "#FFF0F6",
          secondary: "#FFD6E8",
          accent: "#FF69B4",
          dark: "#C2185B",
        },
        mascotas: {
          primary: "#E0F7FA",
          secondary: "#81D4FA",
          accent: "#00ACC1",
          dark: "#00796B",
        },
        concreto: {
          primary: "#E0E0E0",
          secondary: "#9E9E9E",
          accent: "#424242",
          dark: "#212121",
        },
        taller: {
          primary: "#ECEFF1",
          secondary: "#90A4AE",
          accent: "#455A64",
          dark: "#263238",
        },
        abogados: {
          primary: "#F5F5F5",
          secondary: "#607D8B",
          accent: "#3F51B5",
          dark: "#1A237E",
        },
        clinica: {
          primary: "#E3F2FD",
          secondary: "#90CAF9",
          accent: "#1976D2",
          dark: "#0D47A1",
        },
        spa: {
          primary: "#F3E5F5",
          secondary: "#CE93D8",
          accent: "#AB47BC",
          dark: "#6A1B9A",
        },
        tecnologia: {
          primary: "#E1F5FE",
          secondary: "#81D4FA",
          accent: "#0288D1",
          dark: "#01579B",
        },
        natural: {
          primary: "#F1F8E9",
          secondary: "#C5E1A5",
          accent: "#8BC34A",
          dark: "#558B2F",
        },
      },
    },
  },
  plugins: [],
};