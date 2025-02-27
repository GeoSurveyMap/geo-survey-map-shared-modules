"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ca = void 0;
exports.ca = {
    category: {
        DRY_SOILS: 'Sòl sec',
        WET_SOILS: 'Sòl humit',
        EROSION: 'Erosió',
        SEALED_SOILS: 'Sòl impermeabilitzat',
        DEGRADATION: 'Degradació del sòl',
        LOSS_OF_ORGANIC_MATTER: 'Pèrdua de matèria orgànica',
        PH: 'pH',
        BIODIVERSITY: 'Biodiversitat'
    },
    categoryInformation: {
        DRY_SOILS: '<b>Desertificació</b>: procés pel qual terra relativament seca es torna cada cop més àrida, sol perdre la massa d’aigua, així com la vegetació i la vida salvatge, per causa directa del canvi climàtic o indirecta per la degradació del sòl com a conseqüència d’una mala gestió.\n<b>Avaluació de la sequedat del sòl</b>\n<b>Explicació</b>: la sequedat del sòl pot derivar de diversos factors, com ara una pluja insuficient, temperatures altes o una mala estructura del sòl. Comprendre la causa principal pot ajudar a abordar el problema de manera eficaç.\n<b>Quina creus que és la causa principal de la sequedat del sòl a la teva zona?</b>\nA. Falta de pluja (períodes de pluja escassa o nul·la)\nB. Temperatures elevades (clima calorós que provoca evaporació)\nC. Estructura del sòl deficient (sòl que no reté bé l’aigua)\nD. Ús excessiu dels recursos hídrics (ús excessiu d’aigua per a l’agricultura o altres finalitats)\nE. Desforestació (eliminació d’arbres que ajuden a retenir la humitat)\nF. Canvi climàtic (canvis a llarg termini en els patrons meteorològics)\nG. Pasturatge excessiu (pasturatge excessiu del bestiar)\nH. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Falta de pluja</b>: penseu si hi ha hagut períodes de sequera prolongats.\n- <b>Temperatures elevades</b>: penseu en les recents onades de calor o en un temps inusualment calorós.\n- <b>Estructura del sòl deficient</b>: observeu si el sòl és sorrenc o té poca retenció d’aigua.\n- <b>Ús excessiu dels recursos hídrics</b>: reflexioneu sobre l’ús de l’aigua agrícola o industrial local.\n- <b>Desforestació</b>: tingueu en compte si s’hi han talat molts arbres a la zona.\n- <b>Canvi climàtic</b>: penseu en els canvis a llarg termini en els patrons meteorològics.\n- <b>Pasturatge excessiu</b>: valoreu si el pasturatge del bestiar és predominant i intens.',
        WET_SOILS: '<b>Avaluació de l’embassament del sòl</b>\n<b>Explicació</b>: l’embassament del sòl es produeix quan l’excés d’aigua satura el sòl, sovint a causa de pluges abundants, drenatge deficient o nivells freàtics alts. Identificar-ne la causa pot ajudar a gestionar els nivells d’aigua.\n<b>Quina creus que és la principal causa de l’embassament del sòl a la teva zona?</b>\nA. Precipitacions abundants (pluja freqüent o intensa)\nB. Sistemes de drenatge deficients (infraestructura de drenatge inadequada)\nC. Nivell freàtic alt (nivell de les aigües subterrànies prop de la superfície)\nD. Reg excessiu (reg excessiu de conreus o jardins)\nE. Compactació del sòl (partícules del sòl pressionades juntes, reduint l’espai dels porus)\nF. Urbanització (augment de superfícies impermeables com carreteres i edificis)\nG. Inundacions (desbordament de l’aigua de rius o llacs)\nH. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Precipitacions abundants</b>: penseu si hi ha hagut pluges freqüents o intenses.\n- <b>Sistemes de drenatge deficients</b>: penseu en l’eficàcia de la infraestructura de drenatge local.\n- <b>Nivell freàtic alt</b>: observeu si els nivells de les aigües subterrànies estan a prop de la superfície.\n- <b>Reg excessiu</b>: reflexioneu sobre les pràctiques agrícoles locals i l’ús de l’aigua.\n- <b>Compactació del sòl</b>: tingueu en compte si el sòl és dur i compactat.\n- <b>Urbanització</b>: penseu en l’extensió de les superfícies impermeables a la zona.\n- <b>Inundacions</b>: penseu si hi ha hagut inundacions recents.',
        EROSION: '<b>Erosió del sòl</b>: l’erosió és l’eliminació de terra o sòl mitjançant un o més processos. Les principals causes de l’erosió inclouen les accions de l’aigua (regalls, entre regalls, barrancs, desglaç de neu i erosió de ribes de rius i llacs), vent (dessecació i impacte del vent), translocació (conreu, anivellació del terreny, recol·lecció d’arrels, animals cavadors i que compacten el sòl) i geològiques (erosió subterrània interna per aigües subterrànies, erosions costaneres i despreniments). L’erosió també es pot veure augmentada per una mala gestió de la terra, com ara el pasturatge excessiu, la desforestació o l’ús inadequat de la mecanització (per exemple, llaurar el vessant d’un turó).\n<b>Avaluació de l’erosió del sòl</b>\n<b>Explicació</b>: l’erosió del sòl és l’eliminació de la capa superficial del sòl pel vent, l’aigua o l’activitat humana. Pot provocar la pèrdua de terres fèrtils i altres problemes ambientals.\n<b>Com valoraries la intensitat de l’erosió del sòl a la teva zona?</b>\nA. Baixa (pèrdua de sòl mínima)\nB. Moderada (pèrdua de sòl notable)\nC. Alta (pèrdua greu de sòl)\nD. Molt alta (pèrdua extensiva de sòl)\n<b>Quines formes d’erosió del sòl són més comunes a la vostra zona?</b>\nA. Erosió eòlica (el vent s’emporta el sòl)\nB. Erosió hídrica (la pluja o els rius arrosseguen el sòl)\nC. Activitat humana (p. ex., construcció, agricultura)\nD. Erosió en xaragalls (formació de grans canals o barrancs)\nE. Erosió laminar (capes fines de terra eliminades sobre una gran àrea)\nF. Erosió en reguerons (petits canals formats per aigua corrent)\nG. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Erosió eòlica</b>: penseu si hi ha vents forts i terra solta.\n- <b>Erosió hídrica</b>: penseu en les pluges intenses i els patrons de flux d’aigua.\n- <b>Activitat humana</b>: reflexioneu sobre la construcció, l’agricultura o altres activitats humanes.\n- <b>Erosió en xaragalls</b>: observeu si es formen grans canals o barrancs.\n- <b>Erosió laminar</b>: observeu si hi ha capes fines de terra que s’estan eliminant.\n- <b>Erosió en reguerons</b>: penseu si l’aigua corrent forma petits canals.',
        SEALED_SOILS: "<b>Segellat del sòl</b>: el procés de recobriment d’un sòl per edificis o tipus de material artificial que poden ser molt lentament permeables a l’aigua (per exemple, asfalt o formigó). El segellat del sòl pot provocar un flux ràpid de l'aigua per terra després d’una precipitació, amb la qual cosa l’aigua no pot absorbir-se i pot causar una inundació. Un sòl no pot funcionar eficaçment quan està segellat.\n<b>Avaluació del segellat del sòl</b>\n<b>Explicació</b>: el segellat de la superfície del sòl es produeix quan la superfície del sòl es torna impermeable, sovint a causa de la urbanització o la compactació. Això pot evitar la infiltració d’aigua i afectar la salut del sòl.\n<b>Com descriuries l’estat del segellat de la superfície del sòl a la teva zona?</b>\nA. Segellat mínim (la majoria de les superfícies del sòl són permeables)\nB. Segellat moderat (algunes zones són impermeables)\nC. Segellat extensiu (àrees grans són impermeables)\nD. Segellat molt extens (la majoria de les zones són impermeables)\n<b>Quina creus que és la causa principal del segellat de la superfície del sòl a la teva zona?</b>\nA. Urbanització (construcció d’edificis i carreteres)\nB. Pràctiques agrícoles (ús de maquinària pesant)\nC. Activitats industrials (fàbriques i altres emplaçaments industrials)\nD. Compactació del sòl (partícules del sòl pressionades juntes, reduint l’espai dels porus)\nE. Pavimentació i formigonat (cobriment del sòl amb materials impermeables)\nF. Processos naturals (p. ex., formació d’escorça)\nG. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Urbanització</b>: penseu en l’extensió dels edificis i carreteres.\n- <b>Pràctiques agrícoles</b>: penseu en l’ús de maquinària pesant a l’agricultura.\n- <b>Activitats industrials</b>: reflexioneu sobre la presència de fàbriques i llocs industrials.\n- <b>Compactació del sòl</b>: observeu si el sòl és dur i compactat.\n- <b>Pavimentació i formigonat</b>: tingueu en compte la quantitat de zones pavimentades o formigonades.\n- <b>Processos naturals</b>: penseu en la formació d’escorça natural a la superfície del sòl.",
        DEGRADATION: '<b>Degradació del sòl</b>: procés negatiu sovint accelerat per activitats humanes (ús inadequat del sòl i pràctiques de cultiu, compactació del sòl) que condueix al deteriorament de les propietats i funcions del sòl o a la destrucció del sòl en conjunt, per exemple, compactació, erosió, salinització.\n<b>Contaminació del sòl</b>: la presència d’una substància química o d’un altre tipus al sòl en una concentració que pugui ser nociva per a la salut humana o el medi ambient. La contaminació pot tenir un efecte tòxic directe sobre les plantes, animals o humans que viuen en aquest sòl, sobre seu o d’ell o tenir un efecte tòxic indirecte a causa de l’acumulació al llarg de tota la cadena tròfica.\n<b>Salinització</b>: acumulació de sals solubles (més solubles que el guix) a les capes superiors del sòl (sòl salí = sòl que conté prou sals solubles per afectar negativament la majoria de les plantes de cultiu, habitualment 4.000 μS m–1).\n<b>Avaluació de la degradació del sòl</b>\n<b>Explicació</b>: la degradació del sòl es refereix a la disminució de la qualitat del sòl a causa de factors com l’erosió, la contaminació o la pèrdua de nutrients. Pot afectar la productivitat agrícola i la salut dels ecosistemes.\n<b>Com valoraries l’estat general de la degradació del sòl a la teva zona?</b>\nA. Degradació mínima (la qualitat del sòl és bona en general)\nB. Degradació moderada (alguna disminució de la qualitat del sòl)\nC. Degradació severa (disminució significativa de la qualitat del sòl)\nD. Degradació molt severa (disminució extensiva de la qualitat del sòl)\n<b>Quina creus que és la causa principal de la degradació del sòl a la teva zona?</b>\nA. Erosió (pèrdua de la capa llaurable)\nB. Contaminació (p. ex., productes químics, contaminants)\nC. Pèrdua de nutrients (esgotament dels nutrients essencials del sòl)\nD. Ús excessiu del sòl (agricultura intensiva o altres activitats)\nE. Desforestació (retirada d’arbres que protegeixen el sòl)\nF. Canvi climàtic (canvis a llarg termini en els patrons meteorològics)\nG. Pasturatge excessiu (pasturatge excessiu del bestiar)\nH. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Erosió</b>: valoreu si hi ha una pèrdua important de sòl.\n- <b>Contaminació</b>: penseu en la presència de productes químics o contaminants.\n- <b>Pèrdua de nutrients</b>: reflexioneu sobre la fertilitat i el contingut de nutrients del sòl.\n- <b>Ús excessiu del sòl</b>: valoreu l’agricultura intensiva o altres activitats.\n- <b>Desforestació</b>: penseu en la retirada d’arbres i vegetació.\n- <b>Canvi climàtic</b>: reflexioneu sobre els canvis a llarg termini en els patrons meteorològics.\n- <b>Pasturatge excessiu</b>: valoreu si el pasturatge del bestiar és predominant i intens.',
        LOSS_OF_ORGANIC_MATTER: '<b>Pèrdua de matèria orgànica del sòl</b>: disminució del contingut de matèria orgànica, en particular a la capa llaurable, quan la pèrdua anual de matèria orgànica (p. ex., a causa de l’oxidació o l’erosió) no es compensa prou amb el guany anual de matèria orgànica que resulta dels residus de cultius, composts i fems.\n<b>Avaluació de la pèrdua de matèria orgànica del sòl</b>\n<b>Explicació</b>: la matèria orgànica del sòl és crucial per a la fertilitat i l’estructura del sòl. La pèrdua de matèria orgànica pot derivar de pràctiques deficients de gestió del territori o de processos naturals.\n<b>Com valoraries la pèrdua de matèria orgànica del sòl a la teva zona?</b>\nA. Baixa (pèrdua mínima)\nB. Moderada (pèrdua notable)\nC. Alta (pèrdua important)\nD. Molt alta (pèrdua extensiva)\n<b>Quina creus que és la causa principal de la pèrdua de matèria orgànica del sòl a la teva zona?</b>\nA. Agricultura intensiva (conreus i llaurades freqüents)\nB. Desforestació (retirada d’arbres i vegetació)\nC. Pasturatge excessiu (pasturatge excessiu del bestiar)\nD. Erosió del sòl (pèrdua de capa llaurable que conté matèria orgànica)\nE. Canvi climàtic (canvis de temperatura i precipitació)\nF. Gestió deficient del sòl (pràctiques inadequades de conservació del sòl)\nG. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Agricultura intensiva</b>: valoreu si les pràctiques de conreu i llaurada són freqüents.\n- <b>Desforestació</b>: penseu en la retirada d’arbres i vegetació.\n- <b>Pasturatge excessiu</b>: reflexioneu sobre la intensitat del pasturatge del bestiar.\n- <b>Erosió del sòl</b>: valoreu si hi ha una pèrdua important de sòl.\n- <b>Canvi climàtic</b>: penseu en els canvis de temperatura i de precipitació.\n- <b>Mala gestió del territori</b>: reflexioneu sobre les pràctiques de conservació del sòl.',
        PH: "<b>Acidificació</b>: el procés pel qual la concentració d’ions d’hidrogen al sòl augmenta gradualment, provocat per l’eliminació d’ions lleugerament alcalins amb el cultiu, la lixiviació i l’aplicació de tipus acidificants de fertilitzants nitrogenats. Aquest procés és accelerat o insuficientment compensat per components naturals del sòl, inclòs el material original.\n<b>pH del sòl</b>\n<b>Avaluació del pH del sòl</b>\n<b>Explicació</b>: El pH del sòl és una mesura de l’acidesa o alcalinitat del sòl. Pot afectar significativament el creixement de les plantes i la salut del sòl. Algunes plantes, conegudes com a plantes indicadores, poden ajudar a determinar el pH del sòl en funció de la seva presència i salut.\n<b>Com descriuries el nivell de pH del teu sòl en funció de les plantes que hi creixen?</b>\nA. Àcid (p. ex., presència de nabius, azalees)\nB. Lleugerament àcid (p. ex., presència de falgueres, rododendres)\nC. Neutre (p. ex., presència de trèvol, dent de lleó)\nD. Lleugerament alcalí (p. ex., presència d’espígol, milfulles)\nE. Alcalí (p. ex., presència d'artemísia, salat blanc)\nF. No n’estic segur (no estic segur sobre els tipus de plantes o la seva indicació)\n<b>Comentaris per a les respostes</b>:\n- <b>Àcid</b>: si observeu que hi creixen plantes com els nabius o les azalees, és probable que el vostre sòl sigui àcid.\n- <b>Lleugerament àcid</b>: les plantes com les falgueres i els rododendres indiquen un sòl lleugerament àcid.\n- <b>Neutre</b>: el trèvol i la dent de lleó són comuns en sòls de pH neutre.\n- <b>Lleugerament alcalí</b>: la lavanda i la milfulles són indicadores de sòl lleugerament alcalí.\n- <b>Alcalí</b>: l’artemísia i el salat blanc prosperen en condicions alcalines.\n- <b>No n’estic segur</b>: si no esteu segur de les plantes o de les seves indicacions, aquesta opció us permet expressar aquesta incertesa.",
        BIODIVERSITY: "<b>Biodiversitat</b>: la variabilitat entre els organismes vius de totes les fonts, inclosos els ecosistemes terrestres, marins i altres aquàtics, així com els complexos ecològics dels quals formen part. Això inclou la diversitat dins de les espècies, entre espècies i dels ecosistemes.\n<b>Avaluació de la biodiversitat del sòl i del medi local</b>\n<b>Explicació</b>: la biodiversitat del sòl es refereix a la varietat d’organismes que viuen al sòl, inclosos bacteris, fongs, insectes i plantes. L’elevada biodiversitat és senyal d’un ecosistema sa, ja que contribueix a la fertilitat i l’estabilitat del sòl.\n<b>Com valoraries la biodiversitat dels organismes del sòl a la teva zona?</b>\nA. Baixa (poques espècies diferents)\nB. Moderada (alguna varietat d’espècies)\nC. Alta (moltes espècies diferents)\nD. Molt alta (abundant varietat d’espècies)\nE. No n’estic segur (no estic segur de la varietat d’organismes del sòl)\n<b>Quin creus que és el principal factor que afecta la biodiversitat del sòl a la teva zona?</b>\nA. Pràctiques agrícoles (ús de pesticides, monocultiu)\nB. Urbanització (pèrdua d’hàbitats naturals)\nC. Contaminació (contaminants que afecten la vida del sòl)\nD. Canvi climàtic (canvis de temperatura i precipitació)\nE. Desforestació (pèrdua d’arbres i vegetació)\nF. Condicions naturals del sòl (propietats inherents del sòl)\nG. Altres (especifiqueu quines)\n<b>Comentaris per a les respostes</b>:\n- <b>Baixa</b>: si observeu poques espècies diferents, és probable que la biodiversitat sigui baixa.\n- <b>Moderada</b>: la presència d'algunes espècies diferents indica una biodiversitat moderada.\n- <b>Alta</b>: moltes espècies diferents suggereixen una gran biodiversitat.\n- <b>Molt alta</b>: una varietat abundant d’espècies indica una biodiversitat molt elevada.\n- <b>No n’estic segur</b>: si no esteu segur de la varietat d’organismes del sòl, aquesta opció us permet expressar aquesta incertesa.\n- <b>Pràctiques agrícoles</b>: tingueu en compte l’impacte dels mètodes de cultiu, com ara l’ús de pesticides i el monocultiu.\n- <b>Urbanització</b>: reflexioneu sobre l’abast del desenvolupament urbà i la pèrdua d’hàbitat.\n- <b>Contaminació</b>: penseu en la presència de contaminants que afecten la vida del sòl.\n- <b>Canvi climàtic</b>: penseu en els canvis de temperatura i els patrons de precipitació.\n- <b>Desforestació</b>: reflexioneu sobre la tala d’arbres i el seu impacte en la biodiversitat.\n- <b>Condicions naturals del sòl</b>: penseu en les propietats inherents del sòl que poden afectar la biodiversitat."
    },
    categoryInformationTooltip: {
        DRY_SOILS: '<b>Desertificació</b> - El procés en què la terra relativament seca es torna cada cop més àrida.',
        WET_SOILS: '<b>Avaluació de la saturació del sòl</b> - La saturació del sòl es produeix quan l’excés d’aigua impregna el sòl.',
        EROSION: '<b>Erosió del sòl</b> - L’erosió és l’eliminació del sòl o de la terra mitjançant un o més processos.',
        SEALED_SOILS: '<b>Impermeabilització del sòl</b> - El procés de cobertura del sòl per edificis o altres tipus de materials artificials.',
        DEGRADATION: '<b>Degradació del sòl</b> - Procés negatiu sovint accelerat per activitats humanes (ús inadequat del sòl i pràctiques de cultiu, impermeabilització del sòl).',
        LOSS_OF_ORGANIC_MATTER: '<b>Pèrdua de matèria orgànica</b> - Disminució del contingut de matèria orgànica en una o més capes del sòl.',
        PH: '<b>Acidificació</b> - El procés pel qual la concentració d’ions d’hidrogen al sòl augmenta gradualment.',
        BIODIVERSITY: '<b>Biodiversitat</b> - La variabilitat entre els organismes vius de totes les fonts.'
    },
    pointStatus: {
        status: 'Estat',
        PENDING: 'Pendent de verificació',
        ACCEPTED: 'Acceptat',
        REJECTED: 'Rebutjat'
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
        message: 'Inicieu la sessió per continuar'
    },
    addPointForm: {
        chooseCategory: {
            title: 'Seleccioneu una categoria',
            description: 'Ompliu un breu qüestionari i afegiu un punt al mapa'
        },
        affectedArea: {
            title: 'Zona afectada',
            placeholder: 'Seleccioneu el radi de la zona'
        },
        addPhoto: {
            title: 'Afegir una foto',
            takePhoto: 'Feu una foto',
            or: 'o',
            chooseFromGallery: 'Seleccioneu-la de la galeria'
        },
        description: {
            title: 'Descriviu el lloc',
            placeName: {
                label: 'Nom del lloc',
                placeholder: 'p. ex., carrer de Figuerola, 17'
            },
            problemDescription: {
                label: 'Descripció del problema',
                placeholder: ''
            }
        },
        solution: {
            title: 'Solució del problema'
        },
        successMessage: "L'informe s'ha afegit al mapa correctament.",
        errorMessage: 'Alguna cosa no ha anat bé. Torneu a intentar-ho.'
    },
    pointDetails: {
        title: 'Detalls del punt',
        category: 'Categoria del problema',
        placeName: 'Nom del lloc',
        affectedArea: 'Radi del problema',
        problemDescription: 'Descripció del problema',
        problemSolution: 'Solució del problema',
        reportDate: "Data de l'informe",
        photo: 'Foto'
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
                description: 'Esteu segur que voleu eliminar el vostre compte? Totes les teves dades es perdran i no podràs restaurar-les.'
            },
            secondConfirmation: {
                title: 'Esteu segur que voleu eliminar el vostre compte?',
                description: 'AQUESTA ACCIÓ NO ES POT DESFER.'
            }
        }
    },
    settings: {
        title: 'Configuració',
        appLanguage: "Idioma de l'aplicació",
        appVersion: "Versió de l'aplicació",
        howToUse: 'How to use the app',
        aboutSoils: 'About soil categories',
        privacyPolicy: 'Privacy policy'
    },
    pointsList: {
        title: 'Punts afegits',
        noPoints: "No s'han afegit punts.",
        unauthorized: 'Inicieu la sessió per veure els punts afegits.'
    },
    noPermissions: {
        library: {
            title: 'No podem accedir a les fotos',
            description: "Modifiqueu la configuració per permetre'ns accedir a les fotos."
        },
        camera: {
            title: 'No podem accedir a la càmera',
            description: "Modifiqueu la configuració per permetre'ns accedir a la càmera."
        },
        cancel: 'Cancel·lar',
        openSettings: 'Obrir la configuració'
    },
    pointManagement: {
        title: 'Punts',
        generateReport: 'Generar informe',
        pointsToApprove: 'Punts per aprovar',
        approvedPoints: 'Punts aprovats',
        pointId: 'ID del punt',
        pointName: 'Nom del punt',
        dateFrom: 'Data des de',
        dateTo: 'Data fins a',
        pointType: 'Tipus de punt',
        approve: 'Aprovar',
        delete: 'Eliminar',
        noData: 'No hi ha dades per mostrar',
        download: 'Descarregar'
    },
    userManagement: {
        title: 'Gestió d’usuaris',
        searchUser: 'Cercar usuari',
        deleteUser: 'Eliminar usuari',
        setPermissions: 'Configurar permisos',
        confirmDeleteMessage: 'Estàs segur que vols eliminar aquest compte d’usuari juntament amb totes les seves entrades?',
        cancel: 'Cancel·lar',
        confirm: 'Eliminar compte',
        noUsers: 'No hi ha usuaris per mostrar'
    },
    onboarding: {
        goToTheAppButton: "Anar a l'aplicació",
        welcome: {
            title: 'Benvingut a GeoSurveyMap!',
            description: 'Una eina dissenyada per informar de sòls en males condicions'
        },
        instruction: {
            title: "Com s'utilitza aquesta aplicació?",
            step1: {
                title: 'Localitzeu sòls en males condicions',
                description: 'Per saber de quin tipus de sòl es tracta, pots comparar-lo amb les mostres del nostre equip.'
            },
            step2: {
                title: 'Afegir un informe al lloc localitzat',
                description: "A l'informe, incloeu tota la informació que heu recollit. Això ajudarà els investigadors a resoldre el problema."
            },
            step3: {
                title: 'Espereu la confirmació',
                description: 'El nostre equip ha de verificar tots els informes per evitar contingut inadequat.'
            }
        },
        aboutSoils: {
            title: 'Informació sobre els sòls',
            description: "Cliqueu a la categoria de sòl per veure'n informació. Això també està disponible a la secció de configuració de l'aplicació."
        }
    },
    problemCause: {
        lackOfRainfall: 'Manca de pluja',
        highTemperatures: 'Temperatures altes',
        poorSoilStructure: 'Estructura del sòl deficient',
        overuseOfWaterResources: 'Ús excessiu dels recursos hídrics',
        deforestation: 'Desforestació',
        climateChange: 'Canvi climàtic',
        overgrazing: 'Sobrepastoreig',
        other: 'Altres',
        heavyRainfall: 'Pluja intensa',
        poorDrainageSystems: 'Sistemes de drenatge deficients',
        highWaterTable: 'Taula freàtica alta',
        overIrrigation: 'Reg excessiu',
        soilCompaction: 'Compactació del sòl',
        urbanization: 'Urbanització',
        flooding: 'Inundacions',
        windErosion: 'Erosió eòlica',
        waterErosion: 'Erosió hídrica',
        humanActivity: 'Activitat humana',
        gullyErosion: 'Erosió en xaragalls',
        sheetErosion: 'Erosió superficial',
        rillErosion: 'Erosió en solcs',
        agriculturalPractices: 'Pràctiques agrícoles',
        industrialActivities: 'Activitats industrials',
        pavingAndConcreting: 'Pavimentació i formigonat',
        naturalProcesses: 'Processos naturals',
        erosion: 'Erosió',
        contamination: 'Contaminació',
        lossOfNutrients: 'Pèrdua de nutrients',
        overuseOfSoil: 'Ús excessiu del sòl',
        intensiveAgriculture: 'Agricultura intensiva',
        soilErosion: 'Erosió del sòl',
        poorLandManagement: 'Gestió deficient de la terra',
        acidic: 'Àcid',
        slightlyAcidic: 'Lleugerament àcid',
        neutral: 'Neutre',
        slightlyAlkaline: 'Lleugerament alcalí',
        alkaline: 'Alcalí',
        notSure: 'No segur',
        pollution: 'Contaminació',
        naturalSoilConditions: 'Condicions naturals del sòl'
    },
    codeRepository: 'Repositori de codi',
    allRightsReserved: 'Tots els drets reservats',
    shapeTheFuture: 'Configura el futur de l’educació sobre el sòl.',
    togetherWeMap: 'Junts, mapegem, connectem i eduquem per fomentar el coneixement del sòl, augmentant la consciència, el compromís i les pràctiques sostenibles.',
    exploreTheMap: 'Explora el mapa',
    learnMore: 'Aprèn més',
    aboutTheProject: 'Sobre el projecte',
    learnMoreAboutTheProject: 'Descobreix més sobre el projecte',
    mappingSoilDegradation: 'Mapeig de la degradació del sòl a l’abast de la mà',
    mappingSoilDegradationDescription1: 'LOESS Soil Map és una plataforma que uneix la comunitat en l’esforç per protegir els sòls. Mitjançant mapes interactius i eines de geolocalització, els usuaris poden construir conjuntament una base de dades afegint informació sobre les condicions del sòl a les seves àrees locals.',
    mappingSoilDegradationDescription2: 'Les dades recollides donen suport als investigadors i responsables de la presa de decisions per fer decisions ambientals informades. Amb un formulari d’enquesta senzill i una interfície intuïtiva, qualsevol pot contribuir a una comprensió més profunda dels processos de degradació del sòl i ajudar eficaçment a protegir els sòls.',
    sharedKnowledgeBase: 'Una base de coneixement compartida per a un futur millor',
    sharedKnowledgeBaseDescription1: 'El projecte LOESS Soil Map, realitzat dins del programa internacional de recerca LOESS, agrega dades sobre erosió del sòl, pH i humitat, permetent una anàlisi global. Com a resultat, els usuaris tenen accés a informació completa que poden aplicar, des de la investigació científica fins a iniciatives ecològiques.',
    sharedKnowledgeBaseDescription2: 'Establir un ecosistema de dades cohesionat és la nostra clau per a solucions col·lectives. A través de la participació comunitària i les tecnologies modernes, LOESS Soil Map es converteix en un centre d’intercanvi d’informació, donant suport a la protecció ambiental i salvaguardant els interessos de les futures generacions.',
    howToUseTheApp: 'Com utilitzar l’aplicació',
    watchVideoDescription: 'Mira el vídeo curt sobre com utilitzar l’eina de cartografia col·laborativa',
    appTutorial: 'Tutorial de l’aplicació',
    dragMarkerMessage: 'Arrossega el marcador temporal fins a la ubicació desitjada',
    locationError: 'No s’ha pogut localitzar la teva posició, prova de refrescar la pàgina.',
    noPointsToApprove: 'No hi ha punts per aprovar',
    noPointsFound: 'No s’han trobat punts',
    dateRange: 'Interval de dates',
    selectCategoryPlaceholder: 'Selecciona una categoria',
    getDataReport: 'Descarrega l’informe de dades',
    surveyStatusUpdated: 'L’estat de l’enquesta s’ha actualitzat',
    oopsSomethingWentWrong: 'Ups! Alguna cosa ha anat malament. Torna-ho a provar més tard.',
    downloadReportFailed: 'No s’ha pogut descarregar l’informe.',
    save: 'Desa',
    managePermissions: 'Gestiona els permisos',
    banUserTooltip: 'Prohibeix l’usuari. Això evitarà que afegeixin punts al mapa.',
    usersCount: 'Nombre d’usuaris:',
    userPermissionsUpdated: 'S’han actualitzat els permisos de l’usuari.',
    userStatusUpdated: 'S’ha actualitzat l’estat de l’usuari.',
    pickDate: 'Tria una data'
};
