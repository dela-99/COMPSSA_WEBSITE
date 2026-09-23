import * as React from "react";
import Link from "next/link";
import { Container, Eyebrow, Reveal, Button } from "@/components/ui";
import { siteConfig } from "@/lib/site";
import { programmes, getCurrentHOD } from "@/data";

/**
 * AboutFeatureSection — The Middle Composition from the blueprint.
 * Combines an editorial left column with an overlapping graduate/student image on the right.
 */
export function AboutFeatureSection() {
  const currentHOD = getCurrentHOD();

  return (
    <section className="relative bg-[#0B0D12] text-white py-20 sm:py-28 overflow-hidden border-t border-white/10">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Department Introduction */}
          <div className="lg:col-span-7 z-10">
            <Reveal delay={100}>
              <Eyebrow className="text-white/60">
                About the Department
              </Eyebrow>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-4 font-serif text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] leading-[1.08] font-medium tracking-tight text-white">
                {siteConfig.name}
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-6 space-y-4 font-serif text-[1.0625rem] sm:text-[1.125rem] leading-relaxed text-white/80 max-w-[56ch]">
                <p>
                  We are a premier academic department dedicated to advancing computing education,
                  scientific inquiry, and technological innovation. Our rigorous curriculum bridges
                  foundational computer science principles with modern software architectures, artificial
                  intelligence, and distributed systems.
                </p>
                <p className="text-white/70 text-[0.95rem] font-sans">
                  From undergraduate research to industry collaborations, our students and faculty work
                  together to solve complex real-world computing challenges across Africa and the global tech ecosystem.
                </p>
              </div>
            </Reveal>

            {/* Quick Metrics / Institutional Badges */}
            <Reveal delay={400}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
                <div>
                  <span className="block font-serif text-[1.75rem] font-semibold text-white">
                    {programmes.length}
                  </span>
                  <span className="block font-sans text-[0.75rem] uppercase tracking-[0.14em] text-white/60">
                    Degree Pathways
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-[1.75rem] font-semibold text-white">
                    100%
                  </span>
                  <span className="block font-sans text-[0.75rem] uppercase tracking-[0.14em] text-white/60">
                    Accredited
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-[1.75rem] font-semibold text-white">
                    Active
                  </span>
                  <span className="block font-sans text-[0.75rem] uppercase tracking-[0.14em] text-white/60">
                    HOD: {currentHOD?.staff?.name?.split(" ")[0] ?? "Faculty"}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/about" size="md" className="bg-white text-ink hover:bg-white/90 border-white">
                  Learn more about us
                </Button>
                <Button
                  href="/academics/programmes"
                  size="md"
                  variant="secondary"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  View Programmes
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Large Overlapping Student / Graduate Image */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={250} direction="left">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                {/* Image Frame with Layering */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-[#161B22]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop')`,
                    }}
                  />
                  {/* Subtle vignette / lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/80 via-transparent to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0B0D12]/85 backdrop-blur-md border border-white/15">
                    <span className="font-sans text-[0.7rem] uppercase tracking-[0.16em] text-white/60 block">
                      Student Community
                    </span>
                    <p className="mt-1 font-serif text-[1rem] font-medium text-white">
                      Empowering graduates with analytical rigor and engineering mastery.
                    </p>
                  </div>
                </div>

                {/* Decorative Frame Border Offset */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-xl border border-white/10 -z-10 pointer-events-none transform translate-x-2 translate-y-2"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
