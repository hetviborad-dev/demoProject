'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function FitnessPlan() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="plan" className="py-8 md:py-16 bg-zinc-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium mb-6">
            Smart Plan Selection
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-zinc-900">
            YOUR FITNESS PLAN GUIDE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-primary rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 shadow-lg">
              <Image
                src="/Home-3_Pricingtable-side_image.jpg"
                alt="Designed For You"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-8 leading-tight">
              DESIGNED FOR<br />YOU
            </h3>
            
            <Link href="#schedule" className="w-full bg-black text-white px-5 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full font-medium flex items-center justify-between mb-12 hover:bg-zinc-800 transition-colors">
              Schedule An Appointment
              <span className="bg-primary text-black rounded-full p-1.5">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">Talk To Our Experts</div>
                  <a href="tel:+919724870754" className="text-sm font-medium border-b border-black/30 pb-0.5 hover:border-black transition-colors">
                    +91 9724870754
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">Say Hello To whataapp</div>
                  <a href="https://wa.me/919724870754" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border-b border-black/30 pb-0.5 hover:border-black transition-colors">
                    +91 9724870754
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900">Visit Our Location</div>
                  <a href="https://maps.google.com/?q=gym" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border-b border-black/30 pb-0.5 hover:border-black transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Area (Pricing Plans) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2 bg-black rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          >
            {/* Toggle */}
            <div className="flex justify-center mb-12 relative z-10">
              <div className="bg-zinc-900 p-1 rounded-full inline-flex">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-medium transition-all ${!isYearly ? 'bg-black border border-zinc-700 shadow-md' : 'text-zinc-400 hover:text-white'}`}
                >
                  Monthly Plan
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-medium transition-all ${isYearly ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                >
                  Yearly Plan
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Plan 1 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-heading font-bold">₹{isYearly ? '8000' : '3000'}</span>
                    <span className="text-zinc-400 font-medium">/ {isYearly ? 'year' : 'month'}</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Solo Class Join Plan</h3>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {['Guided Wellness', 'Customize Workout', 'Workout Alarms', 'Fitness Protein'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-zinc-500" />
                      {feature}
                    </li>
                  ))}
                  {['Functional Training', 'Mobility Drills'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-600">
                      <Check className="w-5 h-5 opacity-50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="https://wa.me/919724870754?text=I'm%20interested%20in%20the%20Solo%20Class%20Join%20Plan" target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary-hover text-black px-5 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full font-medium flex items-center justify-between transition-colors mt-auto">
                  Join This Plan
                  <span className="bg-black/10 rounded-full p-1.5">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </a>
              </div>

              {/* Plan 2 */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors flex flex-col">
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-heading font-bold">₹{isYearly ? '9000' : '5000'}</span>
                    <span className="text-zinc-400 font-medium">/ {isYearly ? 'year' : 'month'}</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">Group Class Join Plan</h3>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {['Guided Wellness', 'Customize Workout', 'Workout Alarms', 'Fitness Protein', 'Functional Training', 'Mobility Drills'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-zinc-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="https://wa.me/919724870754?text=I'm%20interested%20in%20the%20Group%20Class%20Join%20Plan" target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary-hover text-black px-5 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full font-medium flex items-center justify-between transition-colors mt-auto">
                  Join This Plan
                  <span className="bg-black/10 rounded-full p-1.5">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
