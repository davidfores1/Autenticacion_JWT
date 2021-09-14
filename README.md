<h1>REQUISITOS:</h1>
Angular: 12.1.1<br>
Laravel Framework 8.49.2<br>
MYSQL: 10.4.19<br>
PHP Version 7.4.20<br>

<h2>Al clonar un proyecto de Laravel desde GitHub:</h2>

<h2>Laravel</h2>
<h3>Instalar dependencias:</h3>
Para ello abriremos una terminal en la carpeta del proyecto y ejecutaremos: composer install<br>
Vemos cómo se ha creado la carpeta vendor<br>

<h3>Crear una base de datos que soporte Laravel</h3>
Entre las bases de datos que soporta Laravel por defecto, encontramos: MySQL, SQL Lite, PostgreSQL y SQL Server.<br>

<h3>Crear el archivo .env</h3>
Este archivo es necesario para, entre otras cosas, configurar la conexión de la bbdd, el entorno del proyecto, motores para envio y recepción de correos etc …<br>
Como por cuestiones de seguridad tampoco se subió, necesitamos crearlo.<br>
Podemos duplicar el archivo .env.example, renombrarlo a .env e incluir los datos de conexión de la base de datos<br>
Ejemplo:<br>

..... 
-DB_CONNECTION=mysql<br>
-DB_HOST=localhost<br>
-DB_PORT=3306<br>
-DB_DATABASE=base de datos creada<br>
-DB_USERNAME=root<br>
-DB_PASSWORD=secret<br>
....

<h3>Generar una clave</h3>
La clave de aplicación es una cadena aleatoria almacenada en la clave APP_KEY dentro del archivo .env. Notarás que también falta.<br>
Para crear la nueva clave e insertarla automáticamente en el .env, ejecutaremos:<br>
php artisan key:generate<br>

<h3>Ejecutar migraciones</h3>
ejecutar las migraciones para que se generen las tablas con:<br>
php artisan migrate<br>

<h3>[Nota]:</h3>
AGREGAR ROLES Y USUARIOS QUE SE ENCUENTRAN EN EL ARCHIVO db_konectar.sql adjunto
Si tuvieramos que incluir o crear nuevas migraciones utilizaríamos:<br>
php artisan migrate:refresh <br>
php artisan migrate:fresh  //borra y crea todas las tablas de nuevo
	AGREGAR ROLES Y USUARIOS QUE SE ENCUENTRAN EN EL ARCHIVO db_konectar.sql 

<hr>  
<h2>Angular</h2>
Ejecutar npm install

npm install nos descargara todas las dependencias necesarias para poder ejecutar nuestro proyecto angular en el servidor local.
Finalmente usamos el comando npm start para levantar nuestro servidor

npm start
