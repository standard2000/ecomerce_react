import { CardOrder } from "../../Components/CardOrder"
import Layout from "../../Components/Layout"
import { useEcom } from "../../Context";
import { ChevronLeftIcon } from '@heroicons/react/24/solid' 
import {Link, useParams} from 'react-router-dom'

function MyOrder() {
  const ecom = useEcom();
  const params = useParams();
  
  let orderToShow;
  let total = 0;
  if(ecom.order.length){
    if('id' in params){ 
      orderToShow = ecom.order?.filter((o)=>{
        return o.id === parseInt(params.id);
      })[0]
    }else{
      orderToShow =  ecom.order?.slice(-1)[0];
    } 
    total = orderToShow.totalPrice;
  }

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to="/ecomerce/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-blue-800 cursor-pointer" />
        </Link>
        <h1>My Order </h1>
      </div>

      <div className='flex flex-col  justify-center w-[30%]'>
            {ecom.order.length > 0 ? 
            (
              orderToShow.products.map((product )=>(
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
            {total > 0 && 
            <div className="w-full flex items-center justify-center py-10 text-2xl font-semibold">
              Total Price : ${total}
            </div>
            }
    </Layout>
    // <div className='bg-green-300'>MyOrder</div>
  )
}

export {MyOrder}