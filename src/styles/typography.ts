import { TextType } from '../types';

export const fontFamily = 'Montserrat';

export const fontWeight = {
  '400': `${fontFamily}-Regular`,
  '500': `${fontFamily}-Medium`,
  '600': `${fontFamily}-SemiBold`,
  '700': `${fontFamily}-Bold`,
};

export const size: Record<TextType, number> = {
  [TextType.TITLE]: 54,
  [TextType.H1]: 24,
  [TextType.H2]: 20,
  [TextType.H3]: 18,
  [TextType.H4]: 16,
  [TextType.P]: 14,
  [TextType.TOOLTIP]: 8,
};

export const weight: Record<TextType, keyof typeof fontWeight> = {
  [TextType.TITLE]: '700',
  [TextType.H1]: '700',
  [TextType.H2]: '700',
  [TextType.H3]: '700',
  [TextType.H4]: '700',
  [TextType.P]: '400',
  [TextType.TOOLTIP]: '700',
};
