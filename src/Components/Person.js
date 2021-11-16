import React from 'react';

const Person = (props) => {
  const { login, avatar_url, url } = props;
  return (
    <div className='person'>
      <img src={avatar_url} alt='' />
      <h3>{login}</h3>
      <a href={url} className='btn'>
        More
      </a>
    </div>
  );
};

export default Person;
