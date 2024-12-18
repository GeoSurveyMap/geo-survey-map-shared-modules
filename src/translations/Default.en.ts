import { title } from 'process';
import { Category, PointStatus } from '../types';

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
    [PointStatus.accepted]: 'Accepted',
    [PointStatus.pending]: 'Pending verification',
  },
  login: 'Login',
  logout: 'Logout',
  register: 'Register',
  profile: 'Profile',
  filters: 'Filters',
  other: 'Other',
  filtersDescription: 'Select the categories of points you want to see on the map',
  close: 'Close',
  cancel: 'Cancel',
  back: 'Back',
  next: 'Next',
  continue: 'Continue',
  skip: 'Skip',
  addPoint: 'Add point',
  clear: 'Clear',
  remove: 'Remove',
  apply: 'Apply',
  categories: 'Categories',
  pressToAddPoint: 'Press and hold to add a report',
  addPointHere: 'Add point in my location',
  seeMore: 'See more',
  notAuthenticatedModal: {
    title: 'Only logged-in users can add a report',
    message: 'Log in to continue',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Choose category',
      description: 'Fill out a short survey and add a point on the map',
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
    solution: {
      title: 'Problem solution',
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
    reportDate: 'Date of report',
    photo: 'Photo',
  },
  userProfile: {
    title: 'User profile',
    appLanguage: 'App language',
    manageAccount: 'Manage account',
    logout: 'Logout',
    removeAccount: 'Remove account',
	pts: 'PTS',
  },
  settings: {
    title: 'Settings',
    appLanguage: 'App language',
    appVersion: 'App version',
  },
  pointsList: {
    title: 'Added points',
    noPoints: 'No points have been added.',
    unauthorized: 'Log in to see added points.',
  },
  noPermissions: {
    library: {
      title: "We can't access your photos",
      description: 'Please allow access to your photos in the settings.',
    },
    camera: {
      title: "We can't access your camera",
      description: 'Please allow access to your camera in the settings.',
    },
    cancel: 'Cancel',
    openSettings: 'Open settings',
  },
  pointManagement: {
    title: 'Points',
    generateReport: 'Generate report',
    pointsToApprove: 'Points to approve',
    approvedPoints: 'Points',
    pointId: 'Point ID',
    pointName: 'Point name',
    dateFrom: 'Date from',
    dateTo: 'Date to',
    pointType: 'Point type',
    approve: 'Approve',
    delete: 'Delete',
    noData: 'No data to display',
    download: 'Download',
  },
  userManagement: {
    title: 'Users Management',
    searchUser: 'Search user',
    deleteUser: 'Delete user',
	setPermissions: 'Set permissions',
    confirmDeleteMessage:
      'Are you sure you want to delete this user account along with all their entries?',
    cancel: 'Cancel',
    confirm: 'Delete account',
    noUsers: 'No users to display',
  },
  onboarding: {
    goToTheAppButton: 'Go to the app',
    welcome: {
      title: 'Welcome to\nGeoSurveyMap!',
      description: 'A tool designed to report soils in unhealthy conditions',
    },
    instruction: {
      title: 'How to use our tool?',
      step1: {
        title: 'Find soil that seem unhealthy',
        description:
          'You can use samples provided by our team, to see what type of soil your’e dealing with.',
      },
      step2: {
        title: 'Add report in located place',
        description:
          'Include all the information that you gathered for the quality of the report, that will help the researchers trying to solve the problem.',
      },
      step3: {
        title: 'Wait for confirmation',
        description: 'Every report has to be verified by our team, to avoid harmful content.',
      },
    },
    aboutSoils: {
      title: 'About soils',
      description:
        'Click on soil category to see information about. This is also available in settings section of the application.',
    },
  },
};
