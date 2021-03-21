import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/holi21/GW/rev1/Holi-GW-Hero-PC-1x._CB656865633_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="New Apple iPhone 12 Mini (64GB) - Black"
          price={67000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"
        />
        <Product
          id="2"
          title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage) "
          price={54999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
        />
        <Product
          id="3"
          title="Mastech MAS830L Digital Pocket Multimeter (Assorted) "
          price={899}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81yaCj3bY5L._SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="Kairos AirplaneLS(EL10) Luggage Travel Weighing Scales 50kg Portable Handheld Electronic Digital LCD, Battery Included "
          price={499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Sf71FuWPL.jpg"
        />
        <Product
          id="5"
          title="HP 14 Ultra Thin & Light 14-inch Laptop (10th Gen i3-1005G1/8GB/256GB SSD/Win 10 Home/MS Office/1.47 Kg/Jet Black), 14s-cf3074TU "
          price={36990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81MEmcBaxVL._SL1500_.jpg"
        />
        <Product
          id="6"
          title="Lenovo Legion 5i 10th Gen Intel Core i5 15.6 inch Full HD IPS Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg), 82AU00KEIN "
          price={70990}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="ErgoYou Height Adjustable Table Desk | Electric | 2 Stage | Dual Motor | Ergonomic Sit-Stand Solution | Imported (No Table Top, Only Frame) "
          price={32599}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41UbDhUTcQL._SL1116_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
