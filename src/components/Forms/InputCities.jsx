import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchHandleChange } from '../../Slice/SearchSlice';

export default function InputCities(props) {
   const { direction, type, placeholder } = props;

   const [visible, setVisible] = useState(false);

   const dispatch = useDispatch();
   const { routeFrom, routeTo } = useSelector((state) => state.search);
   const route = direction === 'routeFrom' ? routeFrom.city : routeTo.city;
   const [value, setValue] = useState('');
   const [cities, setCities] = useState(route);
   /* При вводе города отправляем на запрос на сервер для получения списка городов */

   useEffect(() => {
      setValue(route);
      fetch(
         `https://netology-trainbooking.netoservices.ru/routes/cities?name=${route}`
      )
         .then((response) => response.json())
         .then((data) => setCities(data));
   }, [route]);

   /* Изменение данных в reducer */
   const onHandleChangeDispatch = (id, city) => {
      dispatch(
         searchHandleChange({
            name: direction,
            value: {
               id,
               city,
            },
         })
      );
   };

   const handleChange = (event) => {
      const { target } = event;
      setValue(target.value);
      if (target.value.length > 0) {
         const citiObj =
            cities &&
            cities.find((city) => city.name === target.value.toLowerCase());
         const id = citiObj ? citiObj._id : '';
         onHandleChangeDispatch(id, target.value);
      }
   };

   /* Скрытие выпадающего списка городов */
   const onVisible = (event) => {
      event.preventDefault();
      setTimeout(() => setVisible(false), 200);
   };

   return (
      <>
         <input
            className="form__input"
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onClick={() => setVisible(true)}
            onBlur={onVisible}
            value={value}
            name={direction}
         />

         {visible && cities.length > 0 ? (
            <ul className="autocomplete-list">
               {cities.map((city) => (
                  <li
                     className="autocomplete-item"
                     key={city._id}
                     onClick={() => {
                        setValue(city.name);
                        console.log(city);
                        onHandleChangeDispatch(city._id, city.name);
                     }}
                  >
                     {city.name}
                  </li>
               ))}
            </ul>
         ) : (
            <ul className="hidden" />
         )}
      </>
   );
}