import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Forecast from './Forecast';

const props = {list: [
  {dt:1653858000 + 10800 * 0, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 1, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 2, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 3, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 4, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 5, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 6, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 7, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 8, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 9, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 10, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 11, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 12, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 13, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 14, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 15, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 16, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 17, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 18, main: {temp:9.74}, weather: [{icon:"01d"}]},
  {dt:1653858000 + 10800 * 19, main: {temp:9.74}, weather: [{icon:"01d"}]},
]}

test('renders Control components', () => {
  const totalControls = 6;
  render(<Forecast {...props}/>);

  expect(screen.getAllByRole('control')).toHaveLength(totalControls);
});

test('renders SmallCard components', () => {
  const totalSmallCards = 8;
  render(<Forecast {...props}/>);
  
  expect(screen.getAllByRole('img')).toHaveLength(totalSmallCards);
});

test('when click on current day control there are eigth small cards', () => {
  render(<Forecast {...props}/>);
  
  const controlCurrentDay = screen.getAllByRole('control')[0]
  fireEvent.click(controlCurrentDay)
  
  expect(screen.getAllByRole('img')).toHaveLength(8);  
});

test('when click on next day control there are eigth small cards and the first is 0:00', () => {
  render(<Forecast {...props}/>);
  
  const controlYesterday = screen.getAllByRole('control')[1]
  fireEvent.click(controlYesterday)

  expect(screen.getAllByRole('heading')[0].textContent).toBe('0:00')

});
