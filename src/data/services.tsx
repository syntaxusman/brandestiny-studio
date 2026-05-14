import { type ReactNode } from "react";
import brandIdentityVideo from "@/assets/Brand Identity Creation Section.mp4";
import devopsVideo from "@/assets/Devops Section.mp4";
import erpVideo from "@/assets/ERP Section.mp4";
import seoVideo from "@/assets/For SEO Section.mp4";
import mobileAppVideo from "@/assets/Mobile App Section.mp4";
import saasVideo from "@/assets/SAAS Section.mp4";
import socialMediaVideo from "@/assets/Social Media Management Section.mp4";
import webAppVideo from "@/assets/Web App Development.mp4";
import websiteVideo from "@/assets/Website Design and Development Section.mp4";

export type ServiceItem = {
  id: string;
  title: ReactNode;
  cardTitle: string;
  eyebrow: string;
  summary: string;
  outcomes: string[];
  videoSrc: string;
  panels: Array<{
    title: string;
    body: string;
    videoSrc: string;
  }>;
};

export const services: ServiceItem[] = [
  {
    title: (
      <>
        Brand Identity <br /> Creation
      </>
    ),
    cardTitle: "Brand Identity Creation",
    eyebrow: "Strategy / Identity",
    summary:
      "A full identity system for brands that need a memorable visual language, consistent applications, and sharper market positioning.",
    outcomes: ["Logo systems", "Visual direction", "Brand guidelines", "Launch assets"],
    id: "service-brand-identity",
    videoSrc: brandIdentityVideo,
    panels: [
      {
        title: "Identity System",
        body: "We shape the mark, typography, color, and visual rules into a brand system that scales across every customer touchpoint.",
        videoSrc: brandIdentityVideo,
      },
      {
        title: "Launch Materials",
        body: "The identity expands into launch assets, social systems, presentation visuals, and practical brand applications.",
        videoSrc: socialMediaVideo,
      },
    ],
  },
  {
    title: (
      <>
        Web Design & <br /> Development
      </>
    ),
    cardTitle: "Website Design & Development",
    eyebrow: "Design / Development",
    summary:
      "Responsive websites built around strong brand storytelling, polished motion, clear conversion paths, and production-ready implementation.",
    outcomes: ["Responsive UI", "Landing pages", "Motion systems", "Frontend build"],
    id: "service-website-design",
    videoSrc: websiteVideo,
    panels: [
      {
        title: "Conversion Structure",
        body: "Each page is structured around the action users should take, with hierarchy and pacing built for clarity.",
        videoSrc: websiteVideo,
      },
      {
        title: "Responsive Execution",
        body: "Layouts, media, and interaction states are tuned across desktop, tablet, and mobile.",
        videoSrc: webAppVideo,
      },
    ],
  },
  {
    title: "Mobile Apps",
    cardTitle: "Mobile Apps",
    eyebrow: "iOS / Android",
    summary:
      "Mobile app interfaces and flows designed for fast scanning, smooth onboarding, and focused native-feeling product experiences.",
    outcomes: ["App UI UX", "User flows", "Design systems", "Interactive screens"],
    id: "service-mobile-apps",
    videoSrc: mobileAppVideo,
    panels: [
      {
        title: "App Flow Design",
        body: "Core user journeys are mapped first, then translated into mobile screens that reduce friction.",
        videoSrc: mobileAppVideo,
      },
      {
        title: "Product Polish",
        body: "Interaction states, visual rhythm, and interface details are refined before development begins.",
        videoSrc: saasVideo,
      },
    ],
  },
  {
    title: "Web Apps",
    cardTitle: "Web Apps",
    eyebrow: "SaaS / Platforms",
    summary:
      "Web application interfaces for dashboards, admin tools, product workflows, and scalable SaaS experiences.",
    outcomes: ["Dashboard UI", "Admin panels", "Product workflows", "Frontend systems"],
    id: "service-web-apps",
    videoSrc: webAppVideo,
    panels: [
      {
        title: "Operational UI",
        body: "Dense workflows are organized into calm, scannable interfaces that help users compare, decide, and act.",
        videoSrc: webAppVideo,
      },
      {
        title: "Reusable Systems",
        body: "Components and states are designed for product growth without sacrificing consistency.",
        videoSrc: erpVideo,
      },
    ],
  },
  {
    title: "ERP",
    cardTitle: "CRM ERP Systems",
    eyebrow: "Business Systems",
    summary:
      "CRM and ERP platforms designed around pipelines, reporting, admin operations, role-based views, and business workflows.",
    outcomes: ["CRM dashboards", "ERP workflows", "Reporting UI", "Business automation"],
    id: "service-crm-erp",
    videoSrc: erpVideo,
    panels: [
      {
        title: "Workflow Architecture",
        body: "Business logic is organized into dashboards and flows that support activity, reporting, and operations.",
        videoSrc: erpVideo,
      },
      {
        title: "Actionable Dashboards",
        body: "Data-heavy screens are designed around readable hierarchy, clear filters, and useful views.",
        videoSrc: webAppVideo,
      },
    ],
  },
  {
    title: "DevOps",
    cardTitle: "DevOps",
    eyebrow: "Cloud / Automation",
    summary:
      "DevOps presentation and platform experiences for infrastructure, deployment workflows, CI/CD, and monitoring systems.",
    outcomes: ["CI/CD flows", "Cloud systems", "Monitoring UI", "Automation"],
    id: "service-devops",
    videoSrc: devopsVideo,
    panels: [
      {
        title: "Infrastructure Storytelling",
        body: "Technical systems are translated into clear visual experiences that make automation easier to understand.",
        videoSrc: devopsVideo,
      },
      {
        title: "Engineering Interfaces",
        body: "Technical workflows for status, logs, deployments, and operational review are designed without visual overload.",
        videoSrc: saasVideo,
      },
    ],
  },
  {
    title: "SEO",
    cardTitle: "SEO",
    eyebrow: "Search / Growth",
    summary:
      "SEO-focused structure for websites and content systems needing better discoverability and search intent alignment.",
    outcomes: ["Search strategy", "Metadata", "Content structure", "Technical SEO"],
    id: "service-seo",
    videoSrc: seoVideo,
    panels: [
      {
        title: "Search Structure",
        body: "Pages are planned around intent, hierarchy, and metadata so users and search engines understand the offer quickly.",
        videoSrc: seoVideo,
      },
      {
        title: "Content Systems",
        body: "Reusable page sections and content patterns support ongoing publishing without sacrificing design quality.",
        videoSrc: websiteVideo,
      },
    ],
  },
  {
    title: "SAAS",
    cardTitle: "SaaS Product Systems",
    eyebrow: "Product Systems",
    summary:
      "SaaS experiences for subscription products, dashboards, onboarding, account flows, and scalable interface systems.",
    outcomes: ["SaaS UX", "Onboarding", "Billing flows", "Product UI"],
    id: "service-saas",
    videoSrc: saasVideo,
    panels: [
      {
        title: "Product Onboarding",
        body: "First-run experiences and core product paths are designed so users understand value quickly.",
        videoSrc: saasVideo,
      },
      {
        title: "Interface Scale",
        body: "Reusable patterns keep expansion consistent across dashboards, settings, billing, and feature surfaces.",
        videoSrc: webAppVideo,
      },
    ],
  },
  {
    title: (
      <>
        Social Media <br /> Management
      </>
    ),
    cardTitle: "Social Media Management",
    eyebrow: "Campaigns / Content",
    summary:
      "Social media systems for campaigns, content calendars, branded post templates, and digital marketing visuals.",
    outcomes: ["Campaign systems", "Post templates", "Content direction", "Brand recall"],
    id: "service-social-media",
    videoSrc: socialMediaVideo,
    panels: [
      {
        title: "Campaign Rhythm",
        body: "Content formats are built as repeatable systems so campaigns stay consistent without becoming repetitive.",
        videoSrc: socialMediaVideo,
      },
      {
        title: "Brand Recall",
        body: "Color, typography, motion, and composition are tuned for fast recognition across social channels.",
        videoSrc: brandIdentityVideo,
      },
    ],
  },
];
