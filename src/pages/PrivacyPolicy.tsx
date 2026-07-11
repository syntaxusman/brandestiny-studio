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

const privacySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Brandestiny Ltd ("Brandestiny", "we", "our", or "us") is committed to protecting and respecting your privacy.',
      "This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you:",
    ],
    items: [
      "Visit our website.",
      "Contact us regarding our services.",
      "Purchase our products or services.",
      "Request quotations or consultations.",
      "Subscribe to our communications.",
      "Communicate with us by email, telephone, live chat, social media or other channels.",
    ],
    closingParagraphs: [
      "We process all personal information in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other applicable privacy legislation.",
      "By using our website or engaging our services, you acknowledge the practices described within this Privacy Policy.",
    ],
  },
  {
    title: "2. Who We Are",
    paragraphs: [
      "Brandestiny Ltd is a technology and digital solutions company providing services including but not limited to:",
    ],
    items: [
      "Website Design & Development",
      "Mobile Application Development",
      "Web Application Development",
      "Software Development",
      "E-commerce Solutions",
      "UI/UX Design",
      "Branding & Graphic Design",
      "Search Engine Optimisation (SEO)",
      "Digital Marketing",
      "Website Hosting",
      "Website Maintenance",
      "Cloud Solutions",
      "Technical Consultancy",
    ],
    closingParagraphs: [
      "For any privacy-related enquiries, please contact us using the details provided at the end of this policy.",
    ],
  },
  {
    title: "3. Information We Collect",
    paragraphs: ["Depending on how you interact with us, we may collect the following information."],
    groups: [
      {
        title: "Personal Information",
        body: "This may include:",
        items: ["Full name", "Company name", "Email address", "Telephone number", "Postal address", "Billing information", "VAT information (where applicable)"],
      },
      {
        title: "Project Information",
        body: "Where required for providing our services, we may collect:",
        items: ["Website content", "Brand assets", "Logos", "Images", "Videos", "Documents", "Project specifications", "Software requirements", "Technical documentation"],
      },
      {
        title: "Technical Information",
        body: "When you use our website, we may automatically collect:",
        items: ["IP address", "Browser type", "Device information", "Operating system", "Referring website", "Time and date of access", "Website usage information", "Cookies and similar technologies"],
      },
    ],
  },
  {
    title: "4. How We Collect Information",
    paragraphs: ["Information may be collected when you:"],
    items: [
      "Complete our contact forms.",
      "Request a quotation.",
      "Book a consultation.",
      "Purchase our services.",
      "Subscribe to newsletters.",
      "Contact us by email.",
      "Contact us by telephone.",
      "Communicate via social media.",
      "Use live chat.",
      "Visit our website.",
      "Participate in surveys or promotions.",
    ],
  },
  {
    title: "5. How We Use Your Information",
    paragraphs: ["We use your information to:"],
    items: [
      "Provide our services.",
      "Prepare quotations.",
      "Deliver projects.",
      "Process payments.",
      "Respond to enquiries.",
      "Manage customer accounts.",
      "Provide technical support.",
      "Improve our services.",
      "Improve website functionality.",
      "Maintain website security.",
      "Prevent fraud.",
      "Comply with legal obligations.",
      "Send important service communications.",
      "Send marketing communications where you have provided consent or where otherwise permitted by law.",
    ],
  },
  {
    title: "6. Legal Basis for Processing",
    paragraphs: ["We process personal information under one or more of the following lawful bases:"],
    items: [
      "Performance of a contract.",
      "Compliance with legal obligations.",
      "Legitimate business interests.",
      "Your consent.",
      "Protection of vital interests where applicable.",
    ],
  },
  {
    title: "7. Cookies",
    paragraphs: ["Our website uses cookies to improve your browsing experience.", "Cookies may be used to:"],
    items: [
      "Remember user preferences.",
      "Improve website functionality.",
      "Analyse website traffic.",
      "Monitor website performance.",
      "Enhance security.",
    ],
    closingParagraphs: [
      "Where required by law, we obtain your consent before placing non-essential cookies on your device.",
      "You may manage your cookie preferences through your browser settings or our cookie consent banner.",
    ],
  },
  {
    title: "8. Marketing Communications",
    paragraphs: ["Where permitted by law, we may send:"],
    items: ["Company news", "Service updates", "Promotions", "Special offers", "Industry insights"],
    closingParagraphs: [
      "You may unsubscribe at any time using the unsubscribe link included in our emails or by contacting us directly.",
    ],
  },
  {
    title: "9. Sharing Your Information",
    paragraphs: [
      "We do not sell your personal information.",
      "However, we may share your information with trusted third parties where necessary to provide our services, including:",
    ],
    items: [
      "Website hosting providers",
      "Cloud infrastructure providers",
      "Domain registrars",
      "Payment processors",
      "Email service providers",
      "Customer support providers",
      "Analytics providers",
      "Marketing service providers",
      "Professional advisers",
      "Legal authorities where required by law",
    ],
    closingParagraphs: [
      "All third-party providers are required to process personal information securely and only for authorised purposes.",
    ],
  },
  {
    title: "10. International Transfers",
    paragraphs: [
      "Some of our trusted service providers may process personal information outside the United Kingdom.",
      "Where this occurs, we ensure appropriate safeguards are implemented in accordance with UK data protection legislation, including approved contractual safeguards where required.",
    ],
  },
  {
    title: "11. Data Retention",
    paragraphs: ["We retain personal information only for as long as necessary to:"],
    items: [
      "Deliver our services.",
      "Fulfil contractual obligations.",
      "Meet legal requirements.",
      "Resolve disputes.",
      "Enforce agreements.",
    ],
    closingParagraphs: [
      "Retention periods vary depending upon the type of information and applicable legal obligations.",
    ],
  },
  {
    title: "12. Data Security",
    paragraphs: [
      "We implement appropriate technical and organisational measures designed to protect personal information from:",
    ],
    items: ["Unauthorised access", "Loss", "Theft", "Misuse", "Alteration", "Disclosure", "Destruction"],
    groups: [
      {
        title: "These measures may include:",
        items: [
          "SSL encryption",
          "Secure hosting environments",
          "Access controls",
          "Password protection",
          "Firewall protection",
          "Regular software updates",
          "Security monitoring",
          "Backup procedures",
        ],
      },
    ],
    closingParagraphs: [
      "Although we take reasonable steps to protect your information, no internet transmission or storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "13. Your Rights",
    paragraphs: ["Under UK data protection legislation, you may have the right to:"],
    items: [
      "Access your personal information.",
      "Correct inaccurate information.",
      "Request deletion of your information.",
      "Restrict processing.",
      "Object to processing.",
      "Request data portability.",
      "Withdraw consent where processing is based on consent.",
      "Lodge a complaint with the Information Commissioner's Office (ICO).",
    ],
    closingParagraphs: [
      "Requests relating to these rights can be submitted using the contact information provided below.",
    ],
  },
  {
    title: "14. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites.",
      "We are not responsible for the privacy practices or content of external websites.",
      "We encourage you to review their respective privacy policies before providing any personal information.",
    ],
  },
  {
    title: "15. Children's Privacy",
    paragraphs: [
      "Our services are intended for businesses and individuals aged 18 years or older.",
      "We do not knowingly collect personal information from children.",
      "If we become aware that personal information has been collected from a child without appropriate consent, we will take reasonable steps to remove such information.",
    ],
  },
  {
    title: "16. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "Any changes will be published on this page together with the updated effective date.",
      "We encourage users to review this page periodically.",
    ],
  },
];

type PolicyGroup = {
  title: string;
  body?: string;
  items: string[];
};

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  groups?: PolicyGroup[];
  closingParagraphs?: string[];
};

const BulletList = ({ items, muted = false }: { items: string[]; muted?: boolean }) => (
  <ul className="space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${muted ? "bg-white/35" : "bg-[#fde3c6]"}`} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PrivacyPolicy = () => {
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
                PRIVACY <span className="text-[#fde3c6]">POLICY</span>
              </h1>
              <p className="mt-8 max-w-[520px] text-base leading-relaxed text-white/60 md:text-lg">
                Brandestiny Ltd is committed to protecting and respecting your privacy. This policy explains how we
                collect, use, store, disclose, and protect your personal information.
              </p>
            </div>

            <article className="border-t border-white/15">
              {(privacySections as PrivacySection[]).map((section) => (
                <section key={section.title} className="border-b border-white/15 py-8 md:py-10">
                  <h2 className="mb-5 font-display text-2xl font-medium leading-tight text-white md:text-3xl">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-5 text-sm leading-relaxed text-white/60 md:text-base">
                      {paragraph}
                    </p>
                  ))}

                  {section.items && <BulletList items={section.items} />}

                  {section.groups?.map((group) => (
                    <div key={group.title} className="mt-8">
                      <p className="mb-2 text-sm font-medium leading-relaxed text-white md:text-base">{group.title}</p>
                      {group.body && (
                        <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base">{group.body}</p>
                      )}
                      <BulletList items={group.items} muted />
                    </div>
                  ))}

                  {section.closingParagraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="py-8 md:py-10">
                <h2 className="mb-5 font-display text-2xl font-medium leading-tight text-white md:text-3xl">
                  17. Contact Us
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base">
                  If you have any questions regarding this Privacy Policy or wish to exercise your data protection
                  rights, please contact us.
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                  <p>Brandestiny Ltd</p>
                  <p>
                    Email:{" "}
                    <a className="text-[#fde3c6] transition-colors hover:text-white" href="mailto:privacy@brandestiny.co">
                      privacy@brandestiny.co
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a className="text-[#fde3c6] transition-colors hover:text-white" href="https://brandestiny.co">
                      https://brandestiny.co
                    </a>
                  </p>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-white/60 md:text-base">
                  If you remain dissatisfied with how we handle your personal information, you have the right to lodge a
                  complaint with the Information Commissioner's Office (ICO).
                </p>
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                  <p>Information Commissioner's Office (ICO)</p>
                  <p>
                    Website:{" "}
                    <a className="text-[#fde3c6] transition-colors hover:text-white" href="https://ico.org.uk/">
                      https://ico.org.uk/
                    </a>
                  </p>
                  <p>Telephone: 0303 123 1113</p>
                </div>
              </section>
            </article>
          </motion.section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default PrivacyPolicy;
