import { services } from '../../data/services';
import { ServiceItem } from '../project/ServiceItem';
import { FadeIn } from '../animations/FadeIn';

export function ServicesSection() {
  return (
    <section
      id="price"
      className="bg-primary-container text-surface rounded-t-[60px] py-24 md:py-40 px-5 md:px-margin-desktop relative z-20 gpu"
    >
      <div className="max-w-container-max mx-auto">
        <FadeIn>
          <h2 className="font-kanit text-[12px] font-semibold tracking-[0.1em] uppercase text-on-primary-container mb-16 md:mb-24">
            Capabilities
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-on-primary-container/20">
          {services.map((service, i) => (
            <ServiceItem key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
