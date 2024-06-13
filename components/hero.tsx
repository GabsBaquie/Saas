"use client";
import Image from "next/image";
import { AnimatedCard, Hover } from "./animate/animate";
import { Button } from "./ui/button";
import { Card, CardDescription } from "./ui/card";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center px-4 sm:px-12"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(/images/saas-bg.jpeg)`,
      }}>
      <AnimatedCard
        directionX={50}
        classname="flex flex-col items-center mt-[100px] sm:mt-[150px] md:mt-[170px] h-full gap-7">
        <Card
          className={` border-slate-300 border-opacity-50 bg-transparent py-2 px-4 rounded-3xl ${Hover.classes}`}>
          <CardDescription className="text-gray-300 text-xs sm:text-base md:text-lg">
            We just raised $20M in Series B. Learn more
          </CardDescription>
        </Card>

        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-medium text-center scal"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(236, 236, 236, 1), rgba(236, 236, 236, 0.5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Modern analytics <br /> for the modern world
        </h1>
        <p className="text-slate-100 opacity-50 text-sm md:text-lg max-w-[600px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="default"
            className="rounded-3xl text-sm sm:text-base font-light">
            Download the app
          </Button>

          <Button
            variant="outline"
            size="default"
            className=" bg-transparent border-gray-50 rounded-3xl text-sm sm:text-base font-light ">
            Talk to an expert
          </Button>
        </div>
      </AnimatedCard>

      <AnimatedCard directionX={-50} delay={0.1}>
        <Image
          src="/images/hero-stack.png"
          alt="hero"
          width={1000}
          height={1000}
          className="rounded-3xl mt-[70px] border-t-[0.5px] border-slate-400"
          style={{
            boxShadow:
              "0px -3px 10px rgba(255, 255, 255, 0.3), 0px 0px 40px rgba(187, 155, 255, 0.15)",
          }}
          priority={true}
        />
      </AnimatedCard>
    </section>
  );
};

export default Hero;
