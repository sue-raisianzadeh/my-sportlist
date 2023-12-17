import React from 'react'
import Sports2 from '../assets/sports.jpg'

const Searchbar = ({ search, setSearch }) => {
  return (
    <div>
      <div
        className="logo"
        style={{
          backgroundImage: `url(${Sports2})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '18vh',
          margin: 0,
        }}
      >
        <h2 className="subtitle2">Sportflix</h2>
      </div>
      <hr />
      <div className="subtitle">
        <h2 className="h2">
          🍿 Need help deciding what sport to explore? Choose a category for
          suggestions! 🍿
        </h2>
      </div>
      <form className="searchForm">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Searchbar
