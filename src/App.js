import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const dispatch=useDispatch();

  const user = useSelector(selectUser);


  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        //the user is logged in
         dispatch(
           login({
             displayName: user.displayName,
             email: user.email,
             photoUrl: user.photoURL,
           })
         );
      }
      else{
        // the user is logged out
      }
    })
  },[])










  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
