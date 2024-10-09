import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import PassengerForm from "../Forms/PassengersForm";
import { clearPassengersData } from "../../Slice/passengersSlice";
import { fetchRoutes } from "../../Slice/routeSlice";
import { stageChange } from "../../Slice/stageSlice";

export default function PassengerPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { passengersCount } = useSelector((state) => state.passengers);
  const passengersCountTotal =
    passengersCount.adult + passengersCount.child + passengersCount.baby;
  const { passengers } = useSelector((state) => state.passengers);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRoutes());
    navigate("/tickets/train");
  };

  useEffect(() => {
    dispatch(stageChange({ stage: 2 }));
    if (passengersCountTotal < passengers.length) {
      dispatch(clearPassengersData());
    }
  }, []);

  useEffect(() => {
    setDisabled(true);
    if (passengers.length !== passengersCountTotal) return;
    setDisabled(false);
  }, [passengersCount, passengers]);

  const handleClick = () => {
    navigate("/passengers/pay");
  };
  return (
    <section className="passengers order_passengers content__block">
      {[...Array(passengersCount.adult)].map((e, i) => (
        <PassengerForm type="adult" number={i + 1} key={nanoid()} />
      ))}
      {[...Array(passengersCount.child + passengersCount.baby)].map((e, i) => (
        <PassengerForm
          type="child"
          number={i + 1 + passengersCount.adult}
          key={nanoid()}
        />
      ))}
      <div className="passengers_buttons">
        <button
          type="button"
          className="button passengers_button"
          onClick={handleClick}
          disabled={disabled}
        >
          Далее
        </button>
      </div>
    </section>
  );
}