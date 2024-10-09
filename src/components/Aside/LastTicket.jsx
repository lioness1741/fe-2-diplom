import React from 'react';
import rub from '../../img/Rub.svg';
import Price from '../seats/Price';

export default function LastTicket({ ticket }) {
   return (
      <div className="last-ticket">
         <div className="last-ticket__header">
            <div className="last-ticket__title-from">
               <h4 className="last-ticket__title">
                  {ticket.departure.from.city.name}
               </h4>
               <span className="last-ticket__subtitle">
                  {ticket.departure.from.railway_station_name}
                  <p> вокзал</p>
               </span>
            </div>
            <div className="last-ticket__title-to">
               <h4 className="last-ticket__title">
                  {ticket.departure.to.city.name}
               </h4>
               <span className="last-ticket__subtitle">
                  <span>{ticket.departure.to.railway_station_name}</span>
                  <p> вокзал</p>
               </span>
            </div>
         </div>
         <div className="last-ticket__info">
            <div className="last-ticket__price-range">
               <span className="last_ticket-price">
                  от{' '}
                  <Price
                     title="last-ticket__price"
                     value={ticket.departure.min_price}
                  />{' '}
                  <img className="last-ticket__сurrency" src={rub} alt="руб." />
               </span>
            </div>
         </div>
      </div>
   );
}