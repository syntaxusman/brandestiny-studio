import { useState } from "react";
import ServiceDetailOverlay from "@/components/ServiceDetailOverlay";
import { services, type ServiceItem } from "@/data/services";

type ServiceCardProps = {
  service: ServiceItem;
  showDivider?: boolean;
  onOpen: (service: ServiceItem) => void;
};

const ServiceCard = ({ service, showDivider = true, onOpen }: ServiceCardProps) => {
  return (
    <button
      id={service.id}
      type="button"
      onClick={() => onOpen(service)}
      className="relative group scroll-mt-24 w-full appearance-none bg-transparent p-8 md:p-12 aspect-square md:aspect-auto md:h-[400px] border-x-0 border-t-0 border-b border-white/10 overflow-hidden flex flex-col justify-between text-left"
    >
      <video
        src={service.videoSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition duration-500 group-hover:opacity-80 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/25" />

      <div className="relative z-10">
        <div className="w-5 h-5 rounded-full border border-white/30 transition-all duration-500 group-hover:scale-125 group-hover:border-white group-hover:bg-white" />
      </div>

      <h3 className="relative z-10 font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
        {service.title}
      </h3>

      {showDivider && (
        <div className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-white/10" />
      )}
    </button>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
        <div className="order-2 lg:order-1">
          <ServiceCard service={services[0]} onOpen={setSelectedService} />
        </div>

        <div className="order-1 lg:order-2 md:col-span-2 p-8 md:p-12 border-b border-white/10 flex flex-col justify-start gap-8 md:gap-10 h-[300px] md:h-auto">
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Key Services
          </h2>
          <div className="max-w-md">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              This is what I focus on. <br />
              Additional services are available upon request.
            </p>
          </div>
        </div>

        {services.slice(1).map((service, index) => (
          <div key={service.id} className="order-3">
            <ServiceCard
              service={service}
              onOpen={setSelectedService}
              showDivider={index % 3 !== 2}
            />
          </div>
        ))}
      </div>

      {selectedService && (
        <ServiceDetailOverlay
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default ServicesSection;
