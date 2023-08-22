import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BsCartCheck } from "react-icons/bs";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <BsCartCheck color="yellow" size={30} />
        <span className="numerito"> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
