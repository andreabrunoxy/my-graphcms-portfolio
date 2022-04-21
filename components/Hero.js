import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="h-full py-32 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-800 w-full mb-12 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col py-20">
        <Fade cascade triggerOnce>
          <h1 className="text-6xl text-gray-900 lg:text-center font-bold max-w-lg ">
            My Amazing{" "}
            <Fade triggerOnce>
              <span className="text-blue-900 dark:text-blue-500">Website</span>
            </Fade>
          </h1>
          <p className="text-gray-100 font-semibold text-xl mt-8 lg:text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
