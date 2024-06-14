import { Category } from '../types';

export const en = {
  category: {
    [Category.DRY_SOILS]: 'Dry soil',
    [Category.WET_SOILS]: 'Wet soil',
    [Category.EROSION]: 'Erosion',
    [Category.SEALED_SOILS]: 'Sealed soil',
    [Category.DEGRADATION]: 'Soil degradation',
    [Category.LOSS_OF_ORGANIC_MATTER]: 'Loss of organic matter',
    [Category.PH]: 'pH',
    [Category.BIODIVERSITY]: 'Biodiversity',
  },
  login: 'Login',
  logout: 'Logout',
  register: 'Register',
  profile: 'Profile',
  filters: 'Filters',
  filtersDescription: 'Select the categories of points you want to see on the map',
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
	  description: 'Fill out a short survey and add a point on the map'
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
    description: {
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
	problemSolution: 'Problem solution',
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
