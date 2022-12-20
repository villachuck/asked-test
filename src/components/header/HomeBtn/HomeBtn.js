import React from 'react';
import './HomeBtn.css';

const HomeBtn = () => {
  const imagUrl = "https://chedrauimx.vtexassets.com/assets/vtex.file-manager-graphql/images/ea5c1413-971b-4b55-a906-d232216b2dd9___df4fd208880219bf1d7d67626306b6d5.svg";
  return (
    <>
      <a className='logo-chedraui' href="/">
        <img src={imagUrl} alt="Chedraui Logo" />
      </a>
    </>
  );
}

export default HomeBtn