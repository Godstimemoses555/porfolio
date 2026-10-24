import PageHero from "@/Component/PageHero";
import ContactForm from "@/Component/Contactsec2";

export const metadata = {
  title: "Contact | Godstime Moses",
  description:
    "Start a project or say hello — get in touch with Godstime Moses, full stack developer in Lagos, Nigeria.",
};

const ContactPage = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">worth remembering.</span>
          </>
        }
        description="Tell me about the product, the problem or the idea. I will get back to you with clear next steps — no pressure and no jargon."
      />

      <ContactForm />
    </div>
  );
};

export default ContactPage;
