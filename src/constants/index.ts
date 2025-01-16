import { Category } from '../types';

export const problemCausesForCategories: Record<Category, string[]> = {
  [Category.DRY_SOILS]: [
    'Lack of rainfall',
    'High temperatures',
    'Poor soil structure',
    'Overuse of water resources',
    'Deforestation',
    'Climate change',
    'Overgrazing',
    'Other',
  ],
  [Category.WET_SOILS]: [
    'Heavy rainfall',
    'Poor drainage systems',
    'High water table',
    'Over-irrigation',
    'Soil compaction',
    'Urbanization',
    'Flooding',
    'Other',
  ],
  [Category.EROSION]: [
    'Wind erosion',
    'Water erosion',
    'Human activity',
    'Gully erosion',
    'Sheet erosion',
    'Rill erosion',
    'Other',
  ],
  [Category.SEALED_SOILS]: [
    'Urbanization',
    'Agricultural practices',
    'Industrial activities',
    'Soil compaction',
    'Paving and concreting',
    'Natural processes',
    'Other',
  ],
  [Category.DEGRADATION]: [
    'Erosion',
    'Contamination',
    'Loss of nutrients',
    'Overuse of soil',
    'Deforestation',
    'Climate change',
    'Overgrazing',
    'Other',
  ],
  [Category.LOSS_OF_ORGANIC_MATTER]: [
    'Intensive agriculture',
    'Deforestation',
    'Overgrazing',
    'Soil erosion',
    'Climate change',
    'Poor land management',
    'Other',
  ],
  [Category.PH]: [
    'Acidic',
    'Slightly acidic',
    'Neutral',
    'Slightly alkaline',
    'Alkaline',
    'Not sure',
    'Other',
  ],
  [Category.BIODIVERSITY]: [
    'Agricultural practices',
    'Urbanization',
    'Pollution',
    'Climate change',
    'Deforestation',
    'Natural soil conditions',
    'Other',
  ],
};

export const categoryInformationPhoto: Record<Category, { uri: string | null; source: string }> = {
  [Category.DRY_SOILS]: {
    uri: 'https://www.iberdrola.com/documents/20125/42541/Desertificacion_746x419.jpg/c83c1c04-5a1f-c171-733b-d132b852f6fb?t=1631776118778',
    source: 'Photo from Iberdrola',
  },
  [Category.WET_SOILS]: {
    uri: 'https://i0.wp.com/thomasdstone.blog/wp-content/uploads/2018/04/img_0733-1.jpg?w=430&ssl=1',
    source: 'Photo from Thomas Stone',
  },
  [Category.EROSION]: {
    uri: 'https://www.cipra.org/en/news/heatwave-aggravated-by-soil-sealing/ftw-simplelayout-textblock-1/@@images/5508fde4-580e-4600-9fbd-895dce3a1f88.jpeg',
    source: 'Photo from CIPRA',
  },
  [Category.SEALED_SOILS]: {
    uri: 'https://infonet-biovision.org/sites/default/files/environmental_health/soil_management/1362_0.jpeg',
    source: 'Photo from The Soil Erosion Site',
  },
  [Category.DEGRADATION]: {
    uri: 'https://www.thesolutionsjournal.com/wp-content/uploads/2017/08/soil-degradation.jpg',
    source: 'Photo from The Solutions Journal',
  },
  [Category.LOSS_OF_ORGANIC_MATTER]: {
    uri: null,
    source: '',
  },
  [Category.PH]: {
    uri: null,
    source: '',
  },
  [Category.BIODIVERSITY]: {
    uri: null,
    source: '',
  },
};
