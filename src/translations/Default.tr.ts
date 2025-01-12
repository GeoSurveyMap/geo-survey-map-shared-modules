export const tr = {
  category: {
    DRY_SOILS: 'Kuru toprak',
    WET_SOILS: 'Islak toprak',
    EROSION: 'Erozyon',
    SEALED_SOILS: 'Sızdırmaz toprak',
    DEGRADATION: 'Toprak bozunumu',
    LOSS_OF_ORGANIC_MATTER: 'Organik madde kaybı',
    PH: 'pH',
    BIODIVERSITY: 'Biyoçeşitlilik',
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
  login: 'Giriş Yap',
  logout: 'Çıkış yap',
  register: 'Kaydol',
  profile: 'Profil',
  filters: 'Filtreler',
  other: 'Other',
  filtersDescription: 'Haritada görmek istediğiniz noktaların kategorilerini seçin',
  close: 'Kapat',
  cancel: 'İptal et',
  back: 'Geri dön',
  next: 'Sonraki',
  continue: 'Devam et',
  skip: 'Atla',
  addPoint: 'Nokta ekle',
  clear: 'Temizle',
  remove: 'Kaldır',
  apply: 'Uygula',
  categories: 'Kategoriler',
  pressToAddPoint: 'Rapor eklemek için basılı tut',
  addPointHere: 'Bulunduğum yere nokta ekle',
  seeMore: 'Daha fazlasını gör',
  notAuthenticatedModal: {
    title: 'Yalnızca oturum açmış kullanıcılar rapor ekleyebilir',
    message: 'Devam etmek için giriş yap',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Kategori seç',
      description: 'Kısa bir anket doldur ve haritaya bir nokta ekle',
    },
    affectedArea: {
      title: 'Etkilenen alan',
      placeholder: 'Alan yarıçapını seç',
    },
    addPhoto: {
      title: 'Fotoğraf ekle',
      takePhoto: 'Fotoğraf çek',
      or: 'veya',
      chooseFromGallery: 'Galeriden seç',
    },
    description: {
      title: 'Mekanı tarif et',
      placeName: {
        label: 'Yer adı',
        placeholder: 'Örneğin, Kosciuszko St. Parkı',
      },
      problemDescription: {
        label: 'Problemin tanımı',
        placeholder: '',
      },
    },
    solution: {
      title: 'Problemin çözümü',
    },
    successMessage: 'Başarılar! Rapor haritaya eklendi',
    errorMessage: 'Hay Allah! Bir şeyler ters gitti. Tekrar dene',
  },
  pointDetails: {
    category: 'Kategori',
    placeName: 'Yer adı',
    affectedArea: 'Problem yarıçapı',
    problemDescription: 'Problemin tanımı',
    problemSolution: 'Problemin çözümü',
    reportDate: 'Raporun tarihi',
    photo: 'Fotoğraf',
  },
  userProfile: {
    title: 'Kullanıcı profili',
    appLanguage: 'Uygulama dili',
    manageAccount: 'Hesabı yönet',
    logout: 'Çıkış yap',
    removeAccount: 'Hesabı kaldır',
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
    title: 'Ayarlar',
    appLanguage: 'Uygulama dili',
    appVersion: 'Uygulama sürümü',
    howToUse: 'How to use the app',
    aboutSoils: 'About soil categories',
    privacyPolicy: 'Privacy policy',
  },
  pointsList: {
    title: 'Eklenen noktalar',
    noPoints: 'Hiçbir nokta eklenmedi',
    unauthorized: 'Eklenen noktaları görmek için giriş yap',
  },
  noPermissions: {
    library: {
      title: 'Fotoğraflarınıza erişemiyoruz',
      description: 'Telefon ayarlarınızdan fotoğraflara erişim sağlayın',
    },
    camera: {
      title: 'Kamerana erişemiyoruz',
      description: 'Lütfen ayarlardan kameranıza erişim izni verin.',
    },
    cancel: 'İptal',
    openSettings: 'Ayarları aç',
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
    goToTheAppButton: 'Uygulamaya git',
    welcome: {
      title: "GeoSurveyMap'e hoş geldiniz!",
      description: 'Sağlıksız koşullardaki toprakları raporlamak için tasarlanmış bir araç',
    },
    instruction: {
      title: 'Aracımızı nasıl kullanabilirsiniz?',
      step1: {
        title: 'Sağlıksız görünen toprakları bulun',
        description:
          'Ne tür bir toprakla uğraştığınızı görmek için ekibimiz tarafından sağlanan numuneleri kullanabilirsiniz.',
      },
      step2: {
        title: 'Bulunan yere rapor ekle',
        description:
          'Problemi çözmeye çalışan araştırmacılara yardımcı olacak olan, raporun kalitesi için topladığınız tüm bilgileri ekleyin.',
      },
      step3: {
        title: 'Onay için bekle',
        description:
          'Zararlı içerikten kaçınmak için her rapor ekibimiz tarafından doğrulanmalıdır.',
      },
    },
    aboutSoils: {
      title: 'Topraklar hakkında',
      description:
        'Hakkında bilgi edinmek için toprak kategorisine tıklayın. Bu aynı zamanda uygulamanın ayarlar bölümünde de yer almaktadır.',
    },
  },
};
