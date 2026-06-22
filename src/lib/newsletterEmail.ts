import emailjs from "@emailjs/browser";

type NewsletterSignupInput = {
  email: string;
};

const config = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId:
    import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_BOOKING_OWNER_TEMPLATE_ID,
  ownerEmail: import.meta.env.VITE_BOOKING_OWNER_EMAIL || "info@brandestiny.co",
};

const getMissingEmailConfig = () =>
  Object.entries({
    VITE_EMAILJS_PUBLIC_KEY: config.publicKey,
    VITE_EMAILJS_SERVICE_ID: config.serviceId,
    VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID: config.templateId,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

export const sendNewsletterSignup = async ({ email }: NewsletterSignupInput) => {
  const missingConfig = getMissingEmailConfig();

  if (missingConfig.length > 0) {
    throw new Error(`Missing EmailJS configuration: ${missingConfig.join(", ")}`);
  }

  await emailjs.send(
    config.serviceId,
    config.templateId,
    {
      from_name: "Newsletter Signup",
      from_email: email,
      customer_name: "Newsletter Subscriber",
      customer_email: email,
      owner_email: config.ownerEmail,
      reply_to: email,
      subject: "New Brandestiny newsletter signup",
      message: `New newsletter signup: ${email}`,
      notes: `New newsletter signup: ${email}`,
      signup_email: email,
      subscribed_at: new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    },
    {
      publicKey: config.publicKey,
    },
  );
};
