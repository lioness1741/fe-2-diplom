import React from 'react';

export default function Price({ title, value }) {
   const formatValue = () => {
      const firstDigits = Math.floor(value / 1000);
      const lastDigits = value - firstDigits * 1000;
      return `${firstDigits > 0 ? `${firstDigits} ` : ''}${
         (lastDigits < 10 && `00${lastDigits}`) ||
         (lastDigits < 100 && `0${lastDigits}`) ||
         lastDigits
      }`;
   };

   return (
      <span className={`${title}-value currency-item`}>
         {formatValue(value)}
      </span>
   );
}