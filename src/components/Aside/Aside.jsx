import React from 'react';
import './Aside.scss';
import DataFilter from './DataFilter';
import OptionsFilter from './OptionsFilter';
import PriceFilter from './PriceFilter';
import TimeFilter from './TimeFilter';
import LastTickets from './LastTickets';

export default function Aside() {
   return (
      <aside className='aside'>
         <div className="aside__filter">
            <DataFilter />
            <OptionsFilter />
            <PriceFilter />
            <TimeFilter />
         </div>
         
         <LastTickets/>
         
      </aside>
   );
}