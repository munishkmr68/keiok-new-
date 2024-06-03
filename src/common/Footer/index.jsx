import Image from "next/image";
import ClipartImg from "../../assets/images/clipart-img.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="max-w-[484px] mx-auto  p-4 flex flex-col gap-1.5 items-center">
          <ol className="inline-flex items-center justify-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center text-xs font-medium text-t4">
              © choose MY shop 2024
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-t4">|</span>
                <a href="#" className="ms-1 text-xs font-medium text-t4 underline">
                  Privacy Policy
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="text-t4">|</span>
                <span className="ms-1 text-xs font-medium text-t4 underline">
                  Terms of Service
                </span>
              </div>
            </li>
          </ol>

          <ol className="inline-flex items-center justify-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-xs font-medium text-t4 underline"
              >
                Shipping and Returns
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-t4">|</span>
                <a href="#" className="ms-1 text-xs font-medium text-t4 underline">
                  Cancel anytime
                </a>
              </div>
            </li>
          </ol>
          <p className="text-xs font-medium text-t4 text-center underline">
            Do Not Sell My Personal Information
          </p>
          <Image className="max-w-[58px] mt-1" src={ClipartImg} alt="user-img" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
