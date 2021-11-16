import React, { useState, useEffect } from 'react';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const call = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setPeople(paginate(data));
    setIsLoading(false);
  };

  useEffect(() => {
    call();
  }, []);

  return { isLoading, people };
};

export default useFetch;
