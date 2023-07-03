import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEcom } from '../../Context';

function CheckoutProducts() {
  const ecom = useEcom();
  console.log(ecom.openCheckoutProducts);
  return (
    <aside className={`${ecom.openCheckoutProducts ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg w-[360px]    h-[calc(98vh-68px)] bg-white`}>
        <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-xl">My order</h2>
            <div>
                <XMarkIcon className="w-6 h-6 text-blue-800 cursor-pointer" onClick={()=>ecom.onCloseCheckoutProducts()} ></XMarkIcon>
            </div>
        </div>
    </aside>
  )
}

export {CheckoutProducts}