import React, { useEffect, useState } from 'react';
import './App.css';
import SiteNav from './components/homePage/SiteNav';
import Home from './components/homePage/Home';
import Footer from './components/Footer';
import {Routes, Route, useLocation} from 'react-router-dom';
import userService from './services/UserService';

function App() {
  const [currentUser, setPageData] = useState({
    firstName: "Unknown",
    lastName: "User",
    isLoggedIn: false
  }
)

const { state } = useLocation()

useEffect(() => {
  console.log("firing useEffect for getting state object", state);
  if(state?.type === "USER_CARD"){
    console.log("App is doing something with the userCard");
  }else( console.log("Error has accured in the app level for USER_CARD"))
  userService.currentUser().then(onGetCurrentUserSuccess).catch(onGetCurrentUserError)
},)
const onGetCurrentUserSuccess = (response) => {
  let userCurrent = response.data.item.id
  console.log(userCurrent)

  userService.getUserById(userCurrent).then(onGetUserIdSuccess).catch(onGetUserIdError)
};
const onGetCurrentUserError = (userCurrentError) => {
  console.error("Error On GetCurrent Response", userCurrentError)
};
const onGetUserIdSuccess = (response) => {
  let userId = response.data.item

  setPageData((prevState) => {
    const upd = {...prevState};
    upd.isLoggedIn = true
    upd.firstName = userId.firstName
    upd.lastName = userId.lastName
    return upd;
  })
  console.table("get userId successful", response)
}
const onGetUserIdError = (userIdError) => {
  console.error("getUserById not responding to call check Api connection", userIdError)
};

  return (
    <React.Fragment>
      <SiteNav user={currentUser}/>
      <Routes>
        <Route path='/Home' element={<Home user={currentUser}/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
