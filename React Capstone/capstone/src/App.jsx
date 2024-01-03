import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import MyCart from "./components/pages/MyCart";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/my-cart" component={MyCart} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
