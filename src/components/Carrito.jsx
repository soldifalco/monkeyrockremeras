import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "bisque",
        textAlign: "center",
      }}
    >
      {carrito.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3
            style={{
              color: "yellow",
              fontFamily: "Neucha",
              textShadow: "1px 1px 1px black",
              fontSize: "1.3rem",
              letterSpacing: "0.3rem",
              margin: "1rem",
            }}
          >
            {prod.titulo}
          </h3>

          <p
            style={{
              margin: "0.6rem",
              fontFamily: "Trebuchet MS",
              textShadow: "1px 1px 1px black",
              color: "yellow",
            }}
          >
            Precio unitario: ${prod.precio}
          </p>
          <p
            style={{
              margin: "0.6rem",
              fontFamily: "Trebuchet MS",
              textShadow: "1px 1px 1px black",
              color: "yellow",
            }}
          >
            Precio total: ${prod.precio * prod.cantidad}
          </p>
          <p
            style={{
              margin: "0.6rem",
              fontFamily: "Trebuchet MS",
              textShadow: "1px 1px 1px black",
              color: "yellow",
              backgroundColor: "",
            }}
          >
            Cantidad: {prod.cantidad}
          </p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2
            style={{
              color: "yellow",
              textShadow: "1px 1px 1px black",
            }}
          >
            Precio total: ${precioTotal()}
          </h2>
          <button
            style={{
              margin: "1rem",
              padding: "0.5rem",
              borderRadius: "30px",
              backgroundColor: "fuchsia",
              color: "white",
              border: "0",
              cursor: "pointer",
            }}
            onClick={handleVaciar}
          >
            Vaciar
          </button>
          <Link
            style={{
              backgroundColor: "fuchsia",
              color: "white",
              textDecoration: "none",
              padding: "0.5rem",
              borderRadius: "30px",
            }}
            to="/checkout"
          >
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2
          style={{
            margin: "2rem",
            color: "yellow",
            textShadow: "1px 1px 1px black",
            padding: "2rem",
            fontFamily: "Courier New",
          }}
        >
          El carrito está vacío 🙊
        </h2>
      )}
    </div>
  );
};

export default Carrito;
