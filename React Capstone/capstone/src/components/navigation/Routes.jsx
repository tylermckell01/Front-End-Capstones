// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   NavLink,
// } from "react-router-dom/cjs/react-router-dom.min";

// import Header from "./Header";
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import MyCart from "../pages/MyCart";
// import Contact from "../pages/Contact";
// import About from "../pages/About";

// export default function Routes(props) {
//   return (
//     <BrowserRouter>
//       <Route path="/" render={() => <Header />} />
//       <div className="body-container">
//         <Switch>
//           <Route path="/home" component={Home} />
//           <Route path="/products" component={Products} />
//           <Route path="/my-cart" component={MyCart} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/about" component={About} />
//         </Switch>
//         <NavLink to="/home">
//           <div className="home-wrapper">Home</div>
//         </NavLink>

//         <NavLink to="/products">
//           <div className="products-wrapper">Products</div>
//         </NavLink>

//         <NavLink to="/my-cart">
//           <div className="my-cart-wrapper">My Cart</div>
//         </NavLink>

//         <NavLink to="/contact">
//           <div className="contact-wrapper">Contact</div>
//         </NavLink>

//         <NavLink to="/about">
//           <div className="about">About</div>
//         </NavLink>
//         <div>this text is from the routes.jsx file</div>
//       </div>
//     </BrowserRouter>
//   );
// }
