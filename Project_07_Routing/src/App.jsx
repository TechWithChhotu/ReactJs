import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-500 w-screen h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
