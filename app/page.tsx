"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const slides = [
    {
      title: "Offers ad-free viewing of high quality",
      description: "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.",
    },
    {
      title: "The biggest international and local film streaming",
      description: "Discover hundreds of movies and series from all around the world in one place.",
    },
    {
      title: "Watch anytime, anywhere",
      description: "Enjoy your favorite content on any device, without interruptions.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const goToSlide = (index: any) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // troca a cada 5s
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, current]);



  return (
    <div className="flex w-full min-h-screen flex-col lg:flex-row  bg-gradient-to-br from-[#B43FEB] to-[#8B2FD9] ">

      <div
        className="hidden lg:flex lg:w-1/2  h-screen flex-col justify-between p-6  bg-cover bg-center bg-no-repeat bg-login"

      >
        <div className="flex flex-col items-start justify-items-center  px-[128px] py-[88px] gap-4 text-white relative z-10">
          <h2 className="text-4xl font-bold leading-tight">
            {slides[current].title}
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            {slides[current].description}
          </p>

          {/* Pontos do carrossel */}
          <div className="flex gap-2 mt-6">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${current === index ? "bg-white w-5" : " bg-white/50"
                  }`}
              ></div>
            ))}
          </div>
        </div>


      </div>

      <div className="w-full bg-[#1A161F]  lg:w-1/2 lg:ml-auto min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">


        <div className="w-full max-w-md flex flex-col items-center h-screen py-[32px]">
          <p className="text-[20px] font-bold inter text-white text-center pb-[125px] py-none">CineMax</p>

          <div className="w-full text-center pb-6">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
              Hey there,<br />welcome back
            </h1>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <button className="bg-[#29282F] rounded-full w-full h-12 text-white flex items-center justify-center gap-2 hover:bg-[#29282F]/75 transition-colors duration-300 cursor-pointer">
                <img src="google.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm sm:text-base">Login with Google</span>
              </button>

              <button className="bg-[#29282F] rounded-full w-full h-12 text-white flex items-center justify-center gap-2 hover:bg-[#29282F]/75 transition-colors duration-300 cursor-pointer">
                <img src="facebook.svg" alt="Facebook" className="w-5 h-5" />
                <span className="text-sm sm:text-base ">Login with Facebook</span>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 h-px bg-[#78828A]"></div>
              <p className="text-[#78828A] font-medium text-xs sm:text-sm px-2 whitespace-nowrap">
                Or login with
              </p>
              <div className="flex-1 h-px bg-[#78828A]"></div>
            </div>

            <div className="flex flex-col w-full gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-xs sm:text-sm text-[#78828A]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="rounded-3xl w-full outline outline-1 px-4 outline-[#29282F] h-12 text-sm text-[#9CA4AB] font-medium placeholder-[#9CA4AB] bg-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-medium text-xs sm:text-sm text-[#78828A]">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="rounded-3xl w-full outline outline-1 px-4 outline-[#29282F] h-12 text-sm text-[#9CA4AB] font-medium placeholder-[#9CA4AB] bg-transparent"
                  placeholder="Enter your password"
                />
                <button
                  className="absolute right-4 top-11 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src="eye.svg" alt="Hide Password" className="w-5 h-5" />
                  ) : (
                    <img src="eyeoff.svg" alt="Show Password" className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-6 pt-4">
                <button className="text-sm sm:text-base text-[#B43FEB] font-semibold hover:text-[#B43FEB]/75 transition-colors duration-300 text-right cursor-pointer w-full">
                  Forgot Password
                </button>

                <div className="flex flex-col gap-6">
                  <button className="bg-[#B43FEB] w-full h-12 sm:h-14 rounded-3xl text-[#F9F9F9] font-semibold hover:bg-[#B43FEB]/75 transition-colors duration-300 cursor-pointer">
                    Login
                  </button>

                  <div className="flex flex-col sm:flex-row sm:justify-end gap-2 text-center sm:text-right">
                    <p className="text-xs sm:text-sm text-[#9CA4AB] font-semibold">
                      Don't have an account?{" "}
                      <button
                        onClick={() => router.push("/forgot-password")}
                        className="text-[#B43FEB] hover:text-[#B43FEB]/75 transition-colors duration-300 font-semibold cursor-pointer"
                      >
                        Register
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
