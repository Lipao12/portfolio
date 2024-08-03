import SocialMediaIcons from "./ui/components/social-media";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-64 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center mt-6">
          <p className="font-playfair font-semibold text-2xl text-secundary">
            FILIPE MAI
          </p>
          <p className="font-playfair text-md text-secundary mt-4 md:mt-0">
            ©{currentYear} MAI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
