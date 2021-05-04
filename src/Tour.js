import React, { useState } from 'react';
import styled from 'styled-components'

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return <Wrapper>
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
      </footer>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)} className="p-btn">
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button type="button" className="remove-btn" onClick={() => { removeTour(id) }}>
        not interested
    </button>
    </article>
  </Wrapper>
};

const Wrapper = styled.section`
article{
  width:60vw;
  margin-top: 4rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  margin: 2rem auto;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  padding-bottom: 2rem;
}
img{
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}
.tour-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.tour-price{
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.25rem 0.25rem;
  border-radius: 0.25rem;
}

.remove-btn{
  display: block;
  width: 200px;
  margin: 1rem auto 0 auto;
  color: var(--clr-red-dark);
  letter-spacing: var(--spacing);
  background: transparent;
  border: 1px solid var(--clr-red-dark);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: capitalize;
  font-size: 0.875rem;
  cursor: pointer;
}
p{
  padding: 1rem 2rem;
  font-size: 1rem;
}
article:hover{
  box-shadow: var(--dark-shadow);
}
.p-btn{
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  font-size: 0.875rem;
}

`

export default Tour;
