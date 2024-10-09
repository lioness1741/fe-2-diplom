import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import TrainCardDirection from './TrainCardDirection';
import TrainCardType from './TrainCardType';
import trainImg from '../../img/Train.svg';
import { fetchSeats, trainAdd } from '../../Slice/seatsSlice';

export default function Train(route, type) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { train, option } = route;
   const { departure, arrival } = train;

   const handleClick = (e) => {
      e.preventDefault();
      dispatch(trainAdd(route));

      dispatch(fetchSeats());
      navigate('/tickets/seats');
   };
   return (
      <div
         className={`train-card ${
            option === 'verification' ? 'train-card-verification' : ''
         }`}
      >
         <div className="train-card__aside">
            <div className="train-card__image">
               <img src={trainImg} alt="alt" />{' '}
            </div>
            <div className="train-card__number">{departure.train.name}</div>
            <div className="train-card__rote">
               <span className="train-card__rote-text">
                  {departure.from.city.name}
                  <span> &#8594;</span>
               </span>
               <span className="train-card__rote-text">
                  {departure.to.city.name}
               </span>
            </div>
         </div>
         <div
            className="
      train-card__main"
         >
            <ul className="train-card__directions">
               {departure && type !== 'arrival' && (
                  <TrainCardDirection name={departure} />
               )}
               {arrival && type !== 'departure' && (
                  <TrainCardDirection name={arrival} />
               )}
            </ul>
            <div className="train-card__type">
               <TrainCardType departure={departure} />
               <button
                  type="button"
                  onClick={handleClick}
                  className={`train-card__btn ${
                     option === 'verification'
                        ? 'train-card__btn-verificaation'
                        : ''
                  } `}
               >
                  {option === 'verification' ? 'Изменить' : 'Выбрать места'}
               </button>
            </div>
         </div>
      </div>
   );
}