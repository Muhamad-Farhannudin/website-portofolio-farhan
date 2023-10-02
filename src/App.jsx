import "./index.css";
import SideBar from "./components/SideBar";
import LoadingAnimation from "./components/Loading";
import Content from "../src/Pages/Content/content";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const LoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(LoadingTimeout);
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="bg-dark w-full p-10 md:p-24 h-[6350px] md:h-[4900px] lg:h-[3700px] mx-auto min-h-screen max-w-screen-2xl">
          <SideBar />
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;
