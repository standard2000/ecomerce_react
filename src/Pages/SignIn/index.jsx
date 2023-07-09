import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { useEcom } from "../../Context";

function SignIn() {
const ecom = useEcom();

// get account fomr localStorage
const account = localStorage.getItem("account");
const parsedAccount = JSON.parse(account)

// validating if user has an account
const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
const noAccountInLocalState = ecom.account ? Object.keys(ecom.account).length === 0 : true;
const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState;


  return (
    <Layout>
      <div >
        <h1 className="text-2xl font-semibold text-center mb-8"> Welcome</h1>
        <div className="flex flex-col w-80">
          <p>
          <span className="font-light ">Email : </span>
          <span className="font-semibold text-lg ">{parsedAccount?.email}</span>
          </p>
          <p>
            <span className="font-light"> Password :</span>
            <span className="font-semibold text-lg">{parsedAccount?.password}</span>
          </p>
        </div>
        <Link to='/ecomerce/'>
          <button className="w-full py-3 bg-black disabled:bg-black/40 rounded-lg text-white mt-4 mb-3"
          disabled={!hasUserAccount}
          >
            Log In
          </button>
        </Link>
        <div className="text-center">
          <a href="/ecomerce/" className="underline"> Forgot your Password?</a>
        </div>
        <button className=" border border-black text-center rounded-lg py-3 w-full mt-4 disabled:text-black/40 disabled:border-black/40"
        disabled={hasUserAccount}
        >
          Sign In
        </button>
      </div>
    </Layout>
    // <div className='bg-green-500'>SignIn</div>
  )
}

export {SignIn}