import React from "react";
import { useDispatch } from "react-redux";
import { cityExchange } from "../../Slice/SearchSlice";


export default function Swap() {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(cityExchange());
  }
  return (<button type="button" className="btn-swap" onClick={onClick}></button>)
}