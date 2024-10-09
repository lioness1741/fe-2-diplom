import React from 'react';
import Seat from '../Seat';

export default function KupeClass({ id, seatsList, typeTicket }) {
   const seats = [
      { number: 1, type: 'top', left: '113' },
      { number: 2, type: 'top', left: '113' },
      { number: 3, type: 'top', left: '164' },
      { number: 4, type: 'top', left: '164' },
      { number: 5, type: 'top', left: '189' },
      { number: 6, type: 'top', left: '189' },
      { number: 7, type: 'top', left: '239' },
      { number: 8, type: 'top', left: '239' },
      { number: 9, type: 'top', left: '264' },
      { number: 10, type: 'top', left: '264' },
      { number: 11, type: 'top', left: '315' },
      { number: 12, type: 'top', left: '315' },
      { number: 13, type: 'top', left: '340' },
      { number: 14, type: 'top', left: '340' },
      { number: 15, type: 'top', left: '390' },
      { number: 16, type: 'top', left: '390' },
      { number: 17, type: 'top', left: '415' },
      { number: 18, type: 'top', left: '415' },
      { number: 19, type: 'top', left: '466' },
      { number: 20, type: 'top', left: '466' },
      { number: 21, type: 'top', left: '491' },
      { number: 22, type: 'top', left: '491' },
      { number: 23, type: 'top', left: '541' },
      { number: 24, type: 'top', left: '541' },
      { number: 25, type: 'top', left: '566' },
      { number: 26, type: 'top', left: '566' },
      { number: 27, type: 'top', left: '617' },
      { number: 28, type: 'top', left: '617' },
      { number: 29, type: 'top', left: '642' },
      { number: 30, type: 'top', left: '642' },
      { number: 31, type: 'top', left: '692' },
      { number: 32, type: 'top', left: '692' },
   ];
   return (
      <div className="coach-seats-list coach-seats-list--kupe">
         {seats.map((el) => (
            <Seat
               id={id}
               key={el.number}
               number={el.number}
               typeTicket={typeTicket}
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