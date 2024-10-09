import { styled, alpha, Box } from '@mui/system';
import Slider, { sliderClasses } from '@mui/base/Slider';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Slice/filterSlice';

export default function PriceFilter() {
   const dispatch = useDispatch();
   const { price_from, price_to } = useSelector((state) => state.filter);

   const minDistance = 100;
   const [value1, setValue1] = useState([price_from, price_to]);
   const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
         setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
      dispatch(filterChange({ name: 'price_from', value: value1[0] }));

      dispatch(filterChange({ name: 'price_to', value: value1[1] }));
   };


   return (
      <div className="price-filter aside-item">
         <div className="filter-title">Стоимость</div>
         <div className="slidercontainer">
            <p className="price-filter__text">
               <span>от</span>
               <span>до</span>
            </p>
            <StyledSlider
               getAriaLabel={() => 'Minimum distance'}
               value={value1}
               onChange={handleChange1}
               valueLabelDisplay="on"
               max={7000}
               min={0}
               slots={{ valueLabel: SliderValueLabel }}
               // getAriaValueText={valueText}
               marks ={marks}
               
            />
         </div>
      </div>
   );
}

function SliderValueLabel({ children }) {
   return (
     <span className="label">
       <div className="value">{children}</div>
     </span>
   );
 }

 const marks = [
   {
     value: 0,
     label: '0',
   },
   {
     value: 7000,
     label: '7000',
   },
 ];
const orange = '#FFA800'

const blue = {
   100: '#DAECFF',
   200: '#99CCF3',
   400: '#3399FF',
   300: '#66B2FF',
   500: '#007FFF',
   600: '#0072E5',
   900: '#003A75',
 };
 
 const grey = {
   50: '#f6f8fa',
   100: '#eaeef2',
   200: '#d0d7de',
   300: '#afb8c1',
   400: '#8c959f',
   500: '#6e7781',
   600: '#57606a',
   700: '#424a53',
   800: '#32383f',
   900: '#24292f',
 };
 
 const StyledSlider = styled(Slider)(
   ({ theme }) => `
   color: ${orange};
   height: 15px;
   width: 100%;
   padding: 16px 0;
   display: inline-block;
   position: relative;
   cursor: pointer;
   touch-action: none;
   -webkit-tap-highlight-color: transparent;
 
   &:hover {
     opacity: 1;
   }
 
   &.${sliderClasses.disabled} { 
     pointer-events: none;
     cursor: default;
     color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
     opacity: 0.5;
   }
 
   & .${sliderClasses.rail} {
     display: block;
     position: absolute;
     width: 100%;
     height: 15px;
     border-radius: 10px;
     background-color: #3E3C41;
     border: 1px solid #C4C4C4;
   }
 
   & .${sliderClasses.track} {
     display: block;
     position: absolute;
     height: 15px;
     border-radius: 2px;
     background-color: currentColor;
   }
 
   & .${sliderClasses.thumb} {
     position: absolute;
     width: 22px;
     height: 22px;
     margin-left: -9px;
     
     margin-top: -3px;
     box-sizing: border-box;
     border-radius: 50%;
     outline: 0;
   //   border: 3px solid currentColor;
     background-color: #fff;
 
     :hover,
     &.${sliderClasses.focusVisible} {
       box-shadow: 0 0 0 0.25rem ${alpha(
         theme.palette.mode === 'light' ? blue[400] : blue[300],
         0.15,
       )};
     }
 
     &.${sliderClasses.active} {
       box-shadow: 0 0 0 0.25rem ${alpha(
         theme.palette.mode === 'light' ? blue[200] : blue[300],
         0.3,
       )};
     }
   }
 
   // & .${sliderClasses.mark} {
   //   position: absolute;
   //   width: 4px;
   //   height: 4px;
   //   border-radius: 2px;
   //   background-color: currentColor;
   //   top: 50%;
   //   opacity: 0.7;
   //   transform: translateX(-50%);
   // }
 
   & .${sliderClasses.markActive} {
     background-color: #fff;
   }

   & .${sliderClasses.markLabel} {
      font-size: 14px;
      position: absolute;
      top: 33px;
      transform: translateX(-50%);
      margin-top: 8px;
      color: #E5E5E5;
    }

   & .label {
      font-size: 14px;
      background: unset;
      width: 32px;
      height: 32px;
      padding: 0px;
     
      color: #E5E5E5;
      position: absolute;
      top: 20px;
      left: -6px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
 `,
 );

 