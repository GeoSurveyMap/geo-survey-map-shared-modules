import { en } from './Default.en';
import { pl } from './Default.pl';

export const availableLanguages: { name: string; languageCode: string; emoji: string }[] = [
  { name: 'English', languageCode: 'en-UK', emoji: '🇬🇧' },
  { name: 'Polski', languageCode: 'pl-PL', emoji: '🇵🇱' },
];

// Function to get flag emoji from country code
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Function to get language details by code using Intl.DisplayNames
export function getLanguageDetails(languageCode: string) {
  const displayNames = new Intl.DisplayNames([languageCode], { type: 'language' });
  const languageName = displayNames.of(languageCode.split('-')[0]);
  const countryCode = languageCode.split('-')[1];
  const emoji = countryCode ? getFlagEmoji(countryCode) : '🏳️'; // Default emoji if not found
  return { name: languageName, languageCode, emoji };
}

export const fallbacks = {
  en: {
    Default: en,
  },
  pl: {
    Default: pl,
  },
};
