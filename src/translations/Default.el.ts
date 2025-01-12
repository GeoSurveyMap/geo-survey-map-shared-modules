export const el = {
  category: {
    DRY_SOILS: 'Ξηρό έδαφος',
    WET_SOILS: 'Υγρό έδαφος',
    EROSION: 'Διάβρωση',
    SEALED_SOILS: 'Σφραγισμένο έδαφος',
    DEGRADATION: 'Υποβάθμιση του εδάφους',
    LOSS_OF_ORGANIC_MATTER: 'Απώλεια οργανικής ύλης',
    PH: 'pH',
    BIODIVERSITY: 'Βιοποικιλότητα',
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
  login: 'Σύνδεση',
  logout: 'Αποσύνδεση',
  register: 'Εγγραφή',
  profile: 'Προφίλ',
  filters: 'Φίλτρα',
  other: 'Other',
  filtersDescription: 'Επιλέξτε τις κατηγορίες σημείων που θέλετε να δείτε στο χάρτη',
  close: 'Κλείσιμο',
  cancel: 'Ακύρωση',
  back: 'Πίσω',
  next: 'Επόμενο',
  continue: 'Συνέχεια',
  skip: 'Παράλειψη',
  addPoint: 'Προσθήκη σημείου',
  clear: 'Καθαρισμός',
  remove: 'Κατάργηση',
  apply: 'Εφαρμογή',
  categories: 'Κατηγορίες',
  pressToAddPoint: 'Πατήστε παρατεταμένα για να προσθέσετε μια αναφορά',
  addPointHere: 'Προσθήκη σημείου στην τοποθεσία μου',
  seeMore: 'Δείτε περισσότερα',
  notAuthenticatedModal: {
    title: 'Μόνο οι συνδεδεμένοι χρήστες μπορούν να προσθέσουν μια αναφορά',
    message: 'Συνδεθείτε για να συνεχίσετε',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Επιλέξτε κατηγορία',
      description: 'Συμπληρώστε μια σύντομη έρευνα και προσθέστε ένα σημείο στο χάρτη',
    },
    affectedArea: {
      title: 'Πληγείσα περιοχή',
      placeholder: 'Επιλέξτε ακτίνα περιοχής',
    },
    addPhoto: {
      title: 'Προσθήκη φωτογραφίας',
      takePhoto: 'Τραβήξτε φωτογραφία',
      or: 'είτε',
      chooseFromGallery: 'Επιλέξτε από τη συλλογή',
    },
    description: {
      title: 'Περιγράψτε τον τόπο',
      placeName: {
        label: 'Τοπωνύμιο',
        placeholder: 'π.χ., Kościuszko St. Park',
      },
      problemDescription: {
        label: 'Περιγραφή προβλήματος',
        placeholder: '',
      },
    },
    solution: {
      title: 'Λύση προβλήματος',
    },
    successMessage: 'Επιτυχία! Η αναφορά προστέθηκε στον χάρτη',
    errorMessage: 'Ουπς! Κάτι πήγε στραβά. Δοκιμάστε ξανά',
  },
  pointDetails: {
    category: 'Κατηγορία',
    placeName: 'Τοπωνύμιο',
    affectedArea: 'Ακτίνα προβλήματος',
    problemDescription: 'Περιγραφή προβλήματος',
    problemSolution: 'Λύση προβλήματος',
    reportDate: 'ΗΜΕΡΟΜΗΝΙΑ ΑΝΑΦΟΡΑΣ',
    photo: 'Φωτογραφία',
  },
  userProfile: {
    title: 'Προφίλ χρήστη',
    appLanguage: 'Γλώσσα εφαρμογής',
    manageAccount: 'Διαχείριση λογαριασμού',
    logout: 'Αποσύνδεση',
    removeAccount: 'Κατάργηση λογαριασμού',
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
    title: 'Ρυθμίσεις',
    appLanguage: 'Γλώσσα εφαρμογής',
    appVersion: 'Έκδοση εφαρμογής',
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Προστιθέμενα σημεία',
    noPoints: 'Δεν έχουν προστεθεί σημεία.',
    unauthorized: 'Συνδεθείτε για να δείτε τα προστιθέμενα σημεία.',
  },
  noPermissions: {
    library: {
      title: 'Δεν έχουμε πρόσβαση στις φωτογραφίες σας',
      description: 'Παρακαλούμε να επιτρέψετε την πρόσβαση στις φωτογραφίες σας στις ρυθμίσεις.',
    },
    camera: {
      title: 'Δεν έχουμε πρόσβαση στην κάμερά σας.',
      description: 'Παρακαλούμε να επιτρέψετε την πρόσβαση στην κάμερά σας στις ρυθμίσεις.',
    },
    cancel: 'Ακύρωση',
    openSettings: 'Άνοιγμα ρυθμίσεων',
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
    goToTheAppButton: 'Μεταβείτε στην εφαρμογή',
    welcome: {
      title: 'Καλώς ήρθατε στο\\n GeoSurveyMap!',
      description: 'Ένα εργαλείο σχεδιασμένο για την αναφορά εδαφών σε ανθυγιεινές συνθήκες',
    },
    instruction: {
      title: 'Πώς να χρησιμοποιήσετε το εργαλείο μας;',
      step1: {
        title: 'Βρείτε χώμα που φαίνεται ανθυγιεινό',
        description:
          'Μπορείτε να χρησιμοποιήσετε δείγματα που παρέχονται από την ομάδα μας, για να δείτε τι είδους χώμα αντιμετωπίζετε.',
      },
      step2: {
        title: 'Προσθήκη αναφοράς σε τοποθεσία',
        description:
          'Συμπεριλάβετε όλες τις πληροφορίες που συγκεντρώσατε για την ποιότητα της αναφοράς, που θα βοηθήσουν τους ερευνητές που προσπαθούν να λύσουν το πρόβλημα.',
      },
      step3: {
        title: 'Αναμονή επιβεβαίωσης',
        description:
          'Κάθε αναφορά πρέπει να επαληθεύεται από την ομάδα μας, για να αποφευχθεί το επιβλαβές περιεχόμενο.',
      },
    },
    aboutSoils: {
      title: 'Σχετικά με τα εδάφη',
      description:
        'Κάντε κλικ στην κατηγορία εδάφους για να δείτε πληροφορίες. Αυτό είναι επίσης διαθέσιμο στην ενότητα ρυθμίσεων της εφαρμογής.',
    },
  },
};
