import React from 'react';
import Tour from './Tour';
import styled from 'styled-components'

const Tours = ({ tours, removeTour }) => {
  return (
    <Wrapper>
      <section className="section">
        <div>
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div className="single-tour">
          {
            tours.map((tour) => {
              return <Tour key={tour.id} {...tour} removeTour={removeTour} />
            })
          }
        </div>
      </section>
    </Wrapper>
  )
};

const Wrapper = styled.section`
width: 90vw;
margin: 5rem auto;

h2{
  text-align: center;
  margin-bottom: 0;
}

.underline{
  width: 6rem;
  height:5px;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;

}
.single-tour{
  margin-top: 4rem;
}

`

export default Tours;
