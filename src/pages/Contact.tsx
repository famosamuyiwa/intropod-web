import { useState, type FormEvent } from "react";
import heroImage from "../assets/images/hero.png";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setStatus(null);
    const formElement = event.currentTarget;

    if (!formElement.reportValidity()) {
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "Missing form access key. Please try again later.",
      });
      return;
    }

    const rawData = new FormData(formElement);
    const getValue = (key: string) => {
      const value = rawData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const name = getValue("name");
    const email = getValue("email");
    const message = getValue("message");

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill out your name, email, and message.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const web3formsData = new FormData();
      web3formsData.append("access_key", accessKey);
      web3formsData.append("name", name);
      web3formsData.append("email", email);
      web3formsData.append("message", message);
      web3formsData.append("subject", "Website contact request");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3formsData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });
      formElement.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section surface" id="contact">
      <div className="container contact-grid">
        <div className="contact-card">
          <p className="eyebrow">Contact Us</p>
          <h2>We are here to help</h2>
          <p>Any Questions? Send us a note and we will reply soon.</p>
          <form
            className="contact-form"
            onSubmit={onSubmit}
            aria-busy={isLoading}
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell us how we can help"
                rows={4}
                required
              />
            </label>
            <button className="button primary" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send message"}
            </button>
          </form>
          {status && (
            <p
              className={`contact-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          )}
          <div className="contact-meta">
            <p>Support: support@intropod.com</p>
            <p>Location: Remote and thoughtful</p>
          </div>
        </div>
        <div className="contact-aside">
          <img
            src={heroImage}
            alt="Soft gradient background"
            className="contact-image"
          />
          <div className="contact-quote">
            <p className="quote">
              "The quietest moments end up telling the biggest stories."
            </p>
            <p className="quote-author">Intropod philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
