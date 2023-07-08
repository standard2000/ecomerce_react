import { ShoppingBagIcon , CurrencyDollarIcon , CalendarDaysIcon } from '@heroicons/react/24/outline';

function CardOrders({totalProducts , totalPrice, date}) {
  return (
    <div className='flex justify-between items-center border  border-black rounded-lg px-6 py-2 gap-5 text-2xl font-semibold  hover:transition hover:duration-500 hover:shadow-md hover:shadow-slate-400'>
        <div className='flex items-center'>
            <ShoppingBagIcon className="w-10 h-10 text-blue-800 cursor-pointer" />
            {totalProducts}
        </div>
        <div className='flex items-center'>
            <CurrencyDollarIcon  className="w-10 h-10 text-blue-800 cursor-pointer"/>
            ${totalPrice}
        </div>
        <div className='flex items-center'>
            <CalendarDaysIcon  className="w-10 h-10 text-blue-800 cursor-pointer"/>
            {date}
        </div>
    </div>
  )
}

export {CardOrders}