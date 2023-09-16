//import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import './App.css';
//import { useState } from "react";
import Form from "./components/Form";
//import NavBar from "./components/NavBar";
//import Cart from "./components/Cart";

// function App() {
//   let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
//   const handleSelectCity = (city: string) => {
//     console.log(city);
//   }
//   return (
//     <div>
//       <ListGroup cities={cities} heading="Cities" onSelectCity={handleSelectCity} />
//     </div>
//   );
// }

// function App(){
//     return (
//         <div>
//             <Alert>Hello <span>world</span></Alert>
//         </div>
//     )
// }

// function App(){
//     const [alertVisible, setAlertVisiblity]  = useState(false);

//     return <>
//             <div>
//                { alertVisible &&  <Alert onClose={() => setAlertVisiblity(false)} >My Alert</Alert>}
//                 <Button onClick={() => setAlertVisiblity(true)}>Hello React</Button>
//             </div>
//     </>
// }

// function App() {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
//   return (
//     <>
//       <div>
//         <NavBar cartItemsCount={cartItems.length}/>
//         <Cart cartItems={cartItems} onClear={()=> setCartItems([])}/>
//       </div>
//     </>
//   );
// }
function App() {
  return (
    <div>
     <Form/>
    </div>
  
  );
}

export default App;

