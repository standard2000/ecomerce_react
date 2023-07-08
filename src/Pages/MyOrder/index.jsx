import { CardOrder } from "../../Components/CardOrder"
import Layout from "../../Components/Layout"
import { useEcom } from "../../Context";

function MyOrder() {

  const ecom = useEcom();
  
  // console.log(ecom.order.length);
  // console.log(ecom.order?.slice(-1)[0].products);

  return (
    <Layout>
      My Order

      <div className='flex flex-col'>
            {ecom.order.length > 0 ? 
            (
            ecom.order?.slice(-1)[0].products.map((product)=>(
                <CardOrder 
                  key={product.id} 
                  title={product.title} 
                  imageUrl={product.images[0]} 
                  price={product.price} 
                  id={product.id} 
                  />
            ))
            )
            :
            (
              <p>There's no Order here.</p>
            )
            }
        </div>
    </Layout>
    // <div className='bg-green-300'>MyOrder</div>
  )
}

export {MyOrder}