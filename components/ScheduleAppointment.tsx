'use client';

import { ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function ScheduleAppointment() {
  return (
    <section id="schedule" className="py-8 md:py-16 bg-[#1a2e25] relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white text-sm font-medium mb-6">
              Secure Your Session
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              SCHEDULE YOUR<br />APPOINTMENT
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-12 max-w-lg">
              Ab minus laborum qui rerum nemo et reiciendis quidem qui iusto dolorum. 
              Eum vero magnam sed nisi eius ea dignissimos labore a provident.
            </p>

            {/* Timetable */}
            <div className="space-y-4 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex justify-between items-center text-white">
                <span className="font-medium">Monday - Thursday</span>
                <span className="text-zinc-300">09:00am - 6:00pm</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex justify-between items-center text-white">
                <span className="font-medium">Friday</span>
                <span className="text-zinc-300">10:00am - 5:00pm</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex justify-between items-center text-white">
                <span className="font-medium">Saturday - Sunday</span>
                <span className="text-zinc-300">11:00pm - 3:00pm</span>
              </div>
            </div>

            <div className="mt-8 text-white">
              Ready to Tour Our Gym? <a href="#" className="font-bold border-b border-white hover:text-primary hover:border-primary transition-colors">Contact Us</a> Today
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-transparent"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Enter Your Name*" 
                  className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Enter Your Email*" 
                  className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Enter Your Phone Number*" 
                  className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="dd/mm/yyyy" 
                    className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors appearance-none"
                    required
                  />
                  <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select defaultValue="" className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-zinc-400 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="" disabled>Phone Call</option>
                  <option value="video">Video Call</option>
                  <option value="inperson">In Person</option>
                </select>
                <select defaultValue="" className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-zinc-400 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="" disabled>Muscle Fuel For Champions</option>
                  <option value="weightloss">Weight Loss</option>
                  <option value="strength">Strength Training</option>
                </select>
              </div>

              <textarea 
                placeholder="Add Your Message" 
                rows={4}
                className="w-full bg-white/5 border border-white/20 rounded-3xl px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>

              <button type="submit" className="bg-primary hover:bg-primary-hover text-black px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full font-medium flex items-center gap-3 transition-transform hover:scale-105">
                Book An Appointment
                <span className="bg-black/10 rounded-full p-1.5">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
