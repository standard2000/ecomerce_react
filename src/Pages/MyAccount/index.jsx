import { useRef, useState } from "react";
import Layout from "../../Components/Layout";
import { useEcom } from "../../Context";

function MyAccount() {
  const ecom = useEcom();
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccountInfo = () => {

    const formData = new FormData(form.current);
    const data = {
      name : formData.get('name'),
      email: formData.get('email'),
      password : formData.get('password'),
    }

    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem("account", stringifiedAccount);
    ecom.setAccount(data);

    setView("user-info");
  };

  const renderUserInfo = () => {
    return (
      <div>
        <p>
          <span>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span>Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button onClick={() => setView("edit-user-info")}>Edit Info.</button>
      </div>
    );
  };

  const renderEditInfo = () => {
    return (
      <div>
        <form ref={form}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={parsedAccount?.name} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue={parsedAccount?.email} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" defaultValue={parsedAccount?.password} />
          </div>
          <button onClick={() => editAccountInfo()}>Save</button>
        </form>
      </div>
    );
  };

  const renderView = () =>
    view === "user-info" ? renderUserInfo() : renderEditInfo();

  return (
    <Layout>
      <div>
        <h1> My Account</h1>
        {renderView()}
      </div>
    </Layout>
    // <div className='bg-green-200'>MyAccount</div>
  );
}

export { MyAccount };
