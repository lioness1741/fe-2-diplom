import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function MenuItem(props) {
   const { href } = props;
   return (
      <li className="menu__item">
         <HashLink to={href} smooth duration={1000} className="nav-link">
            {props.children}
         </HashLink>
      </li>
   );
}