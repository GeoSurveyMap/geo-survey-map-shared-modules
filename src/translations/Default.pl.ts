import { Category, PointStatus } from '../types';

export const pl = {
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
  categoryInformation: {
    [Category.DRY_SOILS]: '',
    [Category.WET_SOILS]: '',
    [Category.EROSION]: '',
    [Category.SEALED_SOILS]: '',
    [Category.DEGRADATION]: '',
    [Category.LOSS_OF_ORGANIC_MATTER]: '',
    [Category.PH]: '',
    [Category.BIODIVERSITY]: '',
  },
  pointStatus: {
    [PointStatus.accepted]: 'Zaakceptowany',
    [PointStatus.pending]: 'W trakcie weryfikacji',
  },
  login: 'Zaloguj',
  logout: 'Wyloguj',
  register: 'Zarejestruj',
  profile: 'Profil',
  filters: 'Filtry',
  other: 'Inne',
  filtersDescription: 'Wybierz kategorie punktów które chcesz zobaczyć na mapie',
  close: 'Zamknij',
  cancel: 'Anuluj',
  back: 'Wróć',
  next: 'Dalej',
  continue: 'Kontynuuj',
  skip: 'Pomiń',
  addPoint: 'Dodaj punkt',
  clear: 'Wyczyść',
  remove: 'Usuń',
  apply: 'Zastosuj',
  categories: 'Kategorie',
  pressToAddPoint: 'Przytrzymaj, aby dodać zgłoszenie',
  addPointHere: 'Dodaj punkt w mojej lokacji',
  seeMore: 'Zobacz więcej',
  notAuthenticatedModal: {
    title: 'Tylko zalogowani użytkownicy mogą dodać zgłoszenie',
    message: 'Zaloguj się aby kontynuować',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Wybierz kategorię',
      description: 'Wypełnij krótki kwestionariusz i dodaj punkt na mapie',
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
    description: {
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
    solution: {
      title: 'Rozwiązanie problemu',
    },
    successMessage: 'Sukces! Zgłoszenie zostało dodane do mapy',
    errorMessage: 'Ups! Coś poszło nie tak. Spróbuj ponownie',
  },
  pointDetails: {
    category: 'Kategoria',
    placeName: 'Nazwa miejsca',
    affectedArea: 'Promień problemu',
    problemDescription: 'Opis problemu',
    problemSolution: 'Rozwiązanie problemu',
    reportDate: 'Data zgłoszenia',
    photo: 'Zdjęcie',
  },
  userProfile: {
    title: 'Profil użytkownika',
    appLanguage: 'Język aplikacji',
    manageAccount: 'Zarządzaj kontem',
    logout: 'Wyloguj',
    removeAccount: 'Usuń konto',
	pts: 'PKT',
  },
  settings: {
    title: 'Ustawienia',
    appLanguage: 'Język aplikacji',
    appVersion: 'Wersja aplikacji',
  },
  pointsList: {
    title: 'Lista dodanych punktów',
    noPoints: 'Nie dodano żadnych punktów.',
    unauthorized: 'Zaloguj się, aby zobaczyć dodane punkty.',
  },
  noPermissions: {
    library: {
      title: 'Nie możemy uzyskać dostępu do zdjęć',
      description: 'Zezwól na dostęp do zdjęć w ustawieniach.',
    },
    camera: {
      title: 'Nie możemy uzyskać dostępu do kamery',
      description: 'Zezwól na dostęp do kamery w ustawieniach.',
    },
    cancel: 'Anuluj',
    openSettings: 'Otówrz ustawienia',
  },
  pointManagement: {
    title: 'Punkty',
    generateReport: 'Wygeneruj raport',
    pointsToApprove: 'Punkty do akceptacji',
    approvedPoints: 'Punkty',
    pointId: 'Id punktu',
    pointName: 'Nazwa punktu',
    dateFrom: 'Data od',
    dateTo: 'Data do',
    pointType: 'Typ punktu',
    approve: 'Zaakceptuj',
    delete: 'Usuń',
    noData: 'Brak danych do wyświetlenia',
    download: 'Pobierz',
  },
  userManagement: {
    title: 'Zarządzanie użytkownikami',
    emailPlaceholder: 'Szukaj po emailu ...',
    deleteUser: 'Usuń użytkownika',
    confirmDeleteMessage:
      'Czy na pewno chcesz usunąć konto użytkownika wraz ze wszystkimi jego wpisami?',
    cancel: 'Anuluj',
    confirm: 'Usuń konto',
    noUsers: 'Brak użytkowników do wyświetlenia',
  },
  onboarding: {
    goToTheAppButton: 'Przejdź do aplikacji',
    welcome: {
      title: 'Witamy w\nGeoSurveyMap!',
      description: 'Narzędzie zaprojektowane do zgłaszania gleb w niezdrowym stanie',
    },
    instruction: {
      title: 'Jak używać aplikacji?',
      step1: {
        title: 'Znajdź glebę, która wydaje się niezdrowa',
        description:
          'Możesz użyć przykładów dostarczonych przez nasz zespół, aby sprawdzić, z jakim rodzajem gleby masz do czynienia.',
      },
      step2: {
        title: 'Dodaj raport w zlokalizowanym miejscu',
        description:
          'Uwzględnij wszystkie informacje, które zebrałeś dla jakości raportu, które pomogą badaczom próbującym rozwiązać problem.',
      },
      step3: {
        title: 'Poczekaj na potwierdzenie',
        description: 'Każdy raport musi zostać zweryfikowany przez nasz zespół, aby uniknąć szkodliwych treści.',
      },
    },
    aboutSoils: {
      title: 'Informacje o glebach',
      description:
        'Kliknij kategorię gleby, aby wyświetlić informacje na jej temat. Jest to również dostępne w sekcji ustawień aplikacji.',
    },
  },
};
