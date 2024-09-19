import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { socialLinks } from "@/constants";

const InfoHeader = () => {
  return (
    <div>
      <div className="flex bg-secondary px-10 md:flex-row py-2 md:py-0 md:px-16 xl:px-40 h-16 md:h-10 justify-between items-center bg-primary-blue text-white text-sm">
        <div className=" w-full md:w-max flex md:gap-4 justify-between">
          <div className="flex items-center">
            <AiOutlineMail className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              info@zahads.com
            </a>
          </div>

          <div className="h-4 hidden md:block w-0.5 bg-primary-gold"></div>
          <div className="md:flex hidden items-center">
            <AiOutlineClockCircle className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              Mon - Fri: 9:00 - 18:00
            </a>
          </div>

          <div className="h-4 hidden md:block w-0.5 bg-primary-gold"></div>
          <div className="md:flex hidden items-center">
            <AiOutlinePhone className="mr-2" size={18} />
            <a href="/" className=" whitespace-nowrap">
              +971 56 7517147
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-1">
          <a href={socialLinks.facebook} target="_blank">
            <BsFacebook
              size={20}
              className="text-white hover:text-primary transition-all"
            />
          </a>
          <a href={socialLinks.instagram} target="_blank">
            <BsInstagram
              size={20}
              className="text-white hover:text-primary transition-all"
            />
          </a>
          <a href={socialLinks.linkedin} target="_blank">
            <BsLinkedin
              size={20}
              className="text-white hover:text-primary transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
