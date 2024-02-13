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
        titulo: "HeladitosApp",
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
        titulo: "AlPasoApp",
        descripcion:
          "Desarrollo freelancer de una página de catálogo menú, para un negocio local de comida rápida. Muestra productos destacados, ofertas, si se encuentra abierto o cerrado y un mapa de la dirección del local.",
        github: "",
        url: "",
        imagenes: [],
      },
      {
        titulo: "WikiDogs",
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
      },
      {
        nombre: "CSS",
        imagen: cssIcon,
      },
      {
        nombre: "JavaScript",
        imagen: javaScriptIcon,
      },
      {
        nombre: "TypeScript",
        imagen: typeScriptIcon,
      },
      {
        nombre: "React",
        imagen: reactIcon,
      },
      {
        nombre: "Node.js",
        imagen: nodeIcon,
      },
      {
        nombre: "MongoDB",
        imagen: mongoDBIcon,
      },
      {
        nombre: "PostgreSQL",
        imagen: postgresIcon,
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
