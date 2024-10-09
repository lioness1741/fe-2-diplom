import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   BrowserRouter as Router,
   Route,
   Routes,
   useNavigate,
} from 'react-router-dom';
import TrainBlock from './TrainBlock';
import SeatsPage from './SeatsPage';
import StageBar from './StageBar';
import Aside from './Aside/Aside';
import Button from './Forms/Button';
import { fetchRoutes } from '../Slice/routeSlice';
import SearchFormDirection from './Forms/SearchFormDirection';
import SearchFormDate from './Forms/SearchFormDate';

export default function SecondPage() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const status = useSelector((state) => state.routes.status);
   console.log(status);
   const onSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchRoutes());
      navigate('/tickets/train');
   };

   return (
      <main className="tickets-page ">
         <section className="search-form__section ">
            <div className="container">
               <form
                  className="search-form search-form-tickets"
                  onSubmit={onSubmit}
               >
                  <div className="form-item form-item-row">
                     <SearchFormDirection>Направление</SearchFormDirection>
                     <SearchFormDate>Дата</SearchFormDate>
                  </div>
                  <Button type="submit" className="btn-search">
                     Найти билеты
                  </Button>
               </form>
               <StageBar />
            </div>
         </section>

         <section className="container content__section">
            <Aside />

            <Routes>
               <Route path="/train" element={<TrainBlock />} />
               <Route path="/seats" element={<SeatsPage />} />
            </Routes>
         </section>
      </main>
   );
}