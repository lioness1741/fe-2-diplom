import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

import { stageChange } from "../../Slice/stageSlice";
import Train from "../traincard/Train";


import Price from "../seats/Price";
import rub from "../../img/Rub.svg";
import { clearStatus, fetchBooking } from "../../Slice/bookingSlice";

export default function Verification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { train } = useSelector((state) => state.seats.train);
  const { passengers, passengersPrice } = useSelector(
    (state) => state.passengers
  );
  const { bookingStatus } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(stageChange({ stage: 4 }));
    dispatch(clearStatus());
  }, []);

  useEffect(() => {
    if (bookingStatus === true) navigate("/success");
  }, [bookingStatus]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(fetchBooking());
    if (bookingStatus === true) navigate("/success");
  };

  const handlePassengers = () => {
    navigate("/passengers/passengers/");
  };

  return (
    <section className="verification order_verification content__block">
      <div className="verification-section">
        <h4 className="title verification-title">Поезд</h4>
        <Train key={nanoid()} train={train} option="verification" />
      </div>

      <div className="verification-section">
        <h4 className="title verification-title">Пассажиры</h4>
        <div className="verification-passenger">
          <div className="verification-passenger-persons">
            {passengers.map((el) => (
              <div className="passenger_card" key={nanoid()}>
                <div className="passenger_card-header">
                  <div className="passenger_card-img"/>
                  <h5 className="passenger_card-title">
                    {el.type === "adult" ? "Взрослый" : "Детский"}
                  </h5>
                </div>
                <div className="passenger_card-content">
                  <h6 className="passenger_card-content-title">
                    {el.surname.trim()} {el.name.trim()} {el.lastname.trim()}
                  </h6>
                  <p className="passenger_card-content-text">
                    Пол {el.sex === "male" ? "мужской" : "женский"}
                  </p>
                  <p className="passenger_card-content-text">
                    Дата рождения {el.birth}
                  </p>
                  <p className="passenger_card-content-text">
                    {el.type === "adult"
                      ? `Паспорт РФ  ${el.series} ${el.document}`
                      : `Свидетельство о рождении ${el.document}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="verification_price">
            <div className="verification_price-wrapper">
              <p className="verification_price-name">Всего</p>
              <Price
                title="verification_price-sum"
                value={
                  passengersPrice.departure.child +
                  passengersPrice.departure.adult +
                  passengersPrice.departure.services +
                  passengersPrice.arrival.child +
                  passengersPrice.arrival.adult +
                  passengersPrice.arrival.services
                }
              />
              <img className="verification-сurrency" src={rub} alt="руб." />
            </div>
            <button
              type="button"
              className="button verification_button"
              onClick={handlePassengers}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className="verification_buttons">
        <button
          type="button"
          className="button verification_button-next"
          onClick={handleClick}
        >
          Подтвердить
        </button>
      </div>
    </section>
  );
}