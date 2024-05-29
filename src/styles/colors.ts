import type { Theme } from 'types';

const BLACK = '#222222';
const WHITE = '#FFFFFF';
const GRAY = '#DCDCDC';
const DARK_GRAY = '#666666';
const RED = '#F54545';

const LIGHT_GREEN = '#14D49B';
const DARK_GREEN = '#004E53';
const LIGHT_BLUE = '#3478F6';
const DARK_BLUE = '#00407C';

const YELLOW_GRADIENT = ['#FFF500', '#D6CD00'];
const BLUE_GRADIENT = ['#2C9AFF', '#1A5C99'];
const GRAY_GRADIENT = ['#C9C9C9', '#636363'];
const BROWN_GRADIENT = ['#DB5C00', '#753100'];
const RED_GRADIENT = ['#FF2C2C', '#991A1A'];
const PURPLE_GRADIENT = ['#D484E8', '#442061'];

export const colors = {
  BLACK,
  WHITE,
  GRAY,
  DARK_GRAY,
  RED,
  LIGHT_GREEN,
  DARK_GREEN,
  LIGHT_BLUE,
  DARK_BLUE,
};

export const gradients = {
  YELLOW_GRADIENT,
  BLUE_GRADIENT,
  GRAY_GRADIENT,
  BROWN_GRADIENT,
  RED_GRADIENT,
  PURPLE_GRADIENT,
};

export const lightTheme: Theme = {
  text: BLACK,
  textFaded: DARK_GRAY,
  background: WHITE,
  surface: GRAY,
  primary: LIGHT_GREEN,
  outline: GRAY,
} as const;

export const darkTheme: Theme = {
  text: WHITE,
  textFaded: GRAY,
  background: BLACK,
  surface: BLACK,
  primary: LIGHT_GREEN,
  outline: DARK_GRAY,
} as const;
