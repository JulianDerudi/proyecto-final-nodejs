# Proyecto Final – Backend Node.js con Express, Firebase y JWT

Este repositorio contiene el **proyecto final del curso de Backend / Node.js**, cuyo objetivo fue desarrollar una **API REST** aplicando buenas prácticas de arquitectura, seguridad y manejo de errores.

La aplicación permite gestionar **productos** almacenados en **Firebase Firestore** y cuenta con un sistema de **autenticación mediante JWT** para proteger rutas sensibles.

---

## 🎯 Objetivo del Proyecto

Construir un backend completo que contemple:

- Arquitectura por capas (rutas, controladores, servicios y modelos)
- Consumo de base de datos en la nube (Firebase Firestore)
- Autenticación con JWT
- Manejo correcto de errores HTTP
- Configuración de entorno y middlewares globales

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express**
- **Firebase / Firestore**
- **JSON Web Token (JWT)**
- **dotenv**
- **cors**
- **body-parser**
- **ES Modules**

---

## 📦 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
$ git clone https://github.com/JulianDerudi/proyecto-final-nodejs.git
$ cd proyecto-final-nodejs 
```

### 2️⃣ Instalar dependencias
```bash
$ npm install
```


### 3️⃣ Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto con las siguientes variables:

``` bash
PORT=3000
JWT_SECRET=tu_secreto_jwt

FIREBASE_PROJECT_ID=xxxx
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=xxxx@xxxx.iam.gserviceaccount.com
```

⚠️ El archivo .env no debe subirse al repositorio.


### ▶️ Ejecución del proyecto
``` bash
$ npm run start
```

El servidor quedará corriendo en:

``` bash
http://localhost:3000
```


### 🧱 Arquitectura del Proyecto
src/
├── routes/
│   ├── products.routes.js
│   └── auth.routes.js
├── controllers/
│   ├── products.controller.js
│   └── auth.controller.js
├── services/
│   ├── products.service.js
│   └── auth.service.js
├── models/
│   └── product.model.js
├── middlewares/
│   └── auth.middleware.js
├── config/
│   └── firebase.js
└── index.js


### 🔐 Autenticación

La aplicación utiliza JWT (Bearer Token) para proteger las rutas de productos.

#### Login

POST /auth/login

#### 📥 Body:

{
  "email": "usuario@test.com",
  "password": "123456"
}

#### 📤 Respuesta:

{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


### 📡 Endpoints Disponibles

#### 📦 Productos

| Método | Endpoint             | Descripción                 | Protección |
| ------ | -------------------- | --------------------------- | ---------- |
| GET    | /api/products        | Obtener todos los productos | 🔒         |
| GET    | /api/products/:id    | Obtener producto por ID     | 🔒         |
| POST   | /api/products/create | Crear nuevo producto        | 🔒         |
| DELETE | /api/products/:id    | Eliminar producto           | 🔒         |

#### 🔒 Requiere token JWT en el header:

Authorization: Bearer <token>


### ❌ Manejo de Errores

La API contempla los siguientes códigos de estado:

400 – Error en la solicitud

401 – Error de autenticación

403 – Acceso no autorizado

404 – Ruta no encontrada

500 – Error interno del servidor o fallo de servicios externos


### ☁️ Persistencia de Datos

Los productos se almacenan en Firebase Firestore, utilizando una colección dedicada para:

* Mantener estructura de datos consistente

* Permitir escalabilidad

* Simular un entorno real de backend productivo


### 📚 Aprendizajes Clave

* Diseño de APIs REST con Express

* Separación de responsabilidades

* Autenticación segura con JWT

* Integración con Firebase

* Manejo de errores HTTP

* Uso de variables de entorno

* Protección de rutas mediante middleware


### 👤 Autor

#### Julián Derudi
📌 Portafolio: https://julianderudi.github.io/Portafolio/

🔗 LinkedIn: https://www.linkedin.com/in/julian-derudi-730ba8343/
