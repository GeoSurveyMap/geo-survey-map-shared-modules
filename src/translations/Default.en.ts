import { Category } from '../types'

export const en = {
	category: {
		[Category.DRY_SOILS]: 'Dry soil',
		[Category.WET_SOILS]: 'Wet soil',
		[Category.EROSION]: 'Erosion',
		[Category.SEALED_SOILS]: 'Sealed soil',
		[Category.DEGRADATION]: 'Soil degradation',
		[Category.LOSS_OF_ORGANIC_MATTER]: 'Loss of organic matter',
		[Category.PH]: 'pH',
		[Category.BIODIVERSITY]: 'Biodiversity'
	},
	categoryInformation: {
		DRY_SOILS:
			"<b>Desertification</b> - The process in which relatively dry land becomes increasingly arid, typically losing its body of water as well as vegetation and wildlife either directly via climate change or indirectly via soil degradation resulting from poor management.\n<b>Assessment of Soil Dryness</b>\n<b>Explanation</b>: Soil dryness can result from various factors such as insufficient rainfall, high temperatures, or poor soil structure. Understanding the primary cause can help in addressing the issue effectively.\n<b>What do you think is the primary cause of soil dryness in your area?</b>\nA. Lack of rainfall (Periods of little or no rain)\nB. High temperatures (Hot weather causing evaporation)\nC. Poor soil structure (Soil that doesn't retain water well)\nD. Overuse of water resources (Excessive use of water for agriculture or other purposes)\nE. Deforestation (Removal of trees that help retain moisture)\nF. Climate change (Long-term changes in weather patterns)\nG. Overgrazing (Excessive grazing by livestock)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Lack of rainfall</b>: Consider if there have been prolonged dry periods.\n- <b>High temperatures</b>: Think about recent heatwaves or unusually hot weather.\n- <b>Poor soil structure</b>: Notice if the soil is sandy or has poor water retention.\n- <b>Overuse of water resources</b>: Reflect on local agricultural or industrial water usage.\n- <b>Deforestation</b>: Consider if there has been significant tree removal in the area.\n- <b>Climate change</b>: Think about long-term changes in weather patterns.\n- <b>Overgrazing</b>: Consider if livestock grazing is prevalent and intense.",
		WET_SOILS:
			'<b>Assessment of Soil Waterlogging</b>\n<b>Explanation</b>: Soil waterlogging occurs when excess water saturates the soil, often due to heavy rainfall, poor drainage, or high water tables. Identifying the cause can help in managing water levels.\n<b>What do you think is the primary cause of soil waterlogging in your area?</b>\nA. Heavy rainfall (Frequent or intense rain)\nB. Poor drainage systems (Inadequate drainage infrastructure)\nC. High water table (Groundwater level close to the surface)\nD. Over-irrigation (Excessive watering of crops or gardens)\nE. Soil compaction (Soil particles pressed together, reducing pore space)\nF. Urbanization (Increased impermeable surfaces like roads and buildings)\nG. Flooding (Overflow of water from rivers or lakes)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Heavy rainfall</b>: Consider if there have been frequent or intense rain events.\n- <b>Poor drainage systems</b>: Think about the effectiveness of local drainage infrastructure.\n- <b>High water table</b>: Notice if groundwater levels are close to the surface.\n- <b>Over-irrigation</b>: Reflect on local agricultural practices and water usage.\n- <b>Soil compaction</b>: Consider if the soil is hard and compacted.\n- <b>Urbanization</b>: Think about the extent of impermeable surfaces in the area.\n- <b>Flooding</b>: Consider if there have been recent floods.',
		EROSION:
			'<b>Soil erosion</b> - Erosion is the removal of land or soil through one or more processes. The main causes of erosion include the actions of water (rills, inter-rill, gully, snowmelt and river and lake bank erosion), wind (desiccation and wind-blow), translocation (tillage, land levelling, harvesting of root crops, trampling and burrowing animals) and geological (internal subterranean erosion by groundwater, coastal erosion and landslides). Erosion can also be increased by poor land management such as overgrazing, deforestation or inappropriate use of mechanisation (e.g., ploughing down a hill slope).\n<b>Assessment of Soil Erosion</b>\n<b>Explanation</b>: Soil erosion is the removal of the topsoil layer by wind, water, or human activity. It can lead to loss of fertile land and other environmental issues.\n<b>How would you rate the intensity of soil erosion in your area?</b>\nA. Low (Minimal soil loss)\nB. Moderate (Noticeable soil loss)\nC. High (Severe soil loss)\nD. Very high (Extensive soil loss)\n<b>What forms of soil erosion are most common in your area?</b>\nA. Wind erosion (Soil blown away by wind)\nB. Water erosion (Soil washed away by rain or rivers)\nC. Human activity (e.g., construction, agriculture)\nD. Gully erosion (Formation of large channels or gullies)\nE. Sheet erosion (Thin layers of soil removed over a large area)\nF. Rill erosion (Small channels formed by running water)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Wind erosion</b>: Consider if there are strong winds and loose soil.\n- <b>Water erosion</b>: Think about heavy rains and water flow patterns.\n- <b>Human activity</b>: Reflect on construction, farming, or other human activities.\n- <b>Gully erosion</b>: Notice if there are large channels or gullies forming.\n- <b>Sheet erosion</b>: Consider if there are thin layers of soil being removed.\n- <b>Rill erosion</b>: Think about small channels formed by running water.',
		SEALED_SOILS:
			'<b>Soil sealing</b> - The process of covering of a soil by buildings, or types of artificial material which may be very slowly permeable to water (e.g., asphalt or concrete). Soil sealing can cause rapid overland flow after precipitation where water cannot soak away leading to potential flooding. A soil is unable to function effectively when sealed.\n<b>Assessment of Soil Sealing</b>\n<b>Explanation</b>: Soil surface sealing occurs when the soil surface becomes impermeable, often due to urbanization or compaction. This can prevent water infiltration and affect soil health.\n<b>How would you describe the state of soil surface sealing in your area?</b>\nA. Minimal sealing (Most soil surfaces are permeable)\nB. Moderate sealing (Some areas are impermeable)\nC. Extensive sealing (Large areas are impermeable)\nD. Very extensive sealing (Most areas are impermeable)\n<b>What do you think is the primary cause of soil surface sealing in your area?</b>\nA. Urbanization (Construction of buildings and roads)\nB. Agricultural practices (Use of heavy machinery)\nC. Industrial activities (Factories and other industrial sites)\nD. Soil compaction (Soil particles pressed together, reducing pore space)\nE. Paving and concreting (Covering soil with impermeable materials)\nF. Natural processes (e.g., crust formation)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Urbanization</b>: Consider the extent of buildings and roads.\n- <b>Agricultural practices</b>: Think about the use of heavy machinery in farming.\n- <b>Industrial activities</b>: Reflect on the presence of factories and industrial sites.\n- <b>Soil compaction</b>: Notice if the soil is hard and compacted.\n- <b>Paving and concreting</b>: Consider the amount of paved or concreted areas.\n- <b>Natural processes</b>: Think about natural crust formation on the soil surface.',
		DEGRADATION:
			'<b>Soil degradation</b> - Negative process often accelerated by human activities (improper soil use and cultivation practices, soil sealing) that leads to deterioration of soil properties and functions or destruction of soil as a whole, e.g., compaction, erosion, salinisation.\n<b>Soil contamination</b> - The presence of a chemical or substance in the soil in a concentration that may be harmful to human health or the environment. Contamination may have a direct toxic effect on the plants, animals or humans living in, on, or from that soil, or have an indirect toxic effect due to accumulation in the whole trophic chain.\n<b>Salinization</b> - Accumulation of soluble salts (more soluble than gypsum) in the upper soil layers (saline soil = soil containing enough soluble salts to negatively affect most crop plants, commonly 4000 μS m-1).\n<b>Assessment of Soil Degradation</b>\n<b>Explanation</b>: Soil degradation refers to the decline in soil quality due to factors like erosion, contamination, or loss of nutrients. It can affect agricultural productivity and ecosystem health.\n<b>How would you rate the overall status of soil degradation in your area?</b>\nA. Minimal degradation (Soil quality is generally good)\nB. Moderate degradation (Some decline in soil quality)\nC. Severe degradation (Significant decline in soil quality)\nD. Very severe degradation (Extensive decline in soil quality)\n<b>What do you think is the primary cause of soil degradation in your area?</b>\nA. Erosion (Loss of topsoil)\nB. Contamination (e.g., chemicals, pollutants)\nC. Loss of nutrients (Depletion of essential soil nutrients)\nD. Overuse of soil (Intensive farming or other activities)\nE. Deforestation (Removal of trees that protect soil)\nF. Climate change (Long-term changes in weather patterns)\nG. Overgrazing (Excessive grazing by livestock)\nH. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Erosion</b>: Consider if there is significant soil loss.\n- <b>Contamination</b>: Think about the presence of chemicals or pollutants.\n- <b>Loss of nutrients</b>: Reflect on the fertility and nutrient content of the soil.\n- <b>Overuse of soil</b>: Consider intensive farming or other activities.\n- <b>Deforestation</b>: Think about the removal of trees and vegetation.\n- <b>Climate change</b>: Reflect on long-term changes in weather patterns.\n- <b>Overgrazing</b>: Consider if livestock grazing is prevalent and intense.',
		LOSS_OF_ORGANIC_MATTER:
			'<b>Loss of Soil Organic Matter</b> - Decline of organic matter content in one or more soil layers when the annual loss of organic matter (e.g., due to oxidation or erosion) is insufficiently compensated for by the annual gain of organic matter, resulting from crop residues, composts and manures.\n<b>Assessment of Loss of Soil Organic Matter</b>\n<b>Explanation</b>: Soil organic matter is crucial for soil fertility and structure. Loss of organic matter can result from poor land management practices or natural processes.\n<b>How would you rate the loss of soil organic matter in your area?</b>\nA. Low (Minimal loss)\nB. Moderate (Noticeable loss)\nC. High (Significant loss)\nD. Very high (Extensive loss)\n<b>What do you think is the primary cause of loss of soil organic matter in your area?</b>\nA. Intensive agriculture (Frequent cropping and tillage)\nB. Deforestation (Removal of trees and vegetation)\nC. Overgrazing (Excessive grazing by livestock)\nD. Soil erosion (Loss of topsoil containing organic matter)\nE. Climate change (Changes in temperature and precipitation)\nF. Poor land management (Inadequate soil conservation practices)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Intensive agriculture</b>: Consider frequent cropping and tillage practices.\n- <b>Deforestation</b>: Think about the removal of trees and vegetation.\n- <b>Overgrazing</b>: Reflect on the intensity of livestock grazing.\n- <b>Soil erosion</b>: Consider if there is significant soil loss.\n- <b>Climate change</b>: Think about changes in temperature and precipitation.\n- <b>Poor land management</b>: Reflect on soil conservation practices.',
		PH: "<b>Acidification</b> - The process by which the concentration of hydrogen ions in the soil gradually increases, caused by the removal of slightly alkaline ions with the crop, leaching and the application of acidifying types of N fertiliser. This process is accelerated or insufficiently compensated by natural soil components, including parent material.\n<b>Soil pH</b>\n<b>Assessment of Soil pH</b>\n<b>Explanation</b>: Soil pH is a measure of the acidity or alkalinity of the soil. It can significantly affect plant growth and soil health. Certain plants, known as indicator plants, can help determine the soil pH based on their presence and health.\n<b>How would you describe the pH level of your soil based on the plants growing in it?</b>\nA. Acidic (e.g., presence of blueberries, azaleas)\nB. Slightly acidic (e.g., presence of ferns, rhododendrons)\nC. Neutral (e.g., presence of clover, dandelions)\nD. Slightly alkaline (e.g., presence of lavender, yarrow)\nE. Alkaline (e.g., presence of sagebrush, saltbush)\nF. Not sure (Unsure about the types of plants or their indication)\n<b>Comments for Answers</b>:\n- <b>Acidic</b>: If you notice plants like blueberries or azaleas thriving, your soil is likely acidic.\n- <b>Slightly acidic</b>: Plants such as ferns and rhododendrons indicate slightly acidic soil.\n- <b>Neutral</b>: Clover and dandelions are common in neutral pH soils.\n- <b>Slightly alkaline</b>: Lavender and yarrow are indicators of slightly alkaline soil.\n- <b>Alkaline</b>: Sagebrush and saltbush thrive in alkaline conditions.\n- <b>Not sure</b>: If you're unsure about the plants or their indications, this option allows you to express that uncertainty.",
		BIODIVERSITY:
			"<b>Biodiversity</b> - The variability among living organisms from all sources, including terrestrial, marine, and other aquatic ecosystems as well as the ecological complexes of which they are a part. This includes diversity within species, between species, and of ecosystems.\n<b>Assessment of Biodiversity of Soil and the Local Environment</b>\n<b>Explanation</b>: Biodiversity in soil refers to the variety of organisms living in the soil, including bacteria, fungi, insects, and plants. High biodiversity is a sign of a healthy ecosystem, contributing to soil fertility and stability.\n<b>How would you rate the biodiversity of soil organisms in your area?</b>\nA. Low (Few different species)\nB. Moderate (Some variety of species)\nC. High (Many different species)\nD. Very high (Abundant variety of species)\nE. Not sure (Unsure about the variety of soil organisms)\n<b>What do you think is the primary factor affecting soil biodiversity in your area?</b>\nA. Agricultural practices (Use of pesticides, monoculture)\nB. Urbanization (Loss of natural habitats)\nC. Pollution (Contaminants affecting soil life)\nD. Climate change (Changes in temperature and precipitation)\nE. Deforestation (Loss of trees and vegetation)\nF. Natural soil conditions (Inherent soil properties)\nG. Other (please specify)\n<b>Comments for Answers</b>:\n- <b>Low</b>: If you observe few different species, biodiversity is likely low.\n- <b>Moderate</b>: Some variety of species indicates moderate biodiversity.\n- <b>High</b>: Many different species suggest high biodiversity.\n- <b>Very high</b>: An abundant variety of species indicates very high biodiversity.\n- <b>Not sure</b>: If you're unsure about the variety of soil organisms, this option allows you to express that uncertainty.\n- <b>Agricultural practices</b>: Consider the impact of farming methods, such as pesticide use and monoculture.\n- <b>Urbanization</b>: Reflect on the extent of urban development and habitat loss.\n- <b>Pollution</b>: Think about the presence of contaminants affecting soil life.\n- <b>Climate change</b>: Consider changes in temperature and precipitation patterns.\n- <b>Deforestation</b>: Reflect on the removal of trees and its impact on biodiversity.\n- <b>Natural soil conditions</b>: Think about the inherent properties of the soil that might affect biodiversity."
	},
	categoryInformationTooltip: {
		DRY_SOILS: '<b>Desertification</b> - The process in which relatively dry land becomes increasingly arid.',
		WET_SOILS: '<b>Assessment of Soil Waterlogging</b> - Soil waterlogging occurs when excess water saturates the soil.',
		EROSION: '<b>Soil erosion</b> - Erosion is the removal of land or soil through one or more processes.',
		SEALED_SOILS: '<b>Soil sealing</b> - The process of covering of a soil by buildings, or types of artificial material.',
		DEGRADATION:
			'<b>Soil degradation</b> - Negative process often accelerated by human activities (improper soil use and cultivation practices, soil sealing).',
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
	login: 'Login',
	logout: 'Logout',
	register: 'Register',
	profile: 'Profile',
	filters: 'Filters',
	other: 'Other',
	filtersDescription: 'Select the categories of points you want to see on the map',
	close: 'Close',
	cancel: 'Cancel',
	back: 'Back',
	next: 'Next',
	continue: 'Continue',
	skip: 'Skip',
	addPoint: 'Add point',
	clear: 'Clear',
	remove: 'Remove',
	apply: 'Apply',
	categories: 'Categories',
	pressToAddPoint: 'Press and hold to add a report',
	addPointHere: 'Add point in my location',
	seeMore: 'See more',
	notAuthenticatedModal: {
		title: 'Only logged-in users can add a report',
		message: 'Log in to continue'
	},
	addPointForm: {
		chooseCategory: {
			title: 'Choose category',
			description: 'Fill out a short survey and add a point on the map'
		},
		affectedArea: {
			title: 'Affected area',
			placeholder: 'Select area radius'
		},
		addPhoto: {
			title: 'Add photo',
			takePhoto: 'Take photo',
			or: 'or',
			chooseFromGallery: 'Choose from gallery'
		},
		description: {
			title: 'Describe the place',
			placeName: {
				label: 'Place name',
				placeholder: 'e.g., Kościuszko St. Park'
			},
			problemDescription: {
				label: 'Problem description',
				placeholder: ''
			}
		},
		solution: {
			title: 'Potencial problem cause'
		},
		successMessage: 'Success! The report has been sent for verification',
		errorMessage: 'Oops! Something went wrong. Try again'
	},
	pointDetails: {
		title: 'Point details',
		category: 'Category',
		placeName: 'Place name',
		affectedArea: 'Problem radius',
		problemDescription: 'Problem description',
		problemSolution: 'Potencial problem cause',
		reportDate: 'Date of report',
		photo: 'Photo'
	},
	userProfile: {
		title: 'User profile',
		appLanguage: 'App language',
		manageAccount: 'Manage account',
		logout: 'Logout',
		removeAccount: 'Remove account',
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
		title: 'Settings',
		appLanguage: 'App language',
		appVersion: 'App version',
		howToUse: 'How to use the app',
		aboutSoils: 'About soil categories',
		privacyPolicy: 'Privacy policy'
	},
	pointsList: {
		title: 'Added points',
		noPoints: 'No points have been added.',
		unauthorized: 'Log in to see added points.'
	},
	noPermissions: {
		library: {
			title: "We can't access your photos",
			description: 'Please allow access to your photos in the settings.'
		},
		camera: {
			title: "We can't access your camera",
			description: 'Please allow access to your camera in the settings.'
		},
		cancel: 'Cancel',
		openSettings: 'Open settings'
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
		goToTheAppButton: 'Go to the app',
		welcome: {
			title: 'Welcome to\nLOESS Soil Map!',
			description: 'A tool designed to report soils in unhealthy conditions'
		},
		instruction: {
			title: 'How to use our tool?',
			step1: {
				title: 'Find soil that seem unhealthy',
				description: 'You can use samples provided by our team, to see what type of soil your’e dealing with.'
			},
			step2: {
				title: 'Add report in located place',
				description:
					'Include all the information that you gathered for the quality of the report, that will help the researchers trying to solve the problem.'
			},
			step3: {
				title: 'Wait for confirmation',
				description: 'Every report has to be verified by our team, to avoid harmful content.'
			}
		},
		aboutSoils: {
			title: 'About soils',
			description: 'Click on soil category to see information about. This is also available in settings section of the application.'
		}
	},
	problemCause: {
		lackOfRainfall: 'Lack of rainfall',
		highTemperatures: 'High temperatures',
		poorSoilStructure: 'Poor soil structure',
		overuseOfWaterResources: 'Overuse of water resources',
		deforestation: 'Deforestation',
		climateChange: 'Climate change',
		overgrazing: 'Overgrazing',
		other: 'Other',
		heavyRainfall: 'Heavy rainfall',
		poorDrainageSystems: 'Poor drainage systems',
		highWaterTable: 'High water table',
		overIrrigation: 'Over-irrigation',
		soilCompaction: 'Soil compaction',
		urbanization: 'Urbanization',
		flooding: 'Flooding',
		windErosion: 'Wind erosion',
		waterErosion: 'Water erosion',
		humanActivity: 'Human activity',
		gullyErosion: 'Gully erosion',
		sheetErosion: 'Sheet erosion',
		rillErosion: 'Rill erosion',
		agriculturalPractices: 'Agricultural practices',
		industrialActivities: 'Industrial activities',
		pavingAndConcreting: 'Paving and concreting',
		naturalProcesses: 'Natural processes',
		erosion: 'Erosion',
		contamination: 'Contamination',
		lossOfNutrients: 'Loss of nutrients',
		overuseOfSoil: 'Overuse of soil',
		intensiveAgriculture: 'Intensive agriculture',
		soilErosion: 'Soil erosion',
		poorLandManagement: 'Poor land management',
		acidic: 'Acidic',
		slightlyAcidic: 'Slightly acidic',
		neutral: 'Neutral',
		slightlyAlkaline: 'Slightly alkaline',
		alkaline: 'Alkaline',
		notSure: 'Not sure',
		pollution: 'Pollution',
		naturalSoilConditions: 'Natural soil conditions'
	},
	codeRepository: 'Code repository',
	allRightsReserved: 'All rights reserved',
	shapeTheFuture: 'Shape The Future Of Soil Education.',
	togetherWeMap: 'Together, we map, connect, and educate to cultivate soil literacy, fostering awareness, engagement, and sustainable practices.',
	exploreTheMap: 'Explore the Map',
	learnMore: 'Learn More',
	aboutTheProject: 'About The Project',
	learnMoreAboutTheProject: 'Learn more about the project',
	mappingSoilDegradation: 'Mapping Soil Degradation at Your Fingertips',
	mappingSoilDegradationDescription1:
		'LOESS Soil Map is a platform that brings the community together in the effort to protect soils. By leveraging interactive maps and geolocation tools, users can collaboratively build a database by adding information about soil conditions in their local areas.',
	mappingSoilDegradationDescription2:
		'The collected data supports researchers and decision-makers in making informed environmental decisions. With a straightforward survey form and an intuitive interface, anyone can contribute to a deeper understanding of soil degradation processes and effectively help protect soils.',
	sharedKnowledgeBase: 'A Shared Knowledge Base for a Better Tomorrow',
	sharedKnowledgeBaseDescription1:
		'The LOESS Soil Map project, carried out under the international LOESS research program, aggregates data on soil erosion, pH, and moisture, enabling global analysis. As a result, users gain access to comprehensive information they can put into practice—ranging from scientific research to ecological initiatives.',
	sharedKnowledgeBaseDescription2:
		'Establishing a cohesive data ecosystem is our key to collective solutions. Through community involvement and modern technologies, LOESS Soil Map becomes a central hub for information exchange, supporting environmental protection efforts and safeguarding the interests of future generations.',
	howToUseTheApp: 'How to Use the App',
	watchVideoDescription: 'Watch the short video on how to use the crowdmapping tool',
	appTutorial: 'App Tutorial',
	dragMarkerMessage: 'Drag the temporary marker to the desired location',
	locationError: 'Failed to locate your position, please try refreshing the page.',
	noPointsToApprove: 'No points to approve',
	noPointsFound: 'No points found',
	dateRange: 'Date Range',
	selectCategoryPlaceholder: 'Select category',
	getDataReport: 'Get data report',
	surveyStatusUpdated: 'Survey status has been updated',
	oopsSomethingWentWrong: 'Oops, something went wrong! Please try again later.',
	downloadReportFailed: 'Failed to download the report.',
	save: 'Save',
	managePermissions: 'Manage permissions',
	banUserTooltip: 'Ban user. This will prevent them from adding points to the map',
	usersCount: 'Users count:',
	userPermissionsUpdated: "User's permissions have been updated.",
	userStatusUpdated: "User's status has been updated.",
	pickDate: 'Pick a date'
}
