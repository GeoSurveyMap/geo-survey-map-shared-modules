"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.en = void 0;
var types_1 = require("../types");
exports.en = {
    category: (_a = {},
        _a[types_1.Category.DRY_SOILS] = 'Dry soil',
        _a[types_1.Category.WET_SOILS] = 'Wet soil',
        _a[types_1.Category.EROSION] = 'Erosion',
        _a[types_1.Category.SEALED_SOILS] = 'Sealed soil',
        _a[types_1.Category.DEGRADATION] = 'Soil degradation',
        _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = 'Loss of organic matter',
        _a[types_1.Category.PH] = 'pH',
        _a[types_1.Category.BIODIVERSITY] = 'Biodiversity',
        _a),
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    profile: 'Profile',
    filters: 'Filters',
    close: 'Close',
    cancel: 'Cancel',
    back: 'Back',
    next: 'Next',
    skip: 'Skip',
    addPoint: 'Add point',
    clear: 'Clear',
    remove: 'Remove',
    apply: 'Apply',
    categories: 'Categories',
    pressToAddPoint: 'Press and hold to add a report',
    notAuthenticatedModal: {
        title: 'Only logged-in users can add a report',
        message: 'Log in to continue',
    },
    addPointForm: {
        chooseCategory: {
            title: 'Choose category',
        },
        affectedArea: {
            title: 'Affected area',
            placeholder: 'Select area radius',
        },
        addPhoto: {
            title: 'Add photo',
            takePhoto: 'Take photo',
            or: 'or',
            chooseFromGallery: 'Choose from gallery',
        },
        describtion: {
            title: 'Describe the place',
            placeName: {
                label: 'Place name',
                placeholder: 'e.g., Kościuszko St. Park',
            },
            problemDescription: {
                label: 'Problem description',
                placeholder: '',
            },
        },
        successMessage: 'Success! The report has been added to the map',
        errorMessage: 'Oops! Something went wrong. Try again',
    },
    pointDetails: {
        category: 'Category',
        placeName: 'Place name',
        affectedArea: 'Problem radius',
        problemDescription: 'Problem description',
        photo: 'Photo',
    },
    userProfile: {
        title: 'User profile',
        appLanguage: 'App language',
        manageAccount: 'Manage account',
        logout: 'Logout',
        removeAccount: 'Remove account',
    },
};
