# cesarriat.com — Web Personal César Riat

> **AI Lead · Referente en Inteligencia Artificial en Argentina**
> Web personal optimizada para SEO, LLMs y Firebase Hosting.

---

## 🗂️ Mapa de Archivos

```
cesarriat-web/
│
├── public/                     ← Raíz pública (Firebase sirve desde aquí)
│   ├── index.html              ← Página principal (hero, bio, premios, timeline, FAQ)
│   ├── medios.html             ← +45 notas de prensa filtrables por categoría
│   ├── proyectos.html          ← 16 proyectos de IA Generativa en producción
│   ├── charlas.html            ← +15 conferencias (SAIACONF, ML2024, Perú, etc.)
│   ├── contacto.html           ← Formularios: periodistas + eventos/conferencias
│   │
│   ├── css/
│   │   └── style.css           ← Estilos globales (paleta TensorFlow, Space Mono)
│   │
│   ├── js/
│   │   └── main.js             ← Animaciones, FAQ accordion, lazy video, filtros
│   │
│   ├── robots.txt              ← Permisivo para todos los bots (Google, GPT, Claude)
│   └── sitemap.xml             ← Sitemap con las 5 URLs principales
│
├── firebase.json               ← Configuración Firebase Hosting (rewrites, cache)
├── .firebaserc                 ← Nombre del proyecto Firebase: cesarriat-web
├── server.js                   ← Servidor local para desarrollo (Node.js)
├── .gitignore                  ← Excluye archivos privados y node_modules
└── README.md                   ← Este archivo
```

---

## ⚙️ Dependencias

### Para correr en local
- **Node.js** (v18+) — [nodejs.org](https://nodejs.org)
- No hay `package.json` — el servidor es un archivo único `server.js`

### Para deploy en producción
- **Firebase CLI** — `npm install -g firebase-tools`
- Cuenta en [Firebase Console](https://console.firebase.google.com) con proyecto `cesarriat-web`
- Dominio `cesarriat.com` configurado en Firebase Hosting

### Stack técnico (sin frameworks)
- HTML5 + CSS3 + JavaScript Vanilla
- Google Fonts: Space Mono · DM Sans · JetBrains Mono
- Schema.org JSON-LD para SEO estructurado
- IntersectionObserver API para animaciones
- YouTube Lazy Loading (sin iframes hasta click)

---

## 🚀 Cómo Correrlo Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/All-Aideas/cesarriat-web.git
cd cesarriat-web

# 2. Iniciar servidor local
node server.js

# 3. Abrir en el browser
# http://localhost:5000
```

> No requiere `npm install`. El servidor sirve archivos estáticos directamente desde `/public`.

---

## 🔥 Deploy en Firebase

### Primera vez (setup completo):
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Deploy
firebase deploy
```

La web queda disponible en:
- `https://cesarriat-web.web.app` (dominio Firebase)
- `https://cesarriat.com` (dominio propio, configurar DNS)

### Actualizar la web:
```bash
# Editás los archivos en /public y deployás
firebase deploy

# O si usás git:
git add .
git commit -m "descripción del cambio"
git push
firebase deploy
```

---

## 🌐 Agregar Dominio Propio (cesarriat.com)

1. Firebase Console → Hosting → **"Add custom domain"**
2. Ingresar: `cesarriat.com`
3. Firebase te da 2 registros DNS tipo A
4. En tu registrador (Porkbun / Namecheap / NIC.ar): agregar esos registros
5. Esperar 24–48hs → HTTPS automático con Let's Encrypt

---

## 📄 Descripción Funcional

| Página | Función |
|--------|---------|
| `index.html` | Hero con foto, bio, badge strip de medios, contadores animados, sección "Sobre mí", timeline profesional, premios/reconocimientos, proyectos destacados, FAQ con Schema.org, sección de tweets/social proof |
| `medios.html` | Grid filtrable de +45 notas de prensa categorizadas (tecnología, agro, salud, premios, conferencias). Filtros por URL con `?categoria=` para SEO |
| `proyectos.html` | 16 proyectos de IA Generativa en producción: Carrefour, GCBA, Municipalidad de Vicente López, freelance. Cards con métricas, tecnologías y estado |
| `charlas.html` | +15 conferencias y eventos: SAIACONF 2024, ML2024 (1.680 asistentes), Perú, RCANZ, UNESCO, Media Party, Salud, etc. Con links a LinkedIn, videos y cobertura |
| `contacto.html` | Dos formularios separados: periodistas/medios y organizadores de eventos. Email visible + WhatsApp |

### SEO implementado:
- Meta tags completos en todas las páginas
- Open Graph + Twitter Cards
- Schema.org JSON-LD: Person, FAQPage, BreadcrumbList, Event
- `robots.txt` que permite acceso a GPTBot, ClaudeBot, PerplexityBot
- `sitemap.xml` con las 5 URLs y prioridades
- AI-readable summary oculto para LLMs crawlers
- Lazy loading en todos los videos de YouTube

---

## 💰 Costo Total

| Item | Costo |
|------|-------|
| Firebase Hosting | $0/mes (plan Spark gratuito) |
| Dominio .com | ~$10–12 USD/año |
| SSL/HTTPS | $0 (Firebase incluido) |
| CDN global | $0 (Firebase incluido) |

---

## 🤖 Créditos

Este sitio fue construido con **Inteligencia Artificial** y **Vibe Coding**.
Desarrollado en colaboración con [Claude](https://claude.ai) (Anthropic).

> *"IA que funciona en el mundo real"* — César Riat
