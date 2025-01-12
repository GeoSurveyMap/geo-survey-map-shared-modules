import { Category } from '../types';

export const de = {
  category: {
    [Category.DRY_SOILS]: 'trockene Böden',
    [Category.WET_SOILS]: 'feuchte Böden',
    [Category.EROSION]: 'Erosion',
    [Category.SEALED_SOILS]: 'versiegelte Böden',
    [Category.DEGRADATION]: 'Bodendegradation',
    [Category.LOSS_OF_ORGANIC_MATTER]: 'Verlust organischer Substanz',
    [Category.PH]: 'pH',
    [Category.BIODIVERSITY]: 'Biodiversität',
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
    status: 'Status',
    PENDING: 'Überprüfung ausstehend',
    ACCEPTED: 'Angenommen',
    REJECTED: 'Abgelehnt',
  },
  login: 'Login',
  logout: 'Logout',
  register: 'Registrierung',
  profile: 'Profil',
  filters: 'Filter',
  other: 'Andere',
  filtersDescription: 'Wähle die Kategorien der Punkte, welche du auf der Karte sehen möchtest',
  close: 'Schließen',
  cancel: 'Abbrechen',
  back: 'Zurück',
  next: 'Nächstes',
  continue: 'Weiter',
  skip: 'Überspringen',
  addPoint: 'Punkt hinzufügen',
  clear: 'Löschen',
  remove: 'Entfernen',
  apply: 'Anwenden',
  categories: 'Kategorie',
  pressToAddPoint: 'Drücken und Halten, um einen Bericht hinzuzufügen',
  addPointHere: 'Füge einen Punkt zu meinemStandpunkt hinzu',
  seeMore: 'Weiteres',
  notAuthenticatedModal: {
    title: 'Nur angemeldete Benutzer:innen können einen Bericht hinzufügen',
    message: 'Anmelden um fortzufahren',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Wähle eine Kategorie',
      description: 'Fülle einen kurzen Fragebogen aus und ergänze eine Punkt auf der Karte',
    },
    affectedArea: {
      title: 'Betroffenes Gebiet',
      placeholder: 'Wähle einen Radius',
    },
    addPhoto: {
      title: 'Ergänze ein Foto',
      takePhoto: 'Mache ein Foto',
      or: 'oder',
      chooseFromGallery: 'Wähle aus der Gallerie',
    },
    description: {
      title: 'Beschreibe den Ort',
      placeName: {
        label: 'Ortsname',
        placeholder: 'z.B. Kościuszko Park',
      },
      problemDescription: {
        label: 'Problembeschreibung',
        placeholder: '',
      },
    },
    solution: {
      title: 'Problemlösung',
    },
    successMessage: 'Erfolg! Der Bericht wurde zur Überprüfung gesendet.',
    errorMessage: 'Hoppla! Da ist etwas schiefgegangen. Versuche es erneut.',
  },
  pointDetails: {
    category: 'Kategorie',
    placeName: 'Ortsname',
    affectedArea: 'Problemradius',
    problemDescription: 'Problembeschreibung',
    problemSolution: 'Problemlösung',
    reportDate: 'Datum des Berichts',
    photo: 'Foto',
  },
  userProfile: {
    title: 'Profil',
    appLanguage: 'App Sprache',
    manageAccount: 'Account verwalten',
    logout: 'Abmelden',
    removeAccount: 'Account löschen',
    pts: 'PTS',
    deleteAccountPopup: {
      button: 'Account löschen',
      cancel: 'Abbrechen',
      firstConfirmation: {
        title: 'Account löschen',
        description:
          'Sind Sie sicher, dass Sie Ihr Konto löschen wollen? Alle Ihre Daten sind dann verloren und können nicht wiederhergestellt werden.',
      },
      secondConfirmation: {
        title: 'Sind Sie sicher, dass Sie Ihr Konto löschen wollen?',
        description: 'KANN DIESE AKTION NICHT RÜCKGÄNGIG GEMACHT WERDEN.',
      },
    },
  },
  settings: {
    title: 'Einstellungen',
    appLanguage: 'App Sprache',
    appVersion: 'App Version',
    howToUse: "Wie man die App benutzt",
    aboutSoils: 'Über Bodenkategorien',
    privacyPolicy: 'Datenschutzbestimmungen',
  },
  pointsList: {
    title: 'Hinzugefügte Punkte',
    noPoints: 'Es wurden keine Punkte hinzugefügt',
    unauthorized: 'Anmelden, um Punkte zu sehen.',
  },
  noPermissions: {
    library: {
      title: "Wir haben keinen Zugriff auf deine Fotos.",
      description: 'Bitte erlaube uns den Zugriff auf deine Fotos in den Einstellungen.',
    },
    camera: {
      title: "Wir haben keinen Zugriff auf deine Kamera",
      description: 'Bitte erlaube den Zugriff auf die Kamera in den Einstellungen.',
    },
    cancel: 'Löschen',
    openSettings: 'Einstellungen öffnen',
  },
  pointManagement: {
    title: 'Punkte',
    generateReport: 'Bericht generieren',
    pointsToApprove: 'Zu genehmigende Punkte',
    approvedPoints: 'Punkte',
    pointId: 'Punkt-ID',
    pointName: 'Punktname',
    dateFrom: 'Datum von',
    dateTo: 'Datum bis',
    pointType: 'Punkt-Typ',
    approve: 'Genehmigen Sie',
    delete: 'Löschen',
    noData: 'Keine Daten zum Anzeigen',
    download: 'Herunterladen',
  },
  userManagement: {
    title: 'Benutzerverwaltung',
    searchUser: 'Benutzer suchen',
    deleteUser: 'Benutzer löschen',
    setPermissions: 'Berechtigungen festlegen',
    confirmDeleteMessage:
      'Sind Sie sicher, dass Sie dieses Benutzerkonto mit all seinen Einträgen löschen wollen?',
    cancel: 'Abbrechen',
    confirm: 'Konto löschen',
    noUsers: 'Keine Benutzer zum Anzeigen',
  },
  onboarding: {
    goToTheAppButton: 'Gehe zur App',
    welcome: {
      title: 'Willkommen zu\nLOESS Soil Map!',
      description: 'Ein Tool, das dabei helfen soll, ungesunde Böden zu lokalisieren.',
    },
    instruction: {
      title: 'Wie benutze ich unser Tool?',
      step1: {
        title: 'Finde Boden, der ungesund erscheint',
        description:
          'Um herauszufinden, mit welcher Art von Boden du es zutun hast, kannst du Proben verwenden, die von unserem Team bereitgestellt wurden.',
      },
      step2: {
        title: 'Füge Bericht für lokalisierten Bereich hinzu',
        description:
          'Füge alle Informationen ein, die Sie zur Qualität des Berichts gesammelt haben. Diese werden den Forscher:innen helfen, eine Lösung für das Problem zu finden.',
      },
      step3: {
        title: 'Warte auf Bestätigung',
        description: 'Jeder Bericht wird von unserem Team verifiziert, um schädliche Inhalte zu vermeiden.',
      },
    },
    aboutSoils: {
      title: 'Über Böden',
      description:
        'Klicke auf die Bodenkategorie, um weitere Informationen zu erhalten. Dies ist auch im Einstellungsbereich der Anwendung möglich.',
    },
  },
};
