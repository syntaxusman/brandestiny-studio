import { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import NavPill from "@/components/NavPill";
import SmoothScroll from "@/components/SmoothScroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const refundSections = [
  {
    title: "1. Eligibility for Refunds",
    body: "Refunds may be considered under the following conditions:",
    items: [
      "A clearly agreed service has not been delivered as outlined in a written agreement or scope of work.",
      "The project is terminated by mutual consent before substantial work has been completed.",
      "Technical errors or service issues have rendered the delivered product non-functional and unresolvable after attempted remediation.",
    ],
    secondaryTitle: "Refunds are not issued for:",
    secondaryItems: [
      "Completed work where approval has been received from the client.",
      "Delays caused by the client, including late feedback, inaccessible materials, or inactivity.",
      "Change of mind after the service has been initiated or delivered.",
      "Work performed outside the agreed scope, unless separately contracted.",
    ],
  },
  {
    title: "2. Refund Request Process",
    body: "To initiate a refund request, the client must:",
    items: [
      "Submit a formal request in writing via email to accounts@brandestiny.co with a clear explanation of the reason for the request.",
      "Include the invoice number, project reference, and the associated contact details used during the engagement.",
      "Ensure the request is made within 14 calendar days of delivery, or project termination, whichever is earlier.",
    ],
    secondaryTitle: "Once the refund request is received, our team will:",
    secondaryItems: [
      "Review the claim within 10 working days.",
      "Provide written confirmation of the outcome, including reasons if declined.",
    ],
  },
  {
    title: "3. Refund Timeline",
    body: "If a refund is approved and confirmed in writing:",
    items: [
      "The processing and disbursement of the refund may take between 45 to 50 working days from the date of confirmation.",
      "All refunds will be made via the original method of payment, unless otherwise agreed in writing.",
      "Refunds will be issued net of any third-party fees, including processing charges by PayPal, Stripe, or bank transfer charges, which may be non-refundable as per those providers' terms.",
    ],
  },
  {
    title: "4. Digital Services Acknowledgement",
    body: "By commissioning Brandestiny for any service, the client agrees and understands that:",
    items: [
      "Our work involves creative and digital output which may include custom design, development, copywriting, consulting, or strategy.",
      "Due to the non-tangible nature of digital services, partial or pro-rata refunds may be offered at our discretion based on work completed.",
    ],
  },
  {
    title: "5. Legal Compliance",
    body: "This policy complies with:",
    items: [
      "The Consumer Rights Act 2015, specifically for digital content and services.",
      "The Consumer Contracts Regulations 2013, including digital distance selling guidelines.",
      "UK regulations around digital delivery and refund timelines.",
    ],
  },
];

const RefundPolicy = () => {
  const policySectionRef = useRef<HTMLElement>(null);
  const policyIntroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!policySectionRef.current || !policyIntroRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: policySectionRef.current,
          start: "top 128px",
          end: "bottom bottom",
          pin: policyIntroRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });

      window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: policySectionRef },
  );

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--black-2)" }}>
        <CustomCursor />
        <NavPill />

        <main className="w-full px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">
          <motion.section
            ref={policySectionRef}
            className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div ref={policyIntroRef} className="lg:h-fit">
              <p className="mb-5 font-grotesk text-xs font-medium uppercase tracking-wider text-white/40">
                Client Policy
              </p>
              <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[96px]">
                REFUND <span className="text-[#fde3c6]">POLICY</span>
              </h1>
              <p className="mt-8 max-w-[520px] text-base leading-relaxed text-white/60 md:text-lg">
                At Brandestiny, we value transparency, fairness, and your satisfaction. This Refund Policy outlines
                the conditions under which clients may request refunds for digital services rendered by our agency.
              </p>
            </div>

            <article className="border-t border-white/15">
              <div className="border-b border-white/15 py-8 md:py-10">
                <p className="text-base leading-relaxed text-white/70 md:text-lg">
                  This policy is provided in accordance with applicable UK laws including the Consumer Contracts
                  Regulations 2013, and guidance from the UK Consumer Rights Act 2015 for digital services.
                </p>
              </div>

              {refundSections.map((section) => (
                <section key={section.title} className="border-b border-white/15 py-8 md:py-10">
                  <h2 className="mb-5 font-display text-2xl font-medium leading-tight text-white md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base">{section.body}</p>
                  <ul className="space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fde3c6]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {section.secondaryTitle && section.secondaryItems && (
                    <div className="mt-8">
                      <p className="mb-5 text-sm font-medium leading-relaxed text-white md:text-base">
                        {section.secondaryTitle}
                      </p>
                      <ul className="space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                        {section.secondaryItems.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}

              <section className="py-8 md:py-10">
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Nothing in this policy affects your statutory rights under UK law. If you have questions about this
                  policy, please contact{" "}
                  <a className="text-[#fde3c6] transition-colors hover:text-white" href="mailto:legal@brandestiny.co">
                    legal@brandestiny.co
                  </a>{" "}
                  or{" "}
                  <a className="text-[#fde3c6] transition-colors hover:text-white" href="mailto:accounts@brandestiny.co">
                    accounts@brandestiny.co
                  </a>
                  .
                </p>
              </section>
            </article>
          </motion.section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default RefundPolicy;
