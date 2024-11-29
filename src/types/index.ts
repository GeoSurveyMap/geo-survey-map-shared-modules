export type Theme = {
  text: string;
  textFaded: string;
  background: string;
  surface: string;
  primary: string;
  outline: string;
};

export enum TextType {
  TITLE = 'TITLE',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  P = 'P',
  TOOLTIP = 'TOOLTIP',
}

export enum Category {
  DRY_SOILS = 'DRY_SOILS',
  WET_SOILS = 'WET_SOILS',
  EROSION = 'EROSION',
  SEALED_SOILS = 'SEALED_SOILS',
  DEGRADATION = 'DEGRADATION',
  LOSS_OF_ORGANIC_MATTER = 'LOSS_OF_ORGANIC_MATTER',
  PH = 'PH',
  BIODIVERSITY = 'BIODIVERSITY',
}

export enum PointStatus {
	accepted = 'accepted',
	pending = 'pending'
}
