import React from 'react'
import './App.css'
import Usergrading from './Usergrading'
import List from './List.jsx'


function App() {

    const fruits = [{ id : 1, name :"orange", calories : 95},
        {id : 2, name :"apple",calories : 65},
        {id : 3, name:"banana",calories : 955},
        {id : 4, name:"stawberry",calories : 105},
        {id : 5, name:"alnold",calories : 70},
        {id : 6, name:"pinchas",calories : 90}];
        
    const Vegetables = [{ id : 7, name :"potatoes", calories : 110},
        {id : 8, name :"colery",calories : 65},
        {id : 9, name:"Carrot",calories : 955},
        {id : 10, name:"Pepper",calories : 105},
        {id : 11, name:"Ginger",calories : 97},
        {id : 12, name:"pumkins",calories : 90}];



  return (
    <>
     <Usergrading isLoggedIn={true} userName="Emma"/>
    <List items={fruits} category = "fruits"/>
    <List items={vegetables} category = "vegetables"/>
    
  
   
   
    </>
  )
}

export default App
