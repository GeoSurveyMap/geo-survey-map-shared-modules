"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sk = void 0;
exports.sk = {
    category: {
        DRY_SOILS: 'Suchá pôda',
        WET_SOILS: 'Vlhká pôda',
        EROSION: 'Erózia',
        SEALED_SOILS: 'Zhutnená pôda',
        DEGRADATION: 'Pôdna degradácia',
        LOSS_OF_ORGANIC_MATTER: 'Úbytok organickej hmoty',
        PH: 'pH',
        BIODIVERSITY: 'Biodiverzita'
    },
    categoryInformation: {
        DRY_SOILS: "<b>Desertification</b> - The process in which relatively dry land becomes increasingly arid, typically losing its body of water as well as vegetation and wildlife either directly via climate change or indirectly via soil degradation resulting from poor management.\n<b>Assessment of Soil Dryness</b>\n<b>Explanation</b>: Soil dryness can result from various factors such as insufficient rainfall, high temperatures, or poor soil structure. Understanding the primary cause can help in addressing the issue effectively.\n<b>What do you think is the primary cause of soil dryness in your area?</b>\nA. Lack of rainfall (Periods of little or no rain)\nB. High temperatures (Hot weather causing evaporation)\nC. Poor soil structure (Soil that doesn't retain water well)\nD. Overuse of water resources (Excessive use of water for agriculture or other purposes)\nE. Deforestation (Removal of trees that help retain moisture)\nF. Climate change (Long-term changes in weather patterns)\nG. Overgrazing (Excessive grazing by livestock)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Lack of rainfall</b>: Consider if there have been prolonged dry periods.\n- <b>High temperatures</b>: Think about recent heatwaves or unusually hot weather.\n- <b>Poor soil structure</b>: Notice if the soil is sandy or has poor water retention.\n- <b>Overuse of water resources</b>: Reflect on local agricultural or industrial water usage.\n- <b>Deforestation</b>: Consider if there has been significant tree removal in the area.\n- <b>Climate change</b>: Think about long-term changes in weather patterns.\n- <b>Overgrazing</b>: Consider if livestock grazing is prevalent and intense.",
        WET_SOILS: '<b>Assessment of Soil Waterlogging</b>\n<b>Explanation</b>: Soil waterlogging occurs when excess water saturates the soil, often due to heavy rainfall, poor drainage, or high water tables. Identifying the cause can help in managing water levels.\n<b>What do you think is the primary cause of soil waterlogging in your area?</b>\nA. Heavy rainfall (Frequent or intense rain)\nB. Poor drainage systems (Inadequate drainage infrastructure)\nC. High water table (Groundwater level close to the surface)\nD. Over-irrigation (Excessive watering of crops or gardens)\nE. Soil compaction (Soil particles pressed together, reducing pore space)\nF. Urbanization (Increased impermeable surfaces like roads and buildings)\nG. Flooding (Overflow of water from rivers or lakes)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Heavy rainfall</b>: Consider if there have been frequent or intense rain events.\n- <b>Poor drainage systems</b>: Think about the effectiveness of local drainage infrastructure.\n- <b>High water table</b>: Notice if groundwater levels are close to the surface.\n- <b>Over-irrigation</b>: Reflect on local agricultural practices and water usage.\n- <b>Soil compaction</b>: Consider if the soil is hard and compacted.\n- <b>Urbanization</b>: Think about the extent of impermeable surfaces in the area.\n- <b>Flooding</b>: Consider if there have been recent floods.',
        EROSION: '<b>Soil erosion</b> - Erosion is the removal of land or soil through one or more processes. The main causes of erosion include the actions of water (rills, inter-rill, gully, snowmelt and river and lake bank erosion), wind (desiccation and wind-blow), translocation (tillage, land levelling, harvesting of root crops, trampling and burrowing animals) and geological (internal subterranean erosion by groundwater, coastal erosion and landslides). Erosion can also be increased by poor land management such as overgrazing, deforestation or inappropriate use of mechanisation (e.g., ploughing down a hill slope).\n<b>Assessment of Soil Erosion</b>\n<b>Explanation</b>: Soil erosion is the removal of the topsoil layer by wind, water, or human activity. It can lead to loss of fertile land and other environmental issues.\n<b>How would you rate the intensity of soil erosion in your area?</b>\nA. Low (Minimal soil loss)\nB. Moderate (Noticeable soil loss)\nC. High (Severe soil loss)\nD. Very high (Extensive soil loss)\n<b>What forms of soil erosion are most common in your area?</b>\nA. Wind erosion (Soil blown away by wind)\nB. Water erosion (Soil washed away by rain or rivers)\nC. Human activity (e.g., construction, agriculture)\nD. Gully erosion (Formation of large channels or gullies)\nE. Sheet erosion (Thin layers of soil removed over a large area)\nF. Rill erosion (Small channels formed by running water)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Wind erosion</b>: Consider if there are strong winds and loose soil.\n- <b>Water erosion</b>: Think about heavy rains and water flow patterns.\n- <b>Human activity</b>: Reflect on construction, farming, or other human activities.\n- <b>Gully erosion</b>: Notice if there are large channels or gullies forming.\n- <b>Sheet erosion</b>: Consider if there are thin layers of soil being removed.\n- <b>Rill erosion</b>: Think about small channels formed by running water.',
        SEALED_SOILS: '<b>Soil sealing</b> - The process of covering of a soil by buildings, or types of artificial material which may be very slowly permeable to water (e.g., asphalt or concrete). Soil sealing can cause rapid overland flow after precipitation where water cannot soak away leading to potential flooding. A soil is unable to function effectively when sealed.\n<b>Assessment of Soil Sealing</b>\n<b>Explanation</b>: Soil surface sealing occurs when the soil surface becomes impermeable, often due to urbanization or compaction. This can prevent water infiltration and affect soil health.\n<b>How would you describe the state of soil surface sealing in your area?</b>\nA. Minimal sealing (Most soil surfaces are permeable)\nB. Moderate sealing (Some areas are impermeable)\nC. Extensive sealing (Large areas are impermeable)\nD. Very extensive sealing (Most areas are impermeable)\n<b>What do you think is the primary cause of soil surface sealing in your area?</b>\nA. Urbanization (Construction of buildings and roads)\nB. Agricultural practices (Use of heavy machinery)\nC. Industrial activities (Factories and other industrial sites)\nD. Soil compaction (Soil particles pressed together, reducing pore space)\nE. Paving and concreting (Covering soil with impermeable materials)\nF. Natural processes (e.g., crust formation)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Urbanization</b>: Consider the extent of buildings and roads.\n- <b>Agricultural practices</b>: Think about the use of heavy machinery in farming.\n- <b>Industrial activities</b>: Reflect on the presence of factories and industrial sites.\n- <b>Soil compaction</b>: Notice if the soil is hard and compacted.\n- <b>Paving and concreting</b>: Consider the amount of paved or concreted areas.\n- <b>Natural processes</b>: Think about natural crust formation on the soil surface.',
        DEGRADATION: '<b>Soil degradation</b> - Negative process often accelerated by human activities (improper soil use and cultivation practices, soil sealing) that leads to deterioration of soil properties and functions or destruction of soil as a whole, e.g., compaction, erosion, salinisation.\n<b>Soil contamination</b> - The presence of a chemical or substance in the soil in a concentration that may be harmful to human health or the environment. Contamination may have a direct toxic effect on the plants, animals or humans living in, on, or from that soil, or have an indirect toxic effect due to accumulation in the whole trophic chain.\n<b>Salinization</b> - Accumulation of soluble salts (more soluble than gypsum) in the upper soil layers (saline soil = soil containing enough soluble salts to negatively affect most crop plants, commonly 4000 μS m-1).\n<b>Assessment of Soil Degradation</b>\n<b>Explanation</b>: Soil degradation refers to the decline in soil quality due to factors like erosion, contamination, or loss of nutrients. It can affect agricultural productivity and ecosystem health.\n<b>How would you rate the overall status of soil degradation in your area?</b>\nA. Minimal degradation (Soil quality is generally good)\nB. Moderate degradation (Some decline in soil quality)\nC. Severe degradation (Significant decline in soil quality)\nD. Very severe degradation (Extensive decline in soil quality)\n<b>What do you think is the primary cause of soil degradation in your area?</b>\nA. Erosion (Loss of topsoil)\nB. Contamination (e.g., chemicals, pollutants)\nC. Loss of nutrients (Depletion of essential soil nutrients)\nD. Overuse of soil (Intensive farming or other activities)\nE. Deforestation (Removal of trees that protect soil)\nF. Climate change (Long-term changes in weather patterns)\nG. Overgrazing (Excessive grazing by livestock)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Erosion</b>: Consider if there is significant soil loss.\n- <b>Contamination</b>: Think about the presence of chemicals or pollutants.\n- <b>Loss of nutrients</b>: Reflect on the fertility and nutrient content of the soil.\n- <b>Overuse of soil</b>: Consider intensive farming or other activities.\n- <b>Deforestation</b>: Think about the removal of trees and vegetation.\n- <b>Climate change</b>: Reflect on long-term changes in weather patterns.\n- <b>Overgrazing</b>: Consider if livestock grazing is prevalent and intense.',
        LOSS_OF_ORGANIC_MATTER: '<b>Loss of Soil Organic Matter</b> - Decline of organic matter content in one or more soil layers when the annual loss of organic matter (e.g., due to oxidation or erosion) is insufficiently compensated for by the annual gain of organic matter, resulting from crop residues, composts and manures.\n<b>Assessment of Loss of Soil Organic Matter</b>\n<b>Explanation</b>: Soil organic matter is crucial for soil fertility and structure. Loss of organic matter can result from poor land management practices or natural processes.\n<b>How would you rate the loss of soil organic matter in your area?</b>\nA. Low (Minimal loss)\nB. Moderate (Noticeable loss)\nC. High (Significant loss)\nD. Very high (Extensive loss)\n<b>What do you think is the primary cause of loss of soil organic matter in your area?</b>\nA. Intensive agriculture (Frequent cropping and tillage)\nB. Deforestation (Removal of trees and vegetation)\nC. Overgrazing (Excessive grazing by livestock)\nD. Soil erosion (Loss of topsoil containing organic matter)\nE. Climate change (Changes in temperature and precipitation)\nF. Poor land management (Inadequate soil conservation practices)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Intensive agriculture</b>: Consider frequent cropping and tillage practices.\n- <b>Deforestation</b>: Think about the removal of trees and vegetation.\n- <b>Overgrazing</b>: Reflect on the intensity of livestock grazing.\n- <b>Soil erosion</b>: Consider if there is significant soil loss.\n- <b>Climate change</b>: Think about changes in temperature and precipitation.\n- <b>Poor land management</b>: Reflect on soil conservation practices.',
        PH: "<b>Acidification</b> - The process by which the concentration of hydrogen ions in the soil gradually increases, caused by the removal of slightly alkaline ions with the crop, leaching and the application of acidifying types of N fertiliser. This process is accelerated or insufficiently compensated by natural soil components, including parent material.\n<b>Soil pH</b>\n<b>Assessment of Soil pH</b>\n<b>Explanation</b>: Soil pH is a measure of the acidity or alkalinity of the soil. It can significantly affect plant growth and soil health. Certain plants, known as indicator plants, can help determine the soil pH based on their presence and health.\n<b>How would you describe the pH level of your soil based on the plants growing in it?</b>\nA. Acidic (e.g., presence of blueberries, azaleas)\nB. Slightly acidic (e.g., presence of ferns, rhododendrons)\nC. Neutral (e.g., presence of clover, dandelions)\nD. Slightly alkaline (e.g., presence of lavender, yarrow)\nE. Alkaline (e.g., presence of sagebrush, saltbush)\nF. Not sure (Unsure about the types of plants or their indication)\n<b>Comments for Answers</b>:\n- <b>Acidic</b>: If you notice plants like blueberries or azaleas thriving, your soil is likely acidic.\n- <b>Slightly acidic</b>: Plants such as ferns and rhododendrons indicate slightly acidic soil.\n- <b>Neutral</b>: Clover and dandelions are common in neutral pH soils.\n- <b>Slightly alkaline</b>: Lavender and yarrow are indicators of slightly alkaline soil.\n- <b>Alkaline</b>: Sagebrush and saltbush thrive in alkaline conditions.\n- <b>Not sure</b>: If you're unsure about the plants or their indications, this option allows you to express that uncertainty.",
        BIODIVERSITY: "<b>Biodiversity</b> - The variability among living organisms from all sources, including terrestrial, marine, and other aquatic ecosystems as well as the ecological complexes of which they are a part. This includes diversity within species, between species, and of ecosystems.\n<b>Assessment of Biodiversity of Soil and the Local Environment</b>\n<b>Explanation</b>: Biodiversity in soil refers to the variety of organisms living in the soil, including bacteria, fungi, insects, and plants. High biodiversity is a sign of a healthy ecosystem, contributing to soil fertility and stability.\n<b>How would you rate the biodiversity of soil organisms in your area?</b>\nA. Low (Few different species)\nB. Moderate (Some variety of species)\nC. High (Many different species)\nD. Very high (Abundant variety of species)\nE. Not sure (Unsure about the variety of soil organisms)\n<b>What do you think is the primary factor affecting soil biodiversity in your area?</b>\nA. Agricultural practices (Use of pesticides, monoculture)\nB. Urbanization (Loss of natural habitats)\nC. Pollution (Contaminants affecting soil life)\nD. Climate change (Changes in temperature and precipitation)\nE. Deforestation (Loss of trees and vegetation)\nF. Natural soil conditions (Inherent soil properties)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Low</b>: If you observe few different species, biodiversity is likely low.\n- <b>Moderate</b>: Some variety of species indicates moderate biodiversity.\n- <b>High</b>: Many different species suggest high biodiversity.\n- <b>Very high</b>: An abundant variety of species indicates very high biodiversity.\n- <b>Not sure</b>: If you're unsure about the variety of soil organisms, this option allows you to express that uncertainty.\n- <b>Agricultural practices</b>: Consider the impact of farming methods, such as pesticide use and monoculture.\n- <b>Urbanization</b>: Reflect on the extent of urban development and habitat loss.\n- <b>Pollution</b>: Think about the presence of contaminants affecting soil life.\n- <b>Climate change</b>: Consider changes in temperature and precipitation patterns.\n- <b>Deforestation</b>: Reflect on the removal of trees and its impact on biodiversity.\n- <b>Natural soil conditions</b>: Think about the inherent properties of the soil that might affect biodiversity."
    },
    categoryInformationTooltip: {
        DRY_SOILS: '<b>Desertification</b> - The process in which relatively dry land becomes increasingly arid.',
        WET_SOILS: '<b>Assessment of Soil Waterlogging</b> - Soil waterlogging occurs when excess water saturates the soil.',
        EROSION: '<b>Soil erosion</b> - Erosion is the removal of land or soil through one or more processes.',
        SEALED_SOILS: '<b>Soil sealing</b> - The process of covering of a soil by buildings, or types of artificial material.',
        DEGRADATION: '<b>Soil degradation</b> - Negative process often accelerated by human activities (improper soil use and cultivation practices, soil sealing).',
        LOSS_OF_ORGANIC_MATTER: '<b>Loss of Soil Organic Matter</b> - Decline of organic matter content in one or more soil layers.',
        PH: '<b>Acidification</b> - The process by which the concentration of hydrogen ions in the soil gradually increases.',
        BIODIVERSITY: '<b>Biodiversity</b> - The variability among living organisms from all sources.'
    },
    pointStatus: {
        status: 'Status',
        PENDING: 'Pending verification',
        ACCEPTED: 'Accepted',
        REJECTED: 'Rejected'
    },
    login: 'Prihlásenie',
    logout: 'Odhlásenie',
    register: 'Registrácia',
    profile: 'Profil',
    filters: 'Filtre',
    other: 'Other',
    filtersDescription: 'Vybere kategórie bodov, ktoré majú byť zobrazené na mape.',
    close: 'Zatvoriť',
    cancel: 'Zrušiť',
    back: 'Späť',
    next: 'Ďalšie',
    continue: 'Pokračovať',
    skip: 'Vynechať',
    addPoint: 'Pridať bod',
    clear: 'Vymazať',
    remove: 'Odstrániť',
    apply: 'Použiť',
    categories: 'Kategórie',
    pressToAddPoint: 'Stlačte a podržte pre pridanie správy.',
    addPointHere: 'Pridať bod v mojej lokalite',
    seeMore: 'Pozri viac',
    notAuthenticatedModal: {
        title: 'Správu môžu pridať len prihlásení používatelia',
        message: 'Ak chcete pokračovať, prihláste sa'
    },
    addPointForm: {
        chooseCategory: {
            title: 'Vyberte kategóriu',
            description: 'Vyplňte krátky dotazník a pridajte bod na mapu'
        },
        affectedArea: {
            title: 'Postihnutá oblasť',
            placeholder: 'Vyberte rozsah oblasti'
        },
        addPhoto: {
            title: 'Pridajte fotografiu',
            takePhoto: 'Nasnímajte fotografiu',
            or: 'alebo',
            chooseFromGallery: 'Vyberte z galérie'
        },
        description: {
            title: 'Opíšte miesto',
            placeName: {
                label: 'Názov miesta',
                placeholder: 'napr. Štátny park Kościuszko'
            },
            problemDescription: {
                label: 'Opis problému',
                placeholder: ''
            }
        },
        solution: {
            title: 'Riešenie problému'
        },
        successMessage: 'Výborne! Správa bola pridaná k mape.',
        errorMessage: 'Oops! Niečo sa pokazilo. Skúste to znova.'
    },
    pointDetails: {
        title: 'Detaily bodu',
        category: 'Kategória',
        placeName: 'Názov miesta',
        affectedArea: 'Problematická oblasť',
        problemDescription: 'Opis problému',
        problemSolution: 'Riešenie problému',
        reportDate: 'Dátum nahlásenia',
        photo: 'Fotografia'
    },
    userProfile: {
        title: 'Profil používateľa',
        appLanguage: 'Jazyk aplikácie',
        manageAccount: 'Správa účtu',
        logout: 'Odhlásenie',
        removeAccount: 'Odstrániť účet',
        pts: 'PTS',
        deleteAccountPopup: {
            button: 'Remove account',
            cancel: 'Cancel',
            firstConfirmation: {
                title: 'Remove account',
                description: 'Are you sure you want to remove your account? All your data will be lost and you will not be able to restore it.'
            },
            secondConfirmation: {
                title: 'Are you sure you want to remove your account?',
                description: 'THIS ACTION CANNOT BE UNDONE.'
            }
        }
    },
    settings: {
        title: 'Nastavenia',
        appLanguage: 'Jazyk aplikácie',
        appVersion: 'Verzia aplikácie',
        howToUse: 'How to use the app',
        aboutSoils: 'About soil categories',
        privacyPolicy: 'Privacy policy'
    },
    pointsList: {
        title: 'Pridané body',
        noPoints: 'Neboli pridané žiadne body.',
        unauthorized: 'Prihláste sa, ak chcete vidieť pridané body.'
    },
    noPermissions: {
        library: {
            title: 'Nemáme prístup k vašim fotografiám.',
            description: 'Povoľte v nastaveniach prístup k vašim fotografiám.'
        },
        camera: {
            title: 'Nemáme prístup k vášmu fotoaparátu.',
            description: 'Povoľte v nastaveniach prístup k vášmu fotoaparátu.'
        },
        cancel: 'Zrušiť',
        openSettings: 'Otvorte nastavenia'
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
        download: 'Download'
    },
    userManagement: {
        title: 'Users Management',
        searchUser: 'Search user',
        deleteUser: 'Delete user',
        setPermissions: 'Set permissions',
        confirmDeleteMessage: 'Are you sure you want to delete this user account along with all their entries?',
        cancel: 'Cancel',
        confirm: 'Delete account',
        noUsers: 'No users to display'
    },
    onboarding: {
        goToTheAppButton: 'Prejdite do aplikácie',
        welcome: {
            title: 'Vitajte v aplikácii GeoSurveyMap!',
            description: 'Nástroj určený na nahlasovanie pôd v nezdravom stave.'
        },
        instruction: {
            title: 'Ako používať náš nástroj?',
            step1: {
                title: 'Vyhľadajte pôdu, ktorá pôsobí ako nezdravá.',
                description: 'Môžete použiť vzorky poskytnuté našim tímom, aby ste zistili, s akým typom pôdy máte dočinenia.'
            },
            step2: {
                title: 'Pridajte správu na požadované miesto.',
                description: 'Uveďte všetky informácie zozbierané pre správu, ktorú pomôžu výskumíkom pri riešení problému.'
            },
            step3: {
                title: 'Počkajte na potvrdenie',
                description: 'Každú správu musí overiť náš tím, aby sme predišli škodlivému obsahu.'
            }
        },
        aboutSoils: {
            title: 'O pôdach',
            description: 'Kliknite na kategóriu pôdy pre bližšie informácie. Tieto sú k dispozícii aj v nastaveniach aplikácie.'
        }
    },
    problemCause: {
        lackOfRainfall: 'Nedostatok zrážok',
        highTemperatures: 'Vysoké teploty',
        poorSoilStructure: 'Zlá štruktúra pôdy',
        overuseOfWaterResources: 'Nadmierne využívanie vodných zdrojov',
        deforestation: 'Odlesňovanie',
        climateChange: 'Zmena klímy',
        overgrazing: 'Nadmierne spásanie',
        other: 'Iné',
        heavyRainfall: 'Silné dažde',
        poorDrainageSystems: 'Zlé odvodňovacie systémy',
        highWaterTable: 'Vysoká hladina podzemnej vody',
        overIrrigation: 'Nadmierne zavlažovanie',
        soilCompaction: 'Zhutnenie pôdy',
        urbanization: 'Urbanizácia',
        flooding: 'Záplavy',
        windErosion: 'Veterná erózia',
        waterErosion: 'Vodná erózia',
        humanActivity: 'Ľudská činnosť',
        gullyErosion: 'Rýhová erózia',
        sheetErosion: 'Plošná erózia',
        rillErosion: 'Rýhová erózia',
        agriculturalPractices: 'Poľnohospodárske praktiky',
        industrialActivities: 'Priemyselné činnosti',
        pavingAndConcreting: 'Spevnenie a betonáž',
        naturalProcesses: 'Prírodné procesy',
        erosion: 'Erózia',
        contamination: 'Kontaminácia',
        lossOfNutrients: 'Strata živín',
        overuseOfSoil: 'Nadmierne využívanie pôdy',
        intensiveAgriculture: 'Intenzívne poľnohospodárstvo',
        soilErosion: 'Pôdna erózia',
        poorLandManagement: 'Zlé hospodárenie s pôdou',
        acidic: 'Kyslé',
        slightlyAcidic: 'Mierne kyslé',
        neutral: 'Neutrálne',
        slightlyAlkaline: 'Mierne alkalické',
        alkaline: 'Alkalické',
        notSure: 'Nie som si istý',
        pollution: 'Znečistenie',
        naturalSoilConditions: 'Prírodné podmienky pôdy'
    },
    codeRepository: 'Úložisko kódu',
    allRightsReserved: 'Všetky práva vyhradené',
    shapeTheFuture: 'Formujte budúcnosť vzdelávania o pôde.',
    togetherWeMap: 'Spoločne mapujeme, spájame a vzdelávame, aby sme podporili povedomie o pôde, zapojenie a udržateľné praktiky.',
    exploreTheMap: 'Preskúmajte mapu',
    learnMore: 'Zistite viac',
    aboutTheProject: 'O projekte',
    learnMoreAboutTheProject: 'Zistite viac o projekte',
    mappingSoilDegradation: 'Mapovanie degradácie pôdy na dosah ruky',
    mappingSoilDegradationDescription1: 'LOESS Soil Map je platforma, ktorá spája komunitu v snahe chrániť pôdu. Pomocou interaktívnych máp a nástrojov na geolokáciu môžu používatelia spoločne vytvárať databázu pridávaním informácií o stave pôdy vo svojich miestnych oblastiach.',
    mappingSoilDegradationDescription2: 'Zhromaždené údaje podporujú výskumníkov a tvorcov politík pri prijímaní informovaných environmentálnych rozhodnutí. S jednoduchým dotazníkom a intuitívnym rozhraním môže každý prispieť k hlbšiemu porozumeniu procesov degradácie pôdy a efektívne pomôcť pri jej ochrane.',
    sharedKnowledgeBase: 'Zdieľaná databáza znalostí pre lepšiu budúcnosť',
    sharedKnowledgeBaseDescription1: 'Projekt LOESS Soil Map, realizovaný v rámci medzinárodného výskumného programu LOESS, zhromažďuje údaje o erózii pôdy, pH a vlhkosti, čo umožňuje globálnu analýzu. Používatelia tak získavajú prístup k komplexným informáciám, ktoré môžu uplatniť - od vedeckého výskumu až po ekologické iniciatívy.',
    sharedKnowledgeBaseDescription2: 'Vytváranie súdržného dátového ekosystému je naším kľúčom k spoločným riešeniam. Prostredníctvom zapojenia komunity a moderných technológií sa LOESS Soil Map stáva centrálnym bodom na výmenu informácií, podporuje ochranu životného prostredia a zabezpečuje záujmy budúcich generácií.',
    howToUseTheApp: 'Ako používať aplikáciu',
    watchVideoDescription: 'Pozrite si krátke video o tom, ako používať nástroj na mapovanie',
    appTutorial: 'Tutoriál aplikácie',
    dragMarkerMessage: 'Pretiahnite dočasný marker na požadované miesto',
    locationError: 'Nepodarilo sa nájsť vašu polohu, skúste obnoviť stránku.',
    noPointsToApprove: 'Žiadne body na schválenie',
    noPointsFound: 'Nenašli sa žiadne body',
    dateRange: 'Rozsah dátumov',
    selectCategoryPlaceholder: 'Vyberte kategóriu',
    getDataReport: 'Stiahnuť dátovú správu',
    surveyStatusUpdated: 'Stav prieskumu bol aktualizovaný',
    oopsSomethingWentWrong: 'Ups! Niečo sa pokazilo. Skúste to neskôr znova.',
    downloadReportFailed: 'Nepodarilo sa stiahnuť správu.',
    save: 'Uložiť',
    managePermissions: 'Spravovať oprávnenia',
    banUserTooltip: 'Zakázať používateľa. Toto im zabráni pridávať body na mapu.',
    usersCount: 'Počet používateľov:',
    userPermissionsUpdated: 'Oprávnenia používateľa boli aktualizované.',
    userStatusUpdated: 'Stav používateľa bol aktualizovaný.',
    pickDate: 'Vyberte dátum'
};
