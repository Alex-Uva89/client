# CAMBUSA

A modern web application built with Nuxt.js and Pinia for state management.

## Project Structure

### Directory Tree
<pre>
client/
├── assets/
│   ├── font/
│   ├── icons/
│   ├── images/
│   └── styles/
├── components/
├── layouts/
│   ├── default/
│   └── home/
├── pages/
│   ├── cart/
│   ├── checkout/
│   ├── confirm/
│   ├── home/
│   ├── login/
│   ├── menu/
│   └── product/
├── plugins/
│   └── pinia.js
├── public/
├── server/
├── services/
│   └── api
│       ├── categories.js
│       └── drinks.js
├── static/
├── store/
│   ├── cartStore/
│   ├── productStore/
│   └── categoryStore/
├── .env.example
├── .gitignore
├── nuxt.config.js
├── Procfile
├── README.md
└── package.json
</pre>

## Directory Structure Explanation

### Core Directories

#### Assets
Contains uncompiled assets:
* **font/** - Typography files
* **icons/** - Icon assets
* **images/** - Image resources
* **styles/** - Style files

#### Components
* Vue components used throughout the application

#### Layouts
* **default/** - Default layout template
* **home/** - Home-specific layout

#### Pages
Application views and routes:
* **cart/** - Shopping cart functionality
* **checkout/** - Checkout process
* **confirm/** - Order confirmation
* **home/** - Homepage
* **login/** - Authentication
* **menu/** - Menu display
* **product/** - Product details

### State Management and Configuration

#### Plugins
* Plugin configurations including Pinia setup

#### Store
Pinia stores for state management:
* **cartStore/** - Shopping cart state
* **productStore/** - Product data state
* **categoryStore/** - Category management

### Static Assets and Server

* **public/** - Public assets
* **static/** - Static icon resources
* **server/** - Server-side functionality (currently unused)

## Getting Started

1. Install dependencies:
   ```bash
   npm install

2. Run development server:
   ```bash
   npm run dev

3. Build for production:
   ```bash
   npm run build

Copy .env.example to .env and configure environment variables.

