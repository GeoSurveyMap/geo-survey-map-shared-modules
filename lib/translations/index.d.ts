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
            pointStatus: {
                accepted: string;
                pending: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
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
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
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
                emailPlaceholder: string;
                deleteUser: string;
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
            pointStatus: {
                accepted: string;
                pending: string;
            };
            login: string;
            logout: string;
            register: string;
            profile: string;
            filters: string;
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
            };
            settings: {
                title: string;
                appLanguage: string;
                appVersion: string;
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
                emailPlaceholder: string;
                deleteUser: string;
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
        };
    };
};
