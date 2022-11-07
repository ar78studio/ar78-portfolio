import styles from "../style";
import { functionImg, artemBodyImg } from "../assets/index.js";

const Hero = () => (
  <section
    id='home'
    className={`flex md:flex-row flex-col pt-20 ${styles.paddingX}`}
  >
    <div>
      <p className='text-blueDianne font-bold'>
        {"Hi, and welcome to the web portal"}
      </p>
      <h1 className='text-blueDianne font-black font-montserrat text-[1.9rem] md:text-[3.3rem] lg:text-[5rem]'>
        {"By: Artem: Repin"}
      </h1>
      <div className='flex md:lg:justify-start'>
        <img
          src={functionImg}
          alt='Javascript Function'
          className='object-scale-down'
        />
      </div>

      <div className={`flex flex-row w-full`}>
        <span
          className={`text-blueDianne font-bold text-xs md:text-lg mx-0 pr-[0.5rem]`}
        >
          {" "}
          {">>"}
        </span>
        <span
          className={`text-blueDianne font-bold text-xs md:text-lg mx-0 sm:mr-80 lg:mr-40 pb-10`}
        >
          {
            "  I am a passionate and thirsty Front End Engineer who appreciates good web design aesthetics and strives to produce clean code. While occasionally stalked by an Impostor Syndrome, I find my safety in learning new techonologies and libraries and perfecting my librarian-programmer skills. Currently, I am working on expanding my knowledge base in APIs and React.js"
          }
        </span>
      </div>
    </div>
    <div className={`flex justify-end`}>
      <img
        src={artemBodyImg}
        alt='Artem: Repin Front End Engineer'
        className=' object-scale-down pb-0'
      />
    </div>
  </section>
);

export default Hero;
