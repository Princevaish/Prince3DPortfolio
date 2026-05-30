import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marqueeImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDYYvD3Nb0pKAc3hjgWmiF21DgSa366owoN9f2KjM6s_6spm6r-exFaEkO65U1cepmM3u_4oi1x4wk6IfkNlPAM-sIST10I2Kap7Y-wBEmQ2eOLgOqj0GFtEsG9Ybjvqdd1pu6xHQ8SwLYPqJ4YTeYmnBkG6fFPz_-O0FUsEHVr6ZWB9RBztSOCSda08dp6w_USxcksgbAcKjGj2ZBvqIi6Aw-KRfdqxlA8FU7rej-0RaWaINI6MQgG7bijfsQwiFGkXfIpsocf6Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgKnGcyHZmDIOmEio96veVY303Xq6FJFmY75GEzS1-Kcj9iXKExHoF5njcR2YNr6AWy6xhxObFxZA6rCMoMgEiOSmmqRhINnUfu-flnPacm3pFHgxBq_3iQC5FCbOiDMQ6p8SCrXmXXCOLqWpRCjXLn1dIQ6E_GqCSrRCXsBleNoPlx7VbnADgp4nLTX7xMj5vm8Vs-VGlbz5SCS_vHoQlauQkG-r4ZVfH8ERJbIk0TpyYlLIWNbO_U0cpXEDmQj5iKXZifnkIA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAZxtD_dNXrN2_Ugw60DIO6W23EGZ6216Z1aYOYdvhfvjabrEtygiGneu5urbnuprIvvOWnO04Jtk5s6Hh8lzoHfwg_-H0jy7BocnottIaVRqBEhzSXhbIGbMQIWTUUgGzdqP_Is7ym7SrfKisu_HrcI4JolsbUeIEDysmbauPzUBSZL9vJmJdKWTgOPhmQTynz1KzAS4_JghNyBPv02uF2iGxADkTOopE7ThVvyKbS_zc1a6j5oh5OczY7tZ_eC3UeIYU7dLt9w',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATcJcy7vbfcmSfpi_DObHxElaI61WBsvUt-6BPcMv5xXlIv9xBEtiUHYThckNw4hOa8bVJ-bskWLsHp5FhaGXu-89x4F1cG6cGTVYWzzHY2QTVhtyJvu23QbOWzjk5QiQ1A94r8mPVk0QIqWOcNmxytf1tPzn_w_9Y0eoNjDwuuhgqlini3l2I_2tYYgz9ybi-75WgMj16HAPKreq7ocXnTlbCPfMIX5hYzFru4wn9tCVF1y8fxtVAOhOKsVCSiK3-t-Ze-FCuzw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuVjx8vD3nDc9_e2FtZireWoyBdDBStvB35LXsz53ek3JtMANuaiNHFEuL2o-4wT3GC1urdzKWmDv-1ZVeNLkJcdi4xNneBdm3krYQTsjPgDEiH-i-t7c_OzgwjpD8AK7yzwfTjxavHJJH4HeLRjADliWnCb8MU5zEuCj5P3UGtd3OinyYQglkrj-Ou2nRcOwgNdn2oKuq5wyYUzXk1rFPqYmy545Z8UgRc7ayA0S266Lj8kUSiZ9Riqd1EHe866sO_OwqHX0n-A',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsunETm3-X_scjJ0RqC_12BulZSgT8_pF_gcdQ3mh-ICjwUzez0bmxttxvlNQs3inU87HUP105odl702raCvk7wDcLDfKzdUfmbMyhu2G1uc83t5I83Y_n0QmX9D4iHvqZ5kUdEIManYIkFSrajdlPUwGt6Dxz3pSpx36qlXb628xf9znXNWuhPwTXkh9-yxFVBD4bslWCauDfltkoJeRM_5OM-4dakx4GnNSwOw45HUgkaCwhNzAqz9QKZXW_mfrqQ7js1KBNUw',
];

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const tripled = [...images, ...images, ...images];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    gsap.to(el, {
      xPercent: reverse ? 50 : -50,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, [reverse]);

  return (
    <div
      ref={rowRef}
      className="flex gap-8 whitespace-nowrap gpu flex-shrink-0"
    >
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="w-[450px] h-[280px] object-cover border border-outline-variant/10 rounded-lg hover:scale-105 transition-transform duration-700 flex-shrink-0"
        />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const row1imgs = marqueeImages.slice(0, 3);
  const row2imgs = marqueeImages.slice(3, 6);

  return (
    <section className="py-20 overflow-hidden bg-surface-container-lowest marquee-mask relative z-20">
      <div className="flex flex-col gap-12">
        <MarqueeRow images={[...row1imgs, ...row1imgs]} reverse={false} />
        <div className="self-end w-full">
          <MarqueeRow images={[...row2imgs, ...row2imgs]} reverse={true} />
        </div>
      </div>
    </section>
  );
}
