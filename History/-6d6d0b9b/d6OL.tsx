import { useLayoutEffect } from "react";
import { gsap } from "gsap";
function Loading() {
  // const { text } = useTypewriter({
  //   words: ["Developer", "Designer", "Photographer"],
  //   loop: {},
  // });

  useLayoutEffect(() => {
    gsap.to(".box", {
      duration: 3,
      y: 0,
      opacity: 1,
      delay: 0.5,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  return (
    <>
      <Aa>
        <Box className="box">
          <h1>
            For:
            <span style={{ color: "rgb(225, 197, 228)" }}>
              {/* &lt; */}
              <Typewriter
                options={{
                  strings: ["Isabela"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* &gt; */}
            </span>
          </h1>
        </Box>
      </Aa>
    </>
  );
}

export default Loading;
