"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconForSurveyMapMarker = exports.gradientForSurveyMapMarker = void 0;
var types_1 = require("../types");
var styles_1 = require("../styles");
var icons_1 = require("../assets/icons");
exports.gradientForSurveyMapMarker = (_a = {},
    _a[types_1.Category.DRY_SOILS] = styles_1.gradients.YELLOW_GRADIENT,
    _a[types_1.Category.WET_SOILS] = styles_1.gradients.BLUE_GRADIENT,
    _a[types_1.Category.EROSION] = styles_1.gradients.GRAY_GRADIENT,
    _a[types_1.Category.SEALED_SOILS] = styles_1.gradients.BROWN_GRADIENT,
    _a[types_1.Category.DEGRADATION] = styles_1.gradients.RED_GRADIENT,
    _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = styles_1.gradients.PURPLE_GRADIENT,
    _a[types_1.Category.PH] = styles_1.gradients.PURPLE_GRADIENT,
    _a[types_1.Category.BIODIVERSITY] = styles_1.gradients.PURPLE_GRADIENT,
    _a);
exports.iconForSurveyMapMarker = (_b = {},
    _b[types_1.Category.DRY_SOILS] = icons_1.Cactus,
    _b[types_1.Category.WET_SOILS] = icons_1.Wave,
    _b[types_1.Category.EROSION] = icons_1.Wind,
    _b[types_1.Category.SEALED_SOILS] = icons_1.Dirt,
    _b[types_1.Category.DEGRADATION] = icons_1.Factory,
    _b[types_1.Category.LOSS_OF_ORGANIC_MATTER] = icons_1.Tractor,
    _b[types_1.Category.PH] = icons_1.Tractor,
    _b[types_1.Category.BIODIVERSITY] = icons_1.Tractor,
    _b);
