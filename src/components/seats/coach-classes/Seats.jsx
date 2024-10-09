import React from 'react';
import Seat from '../Seat';

export default function SeatClass({ id, seatsList, typeTicket }) {
   const seats = [
      { number: 1, type: 'single', left: '121' },
      { number: 2, type: 'single', left: '121' },
      { number: 3, type: 'single', left: '160' },
      { number: 4, type: 'single', left: '160' },
      { number: 5, type: 'single', left: '197' },
      { number: 6, type: 'single', left: '197' },
      { number: 7, type: 'single', left: '234' },
      { number: 8, type: 'single', left: '234' },
      { number: 9, type: 'single', left: '271' },
      { number: 10, type: 'single', left: '271' },
      { number: 11, type: 'single', left: '308' },
      { number: 12, type: 'single', left: '308' },
      { number: 13, type: 'single', left: '345' },
      { number: 14, type: 'single', left: '345' },
      { number: 15, type: 'single', left: '382' },
      { number: 16, type: 'single', left: '382' },
      { number: 17, type: 'single', left: '419' },
      { number: 18, type: 'single', left: '419' },
      { number: 19, type: 'single', left: '456' },
      { number: 20, type: 'single', left: '456' },
      { number: 21, type: 'single', left: '493' },
      { number: 22, type: 'single', left: '493' },
      { number: 23, type: 'single', left: '531' },
      { number: 24, type: 'single', left: '531' },
      { number: 25, type: 'single', left: '568' },
      { number: 26, type: 'single', left: '568' },
      { number: 27, type: 'single', left: '606' },
      { number: 28, type: 'single', left: '606' },
      { number: 29, type: 'single', left: '642' },
      { number: 30, type: 'single', left: '642' },
      { number: 31, type: 'single', left: '679' },
      { number: 32, type: 'single', left: '679' },
      { number: 33, type: 'single', left: '121' },
      { number: 34, type: 'single', left: '160' },
      { number: 35, type: 'single', left: '160' },
      { number: 36, type: 'single', left: '197' },
      { number: 37, type: 'single', left: '197' },
      { number: 38, type: 'single', left: '234' },
      { number: 39, type: 'single', left: '234' },
      { number: 40, type: 'single', left: '271' },
      { number: 41, type: 'single', left: '271' },
      { number: 42, type: 'single', left: '308' },
      { number: 43, type: 'single', left: '308' },
      { number: 44, type: 'single', left: '345' },
      { number: 45, type: 'single', left: '345' },
      { number: 46, type: 'single', left: '382' },
      { number: 47, type: 'single', left: '382' },
      { number: 48, type: 'single', left: '419' },
      { number: 49, type: 'single', left: '419' },
      { number: 50, type: 'single', left: '456' },
      { number: 51, type: 'single', left: '456' },
      { number: 52, type: 'single', left: '493' },
      { number: 53, type: 'single', left: '493' },
      { number: 54, type: 'single', left: '531' },
      { number: 55, type: 'single', left: '531' },
      { number: 56, type: 'single', left: '568' },
      { number: 57, type: 'single', left: '568' },
      { number: 58, type: 'single', left: '606' },
      { number: 59, type: 'single', left: '606' },
      { number: 60, type: 'single', left: '642' },
      { number: 61, type: 'single', left: '642' },
      { number: 62, type: 'single', left: '679' },
   ];

   return (
      <div className="coach-seats-list coach-seats-list--seat">
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