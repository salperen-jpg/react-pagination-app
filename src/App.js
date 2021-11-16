import './App.css';
import { useState, useEffect } from 'react';
import useFetch from './Components/useFetch';
import Person from './Components/Person';

function App() {
  const { isLoading, people } = useFetch();
  const [page, setPage] = useState(0);
  const [currentPeople, setCurrentPeople] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setCurrentPeople(people[page]);
  }, [isLoading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{isLoading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='container'>
        <div className='people'>
          {currentPeople.map((person) => {
            return <Person key={person.id} {...person} />;
          })}
        </div>
        {!isLoading && (
          <div className='btn-container'>
            {people.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    index === page ? 'page-btn active-btn' : 'page-btn'
                  }`}
                  onClick={() => {
                    handlePage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
