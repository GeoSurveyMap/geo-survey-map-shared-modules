import { Category } from 'types';

export default {
  category: {
    [Category.DRY_SOILS]: 'Gleba sucha',
    [Category.WET_SOILS]: 'Gleba mokra',
    [Category.EROSION]: 'Erozja',
    [Category.SEALED_SOILS]: 'Gleba zasklepiona',
    [Category.DEGRADATION]: 'Degradacja gleby',
    [Category.LOSS_OF_ORGANIC_MATTER]: 'Utrata materii organicznej',
    [Category.PH]: 'PH',
    [Category.BIODIVERSITY]: 'Bioróżnorodność',
  },
  login: 'Zaloguj',
  logout: 'Wyloguj',
  register: 'Zarejestruj',
  filters: 'Filtry',
  close: 'Zamknij',
  cancel: 'Anuluj',
  back: 'Wróć',
  next: 'Dalej',
  skip: 'Pomiń',
  addPoint: 'Dodaj punkt',
  clear: 'Wyczyść',
  remove: 'Usuń',
  apply: 'Zastosuj',
  categories: 'Kategorie',
  pressToAddPoint: 'Przytrzymaj, aby dodać zgłoszenie',
  notAuthenticatedModal: {
    title: 'Tylko zalogowani użytkownicy mogą dodać zgłoszenie',
    message: 'Zaloguj się aby kontynuować',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Wybierz kategorię',
    },
    affectedArea: {
      title: 'Obszar dotknięty problemem',
      placeholder: 'Wybierz promień obszaru',
    },
    addPhoto: {
      title: 'Dodaj zdjęcie',
      takePhoto: 'Zrób zdjęcie',
      or: 'lub',
      chooseFromGallery: 'Wybierz zdjęcie z galerii',
    },
    describtion: {
      title: 'Opisz miejsce',
      placeName: {
        label: 'Nazwa miejsca',
        placeholder: 'np. Park ul. Kościuszki',
      },
      problemDescription: {
        label: 'Opis problemu',
        placeholder: '',
      },
    },
    successMessage: 'Sukces! Zgłoszenie zostało dodane do mapy',
    errorMessage: 'Ups! Coś poszło nie tak. Spróbuj ponownie',
  },
  pointDetails: {
    category: 'Kategoria',
    placeName: 'Nazwa miejsca',
    affectedArea: 'Promień problemu',
    problemDescription: 'Opis problemu',
    photo: 'Zdjęcie',
  },
  userProfile: {
    title: 'Profil użytkownika',
    appLanguage: 'Język aplikacji',
    manageAccount: 'Zarządzaj kontem',
    logout: 'Wyloguj',
    removeAccount: 'Usuń konto',
  },
};
