"use client";

import { Education } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { HoverImage } from "./ui/HoverImage";

interface ServiceProps {
  education: Education[];
}

function Services({ education }: ServiceProps) {
  return (
    <section className="px-2 py-20 relative" id="education" style={{ marginLeft: "10%", marginRight: "10%" }}>
      <SectionHeading className="overflow-hidden tracking-tighter">
        <SlideIn className="text-[35px]">EDUCATION</SlideIn>
      </SectionHeading>
      {
        education.map((item, id) => (
          <div className="mx-auto" key={item.name + id}>
            <Transition>
              <HoverImage
                heading={item.name}
                price={item.charge}
                imgSrc={item.image.url}
                public_id={item.image.public_id}
                subheading={item.desc}
              />
            </Transition>
          </div>
        ))
      }
    </section>
  );
}

export default Services;
