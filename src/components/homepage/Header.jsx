import React from "react";

import MenuItem from '../MenuItem';
import Logo from "./Logo";



export default function Header() {
  return (
    <header className="App-header">
      <div className="header__logo container">
        <Logo/>
      </div>
      <div className="header__menu">
        <ul className="menu__list container">
          <MenuItem  href="/#about">
            О нас
          </MenuItem>
          <MenuItem  href="/#working">
            Как это работает
          </MenuItem>
          <MenuItem  href="/#reviews">
            Отзывы
          </MenuItem>
          <MenuItem  href="/#contacts">
            Контакты
          </MenuItem>
        </ul>
      </div>
      
    </header>
  );
}