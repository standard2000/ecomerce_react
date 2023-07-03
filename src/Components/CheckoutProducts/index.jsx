import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEcom } from '../../Context';
import { CardOrder } from '../../Components/CardOrder';

function CheckoutProducts() {
  const ecom = useEcom();

  const onDeleteOrderProduct = (id) => {
    const filteredProducts = ecom.cartProducts.filter(product => product.id !== id);
    ecom.setCartProducts(filteredProducts);
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
        <div className='px-6 overflow-y-scroll'>
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
        
    </aside>
  )
}

export {CheckoutProducts}