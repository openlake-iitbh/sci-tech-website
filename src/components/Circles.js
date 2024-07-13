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
        <a className="hover:scale-150" href="/club/gdsc"><img src="club_logo/GDSC.png" alt="GDSC Club" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[50px] border-none bg-transparent"
        duration={35}
        delay={75}
        radius={110}
      >       
        <a className="hover:scale-150" href="/club/openlake"><img src="club_logo/OPENLAKE.png" alt="OPENLAKE Club" /></a>       
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[100px] border-none bg-transparent"
        duration={35}
        delay={30}
        radius={110}
      >        
        <a className="hover:scale-150" href="/club/ses"><img className="" src="club_logo/SES Logo.png" alt="SES Logo" /></a>
      </OrbitingCircles>

      {/* Middle Orbit */}
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        delay={90}
        reverse
      >        
        <a className="hover:scale-150" href="/club/blockchain"><img src="club_logo/BIB.png" alt="BIB Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        reverse
      >
        <a className="hover:scale-150" href="/club/motorsports"><img src="club_logo/Motorsports.png" alt="Motorsports Club" /></a>       
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[60px] border-none bg-transparent"
        duration={30}
        radius={180}
        delay={20}
        reverse
      >        
        <a className="hover:scale-150" href="/club/ingenuity"><img src="club_logo/ING.png" alt="ING Logo" /></a>
      </OrbitingCircles>

      {/* Outer Orbit */}
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={75}
        radius={240}
        reverse
      >        
        <a className="hover:scale-150" href="/club/epsilon"><img src="club_logo/epsilon_logo_new.png" alt="Epsilon Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={50}
        radius={240}
        reverse
      >
        <a className="hover:scale-150" href="/club/dsai"><img src="club_logo/DSAI.png" alt="DSAI Logo" /></a>        
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[70px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
        reverse
      >        
        <a className="hover:scale-150" href="/club/electromos"><img src="club_logo/Electromos.png" alt="Electromos Logo" /></a>
      </OrbitingCircles>
    </div>

  );
}

