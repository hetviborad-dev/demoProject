'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function InstagramFeed() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    '/insta_gallery/Instagram_img-1.jpg',
    '/insta_gallery/Instagram_img-2.jpg',
    '/insta_gallery/Instagram_img-3.jpg',
    '/insta_gallery/Instagram_img-4.jpg',
    '/insta_gallery/Instagram_img-5.jpg',
    '/insta_gallery/instagram-block-08.jpg',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // approximate width of one image + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium mb-6">
              Follow Us On
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900">
              @SIXPACK
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, index) => (
            <a 
              key={index} 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-3xl overflow-hidden snap-center group cursor-pointer block"
            >
              <Image
                src={src}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
