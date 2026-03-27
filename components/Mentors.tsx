'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function Mentors() {
  const mentors = [
    {
      name: 'ESTELLE LEON',
      role: 'Personal Trainer',
      image: '/trainer/Team-image-1.png',
    },
    {
      name: 'NICOLE BROWN',
      role: 'CrossFit Coach',
      image: '/trainer/Team-image-2.png',
    },
    {
      name: 'BARBARA JAIMES',
      role: 'Wellness Coach',
      image: '/trainer/Team-image-3.png',
    },
    {
      name: 'SEAN BERG',
      role: 'Zumba Trainer',
      image: '/trainer/Team-image-4.png',
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-zinc-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium mb-6">
            Train With Experts
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900">
            ADVANCED FITNESS MENTORS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-zinc-200">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-zinc-500 mb-2">{mentor.role}</div>
                <h3 className="text-2xl font-heading font-bold text-zinc-900 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {mentor.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
