import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styles from "./style";
import "./index.css";
import { Fade } from "react-awesome-reveal";
import SocialLinks from "./components/SocialLinks";

import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
  Footer,
} from "./components";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className='grid h-screen place-items-center'>
          <ClimbingBoxLoader color={"#233d4d"} loading={loading} size={20} />
        </div>
      ) : (
        <div className='w-full overflow-hidden'>
          <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className='bg-sunsetOrange'>
            <div className={`${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Fade>
                  <Hero />
                </Fade>
              </div>
            </div>
          </div>
          <div className='bg-blueDianne'>
            <div className={`  ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <About />
              </div>
            </div>
          </div>
          <div className='bg-springGreen'>
            <div className={`  ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Projects />
              </div>
            </div>
          </div>
          <div className='bg-lightBeige'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Experience />
              </div>
            </div>
          </div>
          <div className='bg-blueDianne'>
            <div className={`  ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Contact />
              </div>
            </div>
          </div>
          <div>
            <SocialLinks />
          </div>
          <div className='bg-springGreen'>
            <div className={`  ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
