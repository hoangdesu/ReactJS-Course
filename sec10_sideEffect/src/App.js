import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // Clean up App -> move logics into auth-context
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // only runs once when the component did mount
  // useEffect(() => {
  //   if (localStorage.getItem("loggedIn") === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);

  //   // store login state in local storage
  //   localStorage.setItem("loggedIn", "1");
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("loggedIn");
  // };

  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
