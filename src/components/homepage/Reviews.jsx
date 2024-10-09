import React from 'react';
import firstRew from '../../img/FirstRew.png'
import secondRew from '../../img/SecondRew.png'

export default function Reviews() {
   return (
      <section id="reviews" className="section__reviews">
         <div className="container">
            <h2 className="section__title">Отзывы</h2>
            <ul className="reviews">
               <li className="review">
                  <div className="review__image">
                     <img src={firstRew} alt="alt"/>
                  </div>
                  <div className="review__content">
                     <h4 className="review__author">Екатерина Вальнова</h4>
                     <p className="review__text">
                        <span className="quotes">“</span>Доброжелательные
                        подсказки на всех этапах помогут правильно заполнить
                        поля и без затруднений купить авиа или ж/д билет, даже
                        если вы заказываете онлайн билет впервые.
                        <span className="quotes">”</span>
                     </p>
                  </div>
               </li>
               <li className="review">
                  <div className="review__image">
                     <img src={secondRew} alt="alt"/>
                  </div>
                  <div className="review__content">
                     <h4 className="review__author">Евгений Стрыкало</h4>
                     <p className="review__text">
                        <span className="quotes">“</span>СМС-сопровождение до
                        посадки Сразу после оплаты ж/д билетов и за 3 часа до
                        отправления мы пришлем вам СМС-напоминание о поездке.
                        <span className="quotes">”</span>
                     </p>
                  </div>
               </li>
            </ul>
            <ul className="reviews__nav">
               <li className="reviews__circle reviews__circle-active"></li>
               <li className="reviews__circle "></li>
               <li className="reviews__circle"></li>
               <li className="reviews__circle "></li>
               <li className="reviews__circle "></li>
            </ul>
         </div>
      </section>
   );
}