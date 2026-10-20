# Project Export

## Project Statistics

- Total files: 44

## Folder Structure

```
.gitignore
.vite
  deps
    package.json
    _metadata.json
eslint.config.js
index.html
package.json
public
  app layout images.jpeg
  favicon.svg
  vadim-sherbakov-d6ebY-faOO0-unsplash.jpg
README.md
src
  App.jsx
  assets
    check-box.svg
    Icons.jsx
  components
    common
      ActionButton.jsx
      Badge.jsx
      ConfirmDialog.jsx
      FoundItemCard.jsx
      Loader.jsx
      Modal.jsx
      PendingReportCard.jsx
      SectionTitle.jsx
      StatCard.jsx
      Toast.jsx
    layout
      AuthLayout.jsx
      MainLayout.jsx
      Navbar.jsx
      Notifications.jsx
      SideBar.jsx
  context
    AuthContext.jsx
  index.css
  main.jsx
  pages
    admin
      AdminDashboard.jsx
      AutomaticMatches.jsx
      ClaimManagement.jsx
      Reports.jsx
      StudentManagement.jsx
    auth
      Login.jsx
      Register.jsx
    user
      Dashboard.jsx
      LostItems.jsx
      ReportItem.jsx
  routes
    AppRoutes.jsx
    ProtectedRoute.jsx
vite.config.js

```

### .gitignore

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

### .vite\deps\package.json

```json
{
  "type": "module"
}

```

### .vite\deps\_metadata.json

```json
{
  "hash": "66b7b5ee",
  "configHash": "afe3e49c",
  "lockfileHash": "e3b0c442",
  "browserHash": "011bc27f",
  "optimized": {},
  "chunks": {}
}
```

### eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>lost-and-found</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### package.json

```json
{
  "name": "lost-and-found",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "lucide-react": "^1.55.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "vite": "^8.3.0"
  }
}

```

### public\app layout images.jpeg

*(Unsupported file type)*

### public\favicon.svg

*(Unsupported file type)*

### public\vadim-sherbakov-d6ebY-faOO0-unsplash.jpg

*(Unsupported file type)*

### README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

### src\App.jsx

```jsx
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <AppRoutes />
  )
}

export default App

```

### src\assets\check-box.svg

*(Unsupported file type)*

### src\assets\Icons.jsx

```jsx
export function CampusIllustration() {
    return (
        <svg
            viewBox="0 0 480 440"
            className="w-full max-w-110"
            fill="none"
            role="img"
            aria-label="Illustration of students and a computer"
        >
            <ellipse cx="240" cy="258" rx="190" ry="140" fill="#172C43" />
            <ellipse cx="240" cy="258" rx="145" ry="108" fill="#1D3B58" />
            <circle cx="105" cy="110" r="65" fill="#1E3550" />
            <circle cx="360" cy="300" r="82" fill="#14273B" />

            {/* Graduation cap */}
            <path
                d="M65 135 145 98 225 135 145 173 65 135Z"
                fill="#070B12"
                stroke="#60A5FA"
                strokeWidth="3"
            />
            <path
                d="M96 150V181C125 201 165 201 194 181V150L145 174L96 150Z"
                fill="#0B1220"
            />
            <path
                d="M225 135V171"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <circle cx="225" cy="176" r="6" fill="#F59E0B" />

            {/* Computer screen */}
            <rect
                x="112"
                y="186"
                width="260"
                height="174"
                rx="14"
                fill="#080D17"
                stroke="#476887"
                strokeWidth="4"
            />
            <rect
                x="124"
                y="198"
                width="236"
                height="143"
                rx="7"
                fill="#202B40"
            />
            <path
                d="M163 264 204 230 236 258 269 237 320 283"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="240" cy="351" r="4" fill="#60A5FA" />
            <path
                d="M82 378H401L371 395H111L82 378Z"
                fill="#334A63"
            />
            <path d="M205 360H278L298 378H184L205 360Z" fill="#253A51" />

            {/* Left student */}
            <circle cx="76" cy="287" r="14" fill="#F1B995" />
            <path d="M62 284Q63 263 82 269L91 280L76 278Z" fill="#0B1220" />
            <path d="M64 306 90 309 105 354 70 365 51 337 64 306Z" fill="#2563EB" />
            <path d="M67 360 86 360 79 405H57L67 360Z" fill="#101A2B" />
            <path d="M88 359 103 355 121 395 105 402 82 373Z" fill="#0B1220" />
            <path d="M55 405H78M101 402H124" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
            <path d="M67 315 42 344 29 331" stroke="#F1B995" strokeWidth="10" strokeLinecap="round" />
            <path d="M94 317 110 335" stroke="#F1B995" strokeWidth="10" strokeLinecap="round" />

            {/* Right student */}
            <circle cx="397" cy="237" r="13" fill="#DFA17F" />
            <path d="M384 235Q382 217 399 219L412 230L397 228Z" fill="#111827" />
            <path d="M384 255 411 254 427 298 393 310 375 282Z" fill="#0EA5E9" />
            <path d="M392 305 410 304 405 353H386L392 305Z" fill="#111827" />
            <path d="M410 305 425 300 440 342 425 350 401 321Z" fill="#0B1220" />
            <path d="M383 353H406M423 349H443" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
            <path d="M385 264 366 282 354 270" stroke="#DFA17F" strokeWidth="9" strokeLinecap="round" />

            {/* Floating accents */}
            <rect x="348" y="105" width="37" height="30" rx="6" fill="#1D3B58" />
            <path d="M357 115H376M357 122H371" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
            <circle cx="97" cy="220" r="5" fill="#60A5FA" />
            <circle cx="400" cy="175" r="5" fill="#60A5FA" />
            <path d="M329 150L338 159L329 168L320 159L329 150Z" fill="#F59E0B" />
        </svg>
    );
}

export function FindItLOGO() {
    return (
        <svg
            viewBox="0 0 64 64"
            className="h-12 w-12"
            fill="none"
            aria-hidden="true"
        >
            <path d="M32 4 59 18 32 33 5 18 32 4Z" fill="#60A5FA" />
            <path d="M5 18 32 33V61L5 46V18Z" fill="#1675F9" />
            <path d="M59 18 32 33V61L59 46V18Z" fill="#0757CF" />
            <path d="M32 33V61M5 18V46L32 61 59 46V18" stroke="#93C5FD" strokeWidth="1.5" />
        </svg>
    )
}

export function BurgerMenuIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke={colour} stroke-width="2" stroke-linecap="round" /> <path d="M4 12L20 12" stroke={colour} stroke-width="2" stroke-linecap="round" /> <path d="M4 6L20 6" stroke={colour} stroke-width="2" stroke-linecap="round" /> </g>

        </svg>
    );
}

export function NotificationIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path d="M7.81269 11.805L8.48873 12.1298C8.53741 12.0284 8.56269 11.9174 8.56269 11.805H7.81269ZM6.82501 13.861L6.14897 13.5362C6.08961 13.6598 6.06525 13.7973 6.07855 13.9338L6.82501 13.861ZM8.24851 15.73L8.56851 15.0517C8.54848 15.0422 8.52805 15.0337 8.50727 15.0261L8.24851 15.73ZM11.7644 16.53L11.7601 17.28L11.7686 17.28L11.7644 16.53ZM15.2802 15.73L14.9707 15.0468L14.9602 15.0517L15.2802 15.73ZM16.3264 14.916L16.9113 15.3855C16.9407 15.3489 16.9666 15.3096 16.9886 15.2681L16.3264 14.916ZM16.2094 12.833L15.5231 13.1354C15.542 13.1783 15.5649 13.2194 15.5914 13.258L16.2094 12.833ZM15.6449 10.664L16.3915 10.593C16.3907 10.5849 16.3898 10.5768 16.3888 10.5687L15.6449 10.664ZM11.7644 19L11.754 19.7499C11.7609 19.75 11.7678 19.75 11.7747 19.7499L11.7644 19ZM11.7634 5.897C10.1522 5.897 8.93413 6.59555 8.14766 7.73144C7.38524 8.8326 7.06269 10.2897 7.06269 11.805H8.56269C8.56269 10.4733 8.85049 9.3514 9.38091 8.58531C9.88729 7.85395 10.6446 7.397 11.7634 7.397V5.897ZM7.13665 11.4802L6.14897 13.5362L7.50105 14.1858L8.48873 12.1298L7.13665 11.4802ZM6.07855 13.9338C6.18878 15.0647 6.92546 16.0427 7.98975 16.4339L8.50727 15.0261C7.99879 14.8391 7.62744 14.3624 7.57147 13.7882L6.07855 13.9338ZM7.92852 16.4083C9.12988 16.9751 10.4363 17.2725 11.7601 17.28L11.7686 15.78C10.6642 15.7738 9.57324 15.5257 8.56851 15.0517L7.92852 16.4083ZM11.7686 17.28C13.0925 17.2725 14.3988 16.9751 15.6002 16.4083L14.9602 15.0517C13.9555 15.5257 12.8645 15.7738 11.7601 15.78L11.7686 17.28ZM15.5897 16.4132C16.1041 16.1801 16.5564 15.8276 16.9113 15.3855L15.7415 14.4465C15.5324 14.7071 15.2681 14.9121 14.9707 15.0468L15.5897 16.4132ZM16.9886 15.2681C17.4707 14.3614 17.4092 13.254 16.8273 12.408L15.5914 13.258C15.8552 13.6415 15.8844 14.1496 15.6642 14.5639L16.9886 15.2681ZM16.8957 12.5306C16.6257 11.9178 16.4553 11.2632 16.3915 10.593L14.8982 10.735C14.9771 11.5644 15.1881 12.3752 15.5231 13.1354L16.8957 12.5306ZM16.3888 10.5687C16.2291 9.32169 15.8062 8.15798 15.0356 7.29412C14.247 6.41001 13.1429 5.897 11.7634 5.897V7.397C12.7365 7.397 13.426 7.74299 13.9163 8.29263C14.4246 8.86252 14.7662 9.70731 14.9009 10.7593L16.3888 10.5687ZM12.5134 6.647V5H11.0134V6.647H12.5134ZM8.85395 18.7845C9.70153 19.3981 10.7125 19.7355 11.754 19.7499L11.7747 18.2501C11.0449 18.24 10.3332 18.0036 9.73348 17.5695L8.85395 18.7845ZM11.7747 19.7499C12.8162 19.7355 13.8272 19.3981 14.6748 18.7845L13.7952 17.5695C13.1955 18.0036 12.4839 18.24 11.754 18.2501L11.7747 19.7499Z" fill={colour} />
        </svg>
    )
}

export function SearchIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            {...props} >
            <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={colour} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export function LostReportIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            fill={colour}
            height={size}
            width={size}
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xml:space="preserve"
            stroke={colour}
            {...props}
        >

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M78.528,113.109h-0.213c-5.888,0-10.56,4.779-10.56,10.667s4.885,10.667,10.773,10.667s10.667-4.779,10.667-10.667 S84.416,113.109,78.528,113.109z" /> <path d="M490.667,213.333h-17.131l27.349-92.992c1.557-5.248-1.131-10.816-6.187-12.885c-5.077-2.027-10.859,0.021-13.44,4.843 C477.141,120.021,459.563,128,437.333,128c-24.427,0-42.667-11.264-42.667-21.333v-64C394.667,19.136,375.531,0,352,0 c-23.531,0-42.667,19.136-42.667,42.667v10.667C309.333,59.221,314.112,64,320,64s10.667-4.779,10.667-10.667V42.667 c0-11.755,9.579-21.333,21.333-21.333s21.333,9.579,21.333,21.333v64c0,10.069-18.24,21.333-42.667,21.333 c-22.229,0-39.808-7.979-43.947-15.701c-2.56-4.821-8.427-6.827-13.44-4.843c-5.056,2.069-7.744,7.637-6.187,12.885 l27.349,92.992h-35.669L190.485,61.525c-3.52-7.787-9.835-13.76-17.835-16.789c-8-3.029-16.683-2.752-24.469,0.747L50.88,89.237 c-16.064,7.232-23.275,26.219-16.043,42.304l36.779,81.792H21.333c-5.888,0-10.667,4.779-10.667,10.667v192 c0,52.928,43.072,96,96,96h298.667c52.928,0,96-43.072,96-96V224C501.333,218.112,496.555,213.333,490.667,213.333z M394.667,138.624c11.243,6.656,26.112,10.709,42.667,10.709c11.264,0,23.552-1.835,34.496-5.696l-20.501,69.696h-56.661V138.624 z M330.667,149.333c16.555,0,31.424-4.053,42.667-10.709v74.709h-56.64l-20.501-69.696 C307.115,147.499,319.403,149.333,330.667,149.333z M54.293,122.816c-2.432-5.355-0.021-11.691,5.333-14.101l97.301-43.755 c2.603-1.173,5.504-1.259,8.149-0.256c2.645,1.003,4.757,2.987,5.931,5.589l64.341,143.04H94.997L54.293,122.816z M480,416 c0,41.173-33.493,74.667-74.667,74.667H106.667C65.493,490.667,32,457.173,32,416V234.667h448V416z" /> <path d="M212.608,336.128c6.208,0.363,10.965-4.032,11.371-9.92c1.045-15.445,15.104-27.52,32-27.52 c17.664,0,32.021,13.163,32.021,29.333c0,19.093-16.299,25.429-32.256,29.099l-2.368,0.576c-4.715,1.195-8,5.44-8,10.304 l-0.021,26.667c0,5.867,4.757,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.645l0.021-18.368 c28.309-8.107,42.645-24.341,42.645-48.32c0-27.947-23.936-50.667-53.355-50.667c-28.075,0-51.499,20.821-53.312,47.424 C202.283,330.645,206.741,335.723,212.608,336.128z" /> <path d="M248.533,429.867c-2.133,1.92-3.2,4.693-3.2,7.467c0,2.773,1.067,5.547,3.2,7.467c1.92,2.133,4.693,3.2,7.467,3.2 c2.773,0,5.547-1.067,7.467-3.2c2.133-1.92,3.2-4.693,3.2-7.467c0-2.773-1.067-5.547-3.2-7.467 C259.413,425.813,252.587,425.813,248.533,429.867z" /> </g> </g> </g> </g>

        </svg>
    )
}

export function FoundReportIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 512 512"
            version="1.1"
            {...props}>

            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Shape" fill={colour} transform="translate(42.666667, 42.666667)">
                    <path d="M170.666667,-7.10542736e-15 C264.770773,-7.10542736e-15 341.333333,76.56256 341.333333,170.666667 C341.333333,210.04032 327.799467,246.239573 305.3152,275.148373 L426.630187,396.463573 L396.463573,426.630187 L275.148373,305.314987 C246.239573,327.799467 210.04032,341.333333 170.666667,341.333333 C76.56256,341.333333 7.10542736e-15,264.770773 7.10542736e-15,170.666667 C7.10542736e-15,76.56256 76.56256,-7.10542736e-15 170.666667,-7.10542736e-15 Z M170.666667,42.6666667 C100.083413,42.6666667 42.6666667,100.083413 42.6666667,170.666667 C42.6666667,241.24992 100.083413,298.666667 170.666667,298.666667 C241.24992,298.666667 298.666667,241.24992 298.666667,170.666667 C298.666667,100.083413 241.24992,42.6666667 170.666667,42.6666667 Z M170.666667,202.666667 C188.339779,202.666667 202.666667,216.993555 202.666667,234.666667 C202.666667,252.339779 188.339779,266.666667 170.666667,266.666667 C152.993555,266.666667 138.666667,252.339779 138.666667,234.666667 C138.666667,216.993555 152.993555,202.666667 170.666667,202.666667 Z M192,64 L192,170.666667 L149.333333,170.666667 L149.333333,64 L192,64 Z">

                    </path>
                </g>
            </g>
        </svg>
    )
}

export function EyeIcon({ size = 24, colour = "*ffffff", visible }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
        >
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
            {visible && <path d="M4 4l16 16" />}
        </svg>
    );
}

export function LikeIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path d="M8 14V20M8 20L4 20V9.99998H8L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20M8 20H12" stroke={colour} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export function ReportDataIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            fill={colour}
            width={size}
            height={size}
            viewBox="0 0 32 32"
            {...props}
        >
            <style>{`.cls-1{fill:none;}`}</style>
            <rect x="15" y="20" width="2" height="4" />
            <rect x="20" y="18" width="2" height="6" />
            <rect x="10" y="14" width="2" height="10" />
            <path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z" /><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32" /></svg>
    )
}

export function ArrowIcon({ size = 24, colour = "#ffffff", ...props }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                d="M15 18l-6-6 6-6M9 12h12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function PackageCheck({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M16 18.0001L18 20.0001L22 16.0001"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    )
}

export function GitCompareArrows({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.29289C13.3166 0.902369 12.6834 0.902369 12.2929 1.29289L9.29289 4.29289C8.90237 4.68342 8.90237 5.31658 9.29289 5.70711L12.2929 8.70711C12.6834 9.09763 13.3166 9.09763 13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L12.4142 6H14C16.2091 6 18 7.79086 18 10V16.1707C16.8348 16.5825 16 17.6938 16 19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19C22 17.6938 21.1652 16.5825 20 16.1707V10C20 6.68629 17.3137 4 14 4H12.4142L13.7071 2.70711C14.0976 2.31658 14.0976 1.68342 13.7071 1.29289ZM19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6ZM6 7.82929C7.16519 7.41746 8 6.30622 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.30622 2.83481 7.41746 4 7.82929V14C4 17.3137 6.68629 20 10 20H11.5858L10.2929 21.2929C9.90237 21.6834 9.90237 22.3166 10.2929 22.7071C10.6834 23.0976 11.3166 23.0976 11.7071 22.7071L14.7071 19.7071C15.0976 19.3166 15.0976 18.6834 14.7071 18.2929L11.7071 15.2929C11.3166 14.9024 10.6834 14.9024 10.2929 15.2929C9.90237 15.6834 9.90237 16.3166 10.2929 16.7071L11.5858 18H10C7.79086 18 6 16.2091 6 14V7.82929Z" fill={color} />
        </svg>
    )
}

export function ClipboardCheck({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path d="M9 13.4L10.7143 15L15 11"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M21 16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V13.0002M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V12.0002M8 4.00195C5.82497 4.01406 4.64706 4.11051 3.87868 4.87889C3.11032 5.64725 3.01385 6.82511 3.00174 9"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round" />
            <path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                stroke={color}
                stroke-width="1.5" />
        </svg>
    )
}

export function Users({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
                id="User / Users">
                <path
                    id="Vector"
                    d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
        </svg>
    )
}

export function File({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M13 3L13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2V3ZM19 9H20C20 8.73478 19.8946 8.48043 19.7071 8.29289L19 9ZM13.109 8.45399L14 8V8L13.109 8.45399ZM13.546 8.89101L14 8L13.546 8.89101ZM10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13H10ZM8 16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16H8ZM8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11V9ZM9.5 11C10.0523 11 10.5 10.5523 10.5 10C10.5 9.44772 10.0523 9 9.5 9V11ZM8.5 6C7.94772 6 7.5 6.44772 7.5 7C7.5 7.55228 7.94772 8 8.5 8V6ZM9.5 8C10.0523 8 10.5 7.55228 10.5 7C10.5 6.44772 10.0523 6 9.5 6V8ZM17.908 20.782L17.454 19.891L17.454 19.891L17.908 20.782ZM18.782 19.908L19.673 20.362L18.782 19.908ZM5.21799 19.908L4.32698 20.362H4.32698L5.21799 19.908ZM6.09202 20.782L6.54601 19.891L6.54601 19.891L6.09202 20.782ZM6.09202 3.21799L5.63803 2.32698L5.63803 2.32698L6.09202 3.21799ZM5.21799 4.09202L4.32698 3.63803L4.32698 3.63803L5.21799 4.09202ZM12 3V7.4H14V3H12ZM14.6 10H19V8H14.6V10ZM12 7.4C12 7.66353 11.9992 7.92131 12.0169 8.13823C12.0356 8.36682 12.0797 8.63656 12.218 8.90798L14 8C14.0293 8.05751 14.0189 8.08028 14.0103 7.97537C14.0008 7.85878 14 7.69653 14 7.4H12ZM14.6 8C14.3035 8 14.1412 7.99922 14.0246 7.9897C13.9197 7.98113 13.9425 7.9707 14 8L13.092 9.78201C13.3634 9.92031 13.6332 9.96438 13.8618 9.98305C14.0787 10.0008 14.3365 10 14.6 10V8ZM12.218 8.90798C12.4097 9.2843 12.7157 9.59027 13.092 9.78201L14 8V8L12.218 8.90798ZM8 13V16H10V13H8ZM8.5 11H9.5V9H8.5V11ZM8.5 8H9.5V6H8.5V8ZM13 2H8.2V4H13V2ZM4 6.2V17.8H6V6.2H4ZM8.2 22H15.8V20H8.2V22ZM20 17.8V9H18V17.8H20ZM19.7071 8.29289L13.7071 2.29289L12.2929 3.70711L18.2929 9.70711L19.7071 8.29289ZM15.8 22C16.3436 22 16.8114 22.0008 17.195 21.9694C17.5904 21.9371 17.9836 21.8658 18.362 21.673L17.454 19.891C17.4045 19.9162 17.3038 19.9539 17.0322 19.9761C16.7488 19.9992 16.3766 20 15.8 20V22ZM18 17.8C18 18.3766 17.9992 18.7488 17.9761 19.0322C17.9539 19.3038 17.9162 19.4045 17.891 19.454L19.673 20.362C19.8658 19.9836 19.9371 19.5904 19.9694 19.195C20.0008 18.8114 20 18.3436 20 17.8H18ZM18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362L17.891 19.454C17.7951 19.6422 17.6422 19.7951 17.454 19.891L18.362 21.673ZM4 17.8C4 18.3436 3.99922 18.8114 4.03057 19.195C4.06287 19.5904 4.13419 19.9836 4.32698 20.362L6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8H4ZM8.2 20C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891L5.63803 21.673C6.01641 21.8658 6.40963 21.9371 6.80497 21.9694C7.18864 22.0008 7.65645 22 8.2 22V20ZM4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673L6.54601 19.891C6.35785 19.7951 6.20487 19.6422 6.10899 19.454L4.32698 20.362ZM8.2 2C7.65645 2 7.18864 1.99922 6.80497 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698L6.54601 4.10899C6.59545 4.0838 6.69617 4.04612 6.96784 4.02393C7.25117 4.00078 7.62345 4 8.2 4V2ZM6 6.2C6 5.62345 6.00078 5.25117 6.02393 4.96784C6.04612 4.69617 6.0838 4.59545 6.10899 4.54601L4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80497C3.99922 5.18864 4 5.65645 4 6.2H6ZM5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803L6.10899 4.54601C6.20487 4.35785 6.35785 4.20487 6.54601 4.10899L5.63803 2.32698Z"
                fill={color} />
        </svg>
    )
}

export function Dashboard({ size = 24, color = "#ffffff", ...props }) {
    return (
        <svg 
        width={size} 
        height={size} 
        viewBox="0 -0.5 25 25" 
        fill="none" 
        >
            <path 
            d="M6.25 10.5C6.25 10.0858 5.91421 9.75 5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5H6.25ZM11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19C12.25 18.5858 11.9142 18.25 11.5 18.25V19.75ZM4.75 10.5C4.75 10.9142 5.08579 11.25 5.5 11.25C5.91421 11.25 6.25 10.9142 6.25 10.5H4.75ZM11.5 5.75C11.9142 5.75 12.25 5.41421 12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25V5.75ZM5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5C4.75 10.9142 5.08579 11.25 5.5 11.25V9.75ZM11.5 11.25C11.9142 11.25 12.25 10.9142 12.25 10.5C12.25 10.0858 11.9142 9.75 11.5 9.75V11.25ZM10.75 10.5C10.75 10.9142 11.0858 11.25 11.5 11.25C11.9142 11.25 12.25 10.9142 12.25 10.5H10.75ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM12.25 10.5C12.25 10.0858 11.9142 9.75 11.5 9.75C11.0858 9.75 10.75 10.0858 10.75 10.5H12.25ZM10.75 14C10.75 14.4142 11.0858 14.75 11.5 14.75C11.9142 14.75 12.25 14.4142 12.25 14H10.75ZM11.5 18.25C11.0858 18.25 10.75 18.5858 10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75V18.25ZM20.25 14C20.25 13.5858 19.9142 13.25 19.5 13.25C19.0858 13.25 18.75 13.5858 18.75 14H20.25ZM10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19H10.75ZM12.25 14C12.25 13.5858 11.9142 13.25 11.5 13.25C11.0858 13.25 10.75 13.5858 10.75 14H12.25ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75V4.25ZM18.75 14C18.75 14.4142 19.0858 14.75 19.5 14.75C19.9142 14.75 20.25 14.4142 20.25 14H18.75ZM19.5 14.75C19.9142 14.75 20.25 14.4142 20.25 14C20.25 13.5858 19.9142 13.25 19.5 13.25V14.75ZM11.5 13.25C11.0858 13.25 10.75 13.5858 10.75 14C10.75 14.4142 11.0858 14.75 11.5 14.75V13.25ZM4.75 10.5L4.75 15H6.25L6.25 10.5H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H11.5V18.25H9.5V19.75ZM6.25 10.5V9H4.75V10.5H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H11.5V4.25H9.5V5.75ZM5.5 11.25H11.5V9.75H5.5V11.25ZM12.25 10.5V5H10.75V10.5H12.25ZM10.75 10.5V14H12.25V10.5H10.75ZM11.5 19.75H15.5V18.25H11.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V14H18.75V15H20.25ZM12.25 19V14H10.75V19H12.25ZM11.5 5.75H15.5L15.5 4.25H11.5V5.75ZM15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9L20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25L15.5 5.75ZM18.75 9V14H20.25V9L18.75 9ZM19.5 13.25H11.5V14.75H19.5V13.25Z" 
            fill={color} />
        </svg>
    )
}
```

### src\components\common\ActionButton.jsx

```jsx
export default function ActionButton({ children, onClick, danger = false }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
        danger
          ? "border-red-500/20 text-red-300 hover:bg-red-500/10"
          : "border-[#35404e] text-slate-200 hover:bg-[#252f3c]"
      }`}
    >
      {children}
    </button>
  );
}
```

### src\components\common\Badge.jsx

```jsx
export default function Badge({ children }) {

    const statusStyles = {
      Pending: "border-amber-500/20 bg-amber-500/10 text-amber-300",
      Verified: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
      Rejected: "border-red-500/20 bg-red-500/10 text-red-300",
      Resolved: "border-sky-500/20 bg-sky-500/10 text-sky-300",
      Suggested: "border-violet-500/20 bg-violet-500/10 text-violet-300",
      Reviewed: "border-sky-500/20 bg-sky-500/10 text-sky-300",
      Claimed: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    };
    

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[children] ||
        "border-slate-700 bg-slate-800 text-slate-300"
        }`}
    >
      {children}
    </span>
  );
}
```

### src\components\common\ConfirmDialog.jsx

```jsx
import React from 'react'

const ConfirmDialog = () => {
  return (
    <div>ConfirmDialog</div>
  )
}

export default ConfirmDialog
```

### src\components\common\FoundItemCard.jsx

```jsx
import { useNavigate } from "react-router-dom";

const FoundItemCard = ({itemReport}) => {
  const navigate = useNavigate();

  const item = {
    // id: itemReport._id || "101",
    // image:
    //   "https://www.themessycorner.in/cdn/shop/files/13_9af1caee-0bef-49bc-9306-df24647436e9.jpg?v=1781002689&width=800",
    // name: itemReport.title || "wallet",
    // type: itemReport.type || "lost",
    // location: `${itemReport.location.building} - ${itemReport.location.area}` || "block - A",
    // date: itemReport.incidentDate || "oct 07, 2026",
    // statusColor: "bg-amber-600" ,
    // status: itemReport.status || "pending",
  };

  return (
    <article 
    onClick={()=>navigate('/claim-item')}
    className="flex min-w-0 items-center gap-3 rounded-xl border border-white/5 bg-[#171e27] p-3 transition-colors hover:bg-[#1b2430]">

      {/* Item image */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#222c38] sm:h-19 sm:w-19">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
      </div>

      {/* Item details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-100 sm:text-[15px]">
          {item.name}
        </h3>

        <p className="mt-1 truncate text-[13px] text-gray-400">
          {item.type} · {item.location}
        </p>

        <p className="mt-1 text-[13px] text-gray-400">
          {item.date}
        </p>
      </div>

      {/* Status */}
      <span
        className={`max-w-24 shrink-0 truncate rounded-full px-2 py-1.5 text-[10px] font-medium sm:px-3 sm:text-xs ${item.statusColor}`}
      >
        {item.status}
      </span>
    </article>
  );
};

export default FoundItemCard;

```

### src\components\common\Loader.jsx

```jsx
import React from 'react'

const Loader = () => {
  return (
    <div>Loader</div>
  )
}

export default Loader
```

### src\components\common\Modal.jsx

```jsx

```

### src\components\common\PendingReportCard.jsx

```jsx
import React from 'react'

const PendingReportCard = () => {

    const item =
    {
        id: "101",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200",
        name: "AirPods Case",
        type: "Found",
        location: "Canteen",
        date: "Oct 5, 2026",
        description: "White AirPods case found on table.",
    }


    return (
        <div className='bg-[#141B26] p-3 rounded-xl sm:p-3'>
            {/* Image and details */}
            <div className="flex items-start gap-4">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#252b32]">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold leading-6">
                            {item.name}
                        </h3>

                        <button
                            type="button"
                            aria-label={`More options for ${item.name}`}
                            className="shrink-0 rounded-lg text-xl leading-5 text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer"
                        >
                            ⋮
                        </button>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-300">
                        {item.type} · {item.location}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                        {item.date}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-400">
                        {item.description}
                    </p>
                </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-emerald-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 active:scale-[0.98]"
                >
                    Verify
                </button>

                <button
                    type="button"
                    className="cursor-pointer rounded-xl bg-red-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-red-500 active:scale-[0.98]"
                >
                    Reject
                </button>
            </div>

        </div>

    );


}

export default PendingReportCard
```

### src\components\common\SectionTitle.jsx

```jsx
import React from 'react'

const SectionTitle = ({ title, description, action }) => {
    return (
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
                <h2 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h2>
                <p className="mt-1 text-sm text-slate-400">{description}</p>
            </div>
            {action}
        </div>
    );
}

export default SectionTitle
```

### src\components\common\StatCard.jsx

```jsx
import {
    LayoutDashboard,
    FileCheck2,
    Users,
    ClipboardCheck,
    GitCompareArrows,
    PackageCheck,
    Bell,
    Settings,
    Search,
    Menu,
    X,
    ChevronDown,
    Upload,
    Plus,
    ArrowUpRight,
    ArrowDownRight,
    Check,
    XCircle,
    Eye,
    MoreHorizontal,
    Clock3,
    MapPin,
    CalendarDays,
    ShieldCheck,
    GraduationCap,
    FileWarning,
    Activity,
    Download,
    LogOut,
    Filter,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function StatCard({ title, value, change, icon: Icon, color }) {
    return (
        <div className="rounded-2xl border border-[#26303d] bg-[#111720] p-5 transition hover:border-[#3a485a]">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm text-slate-400">{title}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                        {value}
                    </h3>
                </div>
                <div className={`rounded-xl p-3 ${color}`}>
                    <Icon size={21} />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
                <ArrowUpRight size={14} className="text-emerald-400" />
                <span className="text-emerald-400">{change}</span>
                <span>from last month</span>
            </div>
        </div>
    );
}
```

### src\components\common\Toast.jsx

```jsx
import React from 'react'

const Toast = ({toast}) => {
    return (
        <div className="fixed right-4 top-20 z-[60] flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-xl border border-[#35404e] bg-[#151e29] px-4 py-3 text-sm text-white shadow-xl">
            <CheckCircle2 size={17} className="shrink-0 text-emerald-400" />
            {toast}
        </div>
    )
}

export default Toast
```

### src\components\layout\AuthLayout.jsx

```jsx
import {
  CampusIllustration,
  FindItLOGO
} from "../../assets/Icons"

export default function AuthLayout({ children, activePage = "Sign in", subtitle = "STUDENT PANEL" }) {
  const title = "Find-It"
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080C12] px-4 py-8 text-white sm:px-6">
      <section className={`grid w-full max-w-5xl overflow-hidden rounded-2xl border border-[#26374A] bg-[#10151D] shadow-2xl shadow-black/40 ${(activePage === "Sign in") ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} `}>

        {/* Illustration panel */}
        {activePage === "Sign in" &&
          <aside className="relative hidden min-h-150 items-center justify-center overflow-hidden border-r border-[#26374A] bg-[#0D1724] p-8 lg:flex">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative z-10 w-full text-center">
              <CampusIllustration />
              <h2 className="mt-5 text-xl font-semibold tracking-wide">
                Lost something on campus?
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400">
                Report lost items, discover found belongings, and help your
                campus community return them to their owners.
              </p>
            </div>
          </aside>
        }

        {/* Authentication panel */}
        <div className="relative flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-full ">
            {activePage === "Sign in" &&
              <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-950/20">
                <FindItLOGO />
              </div>

              <h1 className="text-xl font-bold tracking-wide">{title}</h1>
              <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-sky-400">
                {subtitle}
              </p>
            </div>
            }

            {children}
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            College Lost &amp; Found · Report. Find. Return.
          </p>
        </div>
      </section>
    </main>
  );
}

```

### src\components\layout\MainLayout.jsx

```jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";

import SideBar from "./SideBar";
import Navbar from "./Navbar"

function MainLayout() {
  const userInfo = { name: "User" };
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#080c12] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="pointer-events-none fixed -right-32 top-1/2 h-80 w-80 rounded-full bg-sky-500/[0.07] blur-[100px]" />

      <div className="relative z-10 flex min-h-screen">

        {/* Desktop sidebar */}
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/[0.07] bg-[#0b111b] lg:block">
          <SideBar
            open={true}
            onClose={() => { }}
            userInfo={userInfo}
            desktop
          />
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 lg:ml-64">
          <div className="mx-auto flex w-full max-w-350 flex-col gap-7 px-4 py-5 sm:gap-8 sm:px-6 sm:py-7 lg:gap-9 lg:px-10 lg:py-10 2xl:px-12">
            {burgerMenuActive &&
              <SideBar
                open={burgerMenuActive}
                onClose={() => setBurgerMenuActive(false)}
                userInfo={userInfo}
              />
            }
            <Navbar burgerMenuActive={burgerMenuActive} setBurgerMenuActive={setBurgerMenuActive} />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

```

### src\components\layout\Navbar.jsx

```jsx

import { Link } from "react-router-dom";
import { useState } from "react";

import {
  BurgerMenuIcon,
  NotificationIcon,
} from "../../assets/Icons";

const Navbar = ({ burgerMenuActive, setBurgerMenuActive }) => {

  const [activePage, setActivePage] = useState("Dashboard");
  const [notifi, setNotifi] = useState(true);
  return (
    <>
      {/* Header */}
      < header className="flex items-center justify-between" >

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setBurgerMenuActive(true)}
            type="button"
            aria-label="Open menu"
            aria-controls="app-sidebar"
            aria-expanded={burgerMenuActive}
            className="rounded-xl border border-white/8 bg-white/3 p-2.5 transition hover:bg-white/8 lg:hidden"
          >
            <BurgerMenuIcon size={24} />
          </button>

          <div className="min-w-0">
            <p className="text-xs text-slate-500 ">
              Admin / {activePage}
            </p>
            <h2 className="mt-1 truncate text-base font-semibold text-white">
              {activePage}
            </h2>
          </div>
        </div>

        {/* temporary navigation */}
        {/* <nav className="relative z-10 flex  max-w-7xl justify-end gap-4 px-6 py-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/pending-reports">Pending</Link>
        </nav> */}

        <div className="relative">
          {notifi && (
            <span className="absolute right-2 top-2 z-10 h-2.5 w-2.5 rounded-full border-2 border-[#0d121a] bg-rose-500" />
          )}

          <button
            type="button"
            aria-label="Notifications"
            onClick={() => setNotifi(!notifi)}
            className="rounded-xl border border-white/8 bg-white/3 p-2 transition hover:bg-white/8"
          >
            <NotificationIcon size={28} />
          </button>
        </div>
      </header >
    </>

  );
};

export default Navbar;

```

### src\components\layout\Notifications.jsx

```jsx

```

### src\components\layout\SideBar.jsx

```jsx
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Dashboard,
  File,
  Users,
  ClipboardCheck,
  GitCompareArrows,
  PackageCheck,
} from "../../assets/Icons"

const groups = [
  {
    title: "ADMIN",
    links: [
      { label: "Admin Dashboard", path: "/admin/dashboard", icon: <Dashboard color="#90a1b9"/> },
      { label: "Pending Reports", path: "/admin/pending-reports", icon: <File color="#90a1b9"/> },
      { label: "Student Management", path: "/admin/student-management", icon: <Users color="#90a1b9"/> },
      { label: "Claims Management", path: "/admin/claims-management", icon: <ClipboardCheck color="#90a1b9"/> },
      { label: "Automatic Matches", path: "/admin/automatic-matches", icon: <GitCompareArrows color="#90a1b9"/> },
      { label: "All Reports", path: "/admin/all", icon: <PackageCheck color="#90a1b9"/> },
    ]
  },
  {
    title: "WORKSPACE",
    links: [
      { label: "Dashboard", path: "/", icon: <Dashboard color="#90a1b9"/> },
      { label: "Browse Items", path: "/lost-items", icon: "⌕" },

    ],
  },
  {
    title: "MY ACTIVITY",
    links: [
      { label: "My Reports", path: "/my-reports", icon: "▤" },
      { label: "My Claims", path: "/my-claims", icon: "✓" },
      { label: "Report Lost Item", path: "/report/lost", icon: "↗" },
      { label: "Report Found Item", path: "/report/found", icon: "＋" },
    ],
  },
  {
    title: "ACCOUNT",
    links: [
      { label: "My Profile", path: "/profile", icon: "♙" },
      { label: "Settings", path: "/settings", icon: "⚙" },
    ],
  },
];

const SideBar = ({
  open,
  onClose,
  userInfo,
  desktop = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!open || desktop) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, desktop]);

  const isActive = (path) =>
    location.pathname === path ||
    (path !== "/dashboard" &&
      location.pathname.startsWith(`${path}/`));

  const initials = (userInfo?.name || "User")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <>
      {/* Mobile backdrop */}
      {!desktop && (
        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
            transition-opacity duration-300 lg:hidden
            ${open
              ? "visible opacity-100"
              : "invisible opacity-0"
            }`}
        />
      )}

      {/* Sidebar drawer / desktop sidebar */}
      <aside
        id="app-sidebar"
        aria-label="Main navigation"
        aria-hidden={!desktop && !open}
        className={
          desktop
            ? "flex h-full w-full flex-col bg-[#0b111b]"
            : `fixed inset-y-0 left-0 z-50 flex w-[min(300px,85vw)]
              flex-col border-r border-white/8 bg-[#0d1420]
              shadow-2xl shadow-black/40 transition-transform
              duration-300 ease-out lg:hidden
              ${open
              ? "translate-x-0"
              : "-translate-x-full"
            }`
        }
      >
        {/* Brand */}
        <div className="flex h-19 shrink-0 items-center justify-between border-b border-white/[0.07] px-5">
          <Link
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-xl text-sky-300">
              ◈
            </span>

            <span>
              <span className="block text-base font-bold text-white">
                Lost &amp; Found
              </span>
              <span className="block text-[11px] text-slate-500">
                Campus community
              </span>
            </span>
          </Link>

          {!desktop && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg px-3 py-2 text-xl text-slate-400 transition hover:bg-white/6 hover:text-white"
            >
              ×
            </button>
          )}
        </div>

        {/* User profile */}
        <div className="mx-4 mt-5 rounded-2xl border border-white/[0.07] bg-white/2.5 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 font-bold text-sky-300 ring-1 ring-sky-400/15">
              {initials}
            </div>


            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {userInfo?.name || "Campus Member"}
              </p>
              <p className="mt-1 text-xs text-emerald-400">
                ● Campus member
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 custom-scrollbar overflow-y-auto px-4 pb-5 pt-6">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={index ? "mt-7" : ""}
            >
              <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.18em] text-slate-500">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.links.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active
                        ? "bg-sky-400/10 text-sky-300"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {active && (
                        <span className="absolute bottom-2 left-0 top-2 w-0.75 rounded-r-full bg-sky-400" />
                      )}

                      <span className="flex h-6 w-6 items-center justify-center text-lg">
                        {item.icon}
                      </span>

                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-white/[0.07] p-4">
          <p className="mb-3 rounded-xl bg-sky-400/5 p-3 text-xs leading-5 text-slate-400">
            Help your campus community reunite people with their belongings.
          </p>

          <Link
            to="/login"
            onClick={onClose}
            className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-rose-300 transition hover:bg-rose-400/8"
          >
            <span className="text-lg">↪</span>
            Sign out
          </Link>

          <p className="mt-3 text-center text-[10px] text-slate-600">
            Lost &amp; Found · Campus Edition
          </p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

```

### src\context\AuthContext.jsx

```jsx

```

### src\index.css

```css
@import "tailwindcss";

@utility no-scrollbar {
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  
  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
}

@layer utilities {
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #475569 #0f172a;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #0f172a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 999px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
}
```

### src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### src\pages\admin\AdminDashboard.jsx

```jsx
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Badge from "../../components/common/Badge";
import StatCard from "../../components/common/StatCard";

import {
  LayoutDashboard,
  FileCheck2,
  Users,
  ClipboardCheck,
  GitCompareArrows,
  PackageCheck,
  Bell,
  Settings,
  Search,
  Menu,
  X,
  ChevronDown,
  Upload,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  XCircle,
  Eye,
  MoreHorizontal,
  Clock3,
  MapPin,
  CalendarDays,
  ShieldCheck,
  GraduationCap,
  FileWarning,
  Activity,
  Download,
  LogOut,
  Filter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialReports = [
  {
    id: "RPT-1024",
    item: "Black Wallet",
    type: "Found",
    category: "Accessories",
    location: "Central Library",
    date: "18 Oct 2026",
    owner: "Aman Sharma",
    status: "Pending",
  },
  {
    id: "RPT-1023",
    item: "HP Laptop",
    type: "Lost",
    category: "Electronics",
    location: "Computer Lab 2",
    date: "18 Oct 2026",
    owner: "Riya Verma",
    status: "Pending",
  },
  {
    id: "RPT-1022",
    item: "Blue Water Bottle",
    type: "Found",
    category: "Accessories",
    location: "Block B",
    date: "17 Oct 2026",
    owner: "Rahul Singh",
    status: "Verified",
  },
  {
    id: "RPT-1021",
    item: "Student ID Card",
    type: "Lost",
    category: "Documents",
    location: "Cafeteria",
    date: "17 Oct 2026",
    owner: "Priya Gupta",
    status: "Pending",
  },
];

const initialClaims = [
  {
    id: "CLM-208",
    item: "Black Wallet",
    claimant: "Aman Sharma",
    date: "18 Oct 2026",
    status: "Pending",
  },
  {
    id: "CLM-207",
    item: "Wireless Earbuds",
    claimant: "Karan Mehta",
    date: "17 Oct 2026",
    status: "Pending",
  },
  {
    id: "CLM-206",
    item: "HP Laptop",
    claimant: "Riya Verma",
    date: "16 Oct 2026",
    status: "Pending",
  },
];

const initialStudents = [
  {
    regNo: "SRM2025001",
    name: "Aman Sharma",
    department: "CSE",
    status: "Verified",
  },
  {
    regNo: "SRM2025002",
    name: "Riya Verma",
    department: "CSE",
    status: "Verified",
  },
  {
    regNo: "SRM2025003",
    name: "Rahul Singh",
    department: "ECE",
    status: "Pending",
  },
];

const initialMatches = [
  {
    id: "MAT-301",
    lost: "Black Wallet",
    found: "Black Wallet",
    score: 94,
    status: "Suggested",
  },
  {
    id: "MAT-302",
    lost: "HP Laptop",
    found: "Laptop found in Lab",
    score: 82,
    status: "Suggested",
  },
  {
    id: "MAT-303",
    lost: "Blue Bottle",
    found: "Blue Water Bottle",
    score: 71,
    status: "Reviewed",
  },
];

export default function AdminDashboard() {
const navigate = useNavigate()

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [reports, setReports] = useState(initialReports);
  const [students, setStudents] = useState(initialStudents);
  const [claims, setClaims] = useState(initialClaims);
  const [matches, setMatches] = useState(initialMatches);
  const [toast, setToast] = useState("hello world");

  function notify(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 3000);
  }
  function updateReport(id, status) {
    setReports((current) =>
      current.map((report) =>
        report.id === id ? { ...report, status } : report
      )
    );
    notify(`Report ${id} marked ${status.toLowerCase()}.`);
  }

  return (
    <>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm text-blue-400">
            Sunday, October 18, 2026
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Welcome back, Admin
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Here is what's happening with your university today.
          </p>
        </div>
        <button
          onClick={() => setActivePage("Pending Reports")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          <FileCheck2 size={17} />
          Review pending reports
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Reports"
          value={reports.length}
          change="+12%"
          icon={FileCheck2}
          color="bg-blue-500/10 text-blue-400"
        />
        <StatCard
          title="Pending Reports"
          value={reports.filter((report) => report.status === "Pending").length}
          change="Needs attention"
          icon={Clock3}
          color="bg-amber-500/10 text-amber-400"
        />
        <StatCard
          title="Pending Claims"
          value={claims.filter((claim) => claim.status === "Pending").length}
          change="Awaiting review"
          icon={ClipboardCheck}
          color="bg-violet-500/10 text-violet-400"
        />
        <StatCard
          title="Registered Students"
          value={students.length}
          change={`${initialStudents.filter((student) => student.status === "Pending").length} pending verification`} icon={Users}
          color="bg-emerald-500/10 text-emerald-400"
        />
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 2xl:grid-cols-[1.65fr_1fr]">
        <section className="min-w-0 rounded-2xl border border-[#26303d] bg-[#111720]">
          <div className="flex flex-col justify-between gap-3 border-b border-[#26303d] p-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-white">
                Reports awaiting verification
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Check new submissions before listing them.
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/pending-reports")}
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
            >
              View all <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-162.5 text-left text-sm">
              <thead className="bg-[#151d28] text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Item</th>
                  <th className="px-5 py-3 font-medium">Reporter</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26303d]">
                {reports
                  .filter((report) => report.status === "Pending")
                  .slice(0, 4)
                  .map((report) => (
                    <tr key={report.id} className="hover:bg-white/2">
                      <td className="px-5 py-4">
                        <p className="font-medium text-white">
                          {report.item}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {report.id} · {report.type}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-slate-300">
                        {report.owner}
                      </td>
                      <td className="px-5 py-4 text-slate-400">
                        {report.date}
                      </td>
                      <td className="px-5 py-4">
                        <Badge>{report.status}</Badge>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            title="Verify report"
                            onClick={() =>
                              updateReport(report.id, "Verified")
                            }
                            className="rounded-lg border border-emerald-500/20 p-2 text-emerald-400 hover:bg-emerald-500/10"
                          >
                            <Check size={15} />
                          </button>
                          <button
                            title="Reject report"
                            onClick={() =>
                              updateReport(report.id, "Rejected")
                            }
                            className="rounded-lg border border-red-500/20 p-2 text-red-400 hover:bg-red-500/10"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {reports.every((report) => report.status !== "Pending") && (
              <p className="p-8 text-center text-sm text-slate-500">
                All reports have been reviewed.
              </p>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-[#26303d] bg-[#111720]">
          <div className="border-b border-[#26303d] p-5">
            <h3 className="font-semibold text-white">
              Pending actions
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Tasks requiring administrator attention.
            </p>
          </div>
          <div className="space-y-3 p-4">
            {[
              {
                title: "Verify new reports",
                detail: `${reports.filter((r) => r.status === "Pending").length} reports awaiting approval`,
                icon: FileWarning,
                color: "text-amber-400 bg-amber-500/10",
                page: "Pending Reports",
              },
              {
                title: "Review ownership claims",
                detail: `${claims.filter((c) => c.status === "Pending").length} claims need review`,
                icon: ClipboardCheck,
                color: "text-violet-400 bg-violet-500/10",
                page: "Claims Management",
              },
              {
                title: "Verify student records",
                detail: `${students.filter((s) => s.status === "Pending").length} student records pending`,
                icon: Users,
                color: "text-blue-400 bg-blue-500/10",
                page: "Student Management",
              },
              {
                title: "Review suggested matches",
                detail: `${matches.length} automatic suggestions`, icon: GitCompareArrows,
                color: "text-emerald-400 bg-emerald-500/10",
                page: "Automatic Matches",
              },
            ].map((task) => {
              const Icon = task.icon;
              return (
                <button
                  key={task.title}
                  onClick={() => setActivePage(task.page)}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#26303d] p-3 text-left transition hover:border-[#425167] hover:bg-[#151d28]"
                >
                  <div className={`rounded-xl p-3 ${task.color}`}>
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">
                      {task.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {task.detail}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-500"
                  />
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">
                Automatic matching
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Potential lost and found item pairs.
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/automatic-matches")}
              className="text-sm text-blue-400"
            >
              View all
            </button>
          </div>
          <div className="space-y-4">
            {matches.slice(0, 3).map((match) => (
              <div
                key={match.id}
                className="flex items-center gap-3"
              >
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <GitCompareArrows size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {match.lost}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    Possible match: {match.found}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-emerald-400">
                    {match.score}%
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Match score
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">
                Recent activity
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Latest actions in the system.
              </p>
            </div>
            <Activity size={19} className="text-slate-500" />
          </div>
          <div className="space-y-5">
            {[
              {
                title: "New report submitted",
                detail: "Black Wallet · Central Library",
                time: "Today",
                color: "bg-blue-400",
              },
              {
                title: "New ownership claim",
                detail: "Claim CLM-208",
                time: "Today",
                color: "bg-violet-400",
              },
              {
                title: "Potential match generated",
                detail: "Match MAT-301 · 94% score",
                time: "Today",
                color: "bg-emerald-400",
              },
            ].map((activity) => (
              <div key={activity.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 rounded-full ${activity.color}`}
                  />
                  <span className="mt-2 h-5 w-px bg-[#303b4a]" />
                </div>
                <div className="flex-1 pb-1">
                  <p className="text-sm font-medium text-white">
                    {activity.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs text-slate-500">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

```

### src\pages\admin\AutomaticMatches.jsx

```jsx
import { useState } from "react"

import SectionTitle from "../../components/common/SectionTitle";
import ActionButton from "../../components/common/ActionButton";
import Badge from "../../components/common/Badge";

import {
    LayoutDashboard,
    FileCheck2,
    Users,
    ClipboardCheck,
    GitCompareArrows,
    PackageCheck,
    Bell,
    Settings,
    Search,
    Menu,
    X,
    ChevronDown,
    Upload,
    Plus,
    ArrowUpRight,
    ArrowDownRight,
    Check,
    XCircle,
    Eye,
    MoreHorizontal,
    Clock3,
    MapPin,
    CalendarDays,
    ShieldCheck,
    GraduationCap,
    FileWarning,
    Activity,
    Download,
    LogOut,
    Filter,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

const initialMatches = [
    {
        id: "MAT-301",
        lost: "Black Wallet",
        found: "Black Wallet",
        score: 94,
        status: "Suggested",
    },
    {
        id: "MAT-302",
        lost: "HP Laptop",
        found: "Laptop found in Lab",
        score: 82,
        status: "Suggested",
    },
    {
        id: "MAT-303",
        lost: "Blue Bottle",
        found: "Blue Water Bottle",
        score: 71,
        status: "Reviewed",
    },
];


const AutomaticMatches = () => {
    const [matches, setMatches] = useState(initialMatches);
    const [search, setSearch] = useState("");


    const visibleMatches = matches.filter((match) =>
        [match.id, match.lost, match.found]
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <SectionTitle
                title="Automatic Matches"
                description="Inspect potential matches generated by the matching algorithm."
            />
            <div className="mb-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-blue-200">
                <div className="flex gap-3">
                    <AlertCircle size={19} className="shrink-0" />
                    <p>
                        Match scores indicate similarity, not proof of ownership.
                        Verify ownership through the claims workflow.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {visibleMatches.map((match) => (
                    <div
                        key={match.id}
                        className="rounded-2xl border border-[#26303d] bg-[#111720] p-5"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs text-slate-500">{match.id}</p>
                                <h3 className="mt-2 font-semibold text-white">
                                    {match.lost} ↔ {match.found}
                                </h3>
                            </div>
                            <Badge>{match.status}</Badge>
                        </div>
                        <div className="mt-5">
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="text-slate-400">Similarity score</span>
                                <span className="font-semibold text-emerald-400">
                                    {match.score}%
                                </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-[#26303d]">
                                <div
                                    className="h-full rounded-full bg-emerald-400"
                                    style={{ width: `${match.score}%` }}
                                />
                            </div>
                        </div>
                        {match.status === "Suggested" && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                <ActionButton
                                    onClick={() => updateMatch(match.id, "Reviewed")}
                                >
                                    Mark reviewed
                                </ActionButton>
                                <ActionButton
                                    danger
                                    onClick={() => updateMatch(match.id, "Rejected")}
                                >
                                    Reject match
                                </ActionButton>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default AutomaticMatches
```

### src\pages\admin\ClaimManagement.jsx

```jsx
import React from 'react'

const ClaimManagement = () => {
    return (
        <>
            <SectionTitle
                title="Claims Management"
                description="Review ownership requests for found items."
            />
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard
                    title="Total Claims"
                    value={claims.length}
                    change="All requests"
                    icon={ClipboardCheck}
                    color="bg-blue-500/10 text-blue-400"
                />
                <StatCard
                    title="Pending Claims"
                    value={pendingClaims}
                    change="Awaiting review"
                    icon={Clock3}
                    color="bg-amber-500/10 text-amber-400"
                />
                <StatCard
                    title="Approved Claims"
                    value={claims.filter((c) => c.status === "Approved").length}
                    change="Accepted requests"
                    icon={CheckCircle2}
                    color="bg-emerald-500/10 text-emerald-400"
                />
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#26303d] bg-[#111720]">
                <table className="w-full min-w-[650px] text-left text-sm">
                    <thead className="bg-[#151d28] text-xs text-slate-500">
                        <tr>
                            <th className="px-5 py-4 font-medium">Claim ID</th>
                            <th className="px-5 py-4 font-medium">Item</th>
                            <th className="px-5 py-4 font-medium">Claimant</th>
                            <th className="px-5 py-4 font-medium">Date</th>
                            <th className="px-5 py-4 font-medium">Status</th>
                            <th className="px-5 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#26303d]">
                        {visibleClaims.map((claim) => (
                            <tr key={claim.id}>
                                <td className="px-5 py-4 text-slate-400">{claim.id}</td>
                                <td className="px-5 py-4 font-medium text-white">
                                    {claim.item}
                                </td>
                                <td className="px-5 py-4 text-slate-300">
                                    {claim.claimant}
                                </td>
                                <td className="px-5 py-4 text-slate-400">
                                    {claim.date}
                                </td>
                                <td className="px-5 py-4">
                                    <Badge>
                                        {claim.status === "Approved"
                                            ? "Verified"
                                            : claim.status === "Rejected"
                                                ? "Rejected"
                                                : claim.status}
                                    </Badge>
                                </td>
                                <td className="px-5 py-4">
                                    {claim.status === "Pending" && (
                                        <div className="flex gap-2">
                                            <ActionButton
                                                onClick={() =>
                                                    updateClaim(claim.id, "Approved")
                                                }
                                            >
                                                Approve
                                            </ActionButton>
                                            <ActionButton
                                                danger
                                                onClick={() =>
                                                    updateClaim(claim.id, "Rejected")
                                                }
                                            >
                                                Reject
                                            </ActionButton>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ClaimManagement
```

### src\pages\admin\Reports.jsx

```jsx
import React from 'react'

const Reports = ({ activePage }) => {

    function SectionTitle({ title, description, action }) {
        return (
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        {title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">{description}</p>
                </div>
                {action}
            </div>
        );
    }
    return (
        <>
            <SectionTitle
                title={activePage}
                description="Review and manage reports submitted by your university's users."
                action={
                    <button
                        onClick={() => notify("Connect your report export API.")}
                        className="flex items-center justify-center gap-2 rounded-xl border border-[#35404e] px-4 py-3 text-sm hover:bg-[#19222e]"
                    >
                        <Download size={16} /> Export
                    </button>
                }
            />
            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#26303d] bg-[#111720] p-4">
                    <p className="text-sm text-slate-400">Total reports</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                        {reports.length}
                    </p>
                </div>
                <div className="rounded-xl border border-[#26303d] bg-[#111720] p-4">
                    <p className="text-sm text-slate-400">Pending review</p>
                    <p className="mt-2 text-2xl font-semibold text-amber-400">
                        {pendingReports}
                    </p>
                </div>
                <div className="rounded-xl border border-[#26303d] bg-[#111720] p-4">
                    <p className="text-sm text-slate-400">Verified</p>
                    <p className="mt-2 text-2xl font-semibold text-emerald-400">
                        {reports.filter((r) => r.status === "Verified").length}
                    </p>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#26303d] bg-[#111720]">
                <div className="flex flex-col gap-3 border-b border-[#26303d] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Filter size={16} /> Filter by status
                    </div>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="rounded-lg border border-[#35404e] bg-[#151d28] px-3 py-2 text-sm text-white outline-none"
                    >
                        {filteredOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] text-left text-sm">
                        <thead className="bg-[#151d28] text-xs text-slate-500">
                            <tr>
                                <th className="px-5 py-4 font-medium">Report</th>
                                <th className="px-5 py-4 font-medium">Location</th>
                                <th className="px-5 py-4 font-medium">Reporter</th>
                                <th className="px-5 py-4 font-medium">Date</th>
                                <th className="px-5 py-4 font-medium">Status</th>
                                <th className="px-5 py-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#26303d]">
                            {visibleReports.map((report) => (
                                <tr key={report.id} className="hover:bg-white/[0.02]">
                                    <td className="px-5 py-4">
                                        <p className="font-medium text-white">
                                            {report.item}
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500">
                                            {report.id} · {report.type} · {report.category}
                                        </p>
                                    </td>
                                    <td className="px-5 py-4 text-slate-400">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={14} /> {report.location}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-slate-300">
                                        {report.owner}
                                    </td>
                                    <td className="px-5 py-4 text-slate-400">
                                        {report.date}
                                    </td>
                                    <td className="px-5 py-4">
                                        <Badge>{report.status}</Badge>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-2">
                                            {report.status === "Pending" ? (
                                                <>
                                                    <ActionButton
                                                        onClick={() =>
                                                            updateReport(report.id, "Verified")
                                                        }
                                                    >
                                                        Verify
                                                    </ActionButton>
                                                    <ActionButton
                                                        danger
                                                        onClick={() =>
                                                            updateReport(report.id, "Rejected")
                                                        }
                                                    >
                                                        Reject
                                                    </ActionButton>
                                                </>
                                            ) : (
                                                <ActionButton
                                                    onClick={() =>
                                                        updateReport(report.id, "Resolved")
                                                    }
                                                >
                                                    Resolve
                                                </ActionButton>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {visibleReports.length === 0 && (
                        <p className="p-10 text-center text-sm text-slate-500">
                            No reports match your search or filter.
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Reports
```

### src\pages\admin\StudentManagement.jsx

```jsx
import { useRef } from "react";

const StudentManagement = () => {
    const fileRef = useRef(null);

    function handleImport(event) {
        const file = event.target.files?.[0];
        if (!file) return;

        // UI demonstration only. Parse and validate the file on the backend
        // before inserting student records into MongoDB.
        notify(`${file.name} selected. Connect your import API to continue.`);
        event.target.value = "";
    }
    return (
        <>
            <SectionTitle
                title="Student Management"
                description="Import existing university students and manage their verification status."
                action={
                    <button
                        onClick={() => fileRef.current?.click()}
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-400"
                    >
                        <Upload size={17} /> Import Students
                    </button>
                }
            />
            <input
                ref={fileRef}
                type="file"
                accept=".csv,.json"
                className="hidden"
                onChange={handleImport}
            />
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard
                    title="Imported Students"
                    value={students.length}
                    change="University records"
                    icon={Users}
                    color="bg-blue-500/10 text-blue-400"
                />
                <StatCard
                    title="Verified Students"
                    value={students.filter((s) => s.status === "Verified").length}
                    change="Approved accounts"
                    icon={ShieldCheck}
                    color="bg-emerald-500/10 text-emerald-400"
                />
                <StatCard
                    title="Pending Verification"
                    value={pendingStudents}
                    change="Requires review"
                    icon={Clock3}
                    color="bg-amber-500/10 text-amber-400"
                />
            </div>

            <div className="mb-5 rounded-2xl border border-dashed border-[#35404e] bg-[#111720] p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                        <Upload size={23} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-white">
                            Import university student records
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Upload a CSV or JSON file. Preview, validate, and resolve
                            duplicate registration numbers before importing.
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                            Suggested CSV columns: registrationNumber, name, email,
                            department.
                        </p>
                    </div>
                    <button
                        onClick={() =>
                            notify("Add a template download endpoint to enable this.")
                        }
                        className="flex items-center justify-center gap-2 rounded-lg border border-[#35404e] px-3 py-2 text-sm hover:bg-[#19222e]"
                    >
                        <Download size={15} /> Template
                    </button>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#26303d] bg-[#111720]">
                <div className="border-b border-[#26303d] p-5">
                    <h3 className="font-semibold text-white">Student records</h3>
                    <p className="mt-1 text-xs text-slate-500">
                        {students.length} records in this demonstration.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[650px] text-left text-sm">
                        <thead className="bg-[#151d28] text-xs text-slate-500">
                            <tr>
                                <th className="px-5 py-4 font-medium">Student</th>
                                <th className="px-5 py-4 font-medium">
                                    Registration number
                                </th>
                                <th className="px-5 py-4 font-medium">Department</th>
                                <th className="px-5 py-4 font-medium">Status</th>
                                <th className="px-5 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#26303d]">
                            {visibleStudents.map((student) => (
                                <tr key={student.regNo}>
                                    <td className="px-5 py-4 font-medium text-white">
                                        {student.name}
                                    </td>
                                    <td className="px-5 py-4 text-slate-400">
                                        {student.regNo}
                                    </td>
                                    <td className="px-5 py-4 text-slate-300">
                                        {student.department}
                                    </td>
                                    <td className="px-5 py-4">
                                        <Badge>{student.status}</Badge>
                                    </td>
                                    <td className="px-5 py-4">
                                        {student.status === "Pending" ? (
                                            <ActionButton
                                                onClick={() =>
                                                    updateStudent(student.regNo, "Verified")
                                                }
                                            >
                                                Verify
                                            </ActionButton>
                                        ) : (
                                            <ActionButton
                                                danger
                                                onClick={() =>
                                                    updateStudent(student.regNo, "Rejected")
                                                }
                                            >
                                                Revoke approval
                                            </ActionButton>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StudentManagement
```

### src\pages\auth\Login.jsx

```jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { EyeIcon } from "../../assets/Icons";

const API_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

const inputClass =
  "w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [collegeCode, setCollegeCode] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleRoleChange(newRole) {
    setRole(newRole);
    setIdentifier("");
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setError("");

    const normalizedCollegeCode = collegeCode.trim().toUpperCase();
    const normalizedIdentifier =
      role === "admin"
        ? identifier.trim().toLowerCase()
        : identifier.trim().toUpperCase();

    if (!normalizedCollegeCode || !normalizedIdentifier || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    // Match the exact fields expected by your backend.
    const payload = {
      role,
      collegeCode: normalizedCollegeCode,
      password,
      ...(role === "admin"
        ? { email: normalizedIdentifier }
        : { registrationNumber: normalizedIdentifier }),
    };

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle non-JSON responses without crashing.
      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          response.ok
            ? "The server returned an invalid response."
            : "Unable to sign in. Please try again later."
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to sign in.");
      }

      const { token, user } = data;

      if (!token || !user || !user.id || !user.role) {
        throw new Error("The server returned incomplete login information.");
      }

      if (user.role !== role) {
        throw new Error("The returned account role does not match your selection.");
      }

      // Select persistent or tab-only storage.
      const storage = rememberMe ? localStorage : sessionStorage;
      const otherStorage = rememberMe ? sessionStorage : localStorage;

      // Prevent an old login from taking precedence.
      otherStorage.removeItem("token");
      otherStorage.removeItem("user");

      storage.setItem("token", token);
      storage.setItem("user", JSON.stringify(user));

      // Navigate according to the authenticated role.
      navigate(role === "admin" ? "/admin/dashboard" : "/user", {
        replace: true,
      });
    } catch (err) {
      if (err instanceof TypeError) {
        setError("Cannot connect to the server. Check your connection and try again.");
      } else {
        setError(err.message || "Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      subtitle={role === "admin" ? "ADMIN PANEL" : "STUDENT PANEL"}
      activePage="Sign in"
    >
      {/* Role selector */}
      <div className="mb-6 grid grid-cols-2 rounded-lg bg-[#1b222c] p-1">
        {["student", "admin"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handleRoleChange(item)}
            aria-pressed={role === item}
            className={`rounded-md py-2.5 text-sm font-medium capitalize transition ${
              role === item
                ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* College code */}
        <div>
          <label
            htmlFor="collegeCode"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            College code
          </label>

          <input
            id="collegeCode"
            name="collegeCode"
            type="text"
            value={collegeCode}
            onChange={(e) => setCollegeCode(e.target.value)}
            placeholder="Enter college code"
            autoComplete="organization"
            maxLength={50}
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* Role-specific identifier */}
        <div>
          <label
            htmlFor="identifier"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            {role === "admin" ? "Official email address" : "Registration number"}
          </label>

          <input
            id="identifier"
            name={role === "admin" ? "email" : "registrationNumber"}
            type={role === "admin" ? "email" : "text"}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={
              role === "admin"
                ? "admin@college.edu"
                : "Enter registration number"
            }
            autoComplete={role === "admin" ? "username" : "off"}
            maxLength={254}
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              disabled={loading}
              className={`${inputClass} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400 hover:text-white"
            >
              <EyeIcon visible={showPassword} />
            </button>
          </div>
        </div>

        {/* Remember me and password recovery */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <label className="flex cursor-pointer items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sky-400 transition hover:text-sky-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Backend validation and network errors */}
        {error && (
          <p
            role="alert"
            aria-live="polite"
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-gray-400">
        Need access?{" "}
        <Link
          to="/register"
          className="font-medium text-sky-400 hover:text-sky-300"
        >
          Register your university
        </Link>
      </p>
    </AuthLayout>
  );
}

```

### src\pages\auth\Register.jsx

```jsx
import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import { EyeIcon } from "../../assets/Icons";

const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Update this path to match your Express route.
const REGISTER_URL = `${API_URL}/api/auth/register-admin`;

const initialForm = {
  collegeName: "",
  collegeEmail: "",
  collegePhone: "",
  collegeAddress: "",
  collegeWebsite: "",
  adminName: "",
  adminEmail: "",
  password: "",
  confirmPassword: "",
};

const inputClass =
  "w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const labelClass = "mb-2 block text-sm font-medium text-gray-300";

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        maxLength={type === "password" ? undefined : 200}
        className={inputClass}
      />
    </div>
  );
}

export default function CollegeAdminRegister() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collegeName: form.collegeName.trim(),
          collegeEmail: form.collegeEmail.trim(),
          collegePhone: form.collegePhone.trim(),
          collegeAddress: form.collegeAddress.trim(),
          collegeWebsite: form.collegeWebsite.trim(),
          adminName: form.adminName.trim(),
          adminEmail: form.adminEmail.trim(),
          password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
        );
      }

      setSuccess(result.data);
      setForm(initialForm);
    } catch (err) {
      setError(
        err.message ||
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080c12] px-4 py-10 text-white">
        <div className="w-full max-w-lg rounded-2xl border border-[#283545] bg-[#0e141e] p-6 shadow-2xl sm:p-9">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="m5 12 4 4L19 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold">
            Registration successful!
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your college and administrator account have been created.
            Save the college code below. Students will need it to log in.
          </p>

          <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Your college code
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="break-all font-mono text-xl font-bold text-blue-300">
                {success.college.code}
              </p>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(success.college.code)
                }
                className="shrink-0 rounded-lg border border-[#354456] px-3 py-2 text-sm hover:bg-white/5"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-2 text-sm text-gray-400">
            <p>
              College:{" "}
              <span className="text-white">{success.college.name}</span>
            </p>
            <p>
              Admin:{" "}
              <span className="text-white">{success.admin.email}</span>
            </p>
          </div>

          <Link
            to="/login"
            className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            Continue to Login
          </Link>

          <p className="mt-4 text-center text-xs text-gray-500">
            Keep your college code safe and share it only with authorized
            members of your college.
          </p>
        </div>
      </main>
    );
  }

  return (
    <AuthLayout subtitle={'ADMIN PANEL'} activePage={"Register"}>

      <div className="relative w-full ">

        <form
          onSubmit={handleSubmit}
          className=""
        >
          {/* College details */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                01
              </div>

              <div>
                <h2 className="font-semibold">College information</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Details used to identify your institution
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="College name"
                name="collegeName"
                value={form.collegeName}
                onChange={handleChange}
                placeholder="e.g. SRM University, Delhi-NCR"
                required
              />

              <FormField
                label="Official college email"
                name="collegeEmail"
                type="email"
                value={form.collegeEmail}
                onChange={handleChange}
                placeholder="contact@college.edu"
                autoComplete="organization"
                required
              />

              <FormField
                label="College phone"
                name="collegePhone"
                type="tel"
                value={form.collegePhone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />

              <FormField
                label="College website"
                name="collegeWebsite"
                type="url"
                value={form.collegeWebsite}
                onChange={handleChange}
                placeholder="https://college.edu"
              />

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="collegeAddress">
                  College address
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <textarea
                  id="collegeAddress"
                  name="collegeAddress"
                  value={form.collegeAddress}
                  onChange={handleChange}
                  placeholder="Enter the complete college address"
                  required
                  rows={3}
                  maxLength={500}
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>
          </section>

          <div className="border-y my-6 border-[#27313e]" />

          {/* Admin details */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400">
                02
              </div>

              <div>
                <h2 className="font-semibold">Administrator account</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Create the account used to manage your college
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="Admin full name"
                name="adminName"
                value={form.adminName}
                onChange={handleChange}
                placeholder="Enter full name"
                autoComplete="name"
                required
              />

              <FormField
                label="Official admin email"
                name="adminEmail"
                type="email"
                value={form.adminEmail}
                onChange={handleChange}
                placeholder="admin@college.edu"
                autoComplete="email"
                required
              />

              <div>
                <label className={labelClass} htmlFor="password">
                  Password
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <label className={labelClass} htmlFor="confirmPassword">
                  Confirm password
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400 hover:text-white"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>

            </div>
          </section>

          {/* Error message */}
          {error && (
            <div
              role="alert"
              className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Registering college...
              </>
            ) : (
              "Register College & Admin"
            )}
          </button>

          <p className="mt-5 text-center text-sm text-gray-400">
            Already registered?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>


        </form>


      </div>

    </AuthLayout>
  );
}

```

### src\pages\user\Dashboard.jsx

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BurgerMenuIcon,
  NotificationIcon,
  SearchIcon,
  LostReportIcon,
  FoundReportIcon,
  ReportDataIcon,
} from "../../assets/Icons";

import FoundItemCard from "../../components/common/FoundItemCard";

const stats = [
  { label: "My Reports", value: 1, color: "bg-sky-400", icon: "reports" },
  { label: "Possible Matches", value: 0, color: "bg-violet-400", icon: "matches" },
  { label: "My Claims", value: 0, color: "bg-amber-400", icon: "claims" },
  { label: "Returned Items", value: 0, color: "bg-emerald-400", icon: "returned" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const [userInfo] = useState({ name: "User" });
  const [search, setSearch] = useState("");


  return (
    <>
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-[#172537] via-[#111c2a] to-[#11151e] p-5 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-sky-400/8 blur-3xl" />

        <div className="relative">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Lost & Found
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {userInfo.name || "User"}
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Keep track of your belongings and help others find theirs.
          </p>
        </div>
      </section>

      {/* Search */}
      <section>
        <label
          htmlFor="item-search"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Find an item
        </label>

        <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#141b26] px-4 transition focus-within:border-sky-400/60 focus-within:ring-2 focus-within:ring-sky-400/10">
          <SearchIcon size={20} colour="#94a3b8" />

          <input
            id="item-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by item name..."
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </section>

      {/* Report actions */}
      <section>
        <div className="mb-3">
          <h2 className="text-base font-semibold sm:text-lg">
            What would you like to do?
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Create a report to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
          <button
            type="button"
            onClick={() => navigate("/report/lost")}
            className="group flex min-h-24 items-center gap-4 rounded-2xl border border-rose-400/15 bg-rose-500/8 p-4 text-left transition hover:border-rose-400/35 hover:bg-rose-500/13 sm:min-h-28 sm:p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 transition group-hover:bg-rose-500/25">
              <LostReportIcon size={28} />
            </span>

            <span className="min-w-0">
              <span className="block font-semibold text-rose-100">
                Report Lost Item
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                Tell us what you lost
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/report/found")}
            className="group flex min-h-24 items-center gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.07] p-4 text-left transition hover:border-emerald-400/35 hover:bg-emerald-500/12 sm:min-h-28 sm:p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition group-hover:bg-emerald-500/25">
              <FoundReportIcon size={28} />
            </span>

            <span className="min-w-0">
              <span className="block font-semibold text-emerald-100">
                Report Found Item
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                Help return an item
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold sm:text-lg">
            Your overview
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            A quick look at your activity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-white/[0.07] bg-[#141b26] p-4 transition hover:border-white/13 sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="min-w-0 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </span>
                <span className={`h-2 w-2 shrink-0 rounded-full ${stat.color}`} />
              </div>

              <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section className="min-w-0">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold sm:text-lg">
              Recent activity
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Keep track of recently reported items.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/lost-items")}
            className="shrink-0 rounded-lg px-2 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-400/8 hover:text-sky-200"
          >
            View all
          </button>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          {[1, 2].map((id) => (
            <div key={id} className="min-w-0">
              <FoundItemCard />
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Dashboard;

```

### src\pages\user\LostItems.jsx

```jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowIcon } from '../../assets/Icons'
import FoundItemCard from '../../components/common/FoundItemCard'


const LostItems = () => {
  const navigate = useNavigate();

  const [foundReports, setfoundReports] = useState([])
  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:3000/lost-items");
      const data = await response.json()
      console.log(data)
      setfoundReports(data);
    })()
  }, [])


  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-1 mb-5 text-sm text-gray-400 hover:text-white"
      >
        <ArrowIcon />
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold">
        All lost Items
      </h1>

      <div className="flex min-w-0 flex-col gap-3 mt-3">
        {foundReports.map((itemReport) => (
          <div key={itemReport._id} className="min-w-0">
            <FoundItemCard itemReport={itemReport}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LostItems
```

### src\pages\user\ReportItem.jsx

```jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ArrowIcon } from "../../assets/Icons";

const ReportItem = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const isLost = type === "lost";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //send formData to your Express backend.
    console.log({ type, ...formData });
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-1  mb-5 text-sm text-gray-400 hover:text-white"
      >
        <ArrowIcon /> 
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold">
        {isLost ? "Report Lost Item" : "Report Found Item"}
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Provide the details to help identify the item.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

        <div>
          <label className="mb-2 block text-sm">Item name</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Wallet, ID card"
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Description</label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the item and identifying details"
            rows={3}
            className="w-full resize-y rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            {isLost ? "Last seen location" : "Found location"}
          </label>
          <input
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. College library"
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Date</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Item image (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-400 file:mr-3 file:rounded-md file:border-0 file:bg-[#263241] file:p-2 file:text-white"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-sky-600 p-3 font-medium transition hover:bg-sky-500"
        >
          Submit Report
        </button>

      </form>
    </div>
  );
};

export default ReportItem;

```

### src\routes\AppRoutes.jsx

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register"
import Dashboard from "../pages/user/Dashboard"
import ReportItem from "../pages/user/ReportItem";
import LostItems from "../pages/user/LostItems";
import ClaimItem from "../services/ClaimItem";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Reports from "../pages/admin/Reports";
import AutomaticMatches from "../pages/admin/AutomaticMatches";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        <Route element={<MainLayout />}>

          {/* Any logged-in user */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/report/:type"
              element={<ReportItem />}
            />

            <Route
              path="/lost-items"
              element={<LostItems />}
            />

            <Route
              path="/claim-item"
              element={<ClaimItem />}
            />

          </Route>

          {/* Admin only */}
          <Route element={<ProtectedRoute role="admin" />}>
            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/pending-report"
              element={<Reports activePage={""}/>}
            />

            <Route
              path="/admin/automatic-matches"
              element={<AutomaticMatches />}
            />


          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
```

### src\routes\ProtectedRoute.jsx

```jsx

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ role }) {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (role && user.role !== role) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

```

### vite.config.js

```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})

```
