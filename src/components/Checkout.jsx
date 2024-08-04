import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div
        style={{
          backgroundColor: "black";
          textAlign: "center",
          margin: "1rem",
        }}
      >
        <h2
          style={{
            color: "yellow",
            textShadow: "2px 2px 2px black",
            margin: "1rem",
            fontFamily: "Bebas Neue",
            padding: "1rem",
            letterSpacing: "0.2rem",
          }}
        >
          Muchas gracias por tu compra! 🙈🐵
        </h2>
        <p
          style={{
            backgroundColor: "white",
            padding: "0.5rem",
            fontWeight: "bold",
            fontFamily: "Bebas Neue",
            letterSpacing: "0.2rem",
          }}
        >
          Tu número de pedido es: {pedidoId}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <h2
        style={{
          margin: "1rem",
          color: "yellow",
          textShadow: "1px 1px 1px black",
          fontFamily: "Bebas Neue",
          letterSpacing: "0.1rem",
        }}
      >
        Finalizar compra
      </h2>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
