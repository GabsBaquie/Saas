"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatedNavBar, Hover } from "./animate/animate";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription } from "./ui/card";

const NavBar: React.FC = () => {
  return (
    <AnimatedNavBar>
      <nav className="fixed my-4 mx-4 w-[-webkit-fill-available] z-50">
        <Card className=" bg-black bg-opacity-40 shadow-md border-none rounded-2xl backdrop-filter backdrop-blur-md 2xl:mx-40 ">
          <CardContent className="flex justify-between items-center py-2 px-4">
            <div className="flex gap-2 items-center">
              <Image
                src={"/images/logo.png"}
                alt={"logo"}
                width={22}
                height={22}
                className={`${Hover.classes}`}
              />
              <h1 className="text-xs sm:text-xl font-bold cursor-default">
                Vaultflow
              </h1>
            </div>

            <CardDescription className="text-gray-300 text-xs sm:text-sm md:text-base flex items-center gap-4 md:gap-8 ">
              <Link href="/"> Features </Link>
              <Link href="/"> Pricing </Link>
              <Link href="/"> About us </Link>
            </CardDescription>

            <Button
              size="sm"
              className="bg-primary rounded-3xl hidden sm:block ">
              Download the app
            </Button>
          </CardContent>
        </Card>
      </nav>
    </AnimatedNavBar>
  );
};

export default NavBar;
