import styles from "../style";
import { functionImg, artemBodyImg } from "../assets/index.js";

const Hero = () => (
  <section
    id='home'
    className={`flex relative sm:flex-row xs:flex-row pt-10 lg:pt-20 pl-4 lg:px-16`}
  >
    <div className={`flex-row`}>
      <p className='text-blueDianne text-[0.7rem] md:lg:text-2xl font-bold'>
        {"Hi, and welcome to the web portal"}
      </p>
      <h1 className='text-blueDianne font-black font-montserrat text-[1.1rem] sm:text-[3.1rem] lg:text-[5rem]'>
        {"By: Artem: Repin"}
      </h1>
      <div className='flex md:lg:justify-start'>
        <img
          src={functionImg}
          alt='Javascript Function'
          className='.max-w-full .h-auto'
        />
      </div>

      <div className={`flex flex-row w-full`}>
        <span
          className={`text-blueDianne font-bold text-[0.500rem] mr-1 mt-1 sm:text-[12px] md:text-[16px] mx-0 pb-10`}
        >
          {" "}
          {">>"}
        </span>
        <span
          className={`text-blueDianne font-bold text-[0.500rem] mr-4 mt-1 sm:text-[12px] md:text-[16px] mx-0 sm:mr-30 lg:mr-40 pb-10`}
        >
          {
            "I am a passionate and thirsty Front End Engineer who appreciates good web design aesthetics and strives to produce clean code. While occasionally stalked by an Impostor Syndrome, I find my safety in learning new techonologies and libraries and perfecting my librarian-programmer skills. Currently, I am working on expanding my knowledge base in APIs and React.js"
          }
        </span>
      </div>
    </div>
    <div className={`flex flex-col justify-end`}>
      <img
        src={artemBodyImg}
        alt='Artem: Repin Front End Engineer'
        // className='h-5/6 w-full sm:w-full md:h-full lg:w-fit p-0 m-0 sm:shrink-0'
        // className='.max-w-full .h-auto'
        className='.max-h-[70%] .w-auto'
      />
    </div>

    {/* To absolutely position the #1 I set the section class above to relative */}
    <div>
      <h1
        className={`text-sunsetOrange absolute top-[94%] left-[45%] text-5xl lg:top-[94.5%] lg:left-[45.5%] lg:text-8xl`}
      >
        {"#1"}
      </h1>

      <h1
        className={`text-blueDianne absolute top-[93.5%] left-[44.5%] text-5xl lg:top-[94.2%] lg:left-[45.2%] lg:text-8xl`}
      >
        {"#1"}
      </h1>
    </div>
  </section>
);

export default Hero;
