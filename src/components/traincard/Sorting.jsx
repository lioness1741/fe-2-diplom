import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Slice/filterSlice';
import { fetchRoutes } from '../../Slice/routeSlice';

export default function Sorting() {
   const count = useSelector((state) => state.routes.total_count);
   const limits = [5, 10, 20];
   const filter = useSelector((state) => state.filter);
   const { sort, limit } = filter;
   const dispatch = useDispatch();

   const handleChange = (name, value) => {
      dispatch(filterChange({ name, value }));
   };

   useEffect(() => {
      dispatch(fetchRoutes());
      console.log(sort);
   }, [filter]);

   return (
      <div className="sorting__block">
         <div className="quantity sort-name">найдено {count}</div>
         <ul className="sorting-list">
            <li className="sorting-item">
               <label className="sort-name">сортировать по:</label>
               <div className="select__wrapper">
                  <select
                     name="sort"
                     className="sort-value sorting__select"
                     value={sort}
                     onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                     }
                  >
                     <option value="time">времени</option>
                     <option value="price_min">стоимости</option>
                     <option value="duration">длительности</option>
                  </select>
               </div>
            </li>
            <li className="sorting-item">
               <span className="sort-name">показывать по:</span>
               <ul className="sorting-item__quantity-tickets">
                  {limits.map((el) => (
                     <li
                        className={`quantity-value ${
                           limit === el ? 'quantity-value-active' : ''
                        }`}
                        key={el}
                        onClick={() => handleChange('limit', el)}
                     >
                        {el}
                     </li>
                  ))}
               </ul>
            </li>
         </ul>
      </div>
   );
}