import Item from "./Item";
import logo from "./logo.jpg";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <div className="banner">
        <h4>Unite al estilo monkey</h4>
        <img src={logo} alt="logo" />
        <h4>Remeras para todas las edades y de todos los talles</h4>
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
