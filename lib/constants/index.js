"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryInformationPhoto = exports.problemCausesForCategories = void 0;
var types_1 = require("../types");
exports.problemCausesForCategories = (_a = {},
    _a[types_1.Category.DRY_SOILS] = [
        { value: 'Lack of rainfall', translationKey: 'lackOfRainfall' },
        { value: 'High temperatures', translationKey: 'highTemperatures' },
        { value: 'Poor soil structure', translationKey: 'poorSoilStructure' },
        { value: 'Overuse of water resources', translationKey: 'overuseOfWaterResources' },
        { value: 'Deforestation', translationKey: 'deforestation' },
        { value: 'Climate change', translationKey: 'climateChange' },
        { value: 'Overgrazing', translationKey: 'overgrazing' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.WET_SOILS] = [
        { value: 'Heavy rainfall', translationKey: 'heavyRainfall' },
        { value: 'Poor drainage systems', translationKey: 'poorDrainageSystems' },
        { value: 'High water table', translationKey: 'highWaterTable' },
        { value: 'Over-irrigation', translationKey: 'overIrrigation' },
        { value: 'Soil compaction', translationKey: 'soilCompaction' },
        { value: 'Urbanization', translationKey: 'urbanization' },
        { value: 'Flooding', translationKey: 'flooding' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.EROSION] = [
        { value: 'Wind erosion', translationKey: 'windErosion' },
        { value: 'Water erosion', translationKey: 'waterErosion' },
        { value: 'Human activity', translationKey: 'humanActivity' },
        { value: 'Gully erosion', translationKey: 'gullyErosion' },
        { value: 'Sheet erosion', translationKey: 'sheetErosion' },
        { value: 'Rill erosion', translationKey: 'rillErosion' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.SEALED_SOILS] = [
        { value: 'Urbanization', translationKey: 'urbanization' },
        { value: 'Agricultural practices', translationKey: 'agriculturalPractices' },
        { value: 'Industrial activities', translationKey: 'industrialActivities' },
        { value: 'Soil compaction', translationKey: 'soilCompaction' },
        { value: 'Paving and concreting', translationKey: 'pavingAndConcreting' },
        { value: 'Natural processes', translationKey: 'naturalProcesses' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.DEGRADATION] = [
        { value: 'Erosion', translationKey: 'erosion' },
        { value: 'Contamination', translationKey: 'contamination' },
        { value: 'Loss of nutrients', translationKey: 'lossOfNutrients' },
        { value: 'Overuse of soil', translationKey: 'overuseOfSoil' },
        { value: 'Deforestation', translationKey: 'deforestation' },
        { value: 'Climate change', translationKey: 'climateChange' },
        { value: 'Overgrazing', translationKey: 'overgrazing' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = [
        { value: 'Intensive agriculture', translationKey: 'intensiveAgriculture' },
        { value: 'Deforestation', translationKey: 'deforestation' },
        { value: 'Overgrazing', translationKey: 'overgrazing' },
        { value: 'Soil erosion', translationKey: 'soilErosion' },
        { value: 'Climate change', translationKey: 'climateChange' },
        { value: 'Poor land management', translationKey: 'poorLandManagement' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.PH] = [
        { value: 'Acidic', translationKey: 'acidic' },
        { value: 'Slightly acidic', translationKey: 'slightlyAcidic' },
        { value: 'Neutral', translationKey: 'neutral' },
        { value: 'Slightly alkaline', translationKey: 'slightlyAlkaline' },
        { value: 'Alkaline', translationKey: 'alkaline' },
        { value: 'Not sure', translationKey: 'notSure' },
        { value: 'Other', translationKey: 'other' },
    ],
    _a[types_1.Category.BIODIVERSITY] = [
        { value: 'Agricultural practices', translationKey: 'agriculturalPractices' },
        { value: 'Urbanization', translationKey: 'urbanization' },
        { value: 'Pollution', translationKey: 'pollution' },
        { value: 'Climate change', translationKey: 'climateChange' },
        { value: 'Deforestation', translationKey: 'deforestation' },
        { value: 'Natural soil conditions', translationKey: 'naturalSoilConditions' },
        { value: 'Other', translationKey: 'other' },
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
