import OrbitingCircles from "./Orbit";

export default function ConcentricCircles() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="">
        <img className="h-32" src="scitechgif.gif" alt="Scitech Logo" />
      </span>

      {/* Inner Orbit */}
      <OrbitingCircles
        className="h-[30px] w-[50px] border-none bg-transparent"
        duration={35}
        delay={50}
        radius={110}
      >
        <a className="hover:scale-150" href="/"><img src="GDSC.png" alt="GDSC Club" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] border-none bg-transparent"
        duration={35}
        delay={75}
        radius={110}
      >       
        <a className="hover:scale-150" href="/"><img src="OPENLAKE.png" alt="OPENLAKE Club" /></a>       
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[100px] border-none bg-transparent"
        duration={35}
        delay={30}
        radius={110}
      >        
        <a className="hover:scale-150" href="/"><img className="" src="SES Logo.png" alt="SES Logo" /></a>
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        delay={90}
        reverse
      >        
        <a className="hover:scale-150" href="/blockchain"><img src="BIB.png" alt="BIB Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        reverse
      >
        <a className="hover:scale-150" href="/"><img src="Motorsports.png" alt="Motorsports Club" /></a>       
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        delay={20}
        reverse
      >        
        <a className="hover:scale-150" href="/"><img src="ING.png" alt="ING Logo" /></a>
      </OrbitingCircles>

      {/* Outer Orbit */}
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={75}
        radius={240}
        reverse
      >        
        <a className="hover:scale-150" href="/"><img src="epsilon_logo_new.png" alt="Epsilon Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={50}
        radius={240}
        reverse
      >
        <a className="hover:scale-150" href="/"><img src="DSAI.png" alt="DSAI Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
        reverse
      >        
        <a className="hover:scale-150" href="/"><img src="Electromos.png" alt="Electromos Logo" /></a>
      </OrbitingCircles>
    </div>

  );
}

