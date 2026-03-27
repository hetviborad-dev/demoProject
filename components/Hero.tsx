'use client';

import Image from 'next/image';
import { ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero_section.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.85] mb-12 drop-shadow-lg">
          Hybrid Workout<br />Equipment
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#buy" className="group flex items-center gap-3 bg-transparent text-white hover:text-primary transition-colors">
            <span className="text-lg md:text-2xl font-heading font-bold uppercase tracking-wider">Buy Cardio</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </Link>

          <div className="hidden sm:block w-px h-12 bg-white/30 mx-4"></div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                  <Image
                    src={`https://picsum.photos/seed/avatar${i}/100/100`}
                    alt={`Reviewer ${i}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm">3k Review</div>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
