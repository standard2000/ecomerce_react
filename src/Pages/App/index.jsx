import './App.css'
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {SignIn} from '../SignIn';
import {NotFound} from '../NotFound';

function App() {

  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
      <NotFound />
    </>
  )
}

export default App
