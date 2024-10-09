import React, { useState } from 'react';
import Switch, { switchClasses } from '@mui/base/Switch';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Slice/filterSlice';



export default function Options(props) {
   const { name, src } = props;
   const { filter } = useSelector((state) => state);
   const dispatch = useDispatch();

   const handleChange = (event) => {
      dispatch(filterChange({ name, value: event.target.checked }));
   };
   
   return (
      <li className="options-filter__item">
         <div className="options-filter__icon">
            <img className="options-filter__image " src={src} alt="img" />
         </div>
         <span className="options-filter__title">{props.children}</span>
         <Switch onChange={handleChange} checked={filter[name]} id={name} slots={{
          root: Root,
        }}
         />
      </li>
   );
}

// стилизация Switch
   const blue = {
      500: '#FCDC9D',
    };
    const white = '#fff';
      
    
    const grey = {
      400: '#8c959f',
      500: '#6e7781',
      600: '#57606a',
    };
    
    const Root = styled('span')(
      ({ theme }) => `
      font-size: 0;
      position: relative;
      display: inline-block;
      width: 60px;
      height: 15px;
      margin: 10px;
      cursor: pointer;
    
      &.${switchClasses.disabled} {
        opacity: 0.4;
        cursor: not-allowed;
      }
    
      & .${switchClasses.track} {
        background: ${theme.palette.mode === 'dark' ? grey[600] : white};
        border-radius: 16px;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    
      & .${switchClasses.thumb} {
        display: block;
        width: 25px;
        height: 25px;
        top: -5px;
        left: 0px;
        border-radius: 16px;
        background-color: #C4C4C4;
        position: relative;
        
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
      }
    
      &.${switchClasses.focusVisible} .${switchClasses.thumb} {
        background-color: ${grey[500]};
        box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
      }
    
      &.${switchClasses.checked} {
        .${switchClasses.thumb} {
          left: 35px;
          top: -5px;
          background-color: #FFA800;
        }
    
        .${switchClasses.track} {
          background: ${blue[500]};
        }
      }
    
      & .${switchClasses.input} {
        cursor: inherit;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        margin: 0;
      }
      `,
    );