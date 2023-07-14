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
      <div className="w-80">
        <p>
          <span className="">Name: </span>
          <span className="ml-2 text-xl font-semibold">{parsedAccount?.name}</span>
        </p>
        <p>
          <span>Email:</span>
          <span className="ml-2 text-xl font-semibold">{parsedAccount?.email}</span>
        </p>
        <button onClick={() => setView("edit-user-info")} className="  border border-black text-center rounded-lg py-3 w-full mt-5 disabled:text-black/40 disabled:border-black/40">Edit Info.</button>
      </div>
    );
  };

  const renderEditInfo = () => {
    return (
      <div className="w-80">
        <form ref={form}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name">Your Name:</label>
            <input type="text" className="border border-black px-4 py-2 rounded-lg font-semibold" id="name" name="name" defaultValue={parsedAccount?.name} />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Your Email:</label>
            <input type="email" className="border border-black px-4 py-2 rounded-lg font-semibold" id="email" name="email" defaultValue={parsedAccount?.email} />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Your Password:</label>
            <input type="password" className="border border-black px-4 py-2 rounded-lg font-semibold" id="password" name="password" defaultValue={parsedAccount?.password} />
          </div>
          <button className="w-full py-3 bg-black disabled:bg-black/40 rounded-lg text-white mt-4 mb-3" onClick={() => editAccountInfo()}>Save</button>
        </form>
      </div>
    );
  };

  const renderView = () =>
    view === "user-info" ? renderUserInfo() : renderEditInfo();

  return (
    <Layout>
      <div>
        <h1 className="flex items-center justify-center mb-5"> My Account</h1>
        {renderView()}
      </div>
    </Layout>
    // <div className='bg-green-200'>MyAccount</div>
  );
}

export { MyAccount };
