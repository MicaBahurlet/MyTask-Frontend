import { useEffect } from "react";
import TaskCard from "../../components/TaskCard/tasksCard.jsx";

import { useTasks } from "../../context/taskContext.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {



  return (
    <>
      
      <Hero />

      <Footer />


    </>  
  );
}

export default Home;
