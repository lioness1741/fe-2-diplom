import React from 'react';
import firstImg from '../../img/working-list__first.svg';
import secondImg from '../../img/working-list__second.svg';
import thirdImg from '../../img/working-list__third.svg';

export default function Faq() {
   return (
      <section id="working" className="section__working">
         <div className="container working__container">
            <div className="section__header">
               <h2 className="section__title section__title-white">
                  Как это работает
               </h2>
               <button type="button" className="section__button working__btn">
                  Узнать больше
               </button>
            </div>

            <ul className="working__list">
               <li className="list__item">
                  <div className="item__image">
                     <img src={firstImg} alt="alt" />
                  </div>
                  <div className="item__text">Удобный заказ на сайте</div>
               </li>
               <li className="list__item">
                  <div className="item__image">
                     <img src={secondImg} alt="alt"/>
                  </div>
                  <div className="item__text">
                     Нет необходимости ехать в офис
                  </div>
               </li>
               <li className="list__item">
                  <div className="item__image">
                     <img src={thirdImg} alt="alt"/>
                  </div>
                  <div className="item__text">Огромный выбор направлений</div>
               </li>
            </ul>
         </div>
      </section>
   );
}