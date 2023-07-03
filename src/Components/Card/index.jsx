import { useEcom } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

function Card(props) {
  const ecom = useEcom();
  const showProduct = (productInfo) => {
    ecom.onOpenDetail();
    ecom.onCloseCheckoutProducts();
    ecom.setProductInfo(productInfo);
  };
  const addProduct = (event, dataProduct) => {
    event.stopPropagation();
    ecom.setCount(ecom.count + 1);
    ecom.setCartProducts([...ecom.cartProducts, dataProduct]);
    ecom.onOpenCheckoutProducts();
    ecom.onCloseDetail();
    // console.log(ecom.cartProducts);
    // console.log(ecom.openCheckoutProducts);
  };

  const renderIcon = (id) => {

    const isInCart = ecom.cartProducts.filter(product => product.id === id).length > 0;

    if(isInCart){
      return (
        <div className=" absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 m-2 p-1 bg-black/90">
          <CheckIcon className="w-6 h-6 text-white"></CheckIcon>
        </div>
      );
    }else{
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 m-2 p-1 bg-white/60"
          onClick={(event) => addProduct(event, props.data)}
        >
          <PlusIcon className="w-6 h-6 text-blue-800"></PlusIcon>
        </div>
      );
    }


  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(props.data)}
    >
      <figure className="relative w-full h-4/5 mb-2">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg m-2 px-2">
          {props.data.category.name}
        </span>
        <img
          className="hover:transition hover:duration-500 hover:shadow-md hover:shadow-slate-400 rounded-lg w-full h-full object-cover"
          src={props.data.images[0]}
          alt={props.data.title}
        />
        {renderIcon(props.data.id)}
      </figure>
      <p className="flex justify-between items-center px-1">
        <span className="text-sm  font-light">{props.data.title}</span>
        <span className="text-lg font-medium">${props.data.price} </span>
      </p>
    </div>
  );
}

export default Card;
