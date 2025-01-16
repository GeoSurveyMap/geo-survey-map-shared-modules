"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryInformationPhoto = exports.problemCausesForCategories = void 0;
var types_1 = require("../types");
exports.problemCausesForCategories = (_a = {},
    _a[types_1.Category.DRY_SOILS] = [
        'Lack of rainfall',
        'High temperatures',
        'Poor soil structure',
        'Overuse of water resources',
        'Deforestation',
        'Climate change',
        'Overgrazing',
        'Other',
    ],
    _a[types_1.Category.WET_SOILS] = [
        'Heavy rainfall',
        'Poor drainage systems',
        'High water table',
        'Over-irrigation',
        'Soil compaction',
        'Urbanization',
        'Flooding',
        'Other',
    ],
    _a[types_1.Category.EROSION] = [
        'Wind erosion',
        'Water erosion',
        'Human activity',
        'Gully erosion',
        'Sheet erosion',
        'Rill erosion',
        'Other',
    ],
    _a[types_1.Category.SEALED_SOILS] = [
        'Urbanization',
        'Agricultural practices',
        'Industrial activities',
        'Soil compaction',
        'Paving and concreting',
        'Natural processes',
        'Other',
    ],
    _a[types_1.Category.DEGRADATION] = [
        'Erosion',
        'Contamination',
        'Loss of nutrients',
        'Overuse of soil',
        'Deforestation',
        'Climate change',
        'Overgrazing',
        'Other',
    ],
    _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = [
        'Intensive agriculture',
        'Deforestation',
        'Overgrazing',
        'Soil erosion',
        'Climate change',
        'Poor land management',
        'Other',
    ],
    _a[types_1.Category.PH] = [
        'Acidic',
        'Slightly acidic',
        'Neutral',
        'Slightly alkaline',
        'Alkaline',
        'Not sure',
        'Other',
    ],
    _a[types_1.Category.BIODIVERSITY] = [
        'Agricultural practices',
        'Urbanization',
        'Pollution',
        'Climate change',
        'Deforestation',
        'Natural soil conditions',
        'Other',
    ],
    _a);
exports.categoryInformationPhoto = (_b = {},
    _b[types_1.Category.DRY_SOILS] = {
        uri: 'https://www.iberdrola.com/documents/20125/42541/Desertificacion_746x419.jpg/c83c1c04-5a1f-c171-733b-d132b852f6fb?t=1631776118778',
        source: 'Photo from Iberdrola',
    },
    _b[types_1.Category.WET_SOILS] = {
        uri: 'https://i0.wp.com/thomasdstone.blog/wp-content/uploads/2018/04/img_0733-1.jpg?w=430&ssl=1',
        source: 'Photo from Thomas Stone',
    },
    _b[types_1.Category.SEALED_SOILS] = {
        uri: 'https://www.cipra.org/en/news/heatwave-aggravated-by-soil-sealing/ftw-simplelayout-textblock-1/@@images/5508fde4-580e-4600-9fbd-895dce3a1f88.jpeg',
        source: 'Photo from CIPRA',
    },
    _b[types_1.Category.EROSION] = {
        uri: 'https://infonet-biovision.org/sites/default/files/environmental_health/soil_management/1362_0.jpeg',
        source: 'Photo from The Soil Erosion Site',
    },
    _b[types_1.Category.DEGRADATION] = {
        uri: null,
        source: '',
    },
    _b[types_1.Category.LOSS_OF_ORGANIC_MATTER] = {
        uri: null,
        source: '',
    },
    _b[types_1.Category.PH] = {
        uri: null,
        source: '',
    },
    _b[types_1.Category.BIODIVERSITY] = {
        uri: null,
        source: '',
    },
    _b);
