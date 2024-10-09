import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { serviceItemSelect, serviceItemUnSelect } from '../../Slice/seatsSlice';

export default function Services({ service, type, id, disabled }) {
   const { services } = useSelector((state) => state.seats[type]);
   const dispatch = useDispatch();

   const handleClick = () => {
      if (services[id] && services[id].includes(service)) {
         dispatch(serviceItemUnSelect({ id, service, type }));
      } else {
         dispatch(serviceItemSelect({ id, service, type }));
      }
   };

   return (
      <button
         type="button"
         className={`service ${service}__item ${
            services[id] && services[id].includes(service)
               ? `service-active ${service}__item-active`
               : ''
         }`}
         onClick={handleClick}
         disabled={disabled}
      >
         <span className="services-help-hidden">{service}</span>
      </button>
   );
}