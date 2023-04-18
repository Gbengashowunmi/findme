import React from 'react'

export default function MultiverseCard({image, caption, head, description}) {
  return (
    <article>
      <div className="image">
        <img src={image} alt="" />
        <p>{caption}</p>
      </div>
      <div className="power_of_multiverse_content">
        <h3>{head}</h3>
        <p>
          {description}
        </p>
        <button>Get Started</button>
      </div>
    </article>
  );
}
