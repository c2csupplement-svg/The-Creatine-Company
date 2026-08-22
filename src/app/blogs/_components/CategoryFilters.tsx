import './CategoryFilters.css';

type CategoryFiltersProps = {
  categories: readonly string[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilters({
  categories,
  activeCategory,
  onSelect,
}: CategoryFiltersProps) {
  return (
    <div className="category-filters">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`category-filter-button ${
              isActive
                ? 'category-filter-active'
                : 'category-filter-inactive'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}