import { motion } from "framer-motion";
const trustpilotReviewUrl = "https://www.trustpilot.com/review/brandestiny.co";

const testimonials = [
  {
    name: "Meti Mos",
    role: "Trustpilot review, Oct 31 2025",
    text: "They praised the website project management, clear communication, smooth delivery, and fast ongoing support.",
    avatar: "https://ui-avatars.com/api/?name=Meti+Mos&background=fde3c6&color=020202",
  },
  {
    name: "Ricky Simpson",
    role: "Trustpilot review, Sep 25 2025",
    text: "Ricky was happy with his new website design and described Matthew as helpful and efficient.",
    avatar: "https://ui-avatars.com/api/?name=Ricky+Simpson&background=fde3c6&color=020202",
    featured: true,
  },
  {
    name: "Muzzammil Hussain",
    role: "Trustpilot review, Aug 4 2025",
    text: "Muzzammil appreciated the quick responses and felt the team listened closely to what he wanted.",
    avatar: "https://ui-avatars.com/api/?name=Muzzammil+Hussain&background=fde3c6&color=020202",
  },
  {
    name: "Jeff King",
    role: "Trustpilot review, Jul 1 2025",
    text: "Jeff highlighted the logo design process, responsive communication, quick turnaround, and professional service.",
    avatar: "https://ui-avatars.com/api/?name=Jeff+King&background=fde3c6&color=020202",
  },
  {
    name: "BS Carpets",
    role: "Trustpilot review, Aug 4 2025",
    text: "They were glad with the website and marketing service, calling the overall experience highly recommended.",
    avatar: "https://ui-avatars.com/api/?name=BS+Carpets&background=fde3c6&color=020202",
  },
  {
    name: "francis clarke",
    role: "Trustpilot review, Mar 2 2025",
    text: "Francis was pleased with the website work and the improved overall look and feel.",
    avatar: "https://ui-avatars.com/api/?name=francis+clarke&background=fde3c6&color=020202",
  },
];

const Testimonials = () => {
  // Double the testimonials for infinite marquee effect
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full py-24 md:py-36 overflow-hidden" style={{ background: "var(--black-2)" }}>
      {/* Heading with Circle Icon */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-3 h-3 rounded-full border border-white/40" />
        <h2 className="text-white text-xl md:text-2xl font-display font-medium tracking-tight">
          What they say about us
        </h2>
      </motion.div>

      {/* Auto Scroll Marquee with Pause on Hover */}
      <div className="relative flex overflow-hidden group/marquee">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [0, -2568], // Exactly 6 cards (400px each) + 6 gaps (28px/7rem each)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          // This allows stopping the animation on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubledTestimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] p-8 md:p-10 rounded-[32px] flex flex-col min-h-[450px] transition-all duration-500 bg-[#1a1a1a] text-white hover:bg-white hover:text-black group/card border border-white/5"
              whileHover={{ scale: 1.01, y: -5 }}
            >
              {/* Large Quote Icon */}
              <div className="mb-8">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-[#d4b499]">
                  <path d="M11.4 0C5.1 0 0 5.1 0 11.4V30H15.2V11.4H7.6C7.6 9.3 9.3 7.6 11.4 7.6V0ZM36.2 0C29.9 0 24.8 5.1 24.8 11.4V30H40V11.4H32.4C32.4 9.3 34.1 7.6 36.2 7.6V0Z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 flex-1 font-display text-white/80 group-hover/card:text-black">
                <span className="mb-4 block text-xl leading-none tracking-[0.12em] text-[#fde3c6] group-hover/card:text-[#d4b499]" aria-label="5 star rating">
                  ★★★★★
                </span>
                {t.text}
              </p>

              {/* Featured Call to Action - Now only shows on hover or if needed */}
              <div className="mb-10 text-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                <a
                  href={trustpilotReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold text-lg border-b-2 border-black/10 hover:border-black transition-all pb-1"
                >
                  View on Trustpilot
                </a>
              </div>

              {/* Footer: Avatar + Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-bold text-sm text-white group-hover/card:text-black">{t.name}</p>
                  <p className="text-xs text-white/40 group-hover/card:text-black/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
