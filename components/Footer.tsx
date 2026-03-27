'use client';

import { ArrowUpRight, Instagram, Facebook, Twitter, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-zinc-300 pt-12 md:pt-16 pb-8 border-t border-zinc-800 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Logo & Socials */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center">
                  <span className="text-4xl font-heading font-bold tracking-wider text-white">SIXPACK</span>
                </div>
              </Link>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Hic beatae autem hic molestias repellendus aut inventore autem hic.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-8">
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <Instagram className="w-4 h-4" /> Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <Facebook className="w-4 h-4" /> Facebook <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="flex gap-8">
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <Youtube className="w-4 h-4" /> Youtube <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                  <span className="font-bold">@</span> Theards <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-8">Quick links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#plan" className="hover:text-white transition-colors">Plan</Link></li>
              <li><Link href="#transformation" className="hover:text-white transition-colors">Transformation</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Contact Info</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <p>surat, gujrat, india</p>
                  <a href="https://maps.google.com/?q=surat,gujrat,india" target="_blank" rel="noopener noreferrer" className="underline hover:text-white mt-1 inline-block">View Map</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <a href="mailto:info@Fitness.com" className="hover:text-white">info@Fitness.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                <a href="tel:+919724870754" className="hover:text-white">+91 9724870754</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <p>Working Hours : 09.00 AM</p>
                  <p>To 06:00 PM.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Insta Gallery */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">#Insta Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                '/insta_gallery/Instagram_img-1.jpg',
                '/insta_gallery/Instagram_img-2.jpg',
                '/insta_gallery/Instagram_img-3.jpg',
                '/insta_gallery/Instagram_img-4.jpg',
                '/insta_gallery/Instagram_img-5.jpg',
                '/insta_gallery/instagram-block-08.jpg'
              ].map((src, i) => (
                <a 
                  key={i} 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden group block"
                >
                  <Image 
                    src={src} 
                    alt="Instagram Gallery Image" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-8">
          
          <div className="text-sm text-zinc-500 w-full flex justify-between items-center">
            <span>© 2025 | Alrights reserved by <a href="#" className="text-white border-b border-white hover:text-primary hover:border-primary transition-colors">sixpack.com</a></span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors text-white">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}
