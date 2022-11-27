import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
  Footer,
} from "./components";

const App = () => (
  // START OF BODY WRAP
  <div className='w-full overflow-hidden'>
    {/* Start of Navbar */}
    {/* <div className='bg-springGreen'> */}
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* </div> */}
    {/* End of Navbar */}

    {/* Start of Hero Section */}
    <div className='bg-sunsetOrange'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    {/* End of Hero Section */}

    {/* Start of About Section */}
    <div className='bg-blueDianne'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
    </div>
    {/* End of About Section */}

    {/* Start of Projects Section */}
    <div className='bg-springGreen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>
    </div>
    {/* End of Projects Section */}

    {/* Start of Experience */}
    <div className='bg-lightBeige'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
        </div>
      </div>
    </div>
    {/* End of Experience */}

    {/* Start of Contact Section */}
    <div className='bg-blueDianne'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </div>
    {/* End of Contact Section */}

    {/* Start of Footer Section */}
    <div className='bg-springGreen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    {/* End of Footer Section */}
  </div>
  // END OF BODY WRAP
);

export default App;
