// import React from 'react'

import { useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { useEffect } from "react";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      home
      <div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
    // <div className='bg-green-100'>Home Page</div>
  );
}

export { Home };
