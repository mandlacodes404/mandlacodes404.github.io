// src/components/home/Contact.jsx

function Contact() {
  return (
    <section id="contact" className="px-10 py-16 border-t border-border">
      <p className="font-mono text-xs tracking-wide text-accent mb-6">
        CONTACT
      </p>
      <p className="text-base text-text-secondary leading-relaxed max-w-xl mb-4">
        Feel free to reach out.
      </p>
      <a
        href="mailto:mandlasimphiwe99@gmail.com"
        className="text-sm text-accent hover:underline block mb-2"
      >
        mandlasimphiwe99@gmail.com
      </a>
      <a
        href="https://github.com/mandlacodes404"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-accent hover:underline"
      >
        GitHub →
      </a>
    </section>
  );
}

export default Contact;