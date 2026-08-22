import { anton, mono } from '@/commonComponents/fonts';
import './ContactIntro.css';

export default function ContactIntro() {
  return (
    <div className="contact-intro">
      <h1 className={`${anton.className} contact-intro-title`}>
        GET IN
        <br />
        TOUCH
      </h1>

      <p className={`${mono.className} contact-intro-text`}>
        We love to hear from you. Reach out with comments, questions and
        feedback. Our lovely team will reply as quickly as we can.
      </p>

      <p className={`${mono.className} contact-intro-text contact-intro-email`}>
        Feel free to shoot us an email care{' '}
        <span className="contact-email">
          @thecreatine.co
        </span>
      </p>
    </div>
  );
}