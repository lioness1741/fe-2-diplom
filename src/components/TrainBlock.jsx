import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Train from './traincard/Train';
import { stageChange } from '../Slice/stageSlice';
import Pagination from './traincard/Pagination';
import Sorting from './traincard/Sorting';

export default function TrainMainBlock() {
   const dispatch = useDispatch();

   const trains = useSelector((state) => state.routes.routes);
   useEffect(() => {
      dispatch(stageChange({ stage: 1 }));
   }, []);

   return (
      <div className="trains__block content__block">
         <div className="trains__block-breadcrumbs">
            <Sorting />
         </div>
         <ul className="train__block-list">
            {trains.map((train) => (
               <Train train={train} />
            ))}
         </ul>
         <Pagination />
      </div>
   );
}