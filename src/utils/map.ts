import { Category } from '../types';
import { gradients } from '../styles';
import { Cactus, Dirt, Factory, Wind, Wave, Tractor } from '../assets/icons';

export const gradientForSurveyMapMarker: Record<Category, string[]> = {
  [Category.DRY_SOILS]: gradients.YELLOW_GRADIENT,
  [Category.WET_SOILS]: gradients.BLUE_GRADIENT,
  [Category.EROSION]: gradients.GRAY_GRADIENT,
  [Category.SEALED_SOILS]: gradients.BROWN_GRADIENT,
  [Category.DEGRADATION]: gradients.RED_GRADIENT,
  [Category.LOSS_OF_ORGANIC_MATTER]: gradients.PURPLE_GRADIENT,
  [Category.PH]: gradients.PURPLE_GRADIENT,
  [Category.BIODIVERSITY]: gradients.PURPLE_GRADIENT,
};

export const iconForSurveyMapMarker: Record<Category, typeof Cactus> = {
  [Category.DRY_SOILS]: Cactus,
  [Category.WET_SOILS]: Wave,
  [Category.EROSION]: Wind,
  [Category.SEALED_SOILS]: Dirt,
  [Category.DEGRADATION]: Factory,
  [Category.LOSS_OF_ORGANIC_MATTER]: Tractor,
  [Category.PH]: Tractor,
  [Category.BIODIVERSITY]: Tractor,
};
