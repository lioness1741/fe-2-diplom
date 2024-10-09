import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import arrow from '../../img/AsideArrow.svg';
import routeTo from '../../img/AsideRouteTo.svg';
import routeBack from '../../img/AsideRouteaBack.svg';
import rub from '../../img/Rub.svg';
import people from '../../img/People-min.svg';

export default function PassangerAside() {
   const { train } = useSelector((state) => state.seats.train);
   const { passengersCount, passengersPrice } = useSelector(
      (state) => state.passengers
   );
   const { departure, arrival } = train;
   const [isHidden, setHidden] = useState({
      departure: false,
      arrival: false,
      passengers: false,
   });
   const onHidden = (name) => {
      setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   return (
      <aside className="aside aside__passengers">
         <h5 className="aside__title">Детали поездки</h5>
         <div className="aside-route-to aside-item aside__block">
            <div className="aside__block-title ">
               <img src={routeTo} alt="alt" />
               <span>Туда</span>
               <span>
                  {moment
                     .unix(departure.from.datetime)
                     .utc()
                     .format('DD.MM.YYYY')}
               </span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.departure ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('departure')}
               ></button>
            </div>
            <div
               className={`aside__block-info ${
                  isHidden.departure ? 'hidden' : ''
               }`}
            >
               <div className="block-info-number block-info__item">
                  <span>№ поезда</span>
                  <span>{departure.train.name}</span>
               </div>
               <div className="block-info-name block-info__item">
                  <span>Название</span>
                  <span>{departure.train.name}</span>
               </div>
               <div className="block-info-time block-info__item">
                  <div className="time-item time-item-from">
                     <span className="block-info-time-time">
                        {moment
                           .unix(departure.from.datetime)
                           .utc()
                           .format('HH:mm')}
                     </span>
                     <span className="time-date">
                        {moment
                           .unix(departure.from.datetime)
                           .utc()
                           .format('DD.MM.YYYY')}
                     </span>
                  </div>
                  <div className="block-info-arrow">
                     <p className="block-info-inRoad">
                        {moment.unix(departure.duration).utc().format('HH:mm')}
                     </p>
                     <img className="aside-arrow" src={arrow} alt="aarrow" />
                  </div>
                  <div className="time-item time-item-to">
                     <span className="block-info-time-time">
                        {moment
                           .unix(departure.to.datetime)
                           .utc()
                           .format('HH:mm')}
                     </span>
                     <span className="time-date">
                        {moment
                           .unix(departure.to.datetime)
                           .utc()
                           .format('DD.MM.YYYY')}
                     </span>
                  </div>
               </div>
               <div className="block-info-city">
                  <div className="info-city-from">
                     <span>{departure.from.city.name}</span>
                     <span className="fs14">
                        {departure.from.railway_station_name}
                     </span>
                     <span className="fs14">вокзал</span>
                  </div>
                  <div className="info-city-to">
                     <span>{departure.to.city.name}</span>
                     <span className="fs14">
                        {departure.to.railway_station_name}
                     </span>
                     <span className="fs14">вокзал</span>
                  </div>
               </div>
            </div>
         </div>
         {arrival && (
            <div className="aside-route-to aside-item aside__block">
               <div className="aside__block-title ">
                  <img src={routeBack} alt="alt" />
                  <span>Обратно</span>
                  <span>
                     {moment
                        .unix(arrival.from.datetime)
                        .utc()
                        .format('DD.MM.YYYY')}
                  </span>
                  <button
                     type="button"
                     className={`aside-hidden__btn ${
                        isHidden.arrival ? 'active-button' : 'inactive-button'
                     }`}
                     onClick={() => onHidden('arrival')}
                  ></button>
               </div>
               <div
                  className={`aside__block-info ${
                     isHidden.arrival ? 'hidden' : ''
                  }`}
               >
                  <div className="block-info-number block-info__item">
                     <span>№ поезда</span>
                     <span>{arrival.train.name}</span>
                  </div>
                  <div className="block-info-name block-info__item">
                     <span>Название</span>
                     <span>{arrival.train.name}</span>
                  </div>
                  <div className="block-info-time block-info__item">
                     <div className="time-item time-item-to--arrival">
                        <span className="block-info-time-time">
                           {moment
                              .unix(arrival.to.datetime)
                              .utc()
                              .format('HH:mm')}
                        </span>
                        <span className="time-date">
                           {moment
                              .unix(arrival.to.datetime)
                              .utc()
                              .format('DD.MM.YYYY')}
                        </span>
                     </div>
                     <div className="block-info-arrow">
                        <p className="block-info-inRoad">
                           {moment.unix(arrival.duration).utc().format('HH:mm')}
                        </p>
                        <img
                           className="aside-arrow--arrival"
                           src={arrow}
                           alt="arrow"
                        />
                     </div>
                     <div className="time-item time-item-from--arrival">
                        <span className="block-info-time-time">
                           {moment
                              .unix(arrival.from.datetime)
                              .utc()
                              .format('HH:mm')}
                        </span>
                        <span className="time-date">
                           {moment
                              .unix(arrival.from.datetime)
                              .utc()
                              .format('DD.MM.YYYY')}
                        </span>
                     </div>
                  </div>
                  <div className="block-info-city">
                     <div className="info-city-to--arrival info-city-to ">
                        <span>{arrival.to.city.name}</span>
                        <span className="fs14">
                           {arrival.to.railway_station_name}
                        </span>
                        <span className="fs14">вокзал</span>
                     </div>
                     <div className="info-city-from--arrival info-city-from ">
                        <span>{arrival.from.city.name}</span>
                        <span className="fs14">
                           {arrival.from.railway_station_name}
                        </span>
                        <span className="fs14">вокзал</span>
                     </div>
                  </div>
               </div>
            </div>
         )}

         <div className="aside-item aside__block">
            <div className="aside__block-title aside-item-passengers">
               <img src={people} alt="people" />
               <span>Пассажиры</span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.passengers ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('passengers')}
               ></button>
            </div>
            <ul
               className={`aside__block-info ${
                  isHidden.passengers ? 'hidden' : ''
               }`}
            >
               {passengersCount.adult && (
                  <li className="aside-passengers">
                     <span>{`${passengersCount.adult} Взрослых`}</span>
                     <span className="aside-price">
                        {`${
                           passengersPrice.departure.adult +
                           passengersPrice.arrival.adult
                        } `}
                        <img src={rub} alt="alt" />
                     </span>
                  </li>
               )}
               {passengersCount.child !== 0 && (
                  <li className="aside-passengers">
                     <span>{`${passengersCount.child} Детских`}</span>
                     <span className="aside-price">
                        {`${
                           passengersPrice.departure.child +
                           passengersPrice.arrival.child
                        } `}
                        <img src={rub} alt="alt" />
                     </span>
                  </li>
               )}
            </ul>
         </div>
         <div className="price-info aside-item">
            <span>ИТОГ</span>
            <span className="aside-price-full">
               {`${
                  passengersPrice.departure.child +
                  passengersPrice.arrival.child +
                  passengersPrice.departure.adult +
                  passengersPrice.arrival.adult
               } `}
               <img src={rub} alt="alt" />
            </span>
         </div>
      </aside>
   );
}