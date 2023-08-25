import Item from "./Item";
import logo from "./logo.jpg";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <div className="banner">
        <p>Unite al estilo monkey</p>
        <img src={logo} alt="logo" />
        <p>Remeras para todas las edades y de todos los talles</p>
      </div>

      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
