import React, { useState } from 'react';

const Tour = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <article className="single-tour" key={id}>
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={readMoreHandler}>
                  {readMore ? 'show less' : 'read more'}
                </button>
              </p>
              <button onClick={() => removeTour(id)} className="delete-btn">
                not interested
              </button>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
