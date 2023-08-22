import React from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../helpers/toCapital";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4
          style={{
            fontFamily: "font-family: 'Anton'",
            fontWeight: "bolder",
            color: "yellow",
            fontSize: "1.2rem",
            textShadow: "1px 1px 1px black",
            letterSpacing: "0.2rem",
          }}
        >
          {producto.titulo}
        </h4>
        <p
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            color: "yellow",
            letterSpacing: "0.2rem",
          }}
        >
          Precio: ${producto.precio}
        </p>
        <p>Categoría: {toCapital(producto.categoria)}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
