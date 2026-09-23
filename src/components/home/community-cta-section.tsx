import * as React from "react";
import Link from "next/link";
import { Container, Eyebrow, Reveal, Button } from "@/components/ui";
import { programmes } from "@/data";

/**
 * CommunityCTASection — Academic highlights and community resources connecting into the footer.
 */
export function CommunityCTASection() {
  return (
    <section className="relative bg-[#090C10] text-white py-20 sm:py-24 border-t border-white/10 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <Eyebrow className="text-white/60">
                Academic Excellence & Student Community
              </Eyebrow>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-3 font-serif text-[2.25rem] sm:text-[3rem] font-medium leading-tight text-white max-w-[20ch]">
                Shaping the future of computing, one graduate at a time.
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-4 font-serif text-[1.0625rem] leading-relaxed text-white/75 max-w-[58ch]">
                Explore our comprehensive degree pathways, browse historical examination papers, or connect with our active student executive council.
              </p>
            </Reveal>

            {/* Quick Badges / Links */}
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/academics/programmes"
                  size="md"
                  className="bg-white text-ink hover:bg-white/90 border-white font-medium"
                >
                  Explore Programmes ({programmes.length})
                </Button>
                <Button
                  href="/past-questions"
                  size="md"
                  variant="secondary"
                  className="bg-transparent text-white border-white/25 hover:bg-white/10 hover:border-white"
                >
                  Past Questions Archive
                </Button>
                <Button
                  href="/people/executives"
                  size="md"
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/5"
                >
                  Executive Council →
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-4">
            <Reveal delay={300} direction="left">
              <div className="rounded-xl border border-white/15 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-sm">
                <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.14em] text-white/80 block">
                  Quick Access
                </span>
                <ul className="mt-4 space-y-3 font-sans text-[0.875rem] text-white/70">
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <Link href="/academics/courses" className="hover:text-white transition-colors">
                      Course Directory
                    </Link>
                    <span className="text-white/40">→</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <Link href="/people/staff" className="hover:text-white transition-colors">
                      Faculty & Staff List
                    </Link>
                    <span className="text-white/40">→</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <Link href="/people/hod" className="hover:text-white transition-colors">
                      Head of Department
                    </Link>
                    <span className="text-white/40">→</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-2">
                    <Link href="/gallery" className="hover:text-white transition-colors">
                      Department Photo Gallery
                    </Link>
                    <span className="text-white/40">→</span>
                  </li>
                  <li className="flex items-center justify-between pt-1">
                    <Link href="/feedback" className="hover:text-white transition-colors">
                      Student Feedback & Inquiries
                    </Link>
                    <span className="text-white/40">→</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
