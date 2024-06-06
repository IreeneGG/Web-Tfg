# BROT 🌱
Este Proyecto Fin de Grado de Ingeniería Informática se centra en el desarrollo e implementación de un sistema integral para el monitoreo
y gestión de cultivos agrícolas. A continuación, se proporciona una descripción detallada del proyecto:

## Instalación ⚙️
-Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
-Clona este repositorio o descomprime el archivo del proyecto.
-Navega al directorio del proyecto.

## Ejecución ▶️
Para construir y levantar el microservicio:
  docker-compose up --build

## Microservicios

### M.Aemet 🌤️
Este microservicio está desarrollado en Python y proporciona datos meteorológicos utilizando la API de AEMET.

### M.Saih 🌤️
Este microservicio, desarrollado en Python, extrae datos hidrológicos de la zona (SaihEbro).

### M.Sensores 📡
Este microservicio, desarrollado en FastAPI, gestiona datos de sensores que capta el sistema electrónico.

### M.Bot 🤖
Este microservicio, desarrollado en FastAPI, proporciona una interfaz de chat para interactuar con el sistema.

