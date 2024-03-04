import React from 'react'

export default function CategoryFilter({CATEGORIES}) {
    return (
        <aside >
          <ul className='fix sticky top-[160px]' > 
            <li className="category">
              <button className="btn btn-all-categories ">All</button>
            </li>
    
            {CATEGORIES.map((e) => (
              <li key={e.name} className="category ">
                <button className='btn btn-category rounded-full px-4 py-2'
                  style={{ backgroundColor: e.color }}
                  >
                  {e.name}
                </button>
              </li>
            ))}
          </ul>
        </aside >
      )
}
