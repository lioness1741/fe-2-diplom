import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Label from "../homepage/Label";
import { searchHandleChange } from "../../Slice/SearchSlice";


export default function SearchFormDate(formView) {
  const dispatch = useDispatch();
  const dateStart = useSelector((state) => state.search.date_start);
  const dateEnd = useSelector((state) => state.search.date_end);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    if (dateStart) {
      setStart(new Date(dateStart));
    }
  }, [dateStart]);

  useEffect(() => {
    if (dateEnd) {
      setEnd(new Date(dateEnd));
    }
  }, [dateEnd]);

  const handleChange = (name, date) => {
    const str = date.toLocaleDateString();
    const format = `${str.slice(-4)}-${str.slice(3, 5)}-${str.slice(0, 2)}`;
    dispatch(
      searchHandleChange({
        name,
        value: format,
      })
    );
  };

  const Input = forwardRef(({ value, onClick }, ref) => (
    <input
      className="form__input"
      type="text"
      placeholder="ДД/ММ/ГГ"
      value={value}
      onClick={onClick}
      onChange={onClick}
      ref={ref}
    />
  ));

  return (
    <div className="search-form-date">
      <Label>Дата</Label>
      <div className="input-block">
        <DatePicker
          locale={ru}
          dateFormat="dd.MM.yyyy"
          selected={start}
          selectsStart
          startDate={start}
          endDate={end}
          customInput={<Input />}
          onChange={(date) => handleChange("date_start", date)}
        />
        <DatePicker
          locale={ru}
          dateFormat="dd.MM.yyyy"
          selected={end}
          selectsEnd
          startDate={start}
          endDate={end}
          minDate={start}
          customInput={<Input />}
          onChange={(date) => handleChange("date_end", date)}
        />
      </div>
    </div>
  );
}