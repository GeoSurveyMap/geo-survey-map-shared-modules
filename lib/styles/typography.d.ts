export declare const fontFamily = "Montserrat";
export declare const fontWeight: {
    '400': string;
    '500': string;
    '600': string;
    '700': string;
};
export declare enum TextType {
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
    P = "P"
}
export declare const size: Record<TextType, number>;
export declare const weight: Record<TextType, keyof typeof fontWeight>;
