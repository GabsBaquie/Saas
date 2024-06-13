interface BgProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
}

const Background: React.FC<BgProps> = ({
  backgroundImage,
  children,
  className,
}) => {
  return (
    <div
      className={`w-screen h-full`}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${backgroundImage})`,
      }}>
      {children}
    </div>
  );
};

export default Background;
