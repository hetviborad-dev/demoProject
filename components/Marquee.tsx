export default function Marquee() {
  return (
    <div className="bg-black text-white py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="animate-marquee inline-block text-4xl md:text-6xl font-heading font-bold tracking-wider">
        <span className="mx-8">CLAIM YOUR DEAL NOW 🔥 LUXURY FITNESS CLOTHING</span>
        <span className="mx-8">CLAIM YOUR DEAL NOW 🔥 LUXURY FITNESS CLOTHING</span>
        <span className="mx-8">CLAIM YOUR DEAL NOW 🔥 LUXURY FITNESS CLOTHING</span>
      </div>
    </div>
  );
}
