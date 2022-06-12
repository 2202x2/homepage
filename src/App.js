/* eslint-disable jsx-a11y/heading-has-content */
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Project from "./components/project";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    var speed = 200;
    const optionsTitle = {
      strings: ["4404 ^5000", "4404 = 2202 x 2^5000", "4404 = 8808 / 2^5000"],
      typeSpeed: speed,
      backSpeed: speed,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    };
    const optionsDescription = {
      strings: ["^1500Projects have been found!"],
      typeSpeed: 75,
    };
    typed.current = new Typed(titleRef.current, optionsTitle);
    typed.current = new Typed(descriptionRef.current, optionsDescription);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="bg-black text-white text-center p-7">
      <div className="h-screen flex flex-col column items-center justify-center">
        <a href="https://github.com/2202x2">
          <h1
            className="my-14 text-8xl font-bold hover:underline"
            ref={titleRef}
          ></h1>
        </a>
        <span ref={descriptionRef}></span>
        <FontAwesomeIcon
          className="text-5xl opacity-30 absolute bottom-7"
          icon={faArrowDown}
        />
      </div>
      <div className="grid auto-rows-auto grid-cols-2 gap-x-52 gap-y-10 my-5">
        <Project
          name="4404 homepage"
          description="🏠 The very page you're looking at!"
          link="https://4404.cf"
          icons={[faReact, faCss3Alt]}
          github="https://github.com/2202x2/homepage"
        />
        <Project
          name="Freenom Domain Checker"
          description="📰 A website that uses Freenom to check the available free domains"
          link="https://freenom.4404.cf"
          icons={[faReact]}
          github="https://github.com/2202x2/freenom"
        />
        <Project
          name="QRCode Generator"
          description="🔳 A simple QRCode generator"
          link="https://qr.4404.cf"
          icons={[faJs, faHtml5, faCss3Alt]}
          github="https://github.com/2202x2/qrcode"
        />
      </div>
    </div>
  );
}
