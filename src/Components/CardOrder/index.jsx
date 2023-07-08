import { XMarkIcon } from '@heroicons/react/24/solid'

function CardOrder({id, price,title,imageUrl, onDelete}) {
  return (
    <div className='flex justify-between items-center py-1'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20 '>
                <img className='w-full h-full object-cover rounded-lg' src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center'>
            <p className='text-lg font-medium'>${price}</p>
            <div>
                {onDelete && 
                <XMarkIcon className="w-6 h-6 text-blue-800 cursor-pointer" 
                onClick={()=>onDelete(id)} 
                ></XMarkIcon>
                }
            </div>
        </div>
    </div>
  )
}

export {CardOrder}