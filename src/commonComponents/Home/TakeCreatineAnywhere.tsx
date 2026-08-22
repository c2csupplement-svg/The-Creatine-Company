import Image from "next/image";
import { anton, mono } from "../fonts";
import "./TakeCreatineAnywhere.css";

export default function TakeCreatineAnywhere() {
  return (
    <section className="take-creatine">
      <div className="take-creatine-grid">
        <div className="take-creatine-image">
          <Image
            src="/images/hero-4.png"
            alt="Creatine sachet in pocket"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="take-creatine-image-element"
          />
        </div>

        {/* Text - RIGHT */}
        <div className="take-creatine-content">
          <div className="take-creatine-content-inner">
            <h2 className={`${anton.className} take-creatine-title`}>
              Take Your Daily Creatine
            </h2>

            <div className="take-creatine-highlight">
              <span className={anton.className}>Anywhere. Anytime.</span>
            </div>

            <p className={`${mono.className} take-creatine-description`}>
             A SINGLE ₹10 sachet fits in a wallet, a gym bag, or a laptop sleeve. Tear, pour into 200-500ml of water, stir, done. No plastic tub dominating the kitchen counter. No spoon hunting. No half-scoop guesswork. your daily 3g goes where you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
