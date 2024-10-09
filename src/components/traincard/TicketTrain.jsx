import React from 'react';
import moment from 'moment/moment';
import TrainCardDirection from './TrainCardDirection';
import TrainCardType from './TrainCardType';
import trainImg from '../../img/Train-yel.svg';
import Duration from './TimeFormat';

export default function TicketTrain({ train, type }) {
   // const { train, option } = props.route;
   const { departure, arrival } = train;

   return (
      <div className="ticket-train__card">
         {type === 'departure' ? (
            <>
               <div className="ticket-train__card__aside ticket-train__item">
                  <div className="ticket-train__card__image">
                     <img src={trainImg} alt="alt" />{' '}
                  </div>
                  <div className="ticket-train__card-info">
                     <span className="ticket-train__card__number">
                        {departure.train.name}
                     </span>
                     <span className="ticket-train__card__rote-text">
                        {departure.from.city.name}
                     </span>
                     <span className="ticket-train__card__rote-text">
                        {departure.to.city.name}
                     </span>
                  </div>
               </div>
               <div className="ticket-train__card__directions ticket-train__item">
                  <div className="train__direction-info ">
                     <div className="train__direction-info__time">
                        {moment
                           .unix(departure.from.datetime)
                           .utc()
                           .format('HH:mm')}
                     </div>
                     <div className="ticket-train__card__rote-text">
                        {departure.from.city.name}
                     </div>
                     <div className="train__direction-info__railway ">
                        {departure.from.railway_station_name} вокзал
                     </div>
                  </div>
                  <div
                     className={`ticket-train__arrow ticket-train__arrow-${type}`}
                  />
                  <div className="train__direction-info ">
                     <div className="train__direction-info__time">
                        {moment
                           .unix(departure.to.datetime)
                           .utc()
                           .format('HH:mm')}
                     </div>
                     <div className="ticket-train__card__rote-text">
                        {departure.to.city.name}
                     </div>
                     <div className="train__direction-info__railway ">
                        {departure.to.railway_station_name} вокзал
                     </div>
                  </div>
               </div>
               <div className="ticket-train__item ticket-train__item-time ">
                  <div className="ticket-train__img" />
                  <Duration
                     hours={moment.unix(departure.duration).utc().format('H')}
                     minutes={moment.unix(departure.duration).utc().format('m')}
                  />
               </div>
            </>
         ) : (
            <>
               <div className="ticket-train__card__aside ticket-train__item">
                  <div className="ticket-train__card__image">
                     <img src={trainImg} alt="alt" />{' '}
                  </div>
                  <div className="ticket-train__card-info">
                     <span className="ticket-train__card__number">
                        {arrival.train.name}
                     </span>
                     <span className="ticket-train__card__rote-text">
                        {arrival.from.city.name}
                     </span>
                     <span className="ticket-train__card__rote-text">
                        {arrival.to.city.name}
                     </span>
                  </div>
               </div>

               <div className="ticket-train__card__directions ticket-train__item">
                  <div className="train__direction-info ">
                     <div className="train__direction-info__time">
                        {moment.unix(arrival.to.datetime).utc().format('HH:mm')}
                     </div>
                     <div className="ticket-train__card__rote-text">
                        {arrival.to.city.name}
                     </div>
                     <div className="train__direction-info__railway ">
                        {arrival.to.railway_station_name} вокзал
                     </div>
                  </div>
                  <div
                     className={`ticket-train__arrow ticket-train__arrow-${type}`}
                  />
                  <div className="train__direction-info ">
                     <div className="train__direction-info__time">
                        {moment
                           .unix(arrival.from.datetime)
                           .utc()
                           .format('HH:mm')}
                     </div>
                     <div className="ticket-train__card__rote-text">
                        {arrival.from.city.name}
                     </div>
                     <div className="train__direction-info__railway ">
                        {arrival.from.railway_station_name} вокзал
                     </div>
                  </div>
               </div>
               <div className="ticket-train__item ticket-train__item-time ">
                  <div className="ticket-train__img" />
                  <Duration
                     hours={moment.unix(arrival.duration).utc().format('H')}
                     minutes={moment.unix(arrival.duration).utc().format('m')}
                  />
               </div>
            </>
         )}
      </div>
   );
}