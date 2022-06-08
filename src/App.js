/* eslint-disable jsx-a11y/heading-has-content */
import { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function App() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    var speed = 200;
    const optionsTitle = {
      strings: [
        "4404 ^5000",
        "4404 = 2202 x 2^5000",
        "4404 = 2202 * 2^5000",
        "4404 = 8808 / 2^5000",
      ],
      typeSpeed: speed,
      backSpeed: speed,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    };
    const optionsDescription = {
      strings: ["^1500No projects found (at the moment)"],
      typeSpeed: 75,
    };
    typed.current = new Typed(titleRef.current, optionsTitle);
    typed.current = new Typed(descriptionRef.current, optionsDescription);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="text-white bg-black h-screen flex flex-col column items-center justify-center text-center">
      <a href="https://github.com/2202x2">
        <h1
          className="my-14 text-8xl font-bold hover:underline"
          ref={titleRef}
        ></h1>
      </a>
      <span ref={descriptionRef}></span>
    </div>
  );
}
