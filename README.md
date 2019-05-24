# FastFood.com => Evaluación Front- End Marco Monter

El ejercicio consiste en crear una aplicación en React o Vue (se pueden apoyar en cualquier otro framework, librería, etc), para implementar un sitio en línea de comida rápida

La tienda se deberá llamar FastFood.com, y deberá contar con una pantalla de inicio, la cual presentará por defecto una lista con 10 alimentos de comida rápida. Cada elemento debe contar al menos con una foto, tipo de comida, una descripción y una calificación (estrellas o algún otro indicador).
El usuario podrá visualizar la lista, y realizar filtros básicos como buscar las comidas con más estrellas, o las que contengan cierta palabra en la descripción.
Deberá existir un botón en la lista para comprar, pasando a una pantalla de confirmación, donde el usuario deberá seleccionar en un mapa la sucursal donde desea solicitar la comida (poner al menos tres sucursales ficticias).

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

* Forkea este repo
* Clona el repo

```
$ git clone https://github.com/montermarco/fastfood.git
```


### Instrucciones 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Instalar React Router_

```
$ npm install react-router-dom
```

_Instalar Ant Design_

```
$ npm install ant-design

```
```javascript
// src/index.js
import 'antd/dist/antd.css';
```


_Instalar React Map Gl_

```
$ npm install react-map-gl

```
```javascript
// src/components/site/Location.js
import ReactMapGL from 'react-map-gl';
```

_Flujo del sitio_

Landing => Menu => Explorar platillos (Uso de filtros en buscador) => Seleccionar Platillo ~

Item => Seleccionar Sucursal => Confirmar orden 

## Deployment 📦

* [Heroku](https://www.heroku.com/) - Deployment con Heroku.
* [Fastfood.com](https://thefastfood.herokuapp.com/)

## Construido con 🛠️

* [React js](https://reactjs.org/) - Libreria web utilizada
* [AntDesign](https://ant.design/) - Front End Framework
* [MapBox](https://www.mapbox.com/) - Usado para interacción con mapas


## Thanks! 🎁

Happy Coding!




---
Por [montermarco](https://github.com/montermarco) 