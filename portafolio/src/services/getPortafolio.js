import image404 from "../assets/images/image-404.png";

import htmlIcon from "../assets/skills/icon-html.png";
import cssIcon from "../assets/skills/icon-css.png";
import javaScriptIcon from "../assets/skills/icon-js.png";
import typeScriptIcon from "../assets/skills/icon-typescript.png";
import reactIcon from "../assets/skills/icon-react.png";
import nodeIcon from "../assets/skills/icon-nodejs.png";
import mongoDBIcon from "../assets/skills/icon-mongodb.png";
import postgresIcon from "../assets/skills/icon-postgresql.png";

function getPortafolio() {
  const data = {
    proyectos: [
      {
        titulo: "Heladitos App",
        descripcion:
          "E-commerce de helados, donde los clientes pueden filtrar por nombre, categoría y ordenar por precio. Registro y personalización de usuarios, helados favoritos, compras seguras con Mercado Pago, reviews de su experiencia en la plataforma y correo electrónico de comprobantes de pagos.",
        github: "https://github.com/HeladitoApp/pf-Heladito",
        url: "http://heladitos-app.vercel.app/",
        imagenes: [
          "https://raw.githubusercontent.com/HeladitoApp/pf-Heladito/main/App%20Images/1.%20Presentación.png",
          "https://raw.githubusercontent.com/HeladitoApp/pf-Heladito/main/App%20Images/2.%20Producto.png",
          "https://raw.githubusercontent.com/HeladitoApp/pf-Heladito/main/App%20Images/13.%20Authenticacion.png",
          "https://raw.githubusercontent.com/HeladitoApp/pf-Heladito/main/App%20Images/5.%20CheckoutMercadoPago2.png",
          "https://raw.githubusercontent.com/HeladitoApp/pf-Heladito/main/App%20Images/9.%20Panel%20de%20Admin%20Home.png",
        ],
      },
      {
        titulo: "DogsApp - SPA",
        descripcion:
          "Una SPA (Single Page Application), donde usé React para el Front-End, y Redux como State. Haciendo uso de una API, establecí el Back-End con Node.js, usando Express. Uso de PostgreSQL para base de datos. Hay funcionalidades como filtrados, ordenamientos, búsquedas y creación de perros.",
        github: "https://github.com/Marcos1up/PI-Dogs-Henry",
        url: "",
        imagenes: [],
      },
    ],
    habilidades: [
      {
        nombre: "HTML",
        imagen: htmlIcon,
        nivel: 100,
      },
      {
        nombre: "CSS",
        imagen: cssIcon,
        nivel: 68,
      },
      {
        nombre: "JavaScript",
        imagen: javaScriptIcon,
        nivel: 85,
      },
      {
        nombre: "TypeScript",
        imagen: typeScriptIcon,
        nivel: 75,
      },
      {
        nombre: "React",
        imagen: reactIcon,
        nivel: 86,
      },
      {
        nombre: "Node.js",
        imagen: nodeIcon,
        nivel: 90,
      },
      {
        nombre: "MongoDB",
        imagen: mongoDBIcon,
        nivel: 90,
      },
      {
        nombre: "PostgreSQL",
        imagen: postgresIcon,
        nivel: 61,
      },
    ],
  };

  data.proyectos.forEach((proyecto) => {
    if (proyecto.imagenes.length === 0) {
      proyecto.imagenes.push(image404);
    }
  });

  return data;
}

export default getPortafolio;