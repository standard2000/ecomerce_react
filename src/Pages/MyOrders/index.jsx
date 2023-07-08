import Layout from '../../Components/Layout'
import { CardOrders } from '../../Components/CardOrders'
import { Link } from 'react-router-dom'
import { useEcom } from '../../Context'

function MyOrders() {
  const ecom = useEcom();
  
  return (
    <Layout>
      <h1 className='mb-10 '>
        
      My Orders
      </h1>
      <div className='flex flex-col gap-y-2'> 
      {ecom.order?.map((order, index)=>(
        <Link to={`/my-order/${order.id}`} key={index}>
          <CardOrders  
          totalPrice={order.totalPrice} 
          totalProducts={order.totalProducts} 
          date={order.date} 
          />
          </Link>
      ))}
      </div>

    </Layout>
    // <div className='bg-green-400'>MyOrders</div>
  )
}

export {MyOrders}