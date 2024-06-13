import Image from "next/image";
import { Hover } from "./animate/animate";

const Footer: React.FC = () => {
  return (
    <footer className="px-[90px] py-32">
      <div className="flex flex-row flex-wrap justify-between font-light xl:mx-40 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-normal">Contact</h1>
          <ul>
            <li>Work inquires: work@vaultflow.com</li>
            <li>PR and speaking: press@vaultflow.com</li>
            <li>New business: newbusiness@vaultflow.com</li>
          </ul>
          <div>
            <h1 className="text-2xl font-normal pb-4">Careers</h1>
            <p>Careers@vaultflow.com</p>
          </div>
          <p className="text-gray-500">
            © 2023 Vaultflow. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 justify-between">
          <div>
            <h1 className="text-2xl font-normal pb-4">Address</h1>
            <p>
              398 11th Street, Floor 2 <br /> San Francisco, CA 94103
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-normal pb-4">Social</h1>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="flex items-end">
          <div className={`flex gap-2 items-end ${Hover.classes}`}>
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={22}
              height={22}
              priority={true}
            />
            <h1 className="text-xl font-bold">Vaultflow</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
