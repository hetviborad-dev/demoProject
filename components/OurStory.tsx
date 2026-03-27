'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const tabContent = {
  'Our Mission': [
    {
      title: "Everyone's Path To Strength",
      description: "We are dedicated to providing personalized training, state-of-the-art equipment, and a supportive environment to help you achieve your peak physical potential."
    },
    {
      title: "Inclusive Fitness Community",
      description: "Our mission is to foster a welcoming space where individuals of all fitness levels can train, learn, and grow together without judgment."
    }
  ]
};

type TabKey = keyof typeof tabContent;

export default function OurStory() {
  return (
    <section id="about" className="py-8 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <Image
              src="/Home-3_sec-2_About-img.jpg"
              alt="About Our Story"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-4xl font-heading font-bold leading-none drop-shadow-md">
                Get Free<br />Membership
              </h3>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-10"
          >
            {/* Decorative Circle */}
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

            <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-200 text-sm font-medium mb-6">
              Committed To Wellness
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900 mb-10">
              OUR STORY
            </h2>

            {/* Tab Content */}
            <div className="space-y-8 min-h-[200px]">
              {tabContent['Our Mission'].map((topic, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4">{topic.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full font-medium flex items-center gap-3 transition-transform hover:scale-105">
                Get Fitness Advice
                <span className="bg-primary text-black rounded-full p-1.5">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>
              
              <div className="flex items-center gap-4">
                <span className="font-bold text-zinc-500">Or</span>
                <a href="tel:+9111223344556" className="text-xl font-bold text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-primary hover:border-primary transition-colors">
                  +91 - 1122 334 4556
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
