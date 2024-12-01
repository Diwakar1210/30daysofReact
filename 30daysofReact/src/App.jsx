import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Food from "./Food.jsx";
import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";


function App() {

  return (
    <>
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
      {/* Default props */}
      <Students />

      <UserGreeting isLoggedIn={true} username="Jack"/>
    </>
  )
}

export default App
