import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import PassengerPage from "./Passengers/PassengersPage";
import SearchFormDirection from "./Forms/SearchFormDirection";
import SearchFormDate from "./Forms/SearchFormDate";
import Button from "./Forms/Button";
import { fetchRoutes } from "../Slice/routeSlice";
import PayForm from "./Forms/PayForm";
import VerificationPage from "./Passengers/VerificationPage";
import PassengerAside from "./Aside/PassengerAside";
import StageBar from "./StageBar";

export default function Passengers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRoutes());
    navigate("/tickets/train");
  };

  return (
    <main className="tickets-page ">
      <section className="search-form__section ">
        <div className="container">
          <form className="search-form search-form-tickets" onSubmit={onSubmit}>
            <div className="form-item form-item-row">
              <SearchFormDirection>Направление</SearchFormDirection>
              <SearchFormDate>Дата</SearchFormDate>
            </div>
            <Button type="submit" className="btn-search">
              Найти билеты
            </Button>
          </form>
          
        </div>
      </section>
      <StageBar />
      <div className="container content__section">
        <PassengerAside />
        <Routes>
          <Route path="/passengers" element={<PassengerPage />} />
          <Route path="/pay" element={<PayForm />} />
          <Route path="/verification" element={<VerificationPage />} />
        </Routes>
      </div>
    </main>
  );
}