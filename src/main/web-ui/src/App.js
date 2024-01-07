import React from 'react';
import './ui/css/App.css'
import Dashboard from "./ui/page/Dashboard";
import {UserType} from "./ui/components/Constants";

function App() {
  return (
    <Dashboard userType={UserType.DOCTOR}/>
  );
}

export default App;
