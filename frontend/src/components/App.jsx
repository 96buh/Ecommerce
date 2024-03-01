import Header from "./Header";
import PosterArea from "./PosterArea";
import TypeArea from "./TypeArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { AuthProvider, useAuth } from "../auth/AuthContext";
import Footer from "./Footer";
import ItemsInCart from "./ItemsInCart";
import FeatureProducts from "./FeatureProducts";
function App() {
  console.log(localStorage.getItem("token"));

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <div>
                  <Header />
                  <PosterArea />
                  <TypeArea />
                  <FeatureProducts />
                </div>
              }
            ></Route>
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/cart" element={<ItemsInCart />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
