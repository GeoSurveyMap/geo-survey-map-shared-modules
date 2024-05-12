export const fontFamily = 'Montserrat';

export const fontWeight = {
  '400': `${fontFamily}-Regular`,
  '500': `${fontFamily}-Medium`,
  '600': `${fontFamily}-SemiBold`,
  '700': `${fontFamily}-Bold`,
};

export enum TextType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  P = 'P',
}

export const size: Record<TextType, number> = {
  [TextType.H1]: 24,
  [TextType.H2]: 20,
  [TextType.H3]: 18,
  [TextType.H4]: 16,
  [TextType.P]: 14,
};

export const weight: Record<TextType, keyof typeof fontWeight> = {
  [TextType.H1]: '700',
  [TextType.H2]: '700',
  [TextType.H3]: '700',
  [TextType.H4]: '700',
  [TextType.P]: '400',
};

