import React from 'react';
import Options from './Options';
import Coupe from '../../img/Coupe-min.svg';
import Seat from '../../img/Seat.svg';
import Plackart from '../../img/Plackart.svg';
import WiFi from '../../img/WiFi.svg';
import Rocket from '../../img/Rocket.svg';
import LuxMin from '../../img/Lux-min.svg';

export default function OptionsFilter() {
   return (
      <div className="options__block aside-item">
         <ul className="opions__list">
            <Options name="have_second_class" src={Coupe}>
               Купе
            </Options>
            <Options name="have_third_class" src={Plackart}>
               Плацкарт
            </Options>
            <Options name="have_fourth_class" src={Seat}>
               Сидячий
            </Options>
            <Options name="have_first_class" src={LuxMin}>
               Люкс
            </Options>
            <Options name="have_wifi" src={WiFi}>
               WiFi
            </Options>
            <Options name="have_express" src={Rocket}>
               Экспресс
            </Options>
         </ul>
      </div>
   );
}