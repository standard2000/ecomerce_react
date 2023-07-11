import { Link, Navigate } from "react-router-dom"
import Layout from "../../Components/Layout"
import { useEcom } from "../../Context";
import { useRef, useState } from "react";

function SignIn() {
const ecom = useEcom();

// create an local state to manage what to render
const [view, setView] = useState('user-info');

// get account fomr localStorage
const account = localStorage.getItem("account");
const parsedAccount = JSON.parse(account);
const form = useRef(null);
const CreateNewAccount = ()=>{
  const formData = new FormData(form.current);
  const data = {
    name : formData.get('name'),
    email : formData.get('email'),
    password : formData.get('password'),
  };

  // create the account in localStorage and localState
  const stringifiedAccount = JSON.stringify(data);
  localStorage.setItem("account", stringifiedAccount);
  ecom.setAccount(data);

  // now we can signIn
  handleSignIn()
}

const handleSignIn = ()=>{
  const stringifiedSignInOut = JSON.stringify(false);
  localStorage.setItem('signInOut', stringifiedSignInOut);
  ecom.setSignInOut(false);

  return( <Navigate repalce to={'/ecomerce/'} />)
}
// validating if user has an account
const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
const noAccountInLocalState = ecom.account ? Object.keys(ecom.account).length === 0 : true;
const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState;

// Create a conditional rendering
const renderLogin = () => {
  return (
    <div>
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
        onClick={()=> setView('create-user-info')}
        disabled={hasUserAccount}
        >
          Sign In
        </button>
    </div>
  );
}

const renderCreateUserInfo = () => {
  return(
    <div>
      <form ref={form}>
        <div>
          <label htmlFor="name"> Your Username: </label>
          <input type="text" id="name" name="name" placeholder="Peter" defaultValue={parsedAccount?.name} />
        </div>
        <div>
          <label htmlFor="email"> Your Email:</label>
          <input type="email" id="email" name="email" placeholder="email@email.com" defaultValue={parsedAccount?.email} />
        </div>
        <div>
          <label htmlFor="email"> Your Password:</label>
          <input type="password" id="password" name="password" placeholder="*******" defaultValue={parsedAccount?.password} />
        </div>
        <Link to='/ecomerce/'>
          <button onClick={()=>CreateNewAccount()}>
            Create
          </button>
        </Link>
      </form>
    </div>
    );
}

const renderView = () => view === 'create-user-info' ? renderCreateUserInfo()  : renderLogin();


  return (
    <Layout>
      <div >
        <h1 className="text-2xl font-semibold text-center mb-8"> Welcome</h1>
        {renderView()}
      </div>
    </Layout>
    // <div className='bg-green-500'>SignIn</div>
  )
}

export {SignIn}