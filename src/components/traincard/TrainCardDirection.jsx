import moment from 'moment/moment';

export default function TrainCardDirection({ name }) {
   return (
      <li className="train__direction">
         <div className="train__direction-info direction-item">
            <div className="train__direction-info__time">
               {moment.unix(name.from.datetime).utc().format('HH:mm')}
            </div>
            <div className="train-card__rote-text">{name.from.city.name}</div>
            <div className="train__direction-info__railway ">
               {name.from.railway_station_name} вокзал
            </div>
         </div>
         <div className="direction__arrow-time direction-item">
            <p className="travel-time">
               {moment.unix(name.duration).utc().format('HH:mm')}
            </p>
            <div className="direction-arrow" />
         </div>
         <div className="train__direction-info direction-item">
            <div className="train__direction-info__time">
               {moment.unix(name.to.datetime).utc().format('HH:mm')}
            </div>
            <div className="train-card__rote-text">{name.to.city.name}</div>
            <div className="train__direction-info__railway ">
               {name.to.railway_station_name} вокзал
            </div>
         </div>
      </li>
   );
}