import Marquee from "./Marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaFigma,
  FaNpm,
  FaSlack,
  FaDiscord,
} from "react-icons/fa";

function Marquees() {
  const marqueeData = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={70} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={70} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={70} /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" size={70} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={70} /> },
    { name: "Docker", icon: <FaDocker color="#2496ED" size={70} /> },
    { name: "GitHub", icon: <FaGithub color="#181717" size={70} /> },
    { name: "Figma", icon: <FaFigma color="#F24E1E" size={70} /> },
    { name: "NPM", icon: <FaNpm color="#CB3837" size={70} /> },
    { name: "Slack", icon: <FaSlack color="#4A154B" size={70} /> },
    { name: "Discord", icon: <FaDiscord color="#5865F2" size={70} /> },
  ];

  return (
    <div
      className="w-full py-12 flex flex-col gap-12 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Marquee items={marqueeData} direction="right" />
      <Marquee items={marqueeData} direction="left" />
    </div>
  );
}

export default Marquees;