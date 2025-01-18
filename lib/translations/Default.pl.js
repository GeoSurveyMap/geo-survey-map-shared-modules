"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.pl = void 0;
var types_1 = require("../types");
exports.pl = {
    category: (_a = {},
        _a[types_1.Category.DRY_SOILS] = 'Gleba sucha',
        _a[types_1.Category.WET_SOILS] = 'Gleba mokra',
        _a[types_1.Category.EROSION] = 'Erozja',
        _a[types_1.Category.SEALED_SOILS] = 'Gleba zasklepiona',
        _a[types_1.Category.DEGRADATION] = 'Degradacja gleby',
        _a[types_1.Category.LOSS_OF_ORGANIC_MATTER] = 'Utrata materii organicznej',
        _a[types_1.Category.PH] = 'pH',
        _a[types_1.Category.BIODIVERSITY] = 'Bioróżnorodność',
        _a),
    categoryInformation: {
        DRY_SOILS: '<b>Pustynnienie</b> - Proces, w którym stosunkowo suche tereny stają się coraz bardziej jałowe, tracąc wodę, roślinność i zwierzęta, bezpośrednio w wyniku zmian klimatycznych lub pośrednio w wyniku degradacji gleby spowodowanej niewłaściwym zarządzaniem.\n<b>Ocena suchości gleby</b>\n<b>Wyjaśnienie</b>: Suchość gleby może wynikać z różnych czynników, takich jak niewystarczające opady, wysokie temperatury lub słaba struktura gleby. Zrozumienie głównej przyczyny może pomóc w skutecznym rozwiązaniu problemu.\n<b>Jak myślisz, co jest główną przyczyną suchości gleby w Twoim regionie?</b>\nA. Brak opadów (Okresy małych lub zerowych opadów)\nB. Wysokie temperatury (Gorąca pogoda powodująca parowanie)\nC. Słaba struktura gleby (Gleba, która słabo zatrzymuje wodę)\nD. Nadmierne wykorzystanie zasobów wodnych (Nadmierne zużycie wody do celów rolniczych lub innych)\nE. Wylesianie (Usuwanie drzew pomagających zatrzymać wilgoć)\nF. Zmiany klimatyczne (Długoterminowe zmiany wzorców pogodowych)\nG. Nadmierne wypasanie (Nadmierne wypasanie przez zwierzęta gospodarskie)\nH. Inne (proszę określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Brak opadów</b>: Zastanów się, czy występowały długotrwałe okresy suszy.\n- <b>Wysokie temperatury</b>: Pomyśl o ostatnich falach upałów lub wyjątkowo gorącej pogodzie.\n- <b>Słaba struktura gleby</b>: Zauważ, czy gleba jest piaszczysta lub słabo zatrzymuje wodę.\n- <b>Nadmierne wykorzystanie zasobów wodnych</b>: Zastanów się nad lokalnym wykorzystaniem wody w rolnictwie lub przemyśle.\n- <b>Wylesianie</b>: Rozważ, czy w regionie doszło do znaczącego usuwania drzew.\n- <b>Zmiany klimatyczne</b>: Pomyśl o długoterminowych zmianach wzorców pogodowych.\n- <b>Nadmierne wypasanie</b>: Rozważ, czy wypas zwierząt gospodarskich jest powszechny i intensywny.',
        WET_SOILS: '<b>Ocena podmokłości gleby</b>\n<b>Wyjaśnienie</b>: Podmokłość gleby występuje, gdy nadmiar wody nasyca glebę, często z powodu intensywnych opadów, słabej drenażu lub wysokiego poziomu wód gruntowych. Zidentyfikowanie przyczyny może pomóc w zarządzaniu poziomem wody.\n<b>Jak myślisz, co jest główną przyczyną podmokłości gleby w Twoim regionie?</b>\nA. Intensywne opady deszczu (Częste lub intensywne opady)\nB. Słaby system drenażu (Niewystarczająca infrastruktura drenażowa)\nC. Wysoki poziom wód gruntowych (Poziom wód gruntowych blisko powierzchni)\nD. Nadmierne nawadnianie (Nadmierne podlewanie upraw lub ogrodów)\nE. Zbicie gleby (Cząstki gleby zbite, zmniejszające przestrzeń porowatą)\nF. Urbanizacja (Zwiększenie powierzchni nieprzepuszczalnych, takich jak drogi i budynki)\nG. Powodzie (Wylewy rzek lub jezior)\nH. Inne (proszę określić)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Intensywne opady deszczu</b>: Zastanów się, czy wystąpiły częste lub intensywne deszcze.\n- <b>Słaby system drenażu</b>: Pomyśl o skuteczności lokalnej infrastruktury drenażowej.\n- <b>Wysoki poziom wód gruntowych</b>: Zauważ, czy poziom wód gruntowych jest blisko powierzchni.\n- <b>Nadmierne nawadnianie</b>: Zastanów się nad praktykami rolniczymi i zużyciem wody.\n- <b>Zbicie gleby</b>: Rozważ, czy gleba jest twarda i zbita.\n- <b>Urbanizacja</b>: Pomyśl o rozległości powierzchni nieprzepuszczalnych w regionie.\n- <b>Powodzie</b>: Rozważ, czy ostatnio wystąpiły powodzie.',
        EROSION: '<b>Erozja gleby</b> - Erozja to proces usuwania ziemi lub gleby w wyniku jednego lub więcej procesów. Główne przyczyny erozji to działanie wody (erozja rowkowa, międzyrowkowa, wąwozowa, erozja w wyniku topnienia śniegu oraz erozja brzegów rzek i jezior), wiatru (wysuszanie i zwiewanie gleby), translokacja (uprawa, niwelacja terenu, zbiór roślin korzeniowych, ugniatanie gleby przez zwierzęta czy ich kopanie) oraz procesy geologiczne (wewnętrzna erozja podziemna przez wody gruntowe, erozja wybrzeży oraz osuwiska). Erozję mogą również nasilać złe zarządzanie gruntami, takie jak nadmierny wypas, wylesianie lub nieodpowiednie stosowanie mechanizacji (np. orka w dół zbocza).\n<b>Ocena erozji gleby</b>\n<b>Wyjaśnienie</b>: Erozja gleby polega na usuwaniu wierzchniej warstwy gleby przez wiatr, wodę lub działalność człowieka. Może to prowadzić do utraty żyznych gruntów i innych problemów środowiskowych.\n<b>Jak oceniłbyś intensywność erozji gleby w swoim rejonie?</b>\nA. Niska (Minimalna utrata gleby)\nB. Umiarkowana (Zauważalna utrata gleby)\nC. Wysoka (Poważna utrata gleby)\nD. Bardzo wysoka (Rozległa utrata gleby)\n<b>Jakie formy erozji gleby są najczęstsze w Twoim rejonie?</b>\nA. Erozja wiatrowa (Gleba zwiewana przez wiatr)\nB. Erozja wodna (Gleba zmywana przez deszcze lub rzeki)\nC. Działalność człowieka (np. budownictwo, rolnictwo)\nD. Erozja wąwozowa (Tworzenie dużych kanałów lub wąwozów)\nE. Erozja powierzchniowa (Cienkie warstwy gleby usuwane na dużym obszarze)\nF. Erozja rowkowa (Małe kanały utworzone przez wodę)\nG. Inne (proszę podać)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Erozja wiatrowa</b>: Rozważ, czy występują silne wiatry i luźna gleba.\n- <b>Erozja wodna</b>: Zastanów się nad intensywnymi opadami deszczu i wzorcami przepływu wody.\n- <b>Działalność człowieka</b>: Przeanalizuj budownictwo, rolnictwo lub inne działania człowieka.\n- <b>Erozja wąwozowa</b>: Zauważ, czy tworzą się duże kanały lub wąwozy.\n- <b>Erozja powierzchniowa</b>: Zastanów się, czy cienkie warstwy gleby są usuwane.\n- <b>Erozja rowkowa</b>: Rozważ małe kanały utworzone przez bieżącą wodę.',
        SEALED_SOILS: '<b>Zasklepienie gleby</b> - Proces pokrywania gleby budynkami lub rodzajami materiałów sztucznych, które mogą być bardzo wolno przepuszczalne dla wody (np. asfalt lub beton). Uszczelnianie gleby może powodować szybki spływ powierzchniowy po opadach, gdzie woda nie może wsiąkać, co prowadzi do potencjalnych powodzi. Gleba przestaje pełnić swoje funkcje, gdy jest uszczelniona.\n<b>Ocena uszczelniania gleby</b>\n<b>Wyjaśnienie</b>: Uszczelnianie powierzchni gleby występuje, gdy powierzchnia gleby staje się nieprzepuszczalna, często z powodu urbanizacji lub zagęszczenia. Może to uniemożliwiać infiltrację wody i wpływać na zdrowie gleby.\n<b>Jak opisałbyś stan uszczelniania powierzchni gleby w swoim rejonie?</b>\nA. Minimalne uszczelnienie (Większość powierzchni gleby jest przepuszczalna)\nB. Umiarkowane uszczelnienie (Niektóre obszary są nieprzepuszczalne)\nC. Rozległe uszczelnienie (Duże obszary są nieprzepuszczalne)\nD. Bardzo rozległe uszczelnienie (Większość obszarów jest nieprzepuszczalna)\n<b>Co Twoim zdaniem jest główną przyczyną uszczelniania powierzchni gleby w Twoim rejonie?</b>\nA. Urbanizacja (Budowa budynków i dróg)\nB. Praktyki rolnicze (Użycie ciężkich maszyn)\nC. Działalność przemysłowa (Fabryki i inne obiekty przemysłowe)\nD. Zagęszczenie gleby (Zagęszczanie cząstek gleby, co zmniejsza przestrzeń porową)\nE. Nawierzchnie i betonowanie (Pokrywanie gleby nieprzepuszczalnymi materiałami)\nF. Procesy naturalne (np. tworzenie się skorupy)\nG. Inne (proszę podać)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Urbanizacja</b>: Zastanów się nad ilością budynków i dróg.\n- <b>Praktyki rolnicze</b>: Rozważ stosowanie ciężkich maszyn w rolnictwie.\n- <b>Działalność przemysłowa</b>: Przeanalizuj obecność fabryk i obiektów przemysłowych.\n- <b>Zagęszczenie gleby</b>: Zauważ, czy gleba jest twarda i zagęszczona.\n- <b>Nawierzchnie i betonowanie</b>: Zastanów się nad ilością obszarów pokrytych asfaltem lub betonem.\n- <b>Procesy naturalne</b>: Pomyśl o naturalnym tworzeniu się skorupy na powierzchni gleby.',
        DEGRADATION: '<b>Degradacja gleby</b> - Negatywny proces często przyspieszany przez działalność człowieka (niewłaściwe użytkowanie gleby i praktyki uprawy, uszczelnianie gleby), prowadzący do pogorszenia właściwości i funkcji gleby lub jej całkowitego zniszczenia, np. zagęszczenie, erozja, zasolenie.\n<b>Zanieczyszczenie gleby</b> - Obecność chemikaliów lub substancji w glebie w stężeniu, które może być szkodliwe dla zdrowia ludzi lub środowiska. Zanieczyszczenie może mieć bezpośredni toksyczny wpływ na rośliny, zwierzęta lub ludzi żyjących w glebie, na niej lub od niej zależnych, lub pośredni wpływ toksyczny poprzez akumulację w całym łańcuchu troficznym.\n<b>Zasolenie</b> - Nagromadzenie rozpuszczalnych soli (bardziej rozpuszczalnych niż gips) w górnych warstwach gleby (gleba zasolona = gleba zawierająca wystarczającą ilość rozpuszczalnych soli, aby negatywnie wpłynąć na większość roślin uprawnych, zwykle 4000 μS m-1).\n<b>Ocena degradacji gleby</b>\n<b>Wyjaśnienie</b>: Degradacja gleby odnosi się do pogorszenia jakości gleby z powodu takich czynników jak erozja, zanieczyszczenie czy utrata składników odżywczych. Może to wpłynąć na produktywność rolniczą i zdrowie ekosystemów.\n<b>Jak oceniłbyś ogólny stan degradacji gleby w swoim rejonie?</b>\nA. Minimalna degradacja (Jakość gleby jest ogólnie dobra)\nB. Umiarkowana degradacja (Nieco gorsza jakość gleby)\nC. Znaczna degradacja (Znaczny spadek jakości gleby)\nD. Bardzo duża degradacja (Rozległy spadek jakości gleby)\n<b>Co Twoim zdaniem jest główną przyczyną degradacji gleby w Twoim rejonie?</b>\nA. Erozja (Utrata wierzchniej warstwy gleby)\nB. Zanieczyszczenie (np. chemikalia, zanieczyszczenia)\nC. Utrata składników odżywczych (Wyjałowienie gleby z niezbędnych składników odżywczych)\nD. Nadmierne użytkowanie gleby (Intensywne rolnictwo lub inne działania)\nE. Wylesianie (Usunięcie drzew chroniących glebę)\nF. Zmiany klimatu (Długoterminowe zmiany wzorców pogodowych)\nG. Nadmierny wypas (Nadmierny wypas zwierząt gospodarskich)\nH. Inne (proszę podać)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Erozja</b>: Zastanów się, czy występuje znaczna utrata gleby.\n- <b>Zanieczyszczenie</b>: Pomyśl o obecności chemikaliów lub zanieczyszczeń.\n- <b>Utrata składników odżywczych</b>: Oceń żyzność i zawartość składników odżywczych w glebie.\n- <b>Nadmierne użytkowanie gleby</b>: Rozważ intensywne rolnictwo lub inne działania.\n- <b>Wylesianie</b>: Zastanów się nad usunięciem drzew i roślinności.\n- <b>Zmiany klimatu</b>: Przeanalizuj długoterminowe zmiany wzorców pogodowych.\n- <b>Nadmierny wypas</b>: Oceń, czy intensywny wypas zwierząt gospodarskich jest powszechny.',
        LOSS_OF_ORGANIC_MATTER: '<b>Utrata Materii Organicznej Gleby</b> - Spadek zawartości materii organicznej w jednej lub więcej warstwach gleby, gdy roczna utrata materii organicznej (np. na skutek utleniania lub erozji) nie jest wystarczająco kompensowana przez roczny przyrost materii organicznej wynikający z resztek roślinnych, kompostów i nawozów.\n<b>Ocena Utraty Materii Organicznej Gleby</b>\n<b>Wyjaśnienie</b>: Materia organiczna gleby jest kluczowa dla jej żyzności i struktury. Utrata materii organicznej może wynikać z niewłaściwych praktyk zarządzania glebą lub procesów naturalnych.\n<b>Jak oceniłbyś utratę materii organicznej gleby w swoim rejonie?</b>\nA. Niska (Minimalna utrata)\nB. Umiarkowana (Zauważalna utrata)\nC. Wysoka (Znaczna utrata)\nD. Bardzo wysoka (Rozległa utrata)\n<b>Co Twoim zdaniem jest główną przyczyną utraty materii organicznej gleby w Twoim rejonie?</b>\nA. Intensywne rolnictwo (Częste uprawy i orka)\nB. Wylesianie (Usunięcie drzew i roślinności)\nC. Nadmierny wypas (Nadmierny wypas zwierząt gospodarskich)\nD. Erozja gleby (Utrata wierzchniej warstwy gleby zawierającej materię organiczną)\nE. Zmiany klimatu (Zmiany temperatury i opadów)\nF. Złe zarządzanie glebą (Niewłaściwe praktyki ochrony gleby)\nG. Inne (proszę podać)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Intensywne rolnictwo</b>: Zastanów się nad częstotliwością upraw i orki.\n- <b>Wylesianie</b>: Przemyśl usuwanie drzew i roślinności.\n- <b>Nadmierny wypas</b>: Oceń intensywność wypasu zwierząt gospodarskich.\n- <b>Erozja gleby</b>: Rozważ, czy występuje znaczna utrata gleby.\n- <b>Zmiany klimatu</b>: Zastanów się nad zmianami temperatury i opadów.\n- <b>Złe zarządzanie glebą</b>: Oceń praktyki ochrony gleby.',
        PH: '<b>Kwasowość</b> - Proces, w którym stężenie jonów wodoru w glebie stopniowo wzrasta, spowodowany usunięciem lekko zasadowych jonów wraz z plonem, wymywaniem i stosowaniem zakwaszających rodzajów nawozów azotowych. Proces ten jest przyspieszany lub niewystarczająco kompensowany przez naturalne składniki gleby, w tym materiał macierzysty.\n<b>pH Gleby</b>\n<b>Ocena pH Gleby</b>\n<b>Wyjaśnienie</b>: pH gleby to miara kwasowości lub zasadowości gleby. Może znacząco wpływać na wzrost roślin i zdrowie gleby. Niektóre rośliny, znane jako rośliny wskaźnikowe, mogą pomóc w określeniu pH gleby na podstawie ich obecności i kondycji.\n<b>Jak opisałbyś poziom pH swojej gleby na podstawie roślin, które na niej rosną?</b>\nA. Kwasowa (np. obecność jagód, azalii)\nB. Lekko kwasowa (np. obecność paproci, rododendronów)\nC. Neutralna (np. obecność koniczyny, mniszka lekarskiego)\nD. Lekko zasadowa (np. obecność lawendy, krwawnika)\nE. Zasadowa (np. obecność szałwii, solanki)\nF. Niepewna (Niepewność co do rodzaju roślin lub ich wskazań)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Kwasowa</b>: Jeśli zauważasz, że dobrze rozwijają się rośliny takie jak jagody czy azalie, Twoja gleba prawdopodobnie jest kwasowa.\n- <b>Lekko kwasowa</b>: Rośliny takie jak paprocie i rododendrony wskazują na lekko kwasową glebę.\n- <b>Neutralna</b>: Koniczyna i mniszek lekarski są powszechne w glebach o neutralnym pH.\n- <b>Lekko zasadowa</b>: Lawenda i krwawnik wskazują na lekko zasadową glebę.\n- <b>Zasadowa</b>: Szałwia i solanka dobrze rozwijają się w warunkach zasadowych.\n- <b>Niepewna</b>: Jeśli nie jesteś pewien rodzaju roślin lub ich wskazań, ta opcja pozwala to wyrazić.',
        BIODIVERSITY: '<b>Bioróżnorodność</b> - Zmienność wśród organizmów żywych pochodzących ze wszystkich źródeł, w tym ekosystemów lądowych, morskich i innych wodnych, a także kompleksów ekologicznych, których są częścią. Obejmuje to różnorodność w obrębie gatunków, między gatunkami i ekosystemami.\n<b>Ocena bioróżnorodności gleby i lokalnego środowiska</b>\n<b>Wyjaśnienie</b>: Bioróżnorodność gleby odnosi się do różnorodności organizmów żyjących w glebie, w tym bakterii, grzybów, owadów i roślin. Wysoka bioróżnorodność jest oznaką zdrowego ekosystemu, przyczyniając się do żyzności i stabilności gleby.\n<b>Jak oceniasz bioróżnorodność organizmów glebowych w Twoim regionie?</b>\nA. Niska (Niewiele różnych gatunków)\nB. Umiarkowana (Pewna różnorodność gatunków)\nC. Wysoka (Wiele różnych gatunków)\nD. Bardzo wysoka (Obfita różnorodność gatunków)\nE. Nie wiem (Niepewność co do różnorodności organizmów glebowych)\n<b>Co uważasz za główny czynnik wpływający na bioróżnorodność gleby w Twoim regionie?</b>\nA. Praktyki rolnicze (Stosowanie pestycydów, monokultury)\nB. Urbanizacja (Utrata naturalnych siedlisk)\nC. Zanieczyszczenie (Substancje szkodliwe wpływające na życie glebowe)\nD. Zmiany klimatu (Zmiany temperatury i opadów)\nE. Wylesianie (Utrata drzew i roślinności)\nF. Naturalne warunki glebowe (Właściwości inherentne gleby)\nG. Inne (proszę sprecyzować)\n<b>Komentarze do odpowiedzi</b>:\n- <b>Niska</b>: Jeśli obserwujesz niewiele różnych gatunków, bioróżnorodność jest prawdopodobnie niska.\n- <b>Umiarkowana</b>: Pewna różnorodność gatunków wskazuje na umiarkowaną bioróżnorodność.\n- <b>Wysoka</b>: Wiele różnych gatunków sugeruje wysoką bioróżnorodność.\n- <b>Bardzo wysoka</b>: Obfita różnorodność gatunków wskazuje na bardzo wysoką bioróżnorodność.\n- <b>Nie wiem</b>: Jeśli nie jesteś pewien różnorodności organizmów glebowych, ta opcja pozwala to wyrazić.\n- <b>Praktyki rolnicze</b>: Zastanów się nad wpływem metod rolniczych, takich jak stosowanie pestycydów i monokultury.\n- <b>Urbanizacja</b>: Zastanów się nad zakresem rozwoju miejskiego i utraty siedlisk.\n- <b>Zanieczyszczenie</b>: Pomyśl o obecności substancji szkodliwych wpływających na życie glebowe.\n- <b>Zmiany klimatu</b>: Zastanów się nad zmianami w temperaturze i opadach atmosferycznych.\n- <b>Wylesianie</b>: Przemyśl usuwanie drzew i jego wpływ na bioróżnorodność.\n- <b>Naturalne warunki glebowe</b>: Zastanów się nad inherentnymi właściwościami gleby, które mogą wpływać na bioróżnorodność.'
    },
    categoryInformationTooltip: {
        DRY_SOILS: '<b>Pustynnienie</b> - Proces, w którym stosunkowo suche tereny stają się coraz bardziej jałowe.',
        WET_SOILS: '<b>Ocena podmoknięcia gleby</b> - Podmoknięcie gleby występuje, gdy nadmiar wody przesyca glebę.',
        EROSION: '<b>Erozja gleby</b> - Usuwanie gruntu lub gleby w wyniku jednego lub więcej procesów.',
        SEALED_SOILS: '<b>Uszczelnienie gleby</b> - Proces pokrywania gleby budynkami lub sztucznymi materiałami.',
        DEGRADATION: '<b>Degradacja gleby</b> - Negatywny proces często przyspieszany przez działalność człowieka (niewłaściwe użytkowanie i praktyki uprawy gleby, uszczelnienie gleby).',
        LOSS_OF_ORGANIC_MATTER: '<b>Utrata materii organicznej w glebie</b> - Spadek zawartości materii organicznej w jednej lub więcej warstwach gleby.',
        PH: '<b>Zakwaszenie</b> - Proces, w którym stężenie jonów wodoru w glebie stopniowo wzrasta.',
        BIODIVERSITY: '<b>Bioróżnorodność</b> - Zmienność wśród organizmów żywych pochodzących ze wszystkich źródeł.'
    },
    pointStatus: {
        status: 'Status',
        PENDING: 'W trakcie weryfikacji',
        ACCEPTED: 'Zaakceptowany',
        REJECTED: 'Odrzucony'
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
        message: 'Zaloguj się aby kontynuować'
    },
    addPointForm: {
        chooseCategory: {
            title: 'Wybierz kategorię',
            description: 'Wypełnij krótki kwestionariusz i dodaj punkt na mapie'
        },
        affectedArea: {
            title: 'Obszar dotknięty problemem',
            placeholder: 'Wybierz promień obszaru'
        },
        addPhoto: {
            title: 'Dodaj zdjęcie',
            takePhoto: 'Zrób zdjęcie',
            or: 'lub',
            chooseFromGallery: 'Wybierz zdjęcie z galerii'
        },
        description: {
            title: 'Opisz miejsce',
            placeName: {
                label: 'Nazwa miejsca',
                placeholder: 'np. Park ul. Kościuszki'
            },
            problemDescription: {
                label: 'Opis problemu',
                placeholder: ''
            }
        },
        solution: {
            title: 'Potencjalna przyczyna problemu'
        },
        successMessage: 'Sukces! Zgłoszenie zostało wysłane do weryfikacji',
        errorMessage: 'Ups! Coś poszło nie tak. Spróbuj ponownie'
    },
    pointDetails: {
        title: 'Szczegóły punktu',
        category: 'Kategoria',
        placeName: 'Nazwa miejsca',
        affectedArea: 'Promień problemu',
        problemDescription: 'Opis problemu',
        problemSolution: 'Potencjalna przyczyna problemu',
        reportDate: 'Data zgłoszenia',
        photo: 'Zdjęcie'
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
                description: 'Czy jesteś pewien, że chcesz usunąć swoje konto? Wszystkie dodane przez Ciebie treści zostaną usunięte, bez możliwosci ich przywrócenia.'
            },
            secondConfirmation: {
                title: 'Czy na pewno chcesz usunąć swoje konto?',
                description: 'NIE BĘDZIE MOŻLIWOŚCI COFNIĘCIA TEJ AKCJI'
            }
        }
    },
    settings: {
        title: 'Ustawienia',
        appLanguage: 'Język aplikacji',
        appVersion: 'Wersja aplikacji',
        howToUse: 'Jak używać aplikacji',
        aboutSoils: 'Informacje o kategoriach gleb',
        privacyPolicy: 'Polityka prywatności'
    },
    pointsList: {
        title: 'Lista dodanych punktów',
        noPoints: 'Nie dodano żadnych punktów.',
        unauthorized: 'Zaloguj się, aby zobaczyć dodane punkty.'
    },
    noPermissions: {
        library: {
            title: 'Nie możemy uzyskać dostępu do zdjęć',
            description: 'Zezwól na dostęp do zdjęć w ustawieniach.'
        },
        camera: {
            title: 'Nie możemy uzyskać dostępu do kamery',
            description: 'Zezwól na dostęp do kamery w ustawieniach.'
        },
        cancel: 'Anuluj',
        openSettings: 'Otówrz ustawienia'
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
        download: 'Pobierz'
    },
    userManagement: {
        title: 'Zarządzanie użytkownikami',
        searchUser: 'Szukaj użytkownika',
        deleteUser: 'Usuń użytkownika',
        setPermissions: 'Ustaw uprawnienia',
        confirmDeleteMessage: 'Czy na pewno chcesz usunąć konto użytkownika wraz ze wszystkimi jego wpisami?',
        cancel: 'Anuluj',
        confirm: 'Usuń konto',
        noUsers: 'Brak użytkowników do wyświetlenia'
    },
    onboarding: {
        goToTheAppButton: 'Przejdź do aplikacji',
        welcome: {
            title: 'Witamy w\nLOESS Soil Tool!',
            description: 'Narzędzie zaprojektowane do zgłaszania gleb w niezdrowym stanie'
        },
        instruction: {
            title: 'Jak używać aplikacji?',
            step1: {
                title: 'Znajdź glebę, która wydaje się niezdrowa',
                description: 'Możesz użyć przykładów dostarczonych przez nasz zespół, aby sprawdzić, z jakim rodzajem gleby masz do czynienia.'
            },
            step2: {
                title: 'Dodaj raport w zlokalizowanym miejscu',
                description: 'Uwzględnij wszystkie informacje, które zebrałeś dla jakości raportu, które pomogą badaczom próbującym rozwiązać problem.'
            },
            step3: {
                title: 'Poczekaj na potwierdzenie',
                description: 'Każdy raport musi zostać zweryfikowany przez nasz zespół, aby uniknąć szkodliwych treści.'
            }
        },
        aboutSoils: {
            title: 'Informacje o glebach',
            description: 'Kliknij kategorię gleby, aby wyświetlić informacje na jej temat. Jest to również dostępne w sekcji ustawień aplikacji.'
        }
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
        naturalSoilConditions: 'Naturalne warunki glebowe'
    },
    codeRepository: 'Repozytorium kodu',
    allRightsReserved: 'Wszelkie prawa zastrzeżone',
    shapeTheFuture: 'Kształtuj przyszłość edukacji o glebie.',
    togetherWeMap: 'Razem mapujemy, łączymy i edukujemy, aby rozwijać wiedzę o glebie, budując świadomość, zaangażowanie i zrównoważone praktyki.',
    exploreTheMap: 'Odkrywaj mapę',
    learnMore: 'Dowiedz się więcej',
    aboutTheProject: 'O projekcie',
    learnMoreAboutTheProject: 'Dowiedz się więcej o projekcie',
    mappingSoilDegradation: 'Mapowanie degradacji gleby na wyciągnięcie ręki',
    mappingSoilDegradationDescription1: 'LOESS Soil Map to platforma, która łączy społeczność w wysiłkach na rzecz ochrony gleb. Wykorzystując interaktywne mapy i narzędzia geolokalizacyjne, użytkownicy mogą wspólnie tworzyć bazę danych, dodając informacje o stanie gleby w swoich lokalnych obszarach.',
    mappingSoilDegradationDescription2: 'Zebrane dane wspierają naukowców i decydentów w podejmowaniu świadomych decyzji środowiskowych. Dzięki prostemu formularzowi ankiety i intuicyjnemu interfejsowi każdy może przyczynić się do głębszego zrozumienia procesów degradacji gleby i skutecznie pomóc w jej ochronie.',
    sharedKnowledgeBase: 'Wspólna baza wiedzy na rzecz lepszego jutra',
    sharedKnowledgeBaseDescription1: 'Projekt LOESS Soil Map, realizowany w ramach międzynarodowego programu badawczego LOESS, gromadzi dane dotyczące erozji gleby, pH i wilgotności, umożliwiając globalną analizę. Dzięki temu użytkownicy uzyskują dostęp do kompleksowych informacji, które mogą wykorzystać w praktyce — od badań naukowych po inicjatywy ekologiczne.',
    sharedKnowledgeBaseDescription2: 'Tworzenie spójnego ekosystemu danych jest kluczem do wspólnych rozwiązań. Dzięki zaangażowaniu społeczności i nowoczesnym technologiom LOESS Soil Map staje się centralnym punktem wymiany informacji, wspierając działania na rzecz ochrony środowiska i interesy przyszłych pokoleń.',
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
    pickDate: 'Wybierz datę'
};
