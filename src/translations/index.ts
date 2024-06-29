import { en } from './Default.en';
import { pl } from './Default.pl';

export const availableLanguages: { name: string; languageCode: string; emoji: string }[] = [
  { name: 'English', languageCode: 'en-UK', emoji: '🇬🇧' },
  { name: 'Polski', languageCode: 'pl-PL', emoji: '🇵🇱' },
];

export const fallbacks = {
  en: {
    Default: en,
  },
  pl: {
    Default: pl,
  },
};
