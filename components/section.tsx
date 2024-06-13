import Image from "next/image";
import Link from "next/link";
import { AnimatedCard, AnimatedText, Hover } from "./animate/animate";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const shadowCard = {
  boxShadow:
    "0px -3px 10px rgba(255, 255, 255, 0.5), 0px 0px 40px rgba(187, 155, 255, 0.15)",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
};

const Section: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-8 sm:px-16 lg:px-32 gap-16 relative 2xl:mx-40">
      <AnimatedText classname="flex flex-col gap-12 items-center mb-12">
        <Image
          src={"/images/shadow.png"}
          alt={""}
          width={450}
          height={400}
          className="absolute -top-24"
        />
        <h2 className="text-5xl max-w-96 text-center">
          Features that work for your future.
        </h2>
        <p className="text-center text-lg font-extralight">
          Check out our amazing features and experience the <br />
          power of Vaultflow for yourself.
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-16 text-left">
        <AnimatedCard directionX={-50} classname="col-span-2 md:col-span-1">
          <Card style={{ ...shadowCard }} className="p-6 sm:p-11">
            <div className="flex flex-col gap-4">
              <Image
                src={"/images/Icon-Image-1.svg"}
                alt={"Icon-Image-1"}
                width={40}
                height={40}
                style={{
                  boxShadow: " 0 0 36px rgba(89, 29, 221, 0.75)",
                  borderRadius: "20%",
                  background: "#6129DF",
                }}
                className={`sm:w-12 sm:h-12 ${Hover.classes}`}
              />
              <h3 className="text-3xl">Analytics Dashboard</h3>
              <p className=" text-sm sm:text-base text-slate-300">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
              <Link href="/">
                <span className="border-b-[1px] border-white">
                  View dashboard
                </span>
              </Link>
            </div>
          </Card>
        </AnimatedCard>

        <AnimatedCard directionX={50} classname="col-span-2 md:col-span-1">
          <Card style={{ ...shadowCard }} className=" p-6 sm:p-11">
            <div className="flex flex-col gap-4 max-[120px]">
              <Image
                src={"/images/Icon-Image-2.svg"}
                alt={"Icon-Image-2"}
                width={40}
                height={40}
                style={{
                  boxShadow: " 0 0 36px rgba(149, 37, 201, 0.75)",
                  borderRadius: "20%",
                  background: "#9A2FCB",
                }}
                className={`sm:w-12 sm:h-12 ${Hover.classes}`}
              />
              <h3 className="text-3xl">Digital Credit Tokens</h3>
              <p className=" text-sm sm:text-base text-slate-300">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>
              <Link href="/">
                <span className="border-b-[1px] border-white">
                  {" "}
                  View tokens{" "}
                </span>
              </Link>
            </div>
          </Card>
        </AnimatedCard>

        <AnimatedCard directionY={50} classname="col-span-2">
          <Card
            style={{ ...shadowCard }}
            className="flex flex-col md:flex-row justify-between gap-8 p-6 sm:p-11">
            <div className="flex flex-col gap-4 w-full ">
              <Image
                src={"/images/Icon-Image-3.svg"}
                alt={"Icon-Image-2"}
                width={40}
                height={40}
                style={{
                  boxShadow: " 0 0 36px rgba(201, 37, 171, 0.75)",
                  borderRadius: "20%",
                  background: "#982DCB",
                }}
                className={`sm:w-12 sm:h-12 ${Hover.classes}`}
              />
              <h3 className="text-3xl">Code collaboration</h3>
              <p className=" text-sm sm:text-base text-slate-300">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where
                it&apos;s coming from. Whether you&apos;re integrating data from
                multiple sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </p>
              <Link href="/">
                <span className="border-b-[1px] border-white">
                  View code collaboration
                </span>
              </Link>
            </div>

            <Image
              src={"/images/digital-image.png"}
              alt={"digital image"}
              width={400}
              height={300}
              style={{
                boxShadow:
                  "0px -1.5px 4px rgba(255, 255, 255, 0.5), 0px -2px 40px rgba(187, 155, 255, 0.15)",
                borderRadius: "20px",
              }}
              className="w-full md:w-1/2"
            />
          </Card>
        </AnimatedCard>

        <AnimatedCard directionY={50} classname="col-span-2">
          <Card
            style={{ ...shadowCard }}
            className="text-center flex flex-col items-center gap-6 p-6 sm:p-11">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">
              Our powerful analytics <br /> provides invaluable insights.
            </h2>
            <p className="md:text-lg max-w-3xl">
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard,
              and take advantage of our innovative digital credit tokens to
              reward your customers and incentivize engagement.
            </p>
            <Button
              variant="outline"
              className=" bg-transparent border-gray-50 rounded-3xl text-base font-light mt-3 py-6">
              Download the app
            </Button>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Section;
