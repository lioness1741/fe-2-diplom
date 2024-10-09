import React, { useEffect, useState } from 'react';
import LastTicket from './LastTicket';

export default function LastTickets() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      fetch('https://netology-trainbooking.netoservices.ru/routes/last')
         .then((response) => response.json())
         .then((data) => setItems(data))
         .catch((err) => console.log(err));
   }, []);

   if (items.length === 0) return '';
   return(
      <div className="last-tickets__block">
         <h4 className="last-tickets__title">Последние билеты</h4>
         <ul className="last-tickets__list">
            {items.map((item) => (
               <LastTicket ticket={item} key={item.departure._id} />
            ))}
         </ul>
      </div>
   );
}