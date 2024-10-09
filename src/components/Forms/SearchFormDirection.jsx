import React from "react";
import Label from "../homepage/Label";
import Swap from "./Swap";
import InputCities from "./InputCities";

export default function SearchFormDirection(props) {
  return (
    <div className="search-form-direction">
      <Label>Направление</Label>
      <div className="input-block">
        <div className="input__block-from">
          <InputCities placeholder="Откуда" direction="routeFrom" />
        </div>
        <Swap />
        <div className="input__block-in">
          <InputCities placeholder="Куда" direction="routeTo" />
        </div>
      </div>
    </div>
  );
}