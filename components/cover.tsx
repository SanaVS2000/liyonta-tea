"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cover() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setHasScrolled(true); 
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100vh] w-full">
      <motion.div
        initial={{ borderRadius: "2%", marginLeft: 50, marginRight: 50, marginTop: 25 }}
        whileInView={
          hasScrolled 
            ? {
                borderRadius: "0%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
              }
            : {}
        }
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.6 }}
        className="overflow-hidden h-full"
      >
        <img
          src="/home-cover.png"
          alt="cover"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl mx-auto mt-10 w-1/3 font-sans text-white text-center drop-shadow-lg font-base">
                    Want To Taste Our Tea? 
                </h1>
                <p className="text-lg md:text-lg w-2/5 font-Times text-white text-center my-4 mx-auto">
                    Each tea purchase comes with organically and ethically grown loose 
                    LIYONTA tea, carefully blended to create the perfect cup.
                </p>
                <Link className="bg-white px-3 py-1 rounded-lg mt-1" href="#">Shop Now ➔</Link>
            </div>
    </section>
  );
}
