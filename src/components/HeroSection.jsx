import ButtonHeading from "./ui/ButtonHeading";
import myPhoto from "../../public/images/karinaPhoto.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="text-white my-10">
        <h1 className="text-5xl font-bold">
          Hello, I'm <span className="text-orange-400">Karina Ghaisani</span>
        </h1>
        <h2 className="mt-4">A Front End Developer | Web Developer</h2>
        <h2>Undergraduate student majoring in Information Systems</h2>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        <ButtonHeading bg="bg-yellow-200" color="text-orange-500">
          Resume
        </ButtonHeading>
        <ButtonHeading bg="bg-orange-400" color="text-black">
          Hire Me
        </ButtonHeading>
      </div>

      {/* Foto & Skill Badge */}
      <div className="relative w-full flex justify-center items-center mt-8">
        {/* Container relatif agar skill bisa absolute terhadapnya */}
        <div className="relative w-[60vw] max-w-[400px] aspect-square">
          {/* Bg Circle */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full z-0" />

          {/* Photo */}
          <div className="absolute z-10 flex items-center justify-center">
            <img
              src={myPhoto}
              alt="Karina Ghaisani"
              className="w-2/3 h-2/3 object-cover"
            />
          </div>

          {/* Skill badges */}
          <div className="absolute top-0 left-10 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">ReactJS</span>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">JavaScript</span>
          </div>
          <div className="absolute bottom-0 -left-10 translate-x-1/3 translate-y-1/3 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">HTML</span>
          </div>
          <div className="absolute top-20 -left-20 translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">ExpressJs</span>
          </div>
          <div className="absolute top-21 right-0 translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md">
            <span className="text-sm font-semibold">NodeJs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
