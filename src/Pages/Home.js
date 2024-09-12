import { styles } from "../styles";
import { StarsCanvas } from "../Components";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate(); // Initialize the hook for internal navigation

  const handlePortfolioClick = () => {
    navigate('/game-portfolio'); // Redirect to the internal route
  };
  return (
    <div className='relative z-0'>
    <section className={`flex flex-col w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[180px] max-w-[75rem] mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#7d97b0]'>Austin.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an Engineering student at the University of California Riverside.
            Please take a look around.
          </p>
          <div className="flex justify-center items-center mt-auto">
      <button
            onClick={handlePortfolioClick}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-xl mt-24 largeButtonText transition-colors duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
      </div>
    </section>
    <StarsCanvas />
    </div>
  );
};

export default Home;
