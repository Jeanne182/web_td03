import React, { useEffect, useState } from 'react';
import './ex4.css';
import { Hero } from './Hero';

const display = (heroes) => (
  <>
    <h1>FEMALE HEROES</h1>
    <div>
      {
        heroes
          .filter((e) => e.appearance.gender === 'Female')
          .map(
            (e) => (
              <Hero
                name={e.name}
                occupation={e.work.occupation}
                powerstats={e.powerstats}
                image={e.images.md}
              />
            ),
          )
      }
    </div>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <main>
      {display(superheroes)}
    </main>
  );
};
