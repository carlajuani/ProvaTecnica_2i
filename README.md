# Proyecto de Autenticación con Node y React

## Descripción
Este proyecto es una plataforma de autenticación completa que utiliza un Back-End con Node.js, TypeScript y TypeORM, y un Front-End con React. Permite a los usuarios iniciar sesión y visualizar sus datos en un formulario interactivo.

## Características
- **Autenticación de Usuarios**: Login seguro con nickname y contraseña.
- **Generación de Token**: Uso de JWT (JSON Web Tokens) para gestionar las sesiones y las llamadas a la API.
- **Front-End Dinámico**: React para una interfaz de usuario reactiva y moderna.
- **Persistencia de Datos**: MySQL como base de datos relacional para almacenar información de usuarios.
- **Docker Integration**: Uso de Docker para simular un entorno de base de datos MySQL.
- **Código Limpio y Mantenible**: Aplicación de los principios SOLID para un código más estructurado y mantenible.

## Tecnologías Utilizadas
- Back-End: Node.js, Express, TypeScript, TypeORM, JWT.
- Front-End: React, HTML, CSS, JavaScript/TypeScript.
- Base de Datos: MySQL.
- Contenedores: Docker.

## Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn
- Docker y Docker Compose
- Git

## Instalación y Ejecución
Para ejecutar este proyecto en su máquina local, siga estos pasos:

### Clonar el Repositorio
```sh
git clone https://github.com/carlajuani/ProvaTecnica_2i.git
cd tu-repositorio
```

### Configurar el Ambiente de la Base de Datos con Docker
```sh
docker-compose up -d
```

### Instalar Dependencias del Back-End
```sh
cd backend
npm install
```

### Ejecutar Migraciones (Opcional


### Ejecutar Migraciones (Opcional)
Para inicializar la base de datos con la estructura necesaria, ejecute las migraciones con TypeORM.
```sh
npm run typeorm migration:run
```

### Iniciar el Servidor de Desarrollo del Back-End
```sh
npm run dev
```

### Instalar Dependencias del Front-End
```sh
cd ../frontend
npm install
```

### Iniciar la Aplicación de React
```sh
npm start
```
Esto abrirá automáticamente la aplicación en su navegador predeterminado.

## Uso
1. Acceda a la página principal que se muestra en su navegador.
2. Introduzca su `nickname` y `contraseña` en los campos proporcionados.
3. Una vez autenticado, podrá acceder a la página de perfil donde podrá ver y editar sus datos de usuario.

## Seguridad
Las contraseñas de los usuarios se almacenan de forma segura utilizando encriptación bcrypt. Todos los datos son gestionados siguiendo las mejores prácticas para asegurar la protección de la información de los usuarios.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, envíe un pull request o cree un issue para cualquier característica o mejora que desee proponer.

## Licencia
Este proyecto está licenciado bajo [INSERTE EL TIPO DE LICENCIA], lo que significa que puede utilizarlo y modificarlo según los términos de dicha licencia.

## Contacto
Para preguntas o colaboraciones, no dude en contactar al equipo de desarrollo a través de `pptest11@gmail.com`.

---

¡Gracias por utilizar nuestra plataforma de autenticación!