import type { ChangeEvent } from 'react';
import { anton } from '@/commonComponents/fonts';
import { SearchIcon } from '@/commonComponents/icons';
import './SearchBar.css';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <SearchIcon className="search-bar-icon" />

      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder="SEARCH..."
        className={`${anton.className} search-bar-input`}
      />
    </div>
  );
}