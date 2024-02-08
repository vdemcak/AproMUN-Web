export const Hero = () => {
  return (
    <div className="relative h-[100dvh] w-full px-5 transition-all duration-300">
      <img
        className="absolute inset-0 h-full w-full bg-cover object-cover"
        src="/photos/apromun-2022.png"
        alt="AproMUN 2022 conference photo"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-75"></div>

      <div className="relative mx-auto flex h-full w-full flex-col justify-end pb-12 md:max-w-8xl 2xl:pb-32">
        <span className="font-montserrat text-sm font-bold text-white mix-blend-overlay md:text-base">
          APROMUN 2023
        </span>
        <span className="font-montserrat text-4xl font-bold leading-[0.94] text-white md:text-7xl">
          #3 MUN <br /> in the world is
        </span>
        <span className="font-montserrat text-4xl font-black text-white mix-blend-overlay md:text-7xl">BACK</span>

        <p className="mt-2 max-w-md font-montserrat text-sm text-white md:text-base">
          Come join us in the picturesque city of Bratislava for the 2023 edition of AproMUN.
        </p>

        <a href="https://mymun.com/conferences/apromun-2023" className="relative mt-7 w-min px-6 py-3">
          <div className="absolute inset-0 rounded-full bg-white opacity-40 mix-blend-overlay"></div>
          <span className="relative z-10 whitespace-nowrap font-montserrat text-sm font-bold text-white md:text-base">
            SIGN UP NOW
          </span>
        </a>
      </div>
    </div>
  );
};
