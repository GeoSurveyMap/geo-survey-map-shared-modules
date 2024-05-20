import { TextType } from 'types';
export declare const fontFamily = "Montserrat";
export declare const fontWeight: {
    '400': string;
    '500': string;
    '600': string;
    '700': string;
};
export declare const size: Record<TextType, number>;
export declare const weight: Record<TextType, keyof typeof fontWeight>;
