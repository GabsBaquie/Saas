import Image from "next/image";
import { AnimatedLogo, HoverLogo } from "./animate/animate";

const Logos: React.FC = () => {
  const logos = [
    {
      src: "/images/logos/Logo-1.svg",
      alt: "Logo 1",
      width: 60,
      height: 40,
    },
    {
      src: "/images/logos/Logo-2.svg",
      alt: "Logo 2",
      width: 90,
      height: 100,
    },
    {
      src: "/images/logos/Logo-3.svg",
      alt: "Logo 3",
      width: 70,
      height: 60,
    },
    {
      src: "/images/logos/Logo-4.svg",
      alt: "Logo 4",
      width: 150,
      height: 150,
    },
    {
      src: "/images/logos/Logo-5.svg",
      alt: "Logo 5",
      width: 80,
      height: 80,
    },
    {
      src: "/images/logos/Logo-6.svg",
      alt: "Logo 6",
      width: 100,
      height: 100,
    },
    {
      src: "/images/logos/Logo-7.svg",
      alt: "Logo 7",
      width: 50,
      height: 50,
    },
  ];

  return (
    <div className="flex flex-col items-center text-center gap-9 pt-[140px] -mt-1 bg-[#0B0221]">
      <p className="text-lg font-extralight px-8">
        Trusted by teams at over 1,000 of the world’s leading organizations
      </p>
      <div className="flex gap-8 flex-wrap md:gap-12 justify-center items-center max-w-full">
        {logos.map((logo, index) => (
          <AnimatedLogo key={index} index={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`${HoverLogo.classes} m-2`}
            />
          </AnimatedLogo>
        ))}
      </div>
    </div>
  );
};

export default Logos;
