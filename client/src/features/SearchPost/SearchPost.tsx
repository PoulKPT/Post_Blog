import React, { useState } from 'react';

interface SearchPostProps {
  onSearch: (value: string) => void;
}

export function SearchPost({ onSearch }: SearchPostProps): React.JSX.Element {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 32, display: 'flex', gap: 8, border: 'none', boxShadow: 'none' }}>
      <input
        type="text"
        placeholder="Поиск по названию статьи"
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{
          flex: 1,
          padding: '12px 18px',
          fontSize: 17,
          borderRadius: 10,
          border: '1px solid #e0e0e0',
          background: '#fafbfc',
          outline: 'none',
        }}
      />
    </form>
  );
}; 