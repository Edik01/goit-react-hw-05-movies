import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};
