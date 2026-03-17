// import Footer from "./Components/Footer";
// import Marquees from "./Components/Marquees";
// import Navbar from "./Components/Navbar";
// import Products from "./Components/Products";
// import Stripes from "./Components/Stripes";
// import Work from "./Components/Work";

// function App() {
//   return (
//     <div className="bg-gray-950 text-white h-full w-screen">
//       <Navbar />
//       <Work />
//       <Stripes />
//       <Products />
//       <Marquees />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useEffect } from "react";
import Footer from "./Components/Footer";
import Marquees from "./Components/Marquees";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        smoothTouch: true,
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen w-screen">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Footer />
    </div>
  );
}

export default App;
