export const hu = {
  category: {
    DRY_SOILS: 'Száraz talaj',
    WET_SOILS: 'Vizes vagy nyirkos talaj',
    EROSION: 'Erózió',
    SEALED_SOILS: 'Talajtömörödés',
    DEGRADATION: 'Talajpusztulás',
    LOSS_OF_ORGANIC_MATTER: 'Szervesanyag-veszteség',
    PH: 'pH',
    BIODIVERSITY: 'Biodiverzitás',
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
  login: 'Belépés',
  logout: 'Kilépés',
  register: 'Regisztráció',
  profile: 'Profil',
  filters: 'Szűrők',
  other: 'Other',
  filtersDescription: 'Válassza ki a térképen megjeleníteni kívánt helyek kategóriáit.',
  close: 'Bezár',
  cancel: 'Mégse',
  back: 'Vissza',
  next: 'Következő',
  continue: 'Tovább',
  skip: 'Ugrás',
  addPoint: 'Hely hozzáadása',
  clear: 'Töröl',
  remove: 'Visszavon',
  apply: 'Alkalmaz',
  categories: 'Kategóriák',
  pressToAddPoint: 'Nyomja meg és tartsa lenyomva jelentés hozzáadásához',
  addPointHere: 'Hely hozzáadása ezen a területen',
  seeMore: 'Mutass többet',
  notAuthenticatedModal: {
    title: 'Csak bejelentkezett felhasználók adhatnak hozzá jelentést',
    message: 'Bejelentkezés a folytatáshoz',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Kategória kiválasztása',
      description: 'Töltsön ki egy rövid kérdőívet és adjon hozzá egy helyet a térképen.',
    },
    affectedArea: {
      title: 'Érintett terület',
      placeholder: 'Terület kiterjedésének kijelölése',
    },
    addPhoto: {
      title: 'Kép hozzáadása',
      takePhoto: 'Kép készítése',
      or: 'vagy',
      chooseFromGallery: 'Kép kiválasztása',
    },
    description: {
      title: 'Hely leírása',
      placeName: {
        label: 'Hely neve',
        placeholder: 'pl. Gesztenyés-kert',
      },
      problemDescription: {
        label: 'Probléma leírása',
        placeholder: '',
      },
    },
    solution: {
      title: 'Promléma megoldása',
    },
    successMessage: 'A jelentés sikeresen hozzáadva a térképhez',
    errorMessage: 'Hoppá! Valami elromlott. Próbálja újra.',
  },
  pointDetails: {
    category: 'Kategória',
    placeName: 'Hely neve',
    affectedArea: 'Probléma kiterjedése',
    problemDescription: 'Probléma leírása',
    problemSolution: 'Probléma megoldása',
    reportDate: 'Jelentés dátuma',
    photo: 'Fénykép',
  },
  userProfile: {
    title: 'Felhasználói profil',
    appLanguage: 'Applikáció nyelve',
    manageAccount: 'Fiók kezelése',
    logout: 'Kijelentkezés',
    removeAccount: 'Fiók törlése',
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
    title: 'Beállítások',
    appLanguage: 'Applikáció nyelve',
    appVersion: 'Applikáció verzió',
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Hozzáadott helyek',
    noPoints: 'Még nincs hozzáadott hely.',
    unauthorized: 'Jelentkezzen be a hozzáadott helyek megtekintéséhez.',
  },
  noPermissions: {
    library: {
      title: 'Nem férünk hozzá a fényképeihez',
      description: 'Kérjük, engedélyezze a fényképekhez való hozzáférést a beállításokban.',
    },
    camera: {
      title: 'Nem férünk hozzá a kamerájához',
      description: 'Kérjük, engedélyezze a kamerához való hozzáférést a beállítások között.',
    },
    cancel: 'Mégse',
    openSettings: 'Beállítások megnyitása',
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
    goToTheAppButton: 'Applikáció megnyitása',
    welcome: {
      title: 'Üdv a GeoSurveyMap-en!',
      description: 'Az egészségtelen állapotú talajok jelentésére szolgáló eszköz',
    },
    instruction: {
      title: 'Hogyan használja eszközünket?',
      step1: {
        title: 'Egészségtelennek tűnő talaj keresése',
        description:
          'A csapatunk által biztosított minták segítségével megnézheti, hogy milyen típusú talajjal van dolga.',
      },
      step2: {
        title: 'Jelentés hozzáadása az azonosított helyhez',
        description:
          'Az összes olyan információt adja meg, amelyet a jelentés minősége miatt gyűjtött, és amely segít a probléma megoldására törekvő kutatóknak.',
      },
      step3: {
        title: 'Várjon a visszaigazolásra',
        description:
          'Csapatunknak minden jelentést ellenőriznie kell, hogy elkerüljük a káros tartalmakat.',
      },
    },
    aboutSoils: {
      title: 'A talajokról',
      description:
        'Kattintson a talajkategóriára, ha információt szeretne kapni róla. Ez az alkalmazás beállítások részében is elérhető.',
    },
  },
};
