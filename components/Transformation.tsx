'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

const transformations = [
  {
    id: 2,
    beforeImage: '/transformation/before-after-2.jpg',
    afterImage: '/transformation/before-after-2a.jpg',
    challenge: 'I wanted to build strength and confidence but felt intimidated by traditional gym environments. I needed a structured plan that was both effective and approachable for my fitness level.',
    result: 'Through personalized coaching and a supportive community, I not only achieved my strength goals but also developed a newfound passion for fitness, lifting weights I never thought possible.',
    name: 'Sarah Jenkins',
    title: 'Marketing Director'
  },
  {
    id: 1,
    beforeImage: '/transformation/before-after-1a.jpg',
    afterImage: '/transformation/before-after-1.jpg',
    challenge: 'Struggling with low energy and weight gain, I wanted a complete lifestyle overhaul. I found it difficult to maintain consistency with my previous workout routines and needed expert guidance.',
    result: 'After 12 weeks of dedicated hybrid training and nutritional guidance, I lost significant body fat and gained lean muscle mass, completely transforming my physique and daily energy levels.',
    name: 'William Fulmer',
    title: 'CEO'
  },
  {
    id: 3,
    beforeImage: '/transformation/before-after-alt-3.jpg',
    afterImage: '/transformation/before-after-alt-4.jpg',
    challenge: 'Recovering from a minor sports injury, I needed a safe yet challenging program to regain my athletic performance, rebuild my core stability, and get back in shape.',
    result: 'With a tailored mobility and strength program, I successfully rehabilitated my injury and surpassed my previous athletic benchmarks, returning to my active lifestyle stronger than ever.',
    name: 'Michael Chen',
    title: 'Amateur Athlete'
  }
];

export default function Transformation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPerson = transformations[currentIndex];

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const position = ((x - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleGlobalEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMove);
      window.addEventListener('mouseup', handleGlobalEnd);
      window.addEventListener('touchmove', handleGlobalMove, { passive: false });
      window.addEventListener('touchend', handleGlobalEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalEnd);
      window.removeEventListener('touchmove', handleGlobalMove);
      window.removeEventListener('touchend', handleGlobalEnd);
    };
  }, [isDragging]);

  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const nextPerson = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevPerson = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  return (
    <section id="transformation" className="py-8 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium mb-6">
            Train. Transform. Triumph.
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900">
            BODY TRANSFORMATION JOURNEY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Before/After Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <button 
              onClick={prevPerson}
              className="absolute left-0 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors -translate-x-1/2 shadow-lg"
              aria-label="Previous transformation"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div 
              ref={containerRef}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl touch-none"
              onMouseDown={handleInteractionStart}
              onTouchStart={handleInteractionStart}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src={currentPerson.afterImage}
                  alt={`After Transformation - ${currentPerson.name}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute bottom-8 right-8 text-black font-bold tracking-widest rotate-90 origin-bottom-right z-0">
                  AFTER
                </div>
              </div>

              {/* Before Image (Foreground, clipped) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src={currentPerson.beforeImage}
                  alt={`Before Transformation - ${currentPerson.name}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute bottom-8 left-8 text-black font-bold tracking-widest -rotate-90 origin-bottom-left z-0">
                  BEFORE
                </div>
              </div>

              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-primary z-10 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              ></div>

              {/* Slider Handle */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg font-bold text-black z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                Drag
              </div>
            </div>

            <button 
              onClick={nextPerson}
              className="absolute right-0 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors translate-x-1/2 shadow-lg"
              aria-label="Next transformation"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-12 min-h-[300px] flex flex-col justify-center"
          >
            <div className="animate-in fade-in slide-in-from-right-8 duration-500" key={`challenge-${currentPerson.id}`}>
              <h3 className="text-3xl font-bold text-zinc-900 mb-6">Client Challenge</h3>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {currentPerson.challenge}
              </p>
            </div>
            
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 delay-100" key={`result-${currentPerson.id}`}>
              <h3 className="text-3xl font-bold text-zinc-900 mb-6">Result</h3>
              <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                {currentPerson.result}
              </p>
              
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-zinc-900 text-lg">- Mr. {currentPerson.name} <span className="text-sm font-normal text-zinc-500">. {currentPerson.title}</span></div>
                  <div className="flex text-primary mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
