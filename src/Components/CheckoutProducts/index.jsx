import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEcom } from '../../Context';
import { CardOrder } from '../../Components/CardOrder';
import { totalPrice } from '../../utils';

function CheckoutProducts() {
  const ecom = useEcom();

  const onDeleteOrderProduct = (id) => {
    const filteredProducts = ecom.cartProducts.filter(product => product.id !== id);
    ecom.setCartProducts(filteredProducts);
  }

  const onChecktourOrder = () => {
    const orderToAdd = {
      id : Date.now(),
      date : new Date().toLocaleDateString('es-ES'),
      products : ecom.cartProducts,
      totalProducts : ecom.cartProducts.length,
      totalPrice : totalPrice(ecom.cartProducts),
    }
    ecom.setOrder([...ecom.order, orderToAdd]);
    ecom.setCartProducts([]);
    ecom.setCount(0);
    // console.log(ecom.order);
  }
//   console.log(ecom.openCheckoutProducts);
  return (
    <aside className={`${ecom.openCheckoutProducts ? 'flex' : 'hidden'} z-10 flex-col fixed right-0 border border-black rounded-lg w-[360px]    h-[calc(98vh-68px)] bg-white`}>
        <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-xl">My order</h2>
            <div>
                <XMarkIcon className="w-6 h-6 text-blue-800 cursor-pointer" onClick={()=>ecom.onCloseCheckoutProducts()} ></XMarkIcon>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll flex-1'>
            {ecom.cartProducts.map((product)=>(
                <CardOrder 
                  key={product.id} 
                  title={product.title} 
                  imageUrl={product.images[0]} 
                  price={product.price} 
                  id={product.id} 
                  onDelete={onDeleteOrderProduct}
                  />
            ))}
        </div>
        <div className='px-6'>
          <p className='flex justify-between items-center mb-2'>
          <span className='font-light text-sm'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(ecom.cartProducts)}</span>
          </p>
          <Link to={'/my-orders/last'}>
          <button className='rounded-lg bg-black text-white py-3 w-full mb-6' onClick={()=>onChecktourOrder()}>Checkout</button>
          </Link>
        </div>
    </aside>
  )
}

export {CheckoutProducts} 