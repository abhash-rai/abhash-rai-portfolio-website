import { useContext } from "react";
import MainContext from "./MainContext";

const Footer = ({ paddingTailwindValue }) => {
  const { normal_classes, gray_color } = useContext(MainContext);
  return (
    <div
      className={`px-6 ${normal_classes} ${gray_color} ${paddingTailwindValue} text-center`}
    >
      I'm always open for any suggestion or just to have a chat. Feel free to
      reach out to me:{" "}
      <a
        className="font-semibold text-white hover:text-[#45DBE2] !transition-all !duration-300 !ease-in-out"
        href="mailto:avash.cmling@gmail.com"
      >
        avash.cmling@gmail.com
      </a>
    </div>
  );
};

export default Footer;
