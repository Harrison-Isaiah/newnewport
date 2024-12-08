"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";

export function AnimatedTestimonialsDemo() {

    const [isLoaded, setIsLoaded] =useState(false)

    useEffect(()=>{
        setIsLoaded(true);
    },[]);
    
    if(!isLoaded){
        return (
            <div className="flex flex-col">
    Loadin...
            </div>
        );
    }


  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/photo.avif",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/photo1.avif",
    }, 
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/photo2.avif",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/photo3.avif",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/photo4.avif",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
