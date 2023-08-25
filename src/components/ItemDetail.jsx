import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);

              Swal.fire({
                position: "center",
                icon: "success",
                title: "Producto agregado",
                background: " fuchsia",
                iconColor: "pink",
                color: "white",
                confirmButtonColor: "pink",
                timer: 1500,
                toast: true,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
