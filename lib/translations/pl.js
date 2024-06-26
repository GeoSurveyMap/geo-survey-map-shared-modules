"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("types");
exports.default = {
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
