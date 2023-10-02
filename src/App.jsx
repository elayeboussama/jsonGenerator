import { useState } from "react";
import styles from "./style";
import {
  Navbar,
  Generator,
  Footer
} from "./components";


const App = () => {
  const [statePage, setStatePage]=useState("generator")
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setStatePage={setStatePage} statePage={statePage}/>
        </div>
      </div> 
  
      <div className={`bg-primary overflow-hidden ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Generator/> 
          <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App;
