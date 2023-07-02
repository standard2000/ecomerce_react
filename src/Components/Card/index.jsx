
function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative w-full h-4/5 mb-2">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg m-2 px-2">Electronics</span>
            <img className="hover:transition hover:duration-500 hover:shadow-md hover:shadow-slate-400 rounded-lg w-full h-full object-cover" src="https://images.pexels.com/photos/14642112/pexels-photo-14642112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 m-2 p-1 bg-white/60">+</div>
        </figure>
        <p className="flex justify-between items-center px-1">
            <span className="text-sm  font-light">Xbox Wireless controll</span>
            <span className="text-lg font-medium">$400</span>
        </p>
    </div>
  )
}

export default Card