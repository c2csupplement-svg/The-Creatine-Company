import { anton } from './fonts';
import './Marquee.css';

const MARQUEE_ITEMS = new Array(10).fill('THECREATINECO');

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((dupe) => (
          <div key={dupe} className="marquee-group">
            {MARQUEE_ITEMS.map((label, i) => (
              <span
                key={`${dupe}-${i}`}
                className={`${anton.className} marquee-item ${
                  i % 2 === 0
                    ? 'marquee-item-muted'
                    : 'marquee-item-primary'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}