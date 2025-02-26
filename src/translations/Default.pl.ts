import { Category } from '../types';

export const pl = {
  category: {
    [Category.DRY_SOILS]: 'Gleba sucha',
    [Category.WET_SOILS]: 'Gleba mokra',
    [Category.EROSION]: 'Erozja',
    [Category.SEALED_SOILS]: 'Gleba zasklepiona',
    [Category.DEGRADATION]: 'Degradacja gleby',
    [Category.LOSS_OF_ORGANIC_MATTER]: 'Utrata materii organicznej',
    [Category.PH]: 'pH',
    [Category.BIODIVERSITY]: 'Bioróżnorodność',
  },
  categoryInformation: {
    DRY_SOILS:
      '<b>Pustynnienie</b> - proces, w którym stosunkowo suchy teren staje się coraz bardziej suchy (aridowy), zwykle tracąc zbiorniki wodne, a także roślinność i dziką przyrodę, bezpośrednio poprzez zmiany klimatyczne lub pośrednio poprzez degradację gleby wynikającą z niewłaściwego zarządzania.\n<b>Ocena stopnia przesuszania gleby</b>\n<b>Wyjaśnienie</b>: Przesuszanie gleby może wynikać z różnych czynników, takich jak niewystarczające opady deszczu, wysokie temperatury lub słaba struktura gleby. Zrozumienie pierwotnej przyczyny może pomóc w skutecznym rozwiązaniu tego problemu.\n<b>Jak myślisz, co jest główną/pierwotną przyczyną przesuszania gleb w Twoim regionie?</b>\nA. Brak opadów (okresy z niewielką ilością deszczu lub bez deszczu)\nB. Wysokie temperatury (upały powodujące parowanie)\nC. Słaba struktura gleby (gleba, która nie zatrzymuje dobrze wody)\nD. Nadmierne wykorzystanie zasobów wodnych (Nadmierne wykorzystanie wody do celów rolniczych lub innych)\nE. Wylesianie (usuwanie drzew, które pomagają zatrzymać wilgoć)\nF. Zmiana klimatu (długotrwałe zmiany wzorców pogodowych)\nG. Nadmierny wypas (Nadmierny wypas zwierząt gospodarskich)\nH. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Brak opadów</b>: Należy rozważyć, czy występowały przedłużające się okresy suszy.\n- <b>Wysokie temperatury</b>: Pomyśl o ostatnich falach upałów lub wyjątkowo wysokich temperaturach w ostatnim czasie.\n- <b>Słaba struktura gleby</b>: Zwróć uwagę, czy gleba jest piaszczysta lub słabo zatrzymuje wodę.\n- <b>Nadmierne wykorzystanie zasobów wodnych</b>: Zastanów się nad lokalnym rolniczym lub przemysłowym zużyciem wody.\n- <b>Wylesianie</b>: Należy rozważyć, czy na danym obszarze doszło do znacznego usunięcia drzew.\n- <b>Zmiany klimatu</b>: Pomyśl o długoterminowych zmianach wzorców pogodowych.\n- <b>Nadmierny wypas</b>: Należy rozważyć, czy wypas zwierząt jest powszechny i intensywny.',

    WET_SOILS:
      '<b>Ocena zawodnienia gleb</b>\n<b>Wyjaśnienie</b>: Zawodnienie gleby występuje, gdy nadmiar wody nasyca glebę, często z powodu obfitych opadów deszczu, słabego drenażu lub wysokiego poziomu wód gruntowych. Zidentyfikowanie przyczyny może pomóc w zarządzaniu poziomem wody.\n<b>Jak myślisz, co jest główną przyczyną podmokłości gleby w Twojej okolicy?</b>\nA. Obfite opady deszczu (częste lub intensywne deszcze)\nB. Słabe systemy odwadniające (Nieodpowiednia infrastruktura odwadniająca)\nC. Wysoki poziom wód gruntowych (poziom wód gruntowych znajduje się blisko powierzchni)\nD. Nadmierne nawadnianie (Nadmierne podlewanie upraw lub ogrodów)\nE. Zagęszczenie gleby (cząstki gleby gęsto upakowane, zmniejszające przestrzeń zajęte przez pory w glebie)\nF. Urbanizacja (zwiększenie powierzchni nieprzepuszczalnych, takich jak drogi i budynki)\nG. Powódź (wylewanie się wody z rzek lub jezior)\nH. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Intensywne opady deszczu</b>: Należy wziąć pod uwagę częste lub intensywne opady deszczu.\n- <b>Słabe systemy odwadniające</b>: Zastanów się nad skutecznością lokalnej infrastruktury odwadniającej.\n- <b>Wysoki poziom wód gruntowych</b>: Zwróć uwagę, czy poziom wód gruntowych znajduje się blisko powierzchni.\n- <b>Nadmierne nawadnianie</b>: Zastanów się nad lokalnymi praktykami rolniczymi i zużyciem wody.\n- <b>Zagęszczenie gleby</b>: Zwróć uwagę, czy gleba jest twarda i zbita.\n- <b>Urbanizacja</b>: Pomyśl o zakresie nieprzepuszczalnych powierzchni na danym obszarze.\n- <b>Powódź</b>: Zastanów się, czy w ostatnim czasie miały miejsce powodzie.',

    EROSION:
      '<b>Erozja gleby</b> - Erozja to usuwanie ziemi lub gleby w wyniku jednego lub kilku procesów. Do głównych przyczyn erozji należą działania wody (erozja brzegów rzek i jezior), wiatru (osuszanie i podmuchy wiatru), przemieszczanie (uprawa, niwelacja terenu, zbiór roślin okopowych, deptanie i grzebanie zwierząt) i geologiczne (wewnętrzna erozja podziemna przez wody gruntowe, erozja przybrzeżna i osuwiska). Erozja może być również zwiększona przez niewłaściwe zarządzanie gruntami, takie jak nadmierny wypas, wylesianie lub niewłaściwe wykorzystanie mechanizacji w rolnictwie (np. orka na zboczach wzgórz).\n<b>Ocena erozji gleby</b>\n<b>Objaśnienie</b>: Erozja gleby to usuwanie wierzchniej warstwy gleby przez działanie wiatru, wody lub w wyniku działalności człowieka. Może to prowadzić do utraty żyznych gruntów i innych problemów środowiskowych.\n<b>Jak oceniasz intensywność erozji gleby w swojej okolicy?</b>\nA. Niska (minimalna utrata gleby)\nB. Umiarkowana (zauważalna utrata gleby)\nC. Wysoka (poważna utrata gleby)\nD. Bardzo wysoka (rozległa utrata gleby)\n<b>Jakie formy erozji gleby są najbardziej powszechne w Twojej okolicy?</b>\nA. Erozja wietrzna (gleba wywiewana przez wiatr)\nB. Erozja wodna (gleba wymywana przez deszcz lub rzeki)\nC. Działalność człowieka (np. budownictwo, rolnictwo)\nD. Erozja wąwozowa (tworzenie dużych rowów lub wąwozów)\nE. Erozja powierzchniowa (cienkie warstwy gleby usuwane na dużym obszarze)\nF. Erozja żłobinowa (małe rowy utworzone przez płynącą wodę)\nG. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Erozja wiatrowa</b>: Należy rozważyć, jeśli występują silne wiatry i luźna gleba.\n- <b>Erozja wodna</b>: Pomyśl o ulewnych deszczach i ścieżkach przepływu wody.\n- <b>Działalność człowieka</b>: Zastanów się nad budownictwem, rolnictwem lub inną działalnością człowieka.\n- <b>Erozja wąwozowa</b>: Zwróć uwagę, czy tworzą się duże rowy lub wąwozy.\n- <b>Erozja powierzchniowa</b>: Zwróć uwagę, czy usuwane są cienkie warstwy gleby.\n- <b>Erozja żłobinowa</b>: Pomyśl o małych rowkach utworzonych przez płynącą wodę.',

    SEALED_SOILS:
      '<b>Uszczelnianie gleby</b> - proces przykrywania gleby budynkami lub rodzajami sztucznych materiałów, które mogą być bardzo słabo przepuszczalne dla wody (np. asfalt lub beton). Uszczelnienie gleby może powodować szybki spływ wody po opadach, gdy woda nie może wsiąkać, co prowadzi do potencjalnej powodzi. Uszczelniona gleba nie jest w stanie skutecznie funkcjonować.\n<b>Ocena uszczelnienia gleby</b>\n<b>Wyjaśnienie</b>: Uszczelnienie powierzchni gleby występuje, gdy powierzchnia gleby staje się nieprzepuszczalna, często z powodu urbanizacji lub zagęszczenia. Może to uniemożliwić infiltrację wody i wpłynąć na zdrowie gleby.\n<b>Jak opisałbyś stan uszczelnienia powierzchni gleby w Twojej okolicy?</b>\nA. Minimalne uszczelnienie (większość powierzchni gleby jest przepuszczalna)\nB. Umiarkowane uszczelnienie (niektóre obszary są nieprzepuszczalne)\nC. Rozległe uszczelnienie (duże obszary są nieprzepuszczalne)\nD. Bardzo rozległe uszczelnienie (większość obszarów jest nieprzepuszczalna)\n<b>Jak myślisz, co jest główną przyczyną uszczelniania powierzchni gleby w Twojej okolicy?</b>\nA. Urbanizacja (zabudowa budynkami i drogami)\nB. Praktyki rolnicze (wykorzystywanie ciężkich maszyn)\nC. Działalność przemysłowa (fabryki i inne zakłady przemysłowe)\nD. Zagęszczanie gleby (cząstki gleby ściśle upakowane, zmniejszające przestrzeń porów)\nE. Brukowanie i betonowanie (przykrywanie gleby nieprzepuszczalnymi materiałami)\nF. Naturalne procesy (np. tworzenie się skorupy na powierzchni gleby)\nG. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Urbanizacja</b>: Weź pod uwagę zasięg budynków i dróg.\n- <b>Praktyki rolnicze</b>: Pomyśl o wykorzystaniu ciężkich maszyn w rolnictwie.\n- <b>Działalność przemysłowa</b>: Zastanów się nad obecnością fabryk i zakładów przemysłowych.\n- <b>Zagęszczenie gleby</b>: Zwróć uwagę, czy gleba jest twarda i ubita.\n- <b>Brukowanie i betonowanie</b>: Zwróć uwagę na ilość utwardzonych lub wybetonowanych obszarów.\n- <b>Naturalne procesy</b>: Pomyśl o naturalnym tworzeniu się skorupy na powierzchni gleby.',

    DEGRADATION:
      '<b>Degradacja gleby</b> - Negatywny proces często przyspieszany przez działalność człowieka (niewłaściwe użytkowanie gleby i praktyki uprawy, zagęszczanie gleby), który prowadzi do pogorszenia właściwości i funkcji gleby lub zniszczenia gleby jako całości, np. zagęszczenie, erozja, zasolenie.\n<b>Zanieczyszczenie gleby</b> - obecność pierwiastków chemicznych lub substancji w glebie w stężeniu, które może być szkodliwe dla zdrowia ludzkiego lub środowiska. Zanieczyszczenie może mieć bezpośredni toksyczny wpływ na rośliny, zwierzęta żyjące w lun na glebie lub ludzi, lub mieć pośredni toksyczny wpływ z powodu akumulacji w całym łańcuchu troficznym.\n<b>Zasolenie</b> - Akumulacja rozpuszczalnych soli (bardziej rozpuszczalnych niż gips) w górnych warstwach gleby (zasolona gleba = gleba zawierająca wystarczającą ilość rozpuszczalnych soli, aby negatywnie wpłynąć na większość roślin uprawnych, zwykle 4000 μS m-1).\n<b>Ocena degradacji gleby</b>\n<b>Wyjaśnienie</b>: Degradacja gleby odnosi się do spadku jakości gleby z powodu czynników takich jak erozja, zanieczyszczenie lub utrata składników odżywczych. Może to mieć wpływ na produktywność gleb w rolnictwie i zdrowie całego ekosystemu.\n<b>Jak oceniasz ogólny stan degradacji gleby na swoim obszarze?</b>\nA. Minimalna degradacja (jakość gleby jest ogólnie dobra)\nB. Umiarkowana degradacja (pewien spadek jakości gleby)\nC. Poważna degradacja (znaczny spadek jakości gleby)\nD. Bardzo poważna degradacja (znaczny spadek jakości gleby)\n<b>Jak myślisz, co jest główną przyczyną degradacji gleby na Twoim obszarze?</b>\nA. Erozja (utrata wierzchniej warstwy gleby)\nB. Zanieczyszczenie (np. związki chemiczne, pestycydy, metale ciężkie)\nC. Utrata składników odżywczych (wyczerpanie niezbędnych składników odżywczych w glebie)\nD. Nadmierna eksploatacja gleby (intensywne rolnictwo lub inne działania)\nE. Wylesianie (usuwanie drzew chroniących glebę)\nF. Zmiany klimatu (długotrwałe zmiany wzorców pogodowych)\nG. Nadmierny wypas (nadmierny wypas zwierząt gospodarskich)\nH. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Erozja</b>: Należy rozważyć, czy występuje znaczna utrata gleby.\n- <b>Zanieczyszczenie</b>: Pomyśl o obecności i źródłach np. związków chemiczne, pestycydów, metali ciężkich w okolicy.\n- <b>Utrata składników odżywczych</b>: Zastanów się nad żyznością i zawartością składników odżywczych w glebie.\n- <b>Nadmierna eksploatacja gleby</b>: Rozważ intensywne rolnictwo lub inne działania.\n- <b>Wylesianie</b>: Zastanów się nad usuwaniem drzew i trwałej roślinności.\n- <b>Zmiany klimatu</b>: Zastanów się nad długoterminowymi zmianami wzorców pogodowych.\n- <b>Nadmierny wypas</b>: Zastanów się, czy wypas zwierząt jest powszechny i intensywny.',

    LOSS_OF_ORGANIC_MATTER:
      '<b>Utrata materii organicznej w glebie</b> - spadek zawartości materii organicznej, szczególnie w wierzchniej warstwie gleby, gdy roczna utrata materii organicznej (np. z powodu utleniania, co przyspiesza tempo rozkładu lub erozji) nie jest wystarczająco kompensowana przez roczny przyrost materii organicznej, wynikający z resztek pożniwnych, kompostów i nawozów naturalnych.\n<b>Ocena utraty materii organicznej gleby</b>\n<b>Wyjaśnienie</b>: Materia organiczna gleby ma kluczowe znaczenie dla jej żyzności i struktury. Utrata materii organicznej może wynikać ze złych praktyk zarządzania gruntami lub procesów naturalnych.\n<b>Jak oceniasz utratę materii organicznej w glebie na swoim obszarze?</b>\nA. Niski (minimalna utrata)\nB. Umiarkowany (zauważalna utrata)\nC. Wysoki (znaczna utrata)\nD. Bardzo wysoka (rozległa utrata)\n<b>Jak myślisz, co jest główną przyczyną utraty materii organicznej gleby w Twojej okolicy?</b>\nA. Intensywne rolnictwo (częste zmiany roślin uprawnych i uprawa roli)\nB. Wylesianie (usuwanie drzew i trwałej roślinności)\nC. Nadmierny wypas (nadmierny wypas zwierząt gospodarskich)\nD. Erozja gleby (utrata wierzchniej warstwy gleby zawierającej materię organiczną)\nE. Zmiany klimatyczne (zmiany temperatury i opadów)\nF. Złe zarządzanie gruntami (nieodpowiednie praktyki ochrony gleby)\nG. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Intensywne rolnictwo</b>: Należy rozważyć częste zmiany uprawy roślin i praktyki uprawowe.\n- <b>Wylesianie</b>: Pomyśl o usuwaniu drzew i roślinności.\n- <b>Nadmierny wypas</b>: Zastanów się nad intensywnością wypasu zwierząt gospodarskich.\n- <b>Erozja gleby</b>: Zastanów się, czy występuje znaczna utrata gleby.\n- <b>Zmiany klimatyczne</b>: Pomyśl o zmianach temperatury i opadów.\n- <b>Niewłaściwe zarządzanie gruntami</b>: Zastanów się nad praktykami ochrony gleby.',

    PH: '<b>Zakwaszenie</b> - proces, w którym stężenie jonów wodorowych w glebie stopniowo wzrasta, spowodowane usuwaniem lekko zasadowych jonów wraz z uprawą, wymywaniem i stosowaniem zakwaszających rodzajów nawozów azotowych. Proces ten jest przyspieszany lub niewystarczająco kompensowany przez naturalne składniki gleby, w tym materiał macierzysty.\n<b>pH gleby</b>\n<b>Ocena pH gleby</b>\n<b>Objaśnienie</b>: Odczyn pH gleby jest miarą kwasowości lub zasadowości gleby. Może znacząco wpływać na wzrost roślin i zdrowie gleby. Niektóre rośliny, znane jako rośliny wskaźnikowe, mogą pomóc w określeniu pH gleby na podstawie ich obecności i stanu zdrowia.\n<b>Jak opisałbyś poziom pH swojej gleby na podstawie rosnących w niej roślin?</b>\nA. Kwaśny (np. obecność borówek, azalii)\nB. Lekko kwaśny (np. obecność paproci, rododendronów)\nC. Neutralne (np. obecność koniczyny, mniszka lekarskiego)\nD. Lekko zasadowy (np. obecność lawendy, krwawnika)\nE. Zasadowy (np. obecność szałwii dużej, łobody, tobołków polnych)\nF. Nie wiem (brak pewności co do rodzajów roślin lub ich wskazań)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Kwaśny</b>: Jeśli zauważysz, że rośliny takie jak borówki lub azalie dobrze się rozwijają, prawdopodobnie gleba jest kwaśna.\n- <b>Lekko kwaśna</b>: Rośliny takie jak paprocie i rododendrony wskazują na lekko kwaśną glebę.\n- <b>Neutralna</b>: Koniczyna i mniszek lekarski są powszechne w glebach o neutralnym pH.\n- <b>Lekko zasadowe</b>: Lawenda i krwawnik są wskaźnikami gleby lekko zasadowej.\n- <b>Zasadowe</b>: Szałwia duża, tobołki polne i łoboda rozwijają się w warunkach zasadowych.\n- <b>Nie jestem pewien</b>: Jeśli nie masz pewności co do roślin lub ich wskazań, należy wybrać tą opcję.',

    BIODIVERSITY:
      '<b>Różnorodność biologiczna</b> - zmienność wśród żywych organizmów ze wszystkich zasobach, w tym ekosystemach lądowych, morskich i innych ekosystemach wodnych, a także kompleksach ekologicznych, których są częścią ekosystemów. Obejmuje to różnorodność w obrębie gatunków, między gatunkami i ekosystemami.\n<b>Ocena bioróżnorodności gleby i środowiska lokalnego</b>\n<b>Wyjaśnienie</b>: Bioróżnorodność w glebie odnosi się do różnorodności organizmów żyjących w glebie, w tym bakterii, grzybów, owadów i roślin. Wysoka bioróżnorodność jest oznaką zdrowego ekosystemu, przyczyniając się do żyzności i stabilności gleby.\n<b>Jak oceniasz bioróżnorodność organizmów glebowych w swojej okolicy?</b>\nA. Niska (niewielkie zróżnicowanie gatunkowe)\nB. Umiarkowana (pewna różnorodność gatunków)\nC. Wysoka (wiele różnych gatunków)\nD. Bardzo wysoka (duża różnorodność gatunków)\nE. Nie wiem (brak pewności co do różnorodności organizmów glebowych)\n<b>Jak myślisz, co jest głównym czynnikiem wpływającym na bioróżnorodność gleby w Twojej okolicy?</b>\nA. Praktyki rolnicze (stosowanie pestycydów, monokultura)\nB. Urbanizacja (utrata naturalnych siedlisk)\nC. Zanieczyszczenie (zanieczyszczenia wpływające na życie w glebie)\nD. Zmiany klimatu (zmiany temperatury i opadów)\nE. Wylesianie (utrata drzew i roślinności)\nF. Naturalne warunki glebowe (specyficzne właściwości gleby)\nG. Inne (należy określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Niski</b>: Jeśli obserwujesz niewiele różnych gatunków, bioróżnorodność jest prawdopodobnie niska.\n- <b>Umiarkowana</b>: Pewna różnorodność gatunków wskazuje na umiarkowaną bioróżnorodność.\n- <b>Wysoka</b>: Wiele różnych gatunków wskazuje na wysoką bioróżnorodność.\n- <b>Bardzo wysoka</b>: Duża różnorodność gatunków wskazuje na bardzo wysoką bioróżnorodność.\n- <b>Nie jestem pewien</b>: Jeśli nie masz pewności co do różnorodności organizmów glebowych, zaznacz tą opcję.\n- <b>Praktyki rolnicze</b>: Weź pod uwagę wpływ metod uprawy, takich jak stosowanie pestycydów i monokultura (ciągła uprawa tej samej rośliny).\n- <b>Urbanizacja</b>: Zastanów się nad zakresem rozwoju miast i utratą siedlisk.\n- <b>Zanieczyszczenie</b>: Zastanów się nad obecnością zanieczyszczeń wpływających na życie w glebie.\n- <b>Zmiany klimatu</b>: Rozważ zmiany w temperaturze i wzorcach opadów.\n- <b>Wylesianie</b>: Zastanów się nad usuwaniem drzew i jego wpływem na bioróżnorodność.\n- <b>Naturalne warunki glebowe</b>: Pomyśl o charakterystycznych właściwościach gleby na danym obszarze, które mogą mieć wpływ na bioróżnorodność.',
  },
  categoryInformationTooltip: {
    DRY_SOILS:
      '<b>Pustynnienie</b> - Proces, w którym stosunkowo suche tereny stają się coraz bardziej jałowe.',
    WET_SOILS:
      '<b>Ocena podmoknięcia gleby</b> - Podmoknięcie gleby występuje, gdy nadmiar wody przesyca glebę.',
    EROSION:
      '<b>Erozja gleby</b> - Usuwanie gruntu lub gleby w wyniku jednego lub więcej procesów.',
    SEALED_SOILS:
      '<b>Uszczelnienie gleby</b> - Proces pokrywania gleby budynkami lub sztucznymi materiałami.',
    DEGRADATION:
      '<b>Degradacja gleby</b> - Negatywny proces często przyspieszany przez działalność człowieka (niewłaściwe użytkowanie i praktyki uprawy gleby, uszczelnienie gleby).',
    LOSS_OF_ORGANIC_MATTER:
      '<b>Utrata materii organicznej w glebie</b> - Spadek zawartości materii organicznej w jednej lub więcej warstwach gleby.',
    PH: '<b>Zakwaszenie</b> - Proces, w którym stężenie jonów wodoru w glebie stopniowo wzrasta.',
    BIODIVERSITY:
      '<b>Bioróżnorodność</b> - Zmienność wśród organizmów żywych pochodzących ze wszystkich źródeł.',
  },
  pointStatus: {
    status: 'Status',
    PENDING: 'W trakcie weryfikacji',
    ACCEPTED: 'Zaakceptowany',
    REJECTED: 'Odrzucony',
  },
  login: 'Zaloguj',
  logout: 'Wyloguj',
  register: 'Zarejestruj',
  profile: 'Profil',
  filters: 'Filtry',
  other: 'Inne',
  filtersDescription: 'Wybierz kategorie punktów które chcesz zobaczyć na mapie',
  close: 'Zamknij',
  cancel: 'Anuluj',
  back: 'Wróć',
  next: 'Dalej',
  continue: 'Kontynuuj',
  skip: 'Pomiń',
  addPoint: 'Dodaj punkt',
  clear: 'Wyczyść',
  remove: 'Usuń',
  apply: 'Zastosuj',
  categories: 'Kategorie',
  pressToAddPoint: 'Przytrzymaj, aby dodać zgłoszenie',
  addPointHere: 'Dodaj punkt w mojej lokacji',
  seeMore: 'Zobacz więcej',
  notAuthenticatedModal: {
    title: 'Tylko zalogowani użytkownicy mogą dodać zgłoszenie',
    message: 'Zaloguj się aby kontynuować',
  },
  addPointForm: {
    chooseCategory: {
      title: 'Wybierz kategorię',
      description: 'Wypełnij krótki kwestionariusz i dodaj punkt na mapie',
    },
    affectedArea: {
      title: 'Obszar dotknięty problemem',
      placeholder: 'Wybierz promień obszaru',
    },
    addPhoto: {
      title: 'Dodaj zdjęcie',
      takePhoto: 'Zrób zdjęcie',
      or: 'lub',
      chooseFromGallery: 'Wybierz zdjęcie z galerii',
    },
    description: {
      title: 'Opisz miejsce',
      placeName: {
        label: 'Nazwa miejsca',
        placeholder: 'np. Park ul. Kościuszki',
      },
      problemDescription: {
        label: 'Opis problemu',
        placeholder: '',
      },
    },
    solution: {
      title: 'Potencjalna przyczyna problemu',
    },
    successMessage: 'Sukces! Zgłoszenie zostało wysłane do weryfikacji',
    errorMessage: 'Ups! Coś poszło nie tak. Spróbuj ponownie',
  },
  pointDetails: {
    title: 'Szczegóły punktu',
    category: 'Kategoria',
    placeName: 'Nazwa miejsca',
    affectedArea: 'Promień problemu',
    problemDescription: 'Opis problemu',
    problemSolution: 'Potencjalna przyczyna problemu',
    reportDate: 'Data zgłoszenia',
    photo: 'Zdjęcie',
  },
  userProfile: {
    title: 'Profil użytkownika',
    appLanguage: 'Język aplikacji',
    manageAccount: 'Zarządzanie kontem',
    logout: 'Wyloguj',
    removeAccount: 'Usuń konto',
    pts: 'PKT',
    deleteAccountPopup: {
      button: 'Usuń konto',
      cancel: 'Anuluj',
      firstConfirmation: {
        title: 'Usuwanie konta',
        description:
          'Czy jesteś pewien, że chcesz usunąć swoje konto? Wszystkie dodane przez Ciebie treści zostaną usunięte, bez możliwosci ich przywrócenia.',
      },
      secondConfirmation: {
        title: 'Czy na pewno chcesz usunąć swoje konto?',
        description: 'NIE BĘDZIE MOŻLIWOŚCI COFNIĘCIA TEJ AKCJI',
      },
    },
  },
  settings: {
    title: 'Ustawienia',
    appLanguage: 'Język aplikacji',
    appVersion: 'Wersja aplikacji',
    howToUse: 'Jak używać aplikacji',
    aboutSoils: 'Informacje o kategoriach gleb',
    privacyPolicy: 'Polityka prywatności',
  },
  pointsList: {
    title: 'Lista dodanych punktów',
    noPoints: 'Nie dodano żadnych punktów.',
    unauthorized: 'Zaloguj się, aby zobaczyć dodane punkty.',
  },
  noPermissions: {
    library: {
      title: 'Nie możemy uzyskać dostępu do zdjęć',
      description: 'Zezwól na dostęp do zdjęć w ustawieniach.',
    },
    camera: {
      title: 'Nie możemy uzyskać dostępu do kamery',
      description: 'Zezwól na dostęp do kamery w ustawieniach.',
    },
    cancel: 'Anuluj',
    openSettings: 'Otówrz ustawienia',
  },
  pointManagement: {
    title: 'Punkty',
    generateReport: 'Wygeneruj raport',
    pointsToApprove: 'Punkty do akceptacji',
    approvedPoints: 'Punkty',
    pointId: 'Id punktu',
    pointName: 'Nazwa punktu',
    dateFrom: 'Data od',
    dateTo: 'Data do',
    pointType: 'Typ punktu',
    approve: 'Zaakceptuj',
    delete: 'Usuń',
    noData: 'Brak danych do wyświetlenia',
    download: 'Pobierz',
  },
  userManagement: {
    title: 'Zarządzanie użytkownikami',
    searchUser: 'Szukaj użytkownika',
    deleteUser: 'Usuń użytkownika',
    setPermissions: 'Ustaw uprawnienia',
    confirmDeleteMessage:
      'Czy na pewno chcesz usunąć konto użytkownika wraz ze wszystkimi jego wpisami?',
    cancel: 'Anuluj',
    confirm: 'Usuń konto',
    noUsers: 'Brak użytkowników do wyświetlenia',
  },
  onboarding: {
    goToTheAppButton: 'Przejdź do aplikacji',
    welcome: {
      title: 'Witamy w\nLOESS Soil Tool!',
      description: 'Narzędzie zaprojektowane do zgłaszania gleb w niezdrowym stanie',
    },
    instruction: {
      title: 'Jak używać aplikacji?',
      step1: {
        title: 'Znajdź glebę, która wydaje się niezdrowa',
        description:
          'Możesz użyć przykładów dostarczonych przez nasz zespół, aby sprawdzić, z jakim rodzajem gleby masz do czynienia.',
      },
      step2: {
        title: 'Dodaj raport w zlokalizowanym miejscu',
        description:
          'Uwzględnij wszystkie informacje, które zebrałeś dla jakości raportu, które pomogą badaczom próbującym rozwiązać problem.',
      },
      step3: {
        title: 'Poczekaj na potwierdzenie',
        description:
          'Każdy raport musi zostać zweryfikowany przez nasz zespół, aby uniknąć szkodliwych treści.',
      },
    },
    aboutSoils: {
      title: 'Informacje o glebach',
      description:
        'Kliknij kategorię gleby, aby wyświetlić informacje na jej temat. Jest to również dostępne w sekcji ustawień aplikacji.',
    },
  },
  problemCause: {
    lackOfRainfall: 'Brak opadów',
    highTemperatures: 'Wysokie temperatury',
    poorSoilStructure: 'Słaba struktura gleby',
    overuseOfWaterResources: 'Nadmierne wykorzystanie zasobów wodnych',
    deforestation: 'Wylesianie',
    climateChange: 'Zmiany klimatyczne',
    overgrazing: 'Nadmierne wypasanie',
    other: 'Inne',
    heavyRainfall: 'Intensywne opady',
    poorDrainageSystems: 'Słabe systemy drenażowe',
    highWaterTable: 'Wysoki poziom wód gruntowych',
    overIrrigation: 'Nadmierne nawadnianie',
    soilCompaction: 'Zagęszczenie gleby',
    urbanization: 'Urbanizacja',
    flooding: 'Powodzie',
    windErosion: 'Erozja wiatrowa',
    waterErosion: 'Erozja wodna',
    humanActivity: 'Działalność człowieka',
    gullyErosion: 'Erozja wąwozowa',
    sheetErosion: 'Erozja powierzchniowa',
    rillErosion: 'Erozja liniowa',
    agriculturalPractices: 'Praktyki rolnicze',
    industrialActivities: 'Działalność przemysłowa',
    pavingAndConcreting: 'Nawierzchnie utwardzone i betonowe',
    naturalProcesses: 'Procesy naturalne',
    erosion: 'Erozja',
    contamination: 'Zanieczyszczenie',
    lossOfNutrients: 'Utrata składników odżywczych',
    overuseOfSoil: 'Nadmierne wykorzystanie gleby',
    intensiveAgriculture: 'Intensywne rolnictwo',
    soilErosion: 'Erozja gleby',
    poorLandManagement: 'Słabe zarządzanie gruntami',
    acidic: 'Kwasowy',
    slightlyAcidic: 'Lekko kwasowy',
    neutral: 'Neutralny',
    slightlyAlkaline: 'Lekko zasadowy',
    alkaline: 'Zasadowy',
    notSure: 'Niepewny',
    pollution: 'Zanieczyszczenie',
    naturalSoilConditions: 'Naturalne warunki glebowe',
  },
  codeRepository: 'Repozytorium kodu',
  allRightsReserved: 'Wszelkie prawa zastrzeżone',
  shapeTheFuture: 'Kształtuj przyszłość edukacji o glebie.',
  togetherWeMap:
    'Razem mapujemy, łączymy i edukujemy, aby rozwijać wiedzę o glebie, budując świadomość, zaangażowanie i zrównoważone praktyki.',
  exploreTheMap: 'Odkrywaj mapę',
  learnMore: 'Dowiedz się więcej',
  aboutTheProject: 'O projekcie',
  learnMoreAboutTheProject: 'Dowiedz się więcej o projekcie',
  mappingSoilDegradation: 'Mapowanie degradacji gleby na wyciągnięcie ręki',
  mappingSoilDegradationDescription1:
    'LOESS Soil Map to platforma, która łączy społeczność w wysiłkach na rzecz ochrony gleb. Wykorzystując interaktywne mapy i narzędzia geolokalizacyjne, użytkownicy mogą wspólnie tworzyć bazę danych, dodając informacje o stanie gleby w swoich lokalnych obszarach.',
  mappingSoilDegradationDescription2:
    'Zebrane dane wspierają naukowców i decydentów w podejmowaniu świadomych decyzji środowiskowych. Dzięki prostemu formularzowi ankiety i intuicyjnemu interfejsowi każdy może przyczynić się do głębszego zrozumienia procesów degradacji gleby i skutecznie pomóc w jej ochronie.',
  sharedKnowledgeBase: 'Wspólna baza wiedzy na rzecz lepszego jutra',
  sharedKnowledgeBaseDescription1:
    'Projekt LOESS Soil Map, realizowany w ramach międzynarodowego programu badawczego LOESS, gromadzi dane dotyczące erozji gleby, pH i wilgotności, umożliwiając globalną analizę. Dzięki temu użytkownicy uzyskują dostęp do kompleksowych informacji, które mogą wykorzystać w praktyce — od badań naukowych po inicjatywy ekologiczne.',
  sharedKnowledgeBaseDescription2:
    'Tworzenie spójnego ekosystemu danych jest kluczem do wspólnych rozwiązań. Dzięki zaangażowaniu społeczności i nowoczesnym technologiom LOESS Soil Map staje się centralnym punktem wymiany informacji, wspierając działania na rzecz ochrony środowiska i interesy przyszłych pokoleń.',
  howToUseTheApp: 'Jak korzystać z aplikacji',
  watchVideoDescription: 'Obejrzyj krótki film o tym, jak korzystać z narzędzia crowdmappingowego',
  appTutorial: 'Samouczek aplikacji',
  dragMarkerMessage: 'Przeciągnij tymczasowy znacznik na żądaną lokalizację',
  locationError: 'Nie udało się zlokalizować Twojej pozycji, spróbuj odświeżyć stronę.',
  noPointsToApprove: 'Brak punktów do zatwierdzenia',
  noPointsFound: 'Nie znaleziono punktów',
  dateRange: 'Zakres dat',
  selectCategoryPlaceholder: 'Wybierz kategorię',
  getDataReport: 'Pobierz raport danych',
  surveyStatusUpdated: 'Status ankiety został zaktualizowany',
  oopsSomethingWentWrong: 'Ups, coś poszło nie tak! Spróbuj ponownie później.',
  downloadReportFailed: 'Nie udało się pobrać raportu.',
  save: 'Zapisz',
  managePermissions: 'Zarządzaj uprawnieniami',
  banUserTooltip: 'Zablokuj użytkownika. Zapobiegnie to dodawaniu punktów na mapie',
  usersCount: 'Liczba użytkowników:',
  userPermissionsUpdated: 'Uprawnienia użytkownika zostały zaktualizowane.',
  userStatusUpdated: 'Status użytkownika został zaktualizowany.',
  pickDate: 'Wybierz datę',
};
