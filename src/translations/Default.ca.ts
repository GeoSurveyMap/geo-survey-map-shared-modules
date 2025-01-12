export const ca = {
  category: {
    DRY_SOILS: 'Sòl sec',
    WET_SOILS: 'Sòl humit',
    EROSION: 'Erosió',
    SEALED_SOILS: 'Sòl impermeabilitzat',
    DEGRADATION: 'Degradació del sòl',
    LOSS_OF_ORGANIC_MATTER: 'Pèrdua de matèria orgànica',
    PH: 'pH',
    BIODIVERSITY: 'Biodiversitat',
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
    status: 'Estat',
    PENDING: 'Pendent de verificació',
    ACCEPTED: 'Acceptat',
    REJECTED: 'Rebutjat',
  },
  login: 'Inicia la sessió',
  logout: 'Tanca la sessió',
  register: 'Registre',
  profile: 'Perfil',
  filters: 'Filtres',
  other: 'Other',
  filtersDescription: 'Seleccioneu les categories de punts que voleu veure al mapa',
  close: 'Tanca',
  cancel: 'Cancel·la',
  back: 'Enrere',
  next: 'Endavant',
  continue: 'Continua',
  skip: 'Salta',
  addPoint: 'Afegeix un punt',
  clear: 'Esborra',
  remove: 'Elimina',
  apply: 'Aplica',
  categories: 'Categories',
  pressToAddPoint: 'Manteniu premut per afegir un informe',
  addPointHere: 'Afegeix un punt a la meva ubicació',
  seeMore: "Veure'n més",
  notAuthenticatedModal: {
    title: 'Només els usuaris registrats poden afegir un informe',
    message: 'Inicieu la sessió per continuar',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Seleccioneu una categoria',
      description: 'Ompliu un breu qüestionari i afegiu un punt al mapa',
    },
    affectedArea: {
      title: 'Zona afectada',
      placeholder: 'Seleccioneu el radi de la zona',
    },
    addPhoto: {
      title: 'Afegir una foto',
      takePhoto: 'Feu una foto',
      or: 'o',
      chooseFromGallery: 'Seleccioneu-la de la galeria',
    },
    description: {
      title: 'Descriviu el lloc',
      placeName: {
        label: 'Nom del lloc',
        placeholder: 'p. ex., carrer de Figuerola, 17',
      },
      problemDescription: {
        label: 'Descripció del problema',
        placeholder: '',
      },
    },
    solution: {
      title: 'Solució del problema',
    },
    successMessage: "L'informe s'ha afegit al mapa correctament.",
    errorMessage: 'Alguna cosa no ha anat bé. Torneu a intentar-ho.',
  },
  pointDetails: {
    category: 'Categoria del problema',
    placeName: 'Nom del lloc',
    affectedArea: 'Radi del problema',
    problemDescription: 'Descripció del problema',
    problemSolution: 'Solució del problema',
    reportDate: "Data de l'informe",
    photo: 'Foto',
  },
  userProfile: {
    title: "Perfil de l'usuari",
    appLanguage: "Idioma de l'aplicació",
    manageAccount: 'Gestionar el compte',
    logout: 'Tanca la sessió',
    removeAccount: 'Elimina el compte',
    pts: 'PTS',
    deleteAccountPopup: {
      button: 'Elimina el compte',
      cancel: 'Cancel·la',
      firstConfirmation: {
        title: 'Elimina el compte',
        description:
          'Esteu segur que voleu eliminar el vostre compte? Totes les teves dades es perdran i no podràs restaurar-les.',
      },
      secondConfirmation: {
        title: 'Esteu segur que voleu eliminar el vostre compte?',
        description: 'AQUESTA ACCIÓ NO ES POT DESFER.',
      },
    },
  },
  settings: {
    title: 'Configuració',
    appLanguage: "Idioma de l'aplicació",
    appVersion: "Versió de l'aplicació",
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Punts afegits',
    noPoints: "No s'han afegit punts.",
    unauthorized: 'Inicieu la sessió per veure els punts afegits.',
  },
  noPermissions: {
    library: {
      title: 'No podem accedir a les fotos',
      description: "Modifiqueu la configuració per permetre'ns accedir a les fotos.",
    },
    camera: {
      title: 'No podem accedir a la càmera',
      description: "Modifiqueu la configuració per permetre'ns accedir a la càmera.",
    },
    cancel: 'Cancel·lar',
    openSettings: 'Obrir la configuració',
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
    goToTheAppButton: "Anar a l'aplicació",
    welcome: {
      title: 'Benvingut a GeoSurveyMap!',
      description: 'Una eina dissenyada per informar de sòls en males condicions',
    },
    instruction: {
      title: "Com s'utilitza aquesta aplicació?",
      step1: {
        title: 'Localitzeu sòls en males condicions',
        description:
          'Per saber de quin tipus de sòl es tracta, pots comparar-lo amb les mostres del nostre equip.',
      },
      step2: {
        title: 'Afegir un informe al lloc localitzat',
        description:
          "A l'informe, incloeu tota la informació que heu recollit. Això ajudarà els investigadors a resoldre el problema.",
      },
      step3: {
        title: 'Espereu la confirmació',
        description:
          'El nostre equip ha de verificar tots els informes per evitar contingut inadequat.',
      },
    },
    aboutSoils: {
      title: 'Informació sobre els sòls',
      description:
        "Cliqueu a la categoria de sòl per veure'n informació. Això també està disponible a la secció de configuració de l'aplicació.",
    },
  },
};
