import { anton } from '@/commonComponents/fonts';
import './Pagination.css';

export default function Pagination() {
  return (
    <div className={`${anton.className} pagination`}>
      {[1, 2, 3].map((p) => (
        <button
          key={p}
          className={`pagination-number ${
            p === 1
              ? 'pagination-active'
              : 'pagination-inactive'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        aria-label="Next page"
        className="pagination-next"
      >
        »
      </button>
    </div>
  );
}