import React from 'react';
import rub from '../../img/Rub.svg';

export default function TrainCardType({ departure }) {
   return (
      <>
         <ul className="train-type__block">
            {departure.available_seats_info.fourth && (
               <li className="train-seats__item">
                  <p className="train-seats__type">Сидячий</p>
                  <p className="train-seats__count">
                     {departure.available_seats_info.fourth}
                  </p>
                  <p className="train-seats__price">
                     от{' '}
                     <span className="train-seats__price-text">
                        {departure.price_info.fourth.bottom_price}{' '}
                     </span>
                     <img
                        className="train-seats__price-img"
                        src={rub}
                        alt="руб"
                     />
                  </p>
               </li>
            )}
            {departure.available_seats_info.third && (
               <>
                  <li className="train-seats__item">
                     <p className="train-seats__type">Плацкарт</p>
                     <p className="train-seats__count">
                        {departure.available_seats_info.third}
                     </p>
                     <p className="train-seats__price">
                        от{' '}
                        <span className="train-seats__price-text">
                           {departure.price_info.third.side_price}
                        </span>
                        <img
                           className="train-seats__price-img"
                           src={rub}
                           alt="руб"
                        />
                     </p>
                  </li>
                  <div className="train-seats__drop train-seats__drop-hidden" />
               </>
            )}
            {departure.available_seats_info.second && (
               <li className="train-seats__item">
                  <p className="train-seats__type">Купе</p>
                  <p className="train-seats__count">
                     {departure.available_seats_info.second}
                  </p>
                  <span className="train-seats__price">
                     от{' '}
                     <span className="train-seats__price-text">
                        {departure.price_info.second.bottom_price}
                     </span>
                     <img
                        className="train-seats__price-img"
                        src={rub}
                        alt="руб"
                     />
                  </span>
               </li>
            )}
            {departure.available_seats_info.first && (
               <li className="train-seats__item">
                  <p className="train-seats__type">Люкс</p>
                  <p className="train-seats__count">
                     {departure.available_seats_info.first}
                  </p>
                  <p className="train-seats__price">
                     от{' '}
                     <span className="train-seats__price-text">
                        {departure.price_info.first.price}
                     </span>
                     <img
                        className="train-seats__price-img"
                        src={rub}
                        alt="руб"
                     />
                  </p>
               </li>
            )}
         </ul>
         <ul className="train-service__block">
            {departure.have_wifi && (
               <li className="train-service__item train-service__item-wifi" />
            )}
            {departure.is_express && (
               <li className="train-service__item train-service__item-express" />
            )}
         </ul>
      </>
   );
}