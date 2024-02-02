import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  // https://chatapp-backend-2vo0.onrender.com
  axios.defaults.baseURL='https://chatapp-backend-2vo0.onrender.com';
  axios.defaults.withCredentials= true;//defined so that we can set cookie from our apis

  return (
    <div >
      <UserContextProvider>
        <Routes/>
        </UserContextProvider>
      
    </div>
  );
}

export default App;
