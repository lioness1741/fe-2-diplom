import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seatsItemSelect, seatsItemUnSelect } from '../../Slice/seatsSlice';

export default function Seat({
   id,
   number,
   type,
   left,
   available,
   typeTicket,
}) {
   const { seats, seatsCount } = useSelector(
      (state) => state.seats[typeTicket]
   );
   const { passengersCount } = useSelector((state) => state.passengers);
   const dispatch = useDispatch();

   const style = {
      top: '0',
      left: `${left}px`,
   };

   if (type === 'top') {
      if (number % 2 === 0) {
         style.top = '25px';
      } else {
         style.top = '52px';
      }
   } else if (type === 'bottom') {
      style.top = '97px';
   } else if (type === 'lux') {
      style.top = '24px';
   } else if (number < 33) {
      if (number % 2 === 0) {
         style.top = '28px';
      } else {
         style.top = '46px';
      }
   } else if (number === 62 || number % 2 !== 0) {
      style.top = '96px';
   } else {
      style.top = '79px';
   }

   const handleClick = () => {
      if (seats[id] && seats[id].includes(number)) {
         dispatch(seatsItemUnSelect({ id, number, type: typeTicket }));
      } else if (seatsCount < passengersCount.adult + passengersCount.child) {
         dispatch(seatsItemSelect({ id, number, type: typeTicket }));
      }
   };

   return (
      <button
         type="button"
         className={`coach-seat coach-seat--${type} ${
            seats[id] && seats[id].includes(number) ? 'coach-seat--active' : ''
         }`}
         style={style}
         disabled={!available}
         onClick={handleClick}
      >
         <p className="coach-seat-number" id={number}>
            {number}
         </p>
      </button>
   );
}