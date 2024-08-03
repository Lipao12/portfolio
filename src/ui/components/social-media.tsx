import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/Lipao12"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-[30px]" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/lipao121"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareXTwitter className="text-[30px]" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/filipe.1212/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="text-[30px]" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
