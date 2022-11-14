import "./productList.css";
import { products } from "../../data";
import Product from "../product/Product";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Tim Burton's Movies</h1>
        <p className="pl-desc">
          Tim Burton (born August 25, 1958) is an American film director,
          producer, artist, writer, animator, puppeteer, and actor. He is known
          for his gothic horror and fantasy films, such as Beetlejuice (1988),
          Edward Scissorhands (1990), The Nightmare Before Christmas (1993), Ed
          Wood (1994), Sleepy Hollow (1999), Corpse Bride (2005), Sweeney Todd:
          The Demon Barber of Fleet Street (2007), Dark Shadows (2012), and
          Frankenweenie (2012).
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
