import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import Chat from "./Chat.jsx";
// import Chat from "./Chat";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    
    return (
      <div>
     
<Chat/>
      </div>
       
    )
  }

  return (
    <RegisterAndLoginForm/>
  );
}

