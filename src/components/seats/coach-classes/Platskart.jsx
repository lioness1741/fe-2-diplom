import React from 'react';
import Seat from '../Seat';

export default function PlatskartClass({ id, seatsList, typeTicket }) {
   const seats = [
      { number: 1, type: 'top', left: '117' },
      { number: 2, type: 'top', left: '117' },
      { number: 3, type: 'top', left: '168' },
      { number: 4, type: 'top', left: '168' },
      { number: 5, type: 'top', left: '195' },
      { number: 6, type: 'top', left: '195' },
      { number: 7, type: 'top', left: '245' },
      { number: 8, type: 'top', left: '245' },
      { number: 9, type: 'top', left: '272' },
      { number: 10, type: 'top', left: '272' },
      { number: 11, type: 'top', left: '324' },
      { number: 12, type: 'top', left: '324' },
      { number: 13, type: 'top', left: '350' },
      { number: 14, type: 'top', left: '350' },
      { number: 15, type: 'top', left: '401' },
      { number: 16, type: 'top', left: '401' },
      { number: 17, type: 'top', left: '428' },
      { number: 18, type: 'top', left: '428' },
      { number: 19, type: 'top', left: '478' },
      { number: 20, type: 'top', left: '478' },
      { number: 21, type: 'top', left: '505' },
      { number: 22, type: 'top', left: '505' },
      { number: 23, type: 'top', left: '556' },
      { number: 24, type: 'top', left: '556' },
      { number: 25, type: 'top', left: '582' },
      { number: 26, type: 'top', left: '582' },
      { number: 27, type: 'top', left: '635' },
      { number: 28, type: 'top', left: '635' },
      { number: 29, type: 'top', left: '662' },
      { number: 30, type: 'top', left: '662' },
      { number: 31, type: 'top', left: '711' },
      { number: 32, type: 'top', left: '711' },
      { number: 33, type: 'bottom', left: '116' },
      { number: 34, type: 'bottom', left: '154' },
      { number: 35, type: 'bottom', left: '195' },
      { number: 36, type: 'bottom', left: '232' },
      { number: 37, type: 'bottom', left: '270' },
      { number: 38, type: 'bottom', left: '310' },
      { number: 39, type: 'bottom', left: '349' },
      { number: 40, type: 'bottom', left: '388' },
      { number: 41, type: 'bottom', left: '426' },
      { number: 42, type: 'bottom', left: '466' },
      { number: 43, type: 'bottom', left: '505' },
      { number: 44, type: 'bottom', left: '542' },
      { number: 45, type: 'bottom', left: '582' },
      { number: 46, type: 'bottom', left: '621' },
      { number: 47, type: 'bottom', left: '660' },
      { number: 48, type: 'bottom', left: '698' },
   ];

   return (
      <div className="coach-seats-list coach-seats-list--platzcart">
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