import Item from "./Item";
import logo from "./logo.jpg";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
