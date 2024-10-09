import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha, Box } from '@mui/system';
import Slider, { sliderClasses } from '@mui/base/Slider';
import routeTo from '../../img/AsideRouteTo.svg';
import routeBack from '../../img/AsideRouteaBack.svg';

import { filterChange } from '../../Slice/filterSlice';

export default function TimeFilter() {
   const [isHidden, setHidden] = useState({
      departure: true,
      arrival: true,
   });

   const dispatch = useDispatch();
   // const { price_from, price_to } = useSelector((state) => state.filter);

   const minDistance = 10;
   const [departureTimeFrom, setDepartureTimeFrom] = useState([5, 20]);
   const [departureTimeTo, setDepartureTimeTo] = useState([5, 20]);
   const [arrivalTimeFrom, setArrivalTimeFrom] = useState([5, 20]);
   const [arrivalTimeTo, setArrivalTimeTo] = useState([5, 20]);

   const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setDepartureTimeFrom([
            Math.min(newValue[0], departureTimeFrom[1] - minDistance),
            departureTimeFrom[1],
         ]);
      } else {
         setDepartureTimeFrom([
            departureTimeFrom[0],
            Math.max(newValue[1], departureTimeFrom[0] + minDistance),
         ]);
      }
      dispatch(
         filterChange({ name: 'start_departure_hour_from', value: departureTimeFrom[0] })
      );

      dispatch(filterChange({ name: 'start_departure_hour_to', value: departureTimeFrom[1] }));
   };

   const handleChange2 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setDepartureTimeTo([
            Math.min(newValue[0], departureTimeTo[1] - minDistance),
            departureTimeTo[1],
         ]);
      } else {
         setDepartureTimeTo([
            departureTimeTo[0],
            Math.max(newValue[1], departureTimeTo[0] + minDistance),
         ]);
      }
      dispatch(filterChange({ name: 'price_from', value: departureTimeTo[0] }));

      dispatch(filterChange({ name: 'price_to', value: departureTimeTo[1] }));
   };

   const handleChange3 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setArrivalTimeFrom([
            Math.min(newValue[0], arrivalTimeFrom[1] - minDistance),
            arrivalTimeFrom[1],
         ]);
      } else {
         setArrivalTimeFrom([
            arrivalTimeFrom[0],
            Math.max(newValue[1], arrivalTimeFrom[0] + minDistance),
         ]);
      }
      dispatch(
         filterChange({ name: 'price_from', value: arrivalTimeFrom[0] })
      );

      dispatch(filterChange({ name: 'price_to', value: arrivalTimeFrom[1] }));
   };

   const handleChange4 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setArrivalTimeTo([
            Math.min(newValue[0], arrivalTimeTo[1] - minDistance),
            arrivalTimeTo[1],
         ]);
      } else {
         setArrivalTimeTo([
            arrivalTimeTo[0],
            Math.max(newValue[1], arrivalTimeTo[0] + minDistance),
         ]);
      }
      dispatch(filterChange({ name: 'price_from', value: arrivalTimeTo[0] }));

      dispatch(filterChange({ name: 'price_to', value: arrivalTimeTo[1] }));
   };

   /** Открывание, скрытие блока */
   const onHidden = (name) => {
      setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   return (
      <>
         <div className="time-filter__block aside-item">
            <div className="time-filter_header aside__block-title">
               <img src={routeTo} alt="alt" />
               <span className="filter-title">Туда</span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.departure ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('departure')}
               ></button>
            </div>
            <div
               className={`time-filter_form ${
                  isHidden.departure ? 'hidden' : ''
               }`}
            >
               <p className="time-filter_title">Время отправления</p>
               <div className="time-filter_range">
                  <StyledSlider
                     getAriaLabel={() => 'Minimum distance'}
                     value={departureTimeFrom}
                     onChange={handleChange1}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     slots={{ valueLabel: SliderValueLabel }}
               // getAriaValueText={valueText}
               marks ={marks}
                  />
               </div>
               <p className="time-filter_title title title-right">
                  Время прибытия
               </p>
               <div className="time-filter_range">
               <StyledSlider
                     getAriaLabel={() => 'Minimum distance'}
                     value={departureTimeTo}
                     onChange={handleChange2}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     slots={{ valueLabel: SliderValueLabel }}
               // getAriaValueText={valueText}
               marks ={marks}
                  />
               </div>
            </div>
         </div>
         <div className="time-filter__block aside-item">
            <div className="time-filter_header aside__block-title">
               <img src={routeBack} alt="alt" />
               <span className="filter-title">Обратно</span>
               <button
                  type="button"
                  className={`aside-hidden__btn ${
                     isHidden.arrival ? 'active-button' : 'inactive-button'
                  }`}
                  onClick={() => onHidden('arrival')}
               ></button>
            </div>
            <div
               className={`time-filter_form ${
                  isHidden.arrival ? 'hidden' : ''
               }`}
            >
               <p className="time-filter_title">Время отправления</p>
               <div className="time-filter_range">
               <StyledSlider
                     getAriaLabel={() => 'Minimum distance'}
                     value={arrivalTimeFrom}
                     onChange={handleChange3}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     slots={{ valueLabel: SliderValueLabel }}
               // getAriaValueText={valueText}
               marks ={marks}
                  />
               </div>
               <p className="time-filter_title title title-right">
                  Время прибытия
               </p>
               <div className="time-filter_range">
               <StyledSlider
                     getAriaLabel={() => 'Minimum distance'}
                     value={arrivalTimeTo}
                     onChange={handleChange4}
                     valueLabelDisplay="on"
                     max={24}
                     min={0}
                     // getAriaValueText={valueText}
                     slots={{ valueLabel: SliderValueLabel }}
               // getAriaValueText={valueText}
               marks ={marks}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
function SliderValueLabel({ children }) {
   return (
     <span className="label">
       <div className="value">{`${children}:00`}</div>
     </span>
   );
 }

 const marks = [
   {
     value: 24,
     label: '24:00',
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
   height: 10px;
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
     height: 10px;
     border-radius: 10px;
     background-color: #3E3C41;
     border: 1px solid #C4C4C4;
   }
 
   & .${sliderClasses.track} {
     display: block;
     position: absolute;
     height: 10px;
     border-radius: 2px;
     background-color: currentColor;
   }
 
   & .${sliderClasses.thumb} {
     position: absolute;
     width: 16px;
     height: 16px;
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

 