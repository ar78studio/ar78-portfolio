import styles from "../style";
import { functionImg, artemBodyImg } from "../assets/index.js";

const Hero = () => (
  <section
    id='home'
    className={`flex relative sm:flex-row xs:flex-row pt-10 lg:pt-20 pl-4 lg:px-16`}
  >
    <div className={`flex-row`}>
      <p className='text-blueDianne text-xs md:lg:text-2xl font-bold'>
        {"Hi, and welcome to the web portal"}
      </p>
      <h1 className='text-blueDianne w-full font-black font-montserrat text-2xl sm:text-[3.1rem] md:lg:text-[4.8rem] py-2 ss:py-6 sm:md:lg:py-14 '>
        {"By: Artem: Repin"}
      </h1>
      {/* Start Function */}
      <div className='flex sm:md:lg:justify-center'>
        <img
          src={functionImg}
          alt='Javascript Function'
          className='.max-w-full .h-auto object-contain'
        />
      </div>
      {/* Start Hero I am passioanate Dev */}
      <div className={`flex flex-row w-full`}>
        <span
          className={`text-blueDianne font-bold text-xs mr-1 mt-1 sm:text-[12px] md:text-[16px] mx-0 pb-10`}
        >
          {" "}
          {">>"}
        </span>
        <span
          className={`text-blueDianne font-bold text-xs mr-4 mt-1 sm:text-[0.75rem] md:text-[1rem] mx-0 sm:mr-30 lg:mr-40 pb-10`}
        >
          {
            "I am a passionate and thirsty Front End Engineer who appreciates good web design aesthetics and strives to produce clean code. While occasionally stalked by an Impostor Syndrome, I find my safety in learning new techonologies and libraries and perfecting my librarian-programmer skills. Currently, I am working on expanding my knowledge base in APIs and React.js"
          }
        </span>
      </div>
    </div>
    <div className={`flex flex-col relative z-[1] justify-end`}>
      <img
        src={artemBodyImg}
        alt='Artem: Repin Front End Engineer'
        className='.max-h-[70%] .w-auto object-contain'
      />
    </div>

    {/* To absolutely position the #1 I set the section class above to relative */}
    <div>
      <h1
        className={`text-sunsetOrange absolute tracking-wider text-4xl top-[94%] left-[45%] sm:top-[96%] sm:left-[45%] sm:text-5xl lg:top-[94.6%] lg:left-[45.5%] lg:text-7xl`}
      >
        {"#1"}
      </h1>

      <h1
        className={`text-blueDianne absolute tracking-wider text-4xl top-[93.8%] left-[44.7%] sm:top-[95.6%] sm:left-[44.7%] sm:text-5xl lg:top-[94.2%] lg:left-[45.3%] lg:text-7xl`}
      >
        {"#1"}
      </h1>
    </div>
  </section>
);

export default Hero;
