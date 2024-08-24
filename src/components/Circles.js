import OrbitingCircles from "./Orbit";

export default function ConcentricCircles() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="">
        <img className="h-16 sm:h-32" src="scitechgif.gif" alt="Scitech Logo" />
      </span>

      {/* Inner Orbit */}
      <OrbitingCircles
        className="h-[30px] w-[50px] border-none bg-transparent "
        duration={35}
        delay={50}
        radius={window.screen.width > 640 ? 110 : 70}
      >
        <a
          className="group hover:scale-150 relative"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/GDSC.png" alt="GDSC Club" />
          <p className="hidden text-white absolute -bottom-6 left-0 group-hover:block">
            GDSC
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] border-none bg-transparent"
        duration={35}
        delay={75}
        radius={window.screen.width > 640 ? 110 : 70}
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/openlake"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/OPENLAKE.png" alt="OPENLAKE Club" />
          <p className="hidden text-white absolute -bottom-6 left-0 group-hover:block">
            Openlake
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[100px] border-none bg-transparent"
        duration={35}
        delay={30}
        radius={window.screen.width > 640 ? 110 : 70}
      >
        <a
          className="bg- hover:scale-150 group relative"
          href="/club/ses"
          target="_blank"
          rel="noreferrer"
        >
          <img className="" src="club_logo/SES Logo.png" alt="SES Logo" />
          <p className="hidden text-white absolute bottom-2 left-1/4 group-hover:block">
            SES
          </p>
        </a>
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[60px] border-none bg-transparent"
        duration={30}
        radius={window.screen.width > 640 ? 180 : 130}
        delay={90}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/blockchain"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/BIB.png" alt="BIB Logo" />
          <p className="hidden text-white absolute -bottom-6 left-0 group-hover:block">
            BlockChain
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[60px] border-none bg-transparent"
        duration={30}
        radius={window.screen.width > 640 ? 180 : 130}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/Motorsports.png" alt="Motorsports Club" />
          <p className="hidden text-white absolute -bottom-6 left-0 group-hover:block">
            MotorSports
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[60px] border-none bg-transparent"
        duration={30}
        radius={window.screen.width > 640 ? 180 : 130}
        delay={20}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/ingenuity"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/ING.png" alt="ING Logo" />
          <p className="hidden text-white absolute -bottom-4 left-0 group-hover:block">
            Inenuity
          </p>
        </a>
      </OrbitingCircles>

      {/* Outer Orbit */}
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[70px] border-none bg-transparent"
        duration={20}
        delay={75}
        radius={window.screen.width > 640 ? 240 : 180}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/epsilon"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/epsilon_nobg.png" alt="Epsilon Logo" />
          <p className="hidden text-white absolute -bottom-4 left-0 group-hover:block">
            Epsilon
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[70px] border-none bg-transparent"
        duration={20}
        delay={50}
        radius={window.screen.width > 640 ? 240 : 180}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/dsai"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/DSAI.png" alt="DSAI Logo" />
          <p className="hidden text-white absolute -bottom-6 left-4 group-hover:block">
            DSAI
          </p>
        </a>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] sm:h-[50px] sm:w-[70px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={window.screen.width > 640 ? 240 : 180}
        reverse
      >
        <a
          className="hover:scale-150 group relative"
          href="/club/electromos"
          target="_blank"
          rel="noreferrer"
        >
          <img src="club_logo/Electromos.png" alt="Electromos Logo" />
          <p className="hidden text-white absolute -bottom-6 left-0 group-hover:block">
            Electromos
          </p>
        </a>
      </OrbitingCircles>
    </div>
  );
}
