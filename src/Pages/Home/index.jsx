// import React from 'react'

import { useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { useEffect } from "react";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  const [visible, setVisible] = useState(12);
  const loadMoreResults = 8;

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + loadMoreResults);
  };

  return (
    <Layout>
      home
      <div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
        {items?.slice(0, visible).map((item) => (
          <Card data={item} key={item.id} />
        ))}
        {/* {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))} */}
      </div>
      <div className="my-10">
        {visible < items.length && <button className="rounded-lg bg-blue-300 py-2 px-6 text-lg font-semibold hover:bg-blue-400 transition duration-500 hover:text-white" onClick={showMore}> Show More</button>}
      </div>
      <ProductDetail />
    </Layout>
    // <div className='bg-green-100'>Home Page</div>
  );
}

export { Home };
