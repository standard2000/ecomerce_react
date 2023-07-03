import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEcom } from '../../Context';

function ProductDetail() {
  const ecom = useEcom();
  const info = ecom.productInfo;
  
  return (
    <aside className={`${ecom.openDetail ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg w-[360px]    h-[calc(98vh-68px)] bg-white`}>
        <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-xl">Detail</h2>
            <div>
                <XMarkIcon className="w-6 h-6 text-blue-800 cursor-pointer" onClick={()=>ecom.onCloseDetail()} ></XMarkIcon>
            </div>
        </div>
        <div className='px-6'>
          <figure>
            <img className='w-full h-full rounded-lg object-cover' src={info.images[0]} alt={info.title} />
          </figure>
          <div className='mt-6 flex flex-col'>
            <span className='font-medium text-2xl mb-2'>${info.price}</span>
            <span className='font-medium text-lg'>{info.title}</span>
            <span className='font-normal text-sm'>{info.description}</span>
          </div>
        </div>
    </aside>
  )
}

export { ProductDetail}