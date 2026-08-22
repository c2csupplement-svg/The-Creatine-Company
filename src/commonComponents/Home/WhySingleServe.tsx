import { anton, mono } from '../fonts';
import './WhySingleServe.css';

const BENEFITS = [
  {
    title: 'PRE-MEASURED DOSE',
    body: 'Get the right amount, every time.',
  },
  {
    title: 'NO SCOOP.\nNO MESS.\nNO GUESSWORK.',
    body: '',
  },
  {
    title: 'TAKE IT ANYWHERE',
    body: 'Gym. Office. Travel. Just grab & go.',
  },
  {
    title: 'SIMPLE. PROVEN. EFFECTIVE',
    body: '',
  },
];

const AUDIENCE = [
  'Athletes',
  'Active People',
  'Fitness Enthusiasts',
  'Ready When You Are',
  'Tear. Mix. Train',
];

export default function WhySingleServe() {
  return (
    <section className="why-single-serve">
      <div className="why-single-serve-container">

        <div className="why-single-serve-header">

          {/* Left */}
          <div className="why-single-serve-left">
            <span
              className={`${anton.className} why-single-serve-small-title`}
            >
              Why
            </span>

            <span
              className={`${anton.className} why-single-serve-highlight`}
            >
              Single Serve
            </span>

            <h2
              className={`${anton.className} why-single-serve-question`}
            >
              Creatine?
            </h2>
          </div>

          {/* Right */}
          <div className="why-single-serve-right">
            <h3
              className={`${anton.className} why-single-serve-main-title`}
            >
              Creatine That Fits Our Lifestyle
            </h3>

            <p
              className={`${mono.className} why-single-serve-description`}
            >
              Creatine is a naturally occurring compound that helps your body
              produce energy during high-intensity activity. You don&apos;t
              have to be a bodybuilder to use creatine. It can be a part of an
              active lifestyle for:
            </p>
          </div>

        </div>

        {/* Benefit Cards */}
        <div className="why-single-serve-benefits">
          {BENEFITS.map((item) => (
            <article
              key={item.title}
              className="why-single-serve-card"
            >
              <h4
                className={`${anton.className} why-single-serve-card-title`}
              >
                {item.title}
              </h4>

              {item.body && (
                <p
                  className={`${mono.className} why-single-serve-card-body`}
                >
                  {item.body}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Audience Tags */}
        <div className="why-single-serve-audience">
          {AUDIENCE.map((item) => (
            <span
              key={item}
              className={`${anton.className} why-single-serve-tag`}
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}