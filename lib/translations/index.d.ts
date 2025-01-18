export declare const availableLanguages: {
    name: string;
    languageCode: string;
    emoji: string;
}[];
export declare function getLanguageDetails(languageCode: string): {
    name: string | undefined;
    languageCode: string;
    emoji: string;
};
export declare const fallbacks: {
    en: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    pl: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    de: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    sk: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    lt: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    tr: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    el: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    hu: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    ga: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    it: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    ca: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    es: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    fr: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    nl: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    sr: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
    sv: {
        Default: {
            category: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformation: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            categoryInformationTooltip: {
                DRY_SOILS: string;
                WET_SOILS: string;
                EROSION: string;
                SEALED_SOILS: string;
                DEGRADATION: string;
                LOSS_OF_ORGANIC_MATTER: string;
                PH: string;
                BIODIVERSITY: string;
            };
            pointStatus: {
                status: string;
                PENDING: string;
                ACCEPTED: string;
                REJECTED: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
            other: string;
            filtersDescription: string;
            close: string;
            cancel: string;
            back: string;
            next: string;
            continue: string;
            skip: string;
            addPoint: string;
            clear: string;
            remove: string;
            apply: string;
            categories: string;
            pressToAddPoint: string;
            addPointHere: string;
            seeMore: string;
            notAuthenticatedModal: {
                title: string;
                message: string;
            };
            addPointForm: {
                chooseCategory: {
                    title: string;
                    description: string;
                };
                affectedArea: {
                    title: string;
                    placeholder: string;
                };
                addPhoto: {
                    title: string;
                    takePhoto: string;
                    or: string;
                    chooseFromGallery: string;
                };
                description: {
                    title: string;
                    placeName: {
                        label: string;
                        placeholder: string;
                    };
                    problemDescription: {
                        label: string;
                        placeholder: string;
                    };
                };
                solution: {
                    title: string;
                };
                successMessage: string;
                errorMessage: string;
            };
            pointDetails: {
                title: string;
                category: string;
                placeName: string;
                affectedArea: string;
                problemDescription: string;
                problemSolution: string;
                reportDate: string;
                photo: string;
            };
            userProfile: {
                title: string;
                appLanguage: string;
                manageAccount: string;
                logout: string;
                removeAccount: string;
                pts: string;
                deleteAccountPopup: {
                    button: string;
                    cancel: string;
                    firstConfirmation: {
                        title: string;
                        description: string;
                    };
                    secondConfirmation: {
                        title: string;
                        description: string;
                    };
                };
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
                howToUse: string;
                aboutSoils: string;
                privacyPolicy: string;
            };
            pointsList: {
                title: string;
                noPoints: string;
                unauthorized: string;
            };
            noPermissions: {
                library: {
                    title: string;
                    description: string;
                };
                camera: {
                    title: string;
                    description: string;
                };
                cancel: string;
                openSettings: string;
            };
            pointManagement: {
                title: string;
                generateReport: string;
                pointsToApprove: string;
                approvedPoints: string;
                pointId: string;
                pointName: string;
                dateFrom: string;
                dateTo: string;
                pointType: string;
                approve: string;
                delete: string;
                noData: string;
                download: string;
            };
            userManagement: {
                title: string;
                searchUser: string;
                deleteUser: string;
                setPermissions: string;
                confirmDeleteMessage: string;
                cancel: string;
                confirm: string;
                noUsers: string;
            };
            onboarding: {
                goToTheAppButton: string;
                welcome: {
                    title: string;
                    description: string;
                };
                instruction: {
                    title: string;
                    step1: {
                        title: string;
                        description: string;
                    };
                    step2: {
                        title: string;
                        description: string;
                    };
                    step3: {
                        title: string;
                        description: string;
                    };
                };
                aboutSoils: {
                    title: string;
                    description: string;
                };
            };
            problemCause: {
                lackOfRainfall: string;
                highTemperatures: string;
                poorSoilStructure: string;
                overuseOfWaterResources: string;
                deforestation: string;
                climateChange: string;
                overgrazing: string;
                other: string;
                heavyRainfall: string;
                poorDrainageSystems: string;
                highWaterTable: string;
                overIrrigation: string;
                soilCompaction: string;
                urbanization: string;
                flooding: string;
                windErosion: string;
                waterErosion: string;
                humanActivity: string;
                gullyErosion: string;
                sheetErosion: string;
                rillErosion: string;
                agriculturalPractices: string;
                industrialActivities: string;
                pavingAndConcreting: string;
                naturalProcesses: string;
                erosion: string;
                contamination: string;
                lossOfNutrients: string;
                overuseOfSoil: string;
                intensiveAgriculture: string;
                soilErosion: string;
                poorLandManagement: string;
                acidic: string;
                slightlyAcidic: string;
                neutral: string;
                slightlyAlkaline: string;
                alkaline: string;
                notSure: string;
                pollution: string;
                naturalSoilConditions: string;
            };
            codeRepository: string;
            allRightsReserved: string;
            shapeTheFuture: string;
            togetherWeMap: string;
            exploreTheMap: string;
            learnMore: string;
            aboutTheProject: string;
            learnMoreAboutTheProject: string;
            mappingSoilDegradation: string;
            mappingSoilDegradationDescription1: string;
            mappingSoilDegradationDescription2: string;
            sharedKnowledgeBase: string;
            sharedKnowledgeBaseDescription1: string;
            sharedKnowledgeBaseDescription2: string;
            howToUseTheApp: string;
            watchVideoDescription: string;
            appTutorial: string;
            dragMarkerMessage: string;
            locationError: string;
            noPointsToApprove: string;
            noPointsFound: string;
            dateRange: string;
            selectCategoryPlaceholder: string;
            getDataReport: string;
            surveyStatusUpdated: string;
            oopsSomethingWentWrong: string;
            downloadReportFailed: string;
            save: string;
            managePermissions: string;
            banUserTooltip: string;
            usersCount: string;
            userPermissionsUpdated: string;
            userStatusUpdated: string;
            pickDate: string;
        };
    };
};
