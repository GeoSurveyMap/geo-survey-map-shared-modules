import { Category } from '../types';

export const en = {
  category: {
    DRY_SOILS: 'Dry soil',
    WET_SOILS: 'Wet soil',
    EROSION: 'Erosion',
    SEALED_SOILS: 'Sealed soil',
    DEGRADATION: 'Soil degradation',
    LOSS_OF_ORGANIC_MATTER: 'Loss of organic matter',
    PH: 'pH',
    BIODIVERSITY: 'Biodiversity',
  },
  categoryInformation: {
    DRY_SOILS: '',
    WET_SOILS: '',
    EROSION: '',
    SEALED_SOILS: '',
    DEGRADATION: '',
    LOSS_OF_ORGANIC_MATTER: '',
    PH: '',
    BIODIVERSITY: '',
  },
  pointStatus: {
    status: 'Status',
    PENDING: 'Pending verification',
    ACCEPTED: 'Accepted',
    REJECTED: 'Rejected',
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
    successMessage: 'Success! The report has been sent for verification',
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
    deleteAccountPopup: {
      button: 'Remove account',
      cancel: 'Cancel',
      firstConfirmation: {
        title: 'Remove account',
        description:
          'Are you sure you want to remove your account? All your data will be lost and you will not be able to restore it.',
      },
      secondConfirmation: {
        title: 'Are you sure you want to remove your account?',
        description: 'THIS ACTION CANNOT BE UNDONE.',
      },
    },
  },
  settings: {
    title: 'Settings',
    appLanguage: 'App language',
    appVersion: 'App version',
    howToUse: "How to use the app",
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
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
      title: 'Welcome to\nLOESS Soil Map!',
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
