# Proyecto Backend en NodeJS

Este proyecto desarrollado en NodeJS proporciona la funcionalidad backend para gestionar y autorizar el inicio de sesión de los usuarios en una aplicación web CRUD destinada al control de inventario.

La aplicación web CRUD correspondiente está disponible en el siguiente repositorio: 
https://github.com/anap011/project_inventory_management-web_crud.git


## Requisitos

- **Node.js**: 20.12.2 https://nodejs.org/en
- **Express**: ^4.19.2
- **Dotenv**: ^16.4.5
- **Cors**: ^2.8.5
- **MongoDB**: ^6.8.0
- **JsonWebToken**: ^9.0.2


## Instalación

1. Clona el repositorio:

    git clone https://github.com/anap011/project_inventory_management-backend_login.git
    
    cd project_inventory_management-backend_login

2. Instala los requisitos:

    npm install

    npm install jsonwebtoken

    npm install mongodb

    npm i cors

    npm install dotenv

3. Inicie el proyecto:

    npm start

## Creación de la base de datos MondoDB por Mongosh

Link MongoDB : https://www.mongodb.com/

1. Conectar a mongosh

    mongosh "mongodb+srv://<username>:<password>@cluster0.tecixwp.mongodb.net/" --apiVersion 1 --username <username>

2. Seleccionar la base de datos (o crearla si no existe):
    
    use <nombre-base-de-datos>

3. Crear la colección y añadir un índice para username:

    db.createCollection('<nombre-colección>')

    db.logins.createIndex({ username: 1 }, { unique: true })

4. Insertar datos iniciales en la colección creada:

    db.logins.insertMany([

        { username: "", password_hash: "" },

        { username: "", password_hash: "" }

    ])

