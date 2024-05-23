"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.lightTheme = exports.gradients = exports.colors = void 0;
var BLACK = '#222222';
var WHITE = '#FFFFFF';
var GRAY = '#DCDCDC';
var DARK_GRAY = '#666666';
var RED = '#F54545';
var LIGHT_GREEN = '#14D49B';
var DARK_GREEN = '#004E53';
var LIGHT_BLUE = '#3478F6';
var DARK_BLUE = '#00407C';
var YELLOW_GRADIENT = ['#FFF500', '#D6CD00'];
var BLUE_GRADIENT = ['#2C9AFF', '#1A5C99'];
var GRAY_GRADIENT = ['#C9C9C9', '#636363'];
var BROWN_GRADIENT = ['#DB5C00', '#753100'];
var RED_GRADIENT = ['#FF2C2C', '#991A1A'];
var PURPLE_GRADIENT = ['#D484E8', '#442061'];
exports.colors = {
    BLACK: BLACK,
    WHITE: WHITE,
    GRAY: GRAY,
    DARK_GRAY: DARK_GRAY,
    RED: RED,
    LIGHT_GREEN: LIGHT_GREEN,
    DARK_GREEN: DARK_GREEN,
    LIGHT_BLUE: LIGHT_BLUE,
    DARK_BLUE: DARK_BLUE,
};
exports.gradients = {
    YELLOW_GRADIENT: YELLOW_GRADIENT,
    BLUE_GRADIENT: BLUE_GRADIENT,
    GRAY_GRADIENT: GRAY_GRADIENT,
    BROWN_GRADIENT: BROWN_GRADIENT,
    RED_GRADIENT: RED_GRADIENT,
    PURPLE_GRADIENT: PURPLE_GRADIENT,
};
exports.lightTheme = {
    text: BLACK,
    background: WHITE,
    surface: GRAY,
    primary: LIGHT_GREEN,
    outline: GRAY,
};
exports.darkTheme = {
    text: WHITE,
    background: BLACK,
    surface: BLACK,
    primary: LIGHT_GREEN,
    outline: GRAY,
};
