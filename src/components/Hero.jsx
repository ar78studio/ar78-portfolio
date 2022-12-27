import styles from "../style";
import { functionImg, artemBodyImg } from "../assets/index.js";

const Hero = () => (
  <section
    id='home'
    className={`flex m-auto xl:max-w-[1280px] relative flex-row pt-[7rem] lg:pt-[9rem] px-6 md:px-[6rem] sm:px-[4rem]`}
  >
    <div className={`flex flex-col`}>
      <p className='text-blueDianne text-xs sm:text-lg md:text-2xl lg:text-2xl font-bold'>
        {"Hi, and welcome to the web portal"}
      </p>
      <h1 className='text-blueDianne w-max font-black font-montserrat text-[1.5rem] sm:text-[3.1rem] md:text-[4.8rem]'>
        {"By: Artem: Repin"}
      </h1>
      {/* Start Function */}
      <div className='hidden sm:block w-[100%] sm:w-[90%] justify-center'>
        <img src={functionImg} alt='Javascript Function' className='w-full' />
      </div>
      {/* Start Hero I am passionate Dev */}
      <div className={`flex w-fit mr-4`}>
        <span
          className={`text-blueDianne font-bold text-xs mr-2 mt-4 sm:text-[12px] md:text-[16px] mx-0 pb-10`}
        >
          {" "}
          {">>"}
        </span>
        <span
          className={`text-blueDianne flex flex-wrap font-bold text-[0.6rem] mt-4 sm:text-[0.75rem] md:text-[1rem] mr-2 sm:mr-30 lg:mr-40 sm:pb-20 pb-20 lg:pb-40`}
        >
          {
            "I am passionate and thirsty Front End Developer who appreciates good web design aesthetics and strives to produce clean code. Currently, I am working on expanding my knowledge base in React.js"
          }
        </span>
      </div>
    </div>

    <img
      src={artemBodyImg}
      alt='Artem: of the family Repin-Muhin, Front End Developer / Engineer'
      className='h-[15rem] sm:h-[28rem] md:h-[46rem] m-auto w-auto pb-0 mb-0 object-cover'
    />

    {/* To absolutely position the #1 I set the encompassing section class to relative */}
    <div>
      <h1
        className={`text-sunsetOrange absolute tracking-wider text-4xl top-[94.5%] left-[55.2%] sm:top-[94%] sm:left-[55%] sm:text-7xl`}
      >
        {"#1"}
      </h1>

      <h1
        className={`text-blueDianne absolute tracking-wider text-4xl top-[94%] left-[54.7%] sm:top-[93.6%] sm:left-[54.8%] sm:text-7xl `}
      >
        {"#1"}
      </h1>
    </div>
  </section>
);

export default Hero;
