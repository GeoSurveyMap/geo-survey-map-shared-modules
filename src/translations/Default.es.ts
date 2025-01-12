export const es = {
  category: {
    DRY_SOILS: 'Suelo seco',
    WET_SOILS: 'Suelo húmedo',
    EROSION: 'Erosión',
    SEALED_SOILS: 'Suelo impermeabilizado',
    DEGRADATION: 'Degradación del suelo',
    LOSS_OF_ORGANIC_MATTER: 'Pérdida de materia orgánica',
    PH: 'pH',
    BIODIVERSITY: 'Biodiversidad',
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
  login: 'Iniciar sesión',
  logout: 'Cerrar sesión',
  register: 'Registrarse',
  profile: 'Perfil',
  filters: 'Filtros',
  other: 'Other',
  filtersDescription: 'Seleccione las categorías de puntos que desea ver en el mapa',
  close: 'Cerrar',
  cancel: 'Cancelar',
  back: 'Anterior',
  next: 'Siguiente',
  continue: 'Continuar',
  skip: 'Saltar',
  addPoint: 'Añadir punto',
  clear: 'Limpiar',
  remove: 'Borrar',
  apply: 'Aplicar',
  categories: 'Categorías',
  pressToAddPoint: 'Mantenga pulsado para añadir una notificación',
  addPointHere: 'Añadir un punto en mi localización',
  seeMore: 'Ver más',
  notAuthenticatedModal: {
    title: 'Solo los usuarios que hayan iniciado sesión pueden añadir una notificación',
    message: 'Inicie sesión para continuar',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Elija una categoría',
      description: 'Rellene un breve cuestionario y añada un punto al mapa',
    },
    affectedArea: {
      title: 'Zona afectada',
      placeholder: 'Seleccionar el radio de la zona',
    },
    addPhoto: {
      title: 'Añadir una foto',
      takePhoto: 'Tomar una foto',
      or: 'o',
      chooseFromGallery: 'Importar de la galería',
    },
    description: {
      title: 'Describir el lugar',
      placeName: {
        label: 'Nombre del lugar',
        placeholder: 'p. ej., calle de Segovia, 23',
      },
      problemDescription: {
        label: 'Descripción del problema',
        placeholder: '',
      },
    },
    solution: {
      title: 'Solución del problema',
    },
    successMessage: 'La notificación se ha añadido con éxito al mapa.',
    errorMessage: 'Vaya, algo ha salido mal. Inténtelo de nuevo.',
  },
  pointDetails: {
    category: 'Categoría',
    placeName: 'Nombre del lugar',
    affectedArea: 'Radio del problema',
    problemDescription: 'Descripción del problema',
    problemSolution: 'Solución del problema',
    reportDate: 'Fecha de la notificación',
    photo: 'Foto',
  },
  userProfile: {
    title: 'Perfil de usuario',
    appLanguage: 'Lengua de la app',
    manageAccount: 'Administrar cuenta',
    logout: 'Cerrar sesión',
    removeAccount: 'Borrar cuenta',
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
    title: 'Ajustes',
    appLanguage: 'Lengua de la app',
    appVersion: 'Versión de la app',
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Puntos añadidos',
    noPoints: 'No se ha añadido ningún punto.',
    unauthorized: 'Inicie sesión para ver los puntos añadidos.',
  },
  noPermissions: {
    library: {
      title: 'No es posible acceder a sus fotos.',
      description: 'Por favor, permita el acceso a sus fotos en los ajustes.',
    },
    camera: {
      title: 'No es posible acceder a la cámara.',
      description: 'Por favor, permita el acceso a la cámara en los ajustes.',
    },
    cancel: 'Cancelar',
    openSettings: 'Abrir ajustes',
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
    goToTheAppButton: 'Ir a la app',
    welcome: {
      title: '¡Bienvenido/a a GeoSurveyMap!',
      description: 'Una herramienta para notificar el estado insalubre de los suelos',
    },
    instruction: {
      title: '¿Cómo usar la app?',
      step1: {
        title: 'Localice un suelo insalubre',
        description:
          'Puede usar ejemplos proporcionados por nuestro equipo para ver de qué tipo de suelos se trata.',
      },
      step2: {
        title: 'Añadir una notificación para el lugar seleccionado',
        description:
          'Incluya toda la información posible para garantizar la calidad de la notificación y ayudar a los investigadores a resolver el problema.',
      },
      step3: {
        title: 'Espere la confirmación',
        description:
          'Cada notificación debe ser verificada por nuestro equipo, para evitar posibles contenidos nocivos.',
      },
    },
    aboutSoils: {
      title: 'Sobre el suelo',
      description:
        'Clique en la categoría del suelo para ver información al respecto. También disponible en la sección de ajustes de la aplicación.',
    },
  },
};
