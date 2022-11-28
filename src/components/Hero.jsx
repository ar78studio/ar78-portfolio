import styles from "../style";
import { functionImg, artemBodyImg } from "../assets/index.js";

const Hero = () => (
  <section
    id='home'
    className={`flex m-auto xl:max-w-[1280px] relative sm:flex-row xs:flex-row pt-[7rem] lg:pt-[9rem] pl-6 md:px-[6rem] sm:px-[4rem]`}
  >
    <div className={`flex-col`}>
      <p className='text-blueDianne text-xs sm:text-lg md:text-2xl lg:text-2xl font-bold'>
        {"Hi, and welcome to the web portal"}
      </p>
      <h1 className='text-blueDianne w-full font-black font-montserrat text-[1.4rem] sm:text-[3.1rem] md:text-[4.8rem]'>
        {"By: Artem: Repin"}
      </h1>
      {/* Start Function */}
      <div className='flex w-[130%] sm:w-[90%] justify-center'>
        <img src={functionImg} alt='Javascript Function' className='w-full' />
      </div>
      {/* Start Hero I am passioanate Dev */}
      <div className={`flex flex-row w-full mr-4`}>
        <span
          className={`text-blueDianne font-bold text-xs mr-3 mt-1 sm:text-[12px] md:text-[16px] mx-0 pb-10`}
        >
          {" "}
          {">>"}
        </span>
        <span
          className={`text-blueDianne flex flex-wrap font-bold text-[0.6rem] mr-4 mt-1 sm:text-[0.75rem] md:text-[1rem] mx-0 sm:mr-30 lg:mr-40 pb-20 lg:pb-40`}
        >
          {
            "I am a passionate and thirsty Front End Engineer / Developer who appreciates good web design aesthetics and strives to produce clean code. If occasionally stalked by an Impostor Syndrome, I find my safety in consistent learning of new techonologies and libraries and reinforcing the gained knoledge along with perfecting my developer-librarian skills in the Google Library. Currently, I am working on expanding my knowledge base in APIs and React.js"
          }
        </span>
      </div>
    </div>
    <div className={`flex flex-col z-[1] justify-end`}>
      <img
        src={artemBodyImg}
        alt='Artem: of the family Repin-Muhin, Front End Developer / Engineer'
        className='max-full w-auto object-contain mr-4'
      />
    </div>

    {/* To absolutely position the #1 I set the encompassing section class to relative */}
    <div>
      <h1
        className={`text-sunsetOrange absolute tracking-wider text-4xl top-[96.4%] left-[45.2%] sm:top-[96%] sm:left-[45%] sm:text-5xl lg:top-[95.3%] lg:left-[45.5%] lg:text-7xl`}
      >
        {"#1"}
      </h1>

      <h1
        className={`text-blueDianne absolute tracking-wider text-4xl top-[96%] left-[44.7%] sm:top-[95.6%] sm:left-[44.7%] sm:text-5xl lg:top-[95%] lg:left-[45.3%] lg:text-7xl`}
      >
        {"#1"}
      </h1>
    </div>
  </section>
);

export default Hero;
