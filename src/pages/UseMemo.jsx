import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'Alice', score: 80 },
  { id: 2, name: 'Bob', score: 90 },
  { id: 3, name: 'Charlie', score: 75 },
  { id: 4, name: 'David', score: 85 },
];

export const UseMemo = () => {
  const [search, setSearch] = useState('');
  const [sortByScore, setSortByScore] = useState(false);

  // Expensive filtered + sorted list, memoized
  const filteredUsers = useMemo(() => {
    console.log('Filtering and sorting...');
    let result = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortByScore) {
      // Simulating a heavy computation
      for (let i = 0; i < 100000000; i++) {} // delay
      result.sort((a, b) => b.score - a.score);
    }
    return result;
  }, [search, sortByScore]); // Only re-run if search or sort flag changes

  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">User List (useMemo Example)</h2>
      <input
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 my-2 block"
      />
      <button
        onClick={() => setSortByScore(!sortByScore)}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        {sortByScore ? 'Unsort' : 'Sort by Score'}
      </button>

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} — Score: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};
