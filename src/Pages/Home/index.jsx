import { useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useEcom } from "../../Context";

function Home() {
  const ecom = useEcom();

  const itemsToShow = ecom.searchProducts?.length > 0 ? ecom.filteredItems : ecom.items;
  const renderView = () => {
    
    if(itemsToShow.length > 0) {
      return itemsToShow?.slice(0, ecom.visible).map((item) => (
        <Card data={item} key={item.id} />
      ));
    }

  }

  return (
    <Layout>
      <div className="flex items-center mb-10">
        <h1 className="text-3xl font-semibold flex gap-2">
          <p>Exclusive Products</p>           <SparklesIcon className="w-7 h-7" />
        </h1>
      </div>
      <div>
        <input type="text" className="mb-6 w-80 p-2 border border-black focus:outline-none rounded-lg" placeholder="Search a product"
        onChange={(event)=>ecom.setSearchProducts(event.target.value)}
        />
      </div>
      {itemsToShow.length > 0 ?  
      <div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
        {renderView()}
      </div>
      :
      <div>We don't have nothing to show for now!</div>
      }
      <div className="my-10">
        {ecom.visible < itemsToShow.length && <button className="rounded-lg bg-blue-300 py-2 px-6 text-lg font-semibold hover:bg-blue-400 transition duration-500 hover:text-white" onClick={ecom.showMore}> Show More</button>}
      </div>
      <ProductDetail />
    </Layout>
    // <div className='bg-green-100'>Home Page</div>
  );
}

export { Home };
