import { en } from './Default.en';
import { pl } from './Default.pl';

export const availableLanguages: { name: string; languageCode: string }[] = [
  { name: 'English', languageCode: 'en-UK' },
  { name: 'Polski', languageCode: 'pl-PL' },
];

export const fallbacks = {
  en: {
    Default: en,
  },
  pl: {
    Default: pl,
  },
};
