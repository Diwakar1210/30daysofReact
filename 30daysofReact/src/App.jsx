import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Food from "./Food.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ArrayOfObjects from "./ArrayOfObjects.jsx";
import ToDoList from "./ToDoList.jsx";
import UseEffect from "./UseEffect.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DigitalClock from "./DigitalClock.jsx";
import { createContext, useState } from "react";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import {BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom';
import Product from "./Product.jsx";
import ProductList from "./ProductList.jsx";
import ProductDetails from "./ProductDetails.jsx";

export let UserContext = createContext();

function App() {

  let [user,setUser] = useState({uName:"Diwakar",age:25,email:"you@awersome.com"})

  console.log(UserContext);

  const fruits = [{id:1,name: "apple", calories: 200},
    {id:2,name:"orange",calories:100},
    {id:3,name: "mango", calories:45},
    {id:4,name: "grapes", calories:10}];

    const vegetables = [{id:5,name: "potato", calories: 110},
      {id:6,name:"onion",calories:50},
      {id:7,name: "tomato", calories:45},
      {id:8,name: "ginger", calories:10}];

      let userName = "Diwakar";

  return (
    <>
     <nav>
    <Router>
    <ol>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to={`/login/${userName}`}>Login</Link>
      </li>
      <li>
        <Link to="/todo">To DO</Link>
      </li>
      <li>
        <Link to="/products">Product</Link>
      </li>
    </ol>
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* Route Parameter */}
        <Route path="/login/:userName" element={ <Login/> } />
        <Route path="/todo" element={ <ToDoList/> } />
        <Route path="/products" element={ <Product/> }>
          <Route index element={ <ProductList/> } />
          <Route path="list" element={ <ProductList/> } />
          <Route path="details" element={ <ProductDetails/> } />
        </Route>
      </Routes>
    </Router>
   </nav>
   <main>

    <UserContext.Provider value={{user}}>
      
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Footer />

      <Students name="Diwakar" age="none" isAlive={true} />
      <Students name="Akash Adithya" age={22} isAlive={true} />
      <Students name="Shanthi" age={49} isAlive={true} />
      <Students name="Balamurugan" age={56} isAlive={true} />
      <Students />

      <UserGreeting isLoggedIn={true} username="Jack"/>

    {fruits.length > 0 ?  <List item={fruits} category="Fruits" /> : null}
     
     {vegetables.length > 0 ?  <List item={vegetables} category="Vegetables" /> : null}

    <ProfilePicture />

    <MyComponent />

    <Counter />

    <ColorPicker />

    <ArrayOfObjects />

    <ToDoList/>

    <UseEffect/>

    <DigitalClock/>

    </UserContext.Provider>
   </main>
    </>
  )
}

export default App
