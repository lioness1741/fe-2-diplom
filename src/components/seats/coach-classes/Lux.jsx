import React from 'react';
import Seat from '../Seat';

export default function LuxClass({ id, seatsList, typeTicket }) {
   const seats = [
      { number: 1, type: 'lux', left: '112' },
      { number: 3, type: 'lux', left: '163' },
      { number: 4, type: 'lux', left: '188' },
      { number: 5, type: 'lux', left: '239' },
      { number: 6, type: 'lux', left: '264' },
      { number: 7, type: 'lux', left: '314' },
      { number: 8, type: 'lux', left: '339' },
      { number: 9, type: 'lux', left: '389' },
      { number: 10, type: 'lux', left: '414' },
      { number: 11, type: 'lux', left: '465' },
      { number: 12, type: 'lux', left: '490' },
      { number: 13, type: 'lux', left: '540' },
      { number: 14, type: 'lux', left: '565' },
      { number: 15, type: 'lux', left: '616' },
      { number: 16, type: 'lux', left: '641' },
      { number: 18, type: 'lux', left: '692' },
   ];

   return (
      <div className="coach-seats-list coach-seats-list--lux">
         {seats.map((el) => (
            <Seat
               id={id}
               key={el.number}
               typeTicket={typeTicket}
               number={el.number}
               type={el.type}
               left={el.left}
               available={
                  seatsList[el.number - 1]
                     ? seatsList[el.number - 1].available
                     : false
               }
            />
         ))}
      </div>
   );
}