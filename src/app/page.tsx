import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

import { navItems } from "@/data";

export default function Home() {
  return (
   
      <main className="min-h-screen bg/black[0.96] antialiased bg-grid-white/[0.02">
         <FloatingNav navItems={navItems} />
      <ThreeDCardDemo/>
      <AnimatedTestimonialsDemo/>
      
      </main>
     
    
  );
}
