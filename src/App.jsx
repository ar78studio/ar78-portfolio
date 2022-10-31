import React from "react";
import styles from "./style";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
} from "./components";

// If react functional components simply returns jsx, then the braces may be removed and parantheses can be used alone.
const App = () => (
  <div className='bg-springGreen w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`bg-sunsetOrange ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Hero</div>
    </div>

    <div className={`bg-blueDianne ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>About</div>
    </div>

    <div className={`bg-springGreen ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Projects</div>
    </div>

    <div className={`bg-lightBeige ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Experience</div>
    </div>

    <div className={`bg-blueDianne ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Contact</div>
    </div>

    <div className={`bg-springGreen ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Footer</div>
    </div>
  </div>
);

export default App;
