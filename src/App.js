import React, { useState } from "react";
import "./App.css";
import UseRefEx from "./Components/UserefEx/UseRefEx";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const [show ,setshow ]=useState(false)

  const addUseraHandler = (uName, uAge) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    setshow(true)
  };

  return (
    <>
    {/* <div className="App">
      <AddUser onAddUserHandler={addUseraHandler} />
{  show === true ? <UsersList users={userList} />:null}
    </div> */}
    <UseRefEx/>
    </>
  );
}

export default App;
