
# Geo Survey Map Shared Modules

## Overview

This project contains shared modules for both web and mobile applications for Geo Survey Map. The shared modules include types, constants, styles, API clients, hooks, assets, and translations to support the functionality across different platforms.

## Usage in client apps

To use the shared modules in a client application, install the package from the GitHub repository:

```sh
yarn add geo-survey-map-shared-modules@"https://github.com/GeoSurveyMap/geo-survey-map-shared-modules.git"
```

## Development 

### Installation

To install the dependencies, run:

```sh
yarn install
```

### Build

To build the project, run:

```sh
yarn build
```

This command compiles the TypeScript code according to the configurations specified in `tsconfig.build.json` and outputs the result to the `lib` directory. It needs to be run before publishing the package.

## Project Structure

### `src/`

- **index.ts**: Exports all modules for easy access.
- **types/**: Contains TypeScript type definitions.
- **constants/**: Defines application-wide constants.
- **styles/**: Contains styling definitions including colors and typography.
- **api/**: Contains API client configurations and hooks for interacting with the backend services.
- **assets/**: Contains images, icons, and fonts used in the project.
- **translations/**: Contains language translations for the application.

## Usage

### API Client

The API client is set up using Axios and includes methods for managing authentication headers and base URL configuration.

```typescript
import { updateApiClient } from './api/libs/axiosClient';

// Set authentication header
updateApiClient.setAuthenticationHeader('your-token');

// Remove authentication header
updateApiClient.removeAuthenticationHeader();

// Set base URL
updateApiClient.setBaseURL('https://api.example.com');
```

### Query Client

The project uses React Query for data fetching and caching. If you want to use it, you first need to install the package:

```sh
$ npm i @tanstack/react-query
# or
$ pnpm add @tanstack/react-query
# or
$ yarn add @tanstack/react-query
# or
$ bun add @tanstack/react-query
```

Then, you can import the query client and clear the cache when needed:

```tsx
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from 'geo-survey-map-shared-modules';

<QueryClientProvider client={queryClient}>
  <Todos />
</QueryClientProvider>
```


### Custom Hooks

Custom hooks for fetching and manipulating survey data:

```typescript
import {
  useCreateSurvey,
  useGetSurveyByLocation,
  useGetAllSurveysWithinRadius,
  useGetAllSurveys,
} from 'geo-survey-map-shared-modules';

// Create survey hook
const { mutate: createSurvey } = useCreateSurvey();

// Fetch survey by location hook
const { data: survey } = useGetSurveyByLocation(10, 20);

// Fetch all surveys within radius hook
const { data: surveys } = useGetAllSurveysWithinRadius(10, 20, 1000);

// Fetch all surveys hook
const { data: allSurveys } = useGetAllSurveys();
```

## Styling

The styling includes color definitions and typography settings.

### Colors

```typescript
import { colors } from './styles';

console.log(colors.BLACK); // '#222222'
```

### Typography

```typescript
import { typography } from './styles';

console.log(typography.fontFamily); // 'Montserrat'
console.log(typography.size[typography.TextType.H1]); // 24
```

## Translations

The project supports multiple languages. Current translations are available in English and Polish.

```typescript
import translations from './translations';

console.log(translations.en['hello.world']); // 'Hello, World!'
console.log(translations.pl['hello.world']); // 'Cześć, świecie!'
```

## License

This project is licensed under the terms specified in the `UNLICENSED` file.
