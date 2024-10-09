import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import rub from '../img/Rub.svg';
import sendTickets from '../img/success-img1.svg';
import printTickets from '../img/success-img2.svg';
import conductor from '../img/success-img3.svg';
import Stars from './Stars';
import Price from './seats/Price';

export default function SuccessBooking() {
   const navigate = useNavigate();

   const { passengersPrice } = useSelector((state) => state.passengers);
   const { payer } = useSelector((state) => state.pay);

   const handleClick = () => {
      navigate('/');
   };

   return (
      <main className="main success-main">
         <div className="success-wrapper "></div>
         <div className=" success-booking-wrapper container ">

            <h3 className='success-title'>Благодарим вас за заказ!</h3>
            <div className="success-booking">
               <div className="success-booking_header">
                  <p className="success-booking_title">Заказ №285АА</p>
                  <p className="success-booking_price">
                     сумма{' '}
                     <Price
                        title="success-booking"
                        value={
                           passengersPrice.departure.child +
                           passengersPrice.departure.adult +
                           passengersPrice.departure.services +
                           passengersPrice.arrival.child +
                           passengersPrice.arrival.adult +
                           passengersPrice.arrival.services
                        }
                     />
                     <img
                        className="success-booking-сurrency"
                        src={rub}
                        alt="руб."
                     />
                  </p>
               </div>

               <div className="success-booking_instructions">
                  <div className="success-booking_instructions-wrapper">
                     <div className="success-booking_instruction">
                        <div className="successooking_instruction-icon">
                           <img
                              className="success-booking_instruction-image"
                              src={sendTickets}
                              alt="билеты будут отправлены
                    на ваш e-mail"
                           />
                        </div>
                        <p className="success-booking_instruction-text">
                           билеты будут
                           <br />
                           отправлены
                           <br />
                           на ваш <strong>e-mail</strong>
                        </p>
                     </div>
                     <div className="success-booking_instruction">
                        <div className="success-booking_instruction-icon">
                           <img
                              className="success-booking_instruction-image"
                              src={printTickets}
                              alt="распечатайте
                    и сохраняйте билеты
                    до даты поездки"
                           />
                        </div>
                        <p className="success-booking_instruction-text">
                           <strong>распечатайте </strong>
                           <br />и сохраняйте билеты
                           <br />
                           до даты поездки
                        </p>
                     </div>
                     <div className="success-booking_instruction">
                        <div className="success-booking_instruction-icon">
                           <img
                              className="success-booking_instruction-image"
                              src={conductor}
                              alt="предьявите распечатанные
                    билеты при посадке"
                           />
                        </div>
                        <p className="success-booking_instruction-text">
                           <strong>предьявите </strong>
                           <br />
                           распечатанные
                           <br />
                           билеты при посадке
                        </p>
                     </div>
                  </div>
               </div>
               <section className="success-booking_message">
                  <h3 className="successooking_message-title">
                     {payer.name} {payer.lastname}!
                  </h3>
                  <p className="success-booking_message-text">
                     Ваш заказ успешно оформлен.
                     <br />В ближайшее время с вами свяжется наш оператор для
                     подтверждения.
                  </p>
                  <p className="success-booking_message-text">
                     <strong>
                        Благодарим Вас за оказанное доверие и желаем приятного
                        путешествия!
                     </strong>
                  </p>
               </section>
               <div className="success-booking_footer">
                  <div className="success-booking_footer-form">
                     <p className="success-booking_footer-title">
                        Оценить сервис
                     </p>
                     <div className="success-booking_footer-icons">
                        <Stars />
                     </div>
                  </div>
                  <button
                     type="button"
                     className="button success-booking_footer-button"
                     onClick={handleClick}
                  >
                     Вернуться на главную
                  </button>
               </div>
            </div>
         </div>
      </main>
   );
}