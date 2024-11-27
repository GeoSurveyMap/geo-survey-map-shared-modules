"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pl = void 0;
var types_1 = require("../types");
exports.pl = {
    category: (_a = {},
        _a[types_1.Category.DRY_SOILS] = 'Gleba sucha',
        _a[types_1.Category.WET_SOILS] = 'Gleba mokra',
        _a[types_1.Category.EROSION] = 'Erozja',
        _a[types_1.Category.SEALED_SOILS] = 'Gleba zasklepiona',
        _a[types_1.Category.DEGRADATION] = 'Degradacja gleby',
        _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = 'Utrata materii organicznej',
        _a[types_1.Category.PH] = 'PH',
        _a[types_1.Category.BIODIVERSITY] = 'Bioróżnorodność',
        _a),
    categoryInformation: (_b = {},
        _b[types_1.Category.DRY_SOILS] = '',
        _b[types_1.Category.WET_SOILS] = '',
        _b[types_1.Category.EROSION] = '',
        _b[types_1.Category.SEALED_SOILS] = '',
        _b[types_1.Category.DEGRADATION] = '',
        _b[types_1.Category.LOSS_OF_ORGANIC_MATTER] = '',
        _b[types_1.Category.PH] = '',
        _b[types_1.Category.BIODIVERSITY] = '',
        _b),
    login: 'Zaloguj',
    logout: 'Wyloguj',
    register: 'Zarejestruj',
    profile: 'Profil',
    filters: 'Filtry',
    filtersDescription: 'Wybierz kategorie punktów które chcesz zobaczyć na mapie',
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
        photo: 'Zdjęcie',
    },
    userProfile: {
        title: 'Profil użytkownika',
        appLanguage: 'Język aplikacji',
        manageAccount: 'Zarządzaj kontem',
        logout: 'Wyloguj',
        removeAccount: 'Usuń konto',
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
};
