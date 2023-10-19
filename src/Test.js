import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// const particleOptions = new ParticleOptions();
// console.log(particleOptions)

// const particleOptions = ParticleOptions;
// particleOptions.filter = ({ x, y, image }) => {
//       // Get pixel
//       const pixel = image.get(x, y);
//       // Make a particle for this pixel if blue > 50 (range 0-255)
//       return pixel.b > 50;
//     };
// particleOptions.color = ({ x, y, image }) => "#61dafb";

export default function Test() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <div>
        <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
    </div>
  );
}
