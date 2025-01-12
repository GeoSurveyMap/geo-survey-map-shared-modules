export const it = {
  category: {
    DRY_SOILS: 'Suolo secco',
    WET_SOILS: 'Suolo umido',
    EROSION: 'Erosione',
    SEALED_SOILS: 'Suolo impermeabilizzato',
    DEGRADATION: 'Degrado del suolo',
    LOSS_OF_ORGANIC_MATTER: 'Perdita di sostanza organica',
    PH: 'pH',
    BIODIVERSITY: 'Biodiversità',
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
  register: 'Registrazione',
  profile: 'Profilo',
  filters: 'Filtri',
  other: 'Other',
  filtersDescription: 'Seleziona le categorie di punti che vuoi visualizzare sulla mappa',
  close: 'Chiudi',
  cancel: 'Cancella',
  back: 'Indietro',
  next: 'Avanti',
  continue: 'Continua',
  skip: 'Salta',
  addPoint: 'Aggiungi un punto',
  clear: 'Annulla',
  remove: 'Rimuovi',
  apply: 'Applica',
  categories: 'Categorie',
  pressToAddPoint: 'Tieni premuto per aggiungere un report',
  addPointHere: 'Aggiungi un punto nella mia posizione',
  seeMore: 'Altro',
  notAuthenticatedModal: {
    title: 'Solo gli utenti registrati possono aggiungere un report',
    message: 'Effettua il login per continuare',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Scegli una categoria',
      description: 'Compila un breve questionario e aggiungi un punto alla mappa',
    },
    affectedArea: {
      title: 'Area interessata',
      placeholder: "Qual è il raggio dell'area interessata?",
    },
    addPhoto: {
      title: 'Aggiungi una foto',
      takePhoto: 'Scatta una foto',
      or: 'o',
      chooseFromGallery: 'Importa dalla galleria',
    },
    description: {
      title: 'Descrivi il posto',
      placeName: {
        label: 'Indirizzo o nome',
        placeholder: 'es. via G. Pascoli 17 / Parco G. Garibaldi',
      },
      problemDescription: {
        label: 'Descrizione del problema',
        placeholder: '',
      },
    },
    solution: {
      title: 'Soluzione del problema',
    },
    successMessage: 'Grazie! La tua segnalazione è stata aggiunta alla mappa',
    errorMessage: 'Oops! Qualcosa è andato storto. Prova di nuovo',
  },
  pointDetails: {
    category: 'Categoria del problema',
    placeName: 'Nome del posto',
    affectedArea: 'Raggio del problema',
    problemDescription: 'Descrizione del problema',
    problemSolution: 'Soluzione del problema',
    reportDate: 'Data creazione segnalazione',
    photo: 'Foto',
  },
  userProfile: {
    title: 'Profilo utente',
    appLanguage: "Lingua dell'app",
    manageAccount: 'Gestisci account',
    logout: 'Logout',
    removeAccount: 'Rimozione account',
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
    title: 'Impostazioni',
    appLanguage: "Lingua dell'app",
    appVersion: "Versione dell'app",
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Punti aggiunti',
    noPoints: 'Non sono ancora stati aggiunti dei punti',
    unauthorized: 'Effettua il login per vedere i punti aggiunti',
  },
  noPermissions: {
    library: {
      title: 'Non riesco ad accedere alle tue foto',
      description: "Modifica le impostazioni per concedere l'accesso alle foto",
    },
    camera: {
      title: 'Non riesco ad accedere alla fotocamera',
      description: "Modifica le impostazioni per concedere l'accesso alla fotocamera",
    },
    cancel: 'Cancella',
    openSettings: 'Apri le impostazioni',
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
    goToTheAppButton: "Vai all'applicazione",
    welcome: {
      title: 'Benvenuto su GeoSurveyMap!',
      description: "Un'app per identificare le minacce alla salute del suolo",
    },
    instruction: {
      title: "Come si usa quest'app?",
      step1: {
        title: 'Localizza un suolo non sano',
        description:
          'Puoi utilizzare gli esempi forniti dal nostro team per vedere con quale tipo di suolo hai a che fare.',
      },
      step2: {
        title: 'Aggiungi una segnalazione nella posizione localizzata',
        description:
          'Includi nella segnalazione tutte le informazioni che riesci, aiuteranno i ricercatori a provare a risolvere il problema.',
      },
      step3: {
        title: 'Attendi conferma',
        description:
          'Ogni segnalazione deve essere verificata dal nostro team, per evitare contenuti dannosi o impropri.',
      },
    },
    aboutSoils: {
      title: 'Alcune informazioni sui suoli',
      description:
        "Clicca sulla categoria del terreno per vedere le informazioni relative. Questo contenuto è disponibile anche nella sezione impostazioni dell'applicazione.",
    },
  },
};
