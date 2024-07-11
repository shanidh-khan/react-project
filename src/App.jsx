import { useEffect, useState } from "react";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import Login from "./Pages/Login/Login";
import {RouterProvider, createBrowserRouter} from "react-router-dom"


const router = createBrowserRouter(
  [
    {
      path : "/",
      element:<Login/>
    }
  ]
)
function App() {
	function handleSubmit(e) {
		e.preventDefault();
		setLoggedIn(true);
	}
	function handleCancel(e) {
		e.preventDefault();
		setLoggedIn(false);
	}
	const [loggedIn, setLoggedIn] = useState(false);
  // const onUsernameChange = (text) => {
  //   setUsername(text)
  // }
 
	// return loggedIn ? (
	// 	<CreateEmployee handleCancel={handleCancel} />
	// ) : (
	// 	<Login handleSubmit={handleSubmit}/>
	// );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}



export default App;
