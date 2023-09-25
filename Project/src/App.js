import Navbar from "./components/Navbar";
import Form from "./components/Form"
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alert,setAlert] = useState({msg:'Welcome',type:'success'});
  const showAlert = (message,type) => {
    setAlert ({
      msg : message,
      type : type
    })
  }
  return (
    <div >
     <Navbar title='TextUtil' />
     <Alert  alert={alert} />
     <div className="container my-3">
     <Form heading="Enter the text below" showAlert= {showAlert} />
     </div>
    </div>
  );
}

export default App;
