# Estify: Your Spotify experience, in depth.

A Spotify connected full-stack app that lets you visualize your listening trends and audio features from your favorite tracks and playlists.

Una aplicación full-stack conectada a Spotify que te permite visualizar tus tendencias de escucha y propiedades auditivas de tus tracks y playlists favoritos.

**Link to project/Link del proyecto:** https://estify.up.railway.app/


 Project                        | Screenshots 
:-------------------------:|:-------------------------:
![estify](https://user-images.githubusercontent.com/39743205/207184028-e688c93a-5ee9-44ab-b536-ab302900ac29.PNG)  |  ![track](https://user-images.githubusercontent.com/39743205/207184543-3850f89c-7d18-48f2-be22-c369ac3cde0d.PNG)
![artists](https://user-images.githubusercontent.com/39743205/207185074-17a2e217-8ef8-4d31-9fee-6447746e97a3.PNG)  |  ![Profile](https://user-images.githubusercontent.com/39743205/207185096-1d601df9-f731-457c-8720-0ca62ef6bb17.PNG)

## Description/Descripción:

**Tech used:** 
Backend: Node.js, Express, Axios, Spotify OAuth
Frontend: Vite, Typescript, React, react-router, react-query, TailwindCSS, Sass, Axios, Chart.js.

Estify is a full-stack web application. On the backend I used Node.js and Express to create a simple OAuth logic using Spotift OAuth. HTTP request are made with Axios.
On the frontend I used Vite to scaffold a React+Typescript project, for routing I used react-router, for fetching data I used react-query, and for styling, TaildwindCSS and Sass.
For organization concerns. I put all of the Spotify Web API calls on a single typecript file that uses Axios to make HTTP request to both the Web API and the server (for token validation).
Finally, I used a basic setup of Chart.js to show audio features from track or playlist. The app is fully responsive.

Estify es una aplicación web full-stack. En el backend, utilicé Node.js y Express para crear una lógica OAuth simple usando Spotift OAuth. Las solicitudes HTTP se realizan con Axios.
En la interfaz, usé Vite para montar un proyecto React+Typescript, para el routing de vistas usé react-router, para obtener data usé react-query y para estilos, TaildwindCSS y Sass.
Por cuestiones de organización. Puse todas las llamadas a la API web de Spotify en un solo archivo Typescript que usa Axios para realizar una solicitud HTTP tanto a la Web API como al servidor (para la validación del token).
Finalmente, utilicé una configuración básica de Chart.js para mostrar las propiedades auditivas de un track o de una playlist. La aplicación es totalmente responsive.

## Optimizations / Optimizaciones

As possible features, the app could include/ Como posibles features, el app podría incluir:

- Audio previews for each track / Previews de cada track
- Additional playlist sorting options / Opciones de filtro de playlist adicionales
- Liking a track / Poder poner "me gusta" a un track
- Personalized user feed based on audio features. / Un feed personalizado basado en propiedas auditivas.

## Lessons Learned / Lecciones aprendidas:

This project was an amazing challenge in development and design. I had to comply with the Spotify Guidelines in order to make use of their Web API, which provided a challenge when it came to styling.
This is also the project that made me solidify my knowledge in React, from using react-query to fetch and cache data to using custom hooks to make have more SOC.

Este proyecto fue un gran desafío con respecto a desarrollo y diseño. Tuve que acatar las guías de diseño de Spotify para poder hacer uso de su Web API, lo cual resulto un desafío con respecto a estilos.
Este, también ha sido un proyecto que me ayudó a solidificar mi conocimiento de React, desde usar react-query para buscar y guardar data en cache, hasta usar custom hooks para tener mejor SOC.

## Other projects / Otros proyectos:

Take a look at these couple examples that I have in my own portfolio /
Hecha un vistazo a otros proyectos en mi portafolio

**Takenote:** https://github.com/andreyanez/Takenote

**HomeFound:** https://github.com/andreyanez/HomeFound

**Ceasar cipher generator:** https://github.com/andreyanez/Caesar-cipher-generator
