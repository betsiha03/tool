const API_BASE = '/technical_service_finder/public/api/index.php';

const $ = (id) => document.getElementById(id);

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {
        language: "Language",

        title: "Technical Service Finder",
        subtitle: "Find trusted nearby technical professionals.",

        findTechnician: "Find Technician",
        registerTechnician: "Register as Technician",
        supportPlatform: "Support Platform",
        admin: "Admin",

        findTitle: "Find a Technician",
        noAccount: "No customer account is required.",
        profession: "Profession",
        selectProfession: "Select profession",
        searchRadius: "Search radius",
        customerLocation: "Customer Location",
        selectLocation: "Select your location",
        locationStatus: "Select your area. Coordinates are stored automatically for distance search.",
        searchNearby: "Search Nearby Technicians",

        km3: "3 km",
        km5: "5 km",
        km10: "10 km",

        registrationTitle: "Technician Registration",
        registrationDescription:
            "A phone number may register once for each profession.",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        location: "Location",
        photo: "Photo",
        submitRegistration: "Submit Registration",

        paymentTitle: "Registration Payment",
        registrationFee: "Registration fee:",
        paymentPhone: "Phone",
        registrationReference: "Registration Reference",
        payTelebirr: "Pay Registration Fee with Telebirr",

        otpTitle: "Phone OTP Verification",
        otpDescription:
            "Enter the OTP sent to your registration phone.",
        otp: "OTP",
        verifyOtp: "Verify OTP & Complete Registration",

        supportTitle: "Support the Platform",
        supportDescription:
            "Your voluntary support helps maintain the service.",
        amount: "Amount (ETB)",
        supportTelebirr: "Support with Telebirr",

        adminLogin: "Admin Login",
        username: "Username",
        password: "Password",
        login: "Login",

        adminDashboard: "Admin Dashboard",
        logout: "Logout",
        addProfession: "Add Profession",
        technicians: "Technicians",
        add: "Add",

        noTechnicians: "No technicians found within the selected radius.",
        call: "Call",
        noPhoto: "No photo",

        verifySupportOtp: "Verify OTP",
        supportOtpDescription: "Enter the OTP sent to your phone.",
        completeSupport: "Complete Support",
        enterOtp: "Enter 6-digit OTP",

        noRegisteredTechnicians: "No technicians registered yet.",
        change: "Change",

        name: "Name",
        status: "Status",
        action: "Action",

        selectArea: "Select your area.",
        locationSelected: "Location selected.",
        currentLocationSelected: "Current location selected.",

        selectProfessionLocation:
            "Select a profession and customer location.",
        selectLocationFromList:
            "Please select a location from the Location list.",

        phoneRequired: "Please enter your phone number.",
        validAmount: "Please enter a valid support amount.",
        validOtp: "Please enter a valid 6-digit OTP.",
        technicianStatusUpdated: "Technician status updated.",
        professionCreated: "Profession created.",
        loggedOut: "Logged out.",

        localTestOtp: "LOCAL TEST OTP"
    },

    am: {
        language: "ቋንቋ",

        title: "የቴክኒክ አገልግሎት ፈላጊ",
        subtitle: "በአቅራቢያዎ ያሉ የታመኑ የቴክኒክ ባለሙያዎችን ያግኙ።",

        findTechnician: "ቴክኒሺያን ፈልግ",
        registerTechnician: "እንደ ቴክኒሺያን ይመዝገቡ",
        supportPlatform: "መድረኩን ይደግፉ",
        admin: "አስተዳዳሪ",

        findTitle: "ቴክኒሺያን ይፈልጉ",
        noAccount: "የደንበኛ መለያ አያስፈልግም።",
        profession: "የሙያ ዓይነት",
        selectProfession: "የሙያ ዓይነት ይምረጡ",
        searchRadius: "የፍለጋ ርቀት",
        customerLocation: "የደንበኛ አካባቢ",
        selectLocation: "አካባቢዎን ይምረጡ",
        locationStatus:
            "አካባቢዎን ይምረጡ። ለርቀት ፍለጋ ኮርዲኔቶች በራስ-ሰር ይቀመጣሉ።",
        searchNearby: "በአቅራቢያ ያሉ ቴክኒሺያኖችን ፈልግ",

        km3: "3 ኪ.ሜ",
        km5: "5 ኪ.ሜ",
        km10: "10 ኪ.ሜ",

        registrationTitle: "የቴክኒሺያን ምዝገባ",
        registrationDescription:
            "አንድ ስልክ ቁጥር ለእያንዳንዱ ሙያ አንድ ጊዜ መመዝገብ ይችላል።",
        fullName: "ሙሉ ስም",
        phoneNumber: "ስልክ ቁጥር",
        location: "አካባቢ",
        photo: "ፎቶ",
        submitRegistration: "ምዝገባ አስገባ",

        paymentTitle: "የምዝገባ ክፍያ",
        registrationFee: "የምዝገባ ክፍያ:",
        paymentPhone: "ስልክ",
        registrationReference: "የምዝገባ ማጣቀሻ",
        payTelebirr: "የምዝገባ ክፍያን በቴሌብር ይክፈሉ",

        otpTitle: "የስልክ OTP ማረጋገጫ",
        otpDescription:
            "ወደ ስልክዎ የተላከውን OTP ያስገቡ።",
        otp: "OTP",
        verifyOtp: "OTP ያረጋግጡ እና ምዝገባውን ያጠናቅቁ",

        supportTitle: "መድረኩን ይደግፉ",
        supportDescription:
            "የእርስዎ የፈቃደኝነት ድጋፍ አገልግሎቱን ለማስቀጠል ይረዳል።",
        amount: "መጠን (ETB)",
        supportTelebirr: "በቴሌብር ይደግፉ",

        adminLogin: "የአስተዳዳሪ መግቢያ",
        username: "የተጠቃሚ ስም",
        password: "የይለፍ ቃል",
        login: "ግባ",

        adminDashboard: "የአስተዳዳሪ ዳሽቦርድ",
        logout: "ውጣ",
        addProfession: "ሙያ ጨምር",
        technicians: "ቴክኒሺያኖች",
        add: "ጨምር",

        noTechnicians:
            "በተመረጠው ርቀት ውስጥ ምንም ቴክኒሺያን አልተገኘም።",
        call: "ይደውሉ",
        noPhoto: "ፎቶ የለም",

        verifySupportOtp: "OTP ያረጋግጡ",
        supportOtpDescription: "ወደ ስልክዎ የተላከውን OTP ያስገቡ።",
        completeSupport: "ድጋፉን ያጠናቅቁ",
        enterOtp: "6 አሃዝ OTP ያስገቡ",

        noRegisteredTechnicians: "እስካሁን የተመዘገቡ ቴክኒሺያኖች የሉም።",
        change: "ቀይር",

        name: "ስም",
        status: "ሁኔታ",
        action: "ተግባር",

        selectArea: "አካባቢዎን ይምረጡ።",
        locationSelected: "አካባቢ ተመርጧል።",
        currentLocationSelected: "የአሁኑ አካባቢ ተመርጧል።",

        selectProfessionLocation:
            "የሙያ እና የደንበኛ አካባቢ ይምረጡ።",
        selectLocationFromList:
            "እባክዎ ከአካባቢ ዝርዝሩ ውስጥ አካባቢ ይምረጡ።",

        phoneRequired: "እባክዎ ስልክ ቁጥርዎን ያስገቡ።",
        validAmount: "እባክዎ ትክክለኛ የድጋፍ መጠን ያስገቡ።",
        validOtp: "እባክዎ ትክክለኛ 6 አሃዝ OTP ያስገቡ።",
        technicianStatusUpdated: "የቴክኒሺያኑ ሁኔታ ተሻሽሏል።",
        professionCreated: "ሙያ ተፈጥሯል።",
        loggedOut: "ወጥተዋል።",

        localTestOtp: "የአካባቢ ሙከራ OTP"
    },

    om: {
        language: "Afaan",

        title: "Barbaacha Tajaajila Teeknikaa",
        subtitle:
            "Ogeessota teeknikaa amanamoo naannoo keessanitti argaman barbaadaa.",

        findTechnician: "Teeknishaanii Barbaadi",
        registerTechnician: "Akka Teeknishaanii Galmaa'i",
        supportPlatform: "Platformii Deeggari",
        admin: "Bulchaa",

        findTitle: "Teeknishaanii Barbaadi",
        noAccount: "Herrega maamilaa hin barbaachisu.",
        profession: "Ogummaa",
        selectProfession: "Ogummaa filadhu",
        searchRadius: "Fageenya barbaachaa",
        customerLocation: "Bakka Maamilaa",
        selectLocation: "Bakka kee filadhu",
        locationStatus:
            "Naannoo kee filadhu. Koordineetonni fageenya barbaaduuf ofumaan ni kuufamu.",
        searchNearby: "Teeknishaanota Naannoo Barbaadi",

        km3: "3 km",
        km5: "5 km",
        km10: "10 km",

        registrationTitle: "Galmee Teeknishaanii",
        registrationDescription:
            "Lakkoofsi bilbilaa tokko ogummaa tokkoof yeroo tokko galmaa'uu danda'a.",
        fullName: "Maqaa Guutuu",
        phoneNumber: "Lakkoofsa Bilbilaa",
        location: "Bakka",
        photo: "Suuraa",
        submitRegistration: "Galmee Ergi",

        paymentTitle: "Kaffaltii Galmee",
        registrationFee: "Kaffaltii galmee:",
        paymentPhone: "Bilbila",
        registrationReference: "Lakkoofsa Wabii Galmee",
        payTelebirr: "Kaffaltii Galmee Telebirriin Kaffali",

        otpTitle: "Mirkaneessa OTP Bilbilaa",
        otpDescription: "OTP bilbila keessanitti ergametti galchi.",
        otp: "OTP",
        verifyOtp: "OTP Mirkaneessi fi Galmee Xumuri",

        supportTitle: "Platformii Deeggari",
        supportDescription:
            "Deeggarsi fedhii keessanii tajaajila kana itti fufsiisuuf gargaara.",
        amount: "Hamma (ETB)",
        supportTelebirr: "Telebirriin Deeggari",

        adminLogin: "Seensa Bulchaa",
        username: "Maqaa Fayyadamaa",
        password: "Jecha Darbii",
        login: "Seeni",

        adminDashboard: "Daashboordii Bulchaa",
        logout: "Ba'i",
        addProfession: "Ogummaa Dabali",
        technicians: "Teeknishaanota",
        add: "Dabali",

        noTechnicians:
            "Fageenya filatame keessatti teeknishaaniin hin argamne.",
        call: "Bilbili",
        noPhoto: "Suuraan hin jiru",

        verifySupportOtp: "OTP Mirkaneessi",
        supportOtpDescription:
            "OTP bilbila keessanitti ergametti galchi.",
        completeSupport: "Deeggarsa Xumuri",
        enterOtp: "OTP lakkoofsa 6 galchi",

        noRegisteredTechnicians:
            "Hanga ammaatti teeknishaaniin hin galmoofne.",
        change: "Jijjiiri",

        name: "Maqaa",
        status: "Haala",
        action: "Gocha",

        selectArea: "Naannoo kee filadhu.",
        locationSelected: "Bakka filatameera.",
        currentLocationSelected: "Bakka amma jirtu filatameera.",

        selectProfessionLocation:
            "Ogummaa fi bakka maamilaa filadhu.",
        selectLocationFromList:
            "Maaloo tarree bakka keessaa bakka filadhu.",

        phoneRequired: "Maaloo lakkoofsa bilbilaa kee galchi.",
        validAmount: "Maaloo hamma deeggarsaa sirrii galchi.",
        validOtp: "Maaloo OTP lakkoofsa 6 sirrii galchi.",
        technicianStatusUpdated:
            "Haalli teeknishaanii fooyya'eera.",
        professionCreated: "Ogummaan uumameera.",
        loggedOut: "Baateetta.",

        localTestOtp: "OTP Qorannoo Naannoo"
    }
};


/* =========================================================
   CURRENT LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem('language') || 'en';

function t(key) {
    return translations[currentLanguage]?.[key]
        || translations.en[key]
        || key;
}


/* =========================================================
   PROFESSION TRANSLATIONS
========================================================= */

const professionTranslations = {

    en: {
        
        
        "Electrician": "Electrician",
        "Fridge Maintenance": "Fridge Maintenance",
        
        
        "Washing Machine Maintenance": "Washing Machine Maintenance",
        "Dissh":"Dish"
        
    },

    am: {
        
       
        "Electrician": "ኤሌክትሪሺያን",
        "Fridge Maintenance": "የፍሪጅ ጥገና",
        
        
        "Washing Machine Maintenance": "የልብስ ማጠቢያ ጥገና",
        "Dish":"ዲሽ "
        
    },

    om: {
        
        "Electrician": "Elektrishiinii",
        "Fridge Maintenance": "Suphaa Firiji",
        
        "Washing Machine Maintenance": "Suphaa Maashinii Uffataa",
        "Dish": "Dishi"
    }
};

function translateProfession(name) {
    return professionTranslations[currentLanguage]?.[name]
        || professionTranslations.en[name]
        || name;
}


/* =========================================================
   LOCATION TRANSLATIONS
========================================================= */

const locationTranslations = {

    am: {
        "Bole": "ቦሌ",
        "Bole Sub City": "ቦሌ ክፍለ ከተማ",
        "Bole Medhanealem": "ቦሌ መድኃኔዓለም",
        "Bole Atlas": "ቦሌ አትላስ",
        "Kazanchis": "ካዛንቺስ",
        "Piassa": "ፒያሳ",
        "Arat Kilo": "አራት ኪሎ",
        "Mexico": "ሜክሲኮ",
        "Sar Bet": "ሳር ቤት",
        "Meskel Square": "መስቀል አደባባይ",
        "Gerji": "ገርጂ",
        "CMC": "ሲኤምሲ",
        "Megenagna": "መገናኛ",
        "Yeka": "የካ",
        "Shola": "ሾላ",
        "Lideta": "ልደታ",
        "Merkato": "መርካቶ",
        "Jemo": "ጀሞ",
        "Kera": "ቄራ",
        "Gotera": "ጎተራ",
        "Nifas Silk Lafto": "ንፋስ ስልክ ላፍቶ",
        "Akaki Kality": "አቃቂ ቃሊቲ",
        "Old Airport": "አሮጌ አየር ማረፊያ",
        "Summit": "ሰሚት",
        "Kotebe": "ኮተቤ",
        "Addis Ababa": "አዲስ አበባ"
    },

    om: {
        "Bole": "Bolee",
        "Bole Sub City": "Kutaa Magaalaa Bolee",
        "Bole Medhanealem": "Bolee Medhanealem",
        "Bole Atlas": "Bolee Atlas",
        "Kazanchis": "Kazanchis",
        "Piassa": "Piassa",
        "Arat Kilo": "Arat Kilo",
        "Mexico": "Mexico",
        "Sar Bet": "Sar Bet",
        "Meskel Square": "Meskal Square",
        "Gerji": "Gerjii",
        "CMC": "CMC",
        "Megenagna": "Megenagna",
        "Yeka": "Yekkaa",
        "Shola": "Sholaa",
        "Lideta": "Lidataa",
        "Merkato": "Markaato",
        "Jemo": "Jemoo",
        "Kera": "Keeraa",
        "Gotera": "Goteraa",
        "Nifas Silk Lafto": "Nifas Silk Laftoo",
        "Akaki Kality": "Akakii Qaliitii",
        "Old Airport": "Buufata Xiyyaaraa Moofaa",
        "Summit": "Summit",
        "Kotebe": "Kotobee",
        "Addis Ababa": "Finfinnee"
    }
};

function translateLocation(name) {

    if (currentLanguage === 'en') {
        return name;
    }

    /*
       The API/fallback names contain:
       "Bole, Addis Ababa, Ethiopia"

       We translate only the area part.
    */

    const parts = String(name).split(',');

    const area = parts[0].trim();

    const translatedArea =
        locationTranslations[currentLanguage]?.[area] || area;

    if (parts.length > 1) {

        const rest = parts
            .slice(1)
            .map(x => x.trim());

        if (currentLanguage === 'am') {

            if (rest.includes('Addis Ababa')) {
                const index = rest.indexOf('Addis Ababa');
                rest[index] = "አዲስ አበባ";
            }

            if (rest.includes('Ethiopia')) {
                const index = rest.indexOf('Ethiopia');
                rest[index] = "ኢትዮጵያ";
            }
        }

        if (currentLanguage === 'om') {

            if (rest.includes('Addis Ababa')) {
                const index = rest.indexOf('Addis Ababa');
                rest[index] = "Finfinnee";
            }

            if (rest.includes('Ethiopia')) {
                const index = rest.indexOf('Ethiopia');
                rest[index] = "Itoophiyaa";
            }
        }

        return [translatedArea, ...rest].join(', ');
    }

    return translatedArea;
}


/* =========================================================
   APPLY LANGUAGE TO HTML
========================================================= */

function applyLanguage(language) {

    if (!translations[language]) {
        language = 'en';
    }

    currentLanguage = language;

    localStorage.setItem('language', language);

    document.documentElement.lang = language;

    const languageSelect = $('languageSelect');

    if (languageSelect) {
        languageSelect.value = language;
    }

    /*
       Elements that have data-i18n
    */

    document.querySelectorAll('[data-i18n]').forEach(element => {

        const key = element.getAttribute('data-i18n');

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    /*
       Language label
    */

    const languageLabel =
        document.querySelector('label[for="languageSelect"]');

    if (languageLabel) {
        languageLabel.textContent = t('language');
    }

    /*
       Find section
    */

    const findTitle =
        document.querySelector('#find h2');

    if (findTitle) {
        findTitle.textContent = t('findTitle');
    }

    const findDescription =
        document.querySelector('#find .card > p');

    if (findDescription) {
        findDescription.textContent = t('noAccount');
    }

    /*
       Find labels
    */

    const searchProfessionLabel =
        document.querySelector('#searchProfession')?.closest('label');

    if (searchProfessionLabel) {
        searchProfessionLabel.firstChild.textContent =
            t('profession') + ' ';
    }

    const radiusLabel =
        document.querySelector('#searchRadius')?.closest('label');

    if (radiusLabel) {
        radiusLabel.firstChild.textContent =
            t('searchRadius') + ' ';
    }

    const customerLocationLabel =
        document.querySelector('#customerLocation')?.closest('label');

    if (customerLocationLabel) {
        customerLocationLabel.firstChild.textContent =
            t('customerLocation') + ' ';
    }

    /*
       Registration
    */

    const registrationTitle =
        document.querySelector('#register h2');

    if (registrationTitle) {
        registrationTitle.textContent = t('registrationTitle');
    }

    const registrationDescription =
        document.querySelector('#registrationForm')?.previousElementSibling;

    if (registrationDescription) {
        registrationDescription.textContent =
            t('registrationDescription');
    }

    /*
       Registration form labels
    */

    translateFormLabels();

    /*
       Payment
    */

    const paymentTitle =
        document.querySelector('#paymentCard h2');

    if (paymentTitle) {
        paymentTitle.textContent = t('paymentTitle');
    }

    /*
       OTP
    */

    const otpTitle =
        document.querySelector('#otpCard h2');

    if (otpTitle) {
        otpTitle.textContent = t('otpTitle');
    }

    /*
       Support
    */

    const supportTitle =
        document.querySelector('#support h2');

    if (supportTitle) {
        supportTitle.textContent = t('supportTitle');
    }

    /*
       Admin
    */

    const adminLoginTitle =
        document.querySelector('#adminLogin h2');

    if (adminLoginTitle) {
        adminLoginTitle.textContent = t('adminLogin');
    }

    /*
       Radius options
    */

    updateRadiusOptions();

    /*
       Rebuild dynamic lists in the selected language
    */

    loadProfessions();
    loadLocations();

    /*
       Update current location status
    */

    const locationStatus = $('locationStatus');

    if (
        locationStatus &&
        !$('customerLocation')?.value
    ) {
        locationStatus.textContent = t('locationStatus');
    }
}


/* =========================================================
   FORM LABEL TRANSLATION
========================================================= */

function translateFormLabels() {

    const registrationForm = $('registrationForm');

    if (registrationForm) {

        const labels = registrationForm.querySelectorAll('label');

        labels.forEach(label => {

            const input = label.querySelector('input, select');

            if (!input) return;

            if (input.name === 'name') {
                setLabelText(label, t('fullName'), input);
            }

            if (input.name === 'phone') {
                setLabelText(label, t('phoneNumber'), input);
            }

            if (input.name === 'profession_id') {
                setLabelText(label, t('profession'), input);
            }

            if (input.name === 'location') {
                setLabelText(label, t('location'), input);
            }

            if (input.name === 'photo') {
                setLabelText(label, t('photo'), input);
            }
        });
    }

    const supportForm = $('supportForm');

    if (supportForm) {

        const phone = supportForm.querySelector('input[name="phone"]');

        if (phone) {
            setLabelText(
                phone.closest('label'),
                t('phoneNumber'),
                phone
            );
        }

        const amount = supportForm.querySelector('input[name="amount"]');

        if (amount) {
            setLabelText(
                amount.closest('label'),
                t('amount'),
                amount
            );
        }
    }

    /*
       Admin login
    */

    const adminLoginForm = $('adminLoginForm');

    if (adminLoginForm) {

        const username =
            adminLoginForm.querySelector('input[name="username"]');

        const password =
            adminLoginForm.querySelector('input[name="password"]');

        if (username) {
            setLabelText(
                username.closest('label'),
                t('username'),
                username
            );
        }

        if (password) {
            setLabelText(
                password.closest('label'),
                t('password'),
                password
            );
        }
    }
}

function setLabelText(label, text, input) {

    if (!label || !input) return;

    Array.from(label.childNodes).forEach(node => {

        if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim() !== ''
        ) {
            node.textContent = text + ' ';
        }
    });
}


/* =========================================================
   RADIUS
========================================================= */

function updateRadiusOptions() {

    const select = $('searchRadius');

    if (!select) return;

    const values = {
        "3": t('km3'),
        "5": t('km5'),
        "10": t('km10')
    };

    Array.from(select.options).forEach(option => {

        if (values[option.value]) {
            option.textContent = values[option.value];
        }
    });
}


/* =========================================================
   ALERT
========================================================= */

function showAlert(message, type = 'success') {

    const el = $('alert');

    if (!el) return;

    el.textContent = message;

    el.className = `alert ${type}`;

    setTimeout(() => {
        el.classList.add('hidden');
    }, 6000);
}


/* =========================================================
   SECTION
========================================================= */

function showSection(id) {

    document
        .querySelectorAll('.section')
        .forEach(s => s.classList.remove('active'));

    const section = $(id);

    if (section) {
        section.classList.add('active');
    }

    if (id === 'admin') {
        checkAdmin();
    }

    if (
        id === 'find' &&
        window.map
    ) {
        setTimeout(() => {
            window.map.invalidateSize();
        }, 100);
    }
}


/* =========================================================
   API
========================================================= */

async function api(path, options = {}) {

    const opts = {
        ...options,
        credentials: 'same-origin',
        headers: {
            ...(options.headers || {})
        }
    };

    if (
        !(options.body instanceof FormData) &&
        options.body !== undefined
    ) {
        opts.headers['Content-Type'] = 'application/json';
    }

    const response =
        await fetch(`${API_BASE}${path}`, opts);

    let data;

    try {
        data = await response.json();
    } catch {

        throw new Error(
            `Server returned a non-JSON response (${response.status}). Check the PHP error log.`
        );
    }

    if (!response.ok || data.success === false) {

        throw new Error(
            data.message ||
            `Request failed (${response.status}).`
        );
    }

    return data;
}


/* =========================================================
   LOCATIONS
========================================================= */

let locations = [];

const fallbackLocations = [

    ['Bole, Addis Ababa, Ethiopia', 8.9950, 38.7890],
    ['Bole Sub City, Addis Ababa, Ethiopia', 8.9950, 38.7890],
    ['Bole Medhanealem, Addis Ababa, Ethiopia', 8.9970, 38.7860],
    ['Bole Atlas, Addis Ababa, Ethiopia', 9.0068, 38.7817],
    ['Kazanchis, Addis Ababa, Ethiopia', 9.0179, 38.7668],
    ['Piassa, Addis Ababa, Ethiopia', 9.0350, 38.7520],
    ['Arat Kilo, Addis Ababa, Ethiopia', 9.0372, 38.7610],
    ['Mexico, Addis Ababa, Ethiopia', 9.0114, 38.7530],
    ['Sar Bet, Addis Ababa, Ethiopia', 9.0005, 38.7460],
    ['Meskel Square, Addis Ababa, Ethiopia', 9.0107, 38.7613],
    ['Gerji, Addis Ababa, Ethiopia', 9.0074, 38.8167],
    ['CMC, Addis Ababa, Ethiopia', 9.0225, 38.8350],
    ['Megenagna, Addis Ababa, Ethiopia', 9.0186, 38.8077],
    ['Yeka, Addis Ababa, Ethiopia', 9.0350, 38.8270],
    ['Shola, Addis Ababa, Ethiopia', 9.0317, 38.7990],
    ['Lideta, Addis Ababa, Ethiopia', 9.0150, 38.7350],
    ['Merkato, Addis Ababa, Ethiopia', 9.0330, 38.7240],
    ['Jemo, Addis Ababa, Ethiopia', 8.9610, 38.7010],
    ['Kera, Addis Ababa, Ethiopia', 9.0000, 38.7300],
    ['Gotera, Addis Ababa, Ethiopia', 8.9800, 38.7550],
    ['Nifas Silk Lafto, Addis Ababa, Ethiopia', 8.9700, 38.7200],
    ['Akaki Kality, Addis Ababa, Ethiopia', 8.8800, 38.7900],
    ['Old Airport, Addis Ababa, Ethiopia', 9.0060, 38.7760],
    ['Summit, Addis Ababa, Ethiopia', 9.0450, 38.8500],
    ['Kotebe, Addis Ababa, Ethiopia', 9.0480, 38.8300],
    ['Addis Ababa, Ethiopia', 9.0320, 38.7469]

].map(([name, latitude, longitude]) => ({
    name,
    latitude,
    longitude
}));


async function loadLocations() {

    let loaded = false;

    try {

        const data = await api('/locations');

        if (
            Array.isArray(data.data) &&
            data.data.length
        ) {
            locations = data.data;
            loaded = true;
        }

    } catch (e) {

        console.warn(
            'Using local location list:',
            e.message
        );
    }

    if (!loaded) {
        locations = fallbackLocations;
    }

    fillLocationSelect($('customerLocation'));
    fillLocationSelect($('techLocation'));
}


function fillLocationSelect(select) {

    if (!select) return;

    const oldValue = select.value;

    select.innerHTML = '';

    const firstOption =
        document.createElement('option');

    firstOption.value = '';
    firstOption.textContent = t('selectLocation');

    select.appendChild(firstOption);

    locations.forEach(item => {

        const option =
            document.createElement('option');

        option.value = item.name;

        option.textContent =
            translateLocation(item.name);

        option.dataset.latitude =
            item.latitude;

        option.dataset.longitude =
            item.longitude;

        select.appendChild(option);
    });

    /*
       Try to preserve previously selected location
    */

    if (
        oldValue &&
        locations.some(x => x.name === oldValue)
    ) {
        select.value = oldValue;
    }
}


/* =========================================================
   SELECT LOCATION
========================================================= */

function applySelectedLocation(
    select,
    latInput,
    lngInput,
    statusEl
) {

    const option =
        select.options[select.selectedIndex];

    if (
        !option ||
        !option.dataset.latitude
    ) {

        latInput.value = '';
        lngInput.value = '';

        if (statusEl) {
            statusEl.textContent = t('selectArea');
        }

        return;
    }

    latInput.value =
        option.dataset.latitude;

    lngInput.value =
        option.dataset.longitude;

    if (statusEl) {
        statusEl.textContent =
            translateLocation(option.value);
    }
}


/* =========================================================
   PROFESSIONS
========================================================= */

let professions = [];

const fallbackProfessions = [

    [7, 'Carpenter'],
    [11, 'Computer Maintenance'],
    [2, 'Electrician'],
    [9, 'Fridge Maintenance'],
    [4, 'Home Cleaner'],
    [3, 'Home Painter'],
    [12, 'Phone Maintenance'],
    [5, 'Pipe Maintenance'],
    [6, 'Plumber'],
    [1, 'TV Maintenance'],
    [10, 'Washing Machine Maintenance'],
    [8, 'Welder']

].map(([profession_id, name]) => ({
    profession_id,
    name
}));


async function loadProfessions() {

    let loaded = false;

    try {

        const data =
            await api('/professions');

        if (
            Array.isArray(data.data) &&
            data.data.length
        ) {
            professions = data.data;
            loaded = true;
        }

    } catch (e) {

        console.warn(
            'Using local profession list:',
            e.message
        );
    }

    if (!loaded) {
        professions = fallbackProfessions;
    }

    fillProfessionSelect(
        $('searchProfession')
    );

    fillProfessionSelect(
        $('registerProfession')
    );
}


function fillProfessionSelect(select) {

    if (!select) return;

    const oldValue = select.value;

    select.innerHTML = '';

    const first =
        document.createElement('option');

    first.value = '';
    first.textContent =
        t('selectProfession');

    select.appendChild(first);

    professions.forEach(p => {

        const option =
            document.createElement('option');

        option.value =
            p.profession_id;

        option.textContent =
            translateProfession(p.name);

        /*
           Save original English/API name
           so we can translate again.
        */

        option.dataset.originalName =
            p.name;

        select.appendChild(option);
    });

    if (
        oldValue &&
        professions.some(
            p => String(p.profession_id) === String(oldValue)
        )
    ) {
        select.value = oldValue;
    }
}


/* =========================================================
   MAP
========================================================= */

function initMap() {

    const mapElement = $('map');

    if (!mapElement) return;

    window.map =
        L.map('map').setView(
            [9.03, 38.74],
            12
        );

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(window.map);

    window.markers = [];
}


function clearMarkers() {

    if (!window.markers) {
        window.markers = [];
        return;
    }

    window.markers.forEach(marker => {

        if (window.map) {
            window.map.removeLayer(marker);
        }
    });

    window.markers = [];
}


/* =========================================================
   MAP LOCATION
========================================================= */

function setLocation(
    lat,
    lng,
    text = null
) {

    $('customerLat').value = lat;
    $('customerLng').value = lng;

    $('locationStatus').textContent =
        text || t('locationSelected');

    if (window.map) {
        window.map.setView(
            [lat, lng],
            14
        );
    }
}


/* =========================================================
   SEARCH
========================================================= */

async function searchTechnicians() {

    try {

        const profession =
            $('searchProfession').value;

        const lat =
            $('customerLat').value;

        const lng =
            $('customerLng').value;

        const radius =
            $('searchRadius').value;

        if (
            !profession ||
            !lat ||
            !lng
        ) {

            showAlert(
                t('selectProfessionLocation'),
                'error'
            );

            return;
        }

        const url =
            `/technicians/nearby?latitude=${encodeURIComponent(lat)}` +
            `&longitude=${encodeURIComponent(lng)}` +
            `&profession_id=${encodeURIComponent(profession)}` +
            `&radius=${encodeURIComponent(radius)}`;

        const data =
            await api(url);

        renderResults(
            data.data.technicians
        );

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   RESULTS
========================================================= */

function renderResults(items) {

    const results =
        $('results');

    clearMarkers();

    if (!items || !items.length) {

        results.innerHTML = `
            <div class="card">
                <strong>
                    ${escapeHtml(t('noTechnicians'))}
                </strong>
            </div>
        `;

        return;
    }

    results.innerHTML = '';

    items.forEach(tn => {

        const card =
            document.createElement('div');

        card.className =
            'result-card';

        const img =
            tn.photo_url

                ? `
                    <img
                        src="${escapeHtml(tn.photo_url)}"
                        alt="${escapeHtml(tn.name)}"
                    >
                  `

                : `
                    <img
                        src="data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="75"
                                 height="75">
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#e8edf4"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    text-anchor="middle"
                                    dominant-baseline="middle"
                                    fill="#697586">
                                    ${t('noPhoto')}
                                </text>
                            </svg>
                        `)}"
                        alt="${escapeHtml(t('noPhoto'))}"
                    >
                  `;

        const translatedProfession =
            translateProfession(
                tn.profession
            );

        const translatedLocation =
            translateLocation(
                tn.location
            );

        card.innerHTML = `

            ${img}

            <div>

                <h3>
                    ${escapeHtml(tn.name)}
                </h3>

                <p>
                    <strong>
                        ${escapeHtml(translatedProfession)}
                    </strong>
                </p>

                <p>
                    ${escapeHtml(translatedLocation)}
                    · ${tn.distance_km} km
                </p>

                <a
                    class="call"
                    href="tel:${escapeHtml(tn.phone)}"
                >
                    ${escapeHtml(t('call'))}
                    ${escapeHtml(tn.phone)}
                </a>

            </div>
        `;

        results.appendChild(card);

        if (window.map) {

            const marker =
                L.marker([
                    tn.latitude,
                    tn.longitude
                ]).addTo(window.map);

            marker.bindPopup(`

                <strong>
                    ${escapeHtml(tn.name)}
                </strong>

                <br>

                ${escapeHtml(translatedProfession)}

                <br>

                ${tn.distance_km} km

                <br>

                <a
                    href="tel:${escapeHtml(tn.phone)}"
                >
                    ${escapeHtml(t('call'))}
                </a>
            `);

            window.markers.push(marker);
        }
    });

    const first =
        items[0];

    if (
        window.map &&
        first.latitude &&
        first.longitude
    ) {

        window.map.setView(
            [
                first.latitude,
                first.longitude
            ],
            14
        );
    }
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {

    return String(value ?? '')
        .replace(
            /[&<>"']/g,
            m => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            }[m])
        );
}


/* =========================================================
   ADMIN
========================================================= */

async function checkAdmin() {

    try {

        const data =
            await api('/admin/me');

        if (data.data.authenticated) {

            $('adminLogin')
                .classList.add('hidden');

            $('adminPanel')
                .classList.remove('hidden');

            loadAdminTechnicians();

        } else {

            $('adminLogin')
                .classList.remove('hidden');

            $('adminPanel')
                .classList.add('hidden');
        }

    } catch {

        $('adminLogin')
            .classList.remove('hidden');

        $('adminPanel')
            .classList.add('hidden');
    }
}


/* =========================================================
   ADMIN TECHNICIANS
========================================================= */

async function loadAdminTechnicians() {

    try {

        const data =
            await api('/admin/technicians');

        const rows =
            data.data;

        if (!rows.length) {

            $('adminTechnicians').innerHTML = `
                <p>
                    ${escapeHtml(
                        t('noRegisteredTechnicians')
                    )}
                </p>
            `;

            return;
        }

        let html = `

            <table>

                <thead>

                    <tr>

                        <th>${escapeHtml(t('name'))}</th>
                        <th>${escapeHtml(t('phoneNumber'))}</th>
                        <th>${escapeHtml(t('profession'))}</th>
                        <th>${escapeHtml(t('location'))}</th>
                        <th>${escapeHtml(t('status'))}</th>
                        <th>${escapeHtml(t('action'))}</th>

                    </tr>

                </thead>

                <tbody>
        `;

        rows.forEach(technician => {

            html += `

                <tr>

                    <td>
                        ${escapeHtml(technician.name)}
                    </td>

                    <td>
                        ${escapeHtml(technician.phone)}
                    </td>

                    <td>
                        ${escapeHtml(
                            translateProfession(
                                technician.profession
                            )
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            translateLocation(
                                technician.location
                            )
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            technician.status
                        )}
                    </td>

                    <td>

                        <select
                            onchange="updateStatus(
                                ${technician.technician_id},
                                this.value
                            )"
                        >

                            <option value="">
                                ${escapeHtml(t('change'))}
                            </option>

                            <option value="ACTIVE">
                                ACTIVE
                            </option>

                            <option value="SUSPENDED">
                                SUSPENDED
                            </option>

                            <option value="REJECTED">
                                REJECTED
                            </option>

                            <option value="PENDING">
                                PENDING
                            </option>

                        </select>

                    </td>

                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        $('adminTechnicians')
            .innerHTML = html;

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   UPDATE TECHNICIAN STATUS
========================================================= */

window.updateStatus =
    async function(id, status) {

        if (!status) return;

        try {

            const me =
                await api('/admin/me');

            await api(
                '/admin/technicians/status',
                {
                    method: 'POST',

                    headers: {
                        'X-CSRF-Token':
                            me.data.csrf
                    },

                    body: JSON.stringify({
                        technician_id: id,
                        status: status
                    })
                }
            );

            showAlert(
                t('technicianStatusUpdated')
            );

            loadAdminTechnicians();

        } catch (e) {

            showAlert(
                e.message,
                'error'
            );
        }
    };


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    async () => {

        /*
           Language
        */

        const languageSelect =
            $('languageSelect');

        if (languageSelect) {

            languageSelect.value =
                currentLanguage;

            applyLanguage(
                currentLanguage
            );

            languageSelect.addEventListener(
                'change',
                async function() {

                    applyLanguage(
                        this.value
                    );
                }
            );
        }

        /*
           Map
        */

        initMap();

        /*
           Load database lists
        */

        await loadProfessions();
        await loadLocations();

        /*
           Search button
        */

        const searchBtn =
            $('searchBtn');

        if (searchBtn) {

            searchBtn.addEventListener(
                'click',
                searchTechnicians
            );
        }

        /*
           Customer location
        */

        const customerLocation =
            $('customerLocation');

        if (customerLocation) {

            customerLocation.addEventListener(
                'change',
                () => {

                    applySelectedLocation(
                        customerLocation,
                        $('customerLat'),
                        $('customerLng'),
                        $('locationStatus')
                    );

                    const option =
                        customerLocation.options[
                            customerLocation.selectedIndex
                        ];

                    if (
                        option &&
                        option.dataset.latitude &&
                        window.map
                    ) {

                        window.map.setView(
                            [
                                parseFloat(
                                    option.dataset.latitude
                                ),

                                parseFloat(
                                    option.dataset.longitude
                                )
                            ],
                            14
                        );
                    }
                }
            );
        }

        /*
           Technician location
        */

        const techLocation =
            $('techLocation');

        if (techLocation) {

            techLocation.addEventListener(
                'change',
                () => {

                    applySelectedLocation(
                        techLocation,
                        $('techLat'),
                        $('techLng')
                    );
                }
            );
        }

        /*
           Registration
        */

        const registrationForm =
            $('registrationForm');

        if (registrationForm) {

            registrationForm.addEventListener(
                'submit',
                handleRegistration
            );
        }

        /*
           Payment
        */

        const payBtn =
            $('payBtn');

        if (payBtn) {

            payBtn.addEventListener(
                'click',
                handleRegistrationPayment
            );
        }

        /*
           Registration OTP
        */

        const verifyBtn =
            $('verifyBtn');

        if (verifyBtn) {

            verifyBtn.addEventListener(
                'click',
                handleRegistrationOtp
            );
        }

        /*
           Support
        */

        const supportForm =
            $('supportForm');

        if (supportForm) {

            supportForm.addEventListener(
                'submit',
                handleSupport
            );
        }

        /*
           Admin login
        */

        const adminLoginForm =
            $('adminLoginForm');

        if (adminLoginForm) {

            adminLoginForm.addEventListener(
                'submit',
                handleAdminLogin
            );
        }

        /*
           Profession
        */

        const professionForm =
            $('professionForm');

        if (professionForm) {

            professionForm.addEventListener(
                'submit',
                handleCreateProfession
            );
        }

        /*
           Admin logout
        */

        const adminLogout =
            $('adminLogout');

        if (adminLogout) {

            adminLogout.addEventListener(
                'click',
                handleAdminLogout
            );
        }
    }
);


/* =========================================================
   REGISTRATION
========================================================= */

async function handleRegistration(e) {

    e.preventDefault();

    try {

        if (
            !$('techLat').value ||
            !$('techLng').value
        ) {

            showAlert(
                t('selectLocationFromList'),
                'error'
            );

            return;
        }
        
        const formData = new FormData(e.target);


        const data =
            await api(
                '/technicians/register',
                {
                    method: 'POST',
                    body: formData
                }
            );

        $('paymentCard')
            .classList.remove('hidden');

        $('paymentReference').value =
            data.data.reference_no;

        $('paymentPhone').value =
            formData.get('phone');

        $('payBtn').dataset.reference =
            data.data.reference_no;

        $('payBtn').dataset.phone =
            formData.get('phone');

        showAlert(
            data.message
        );

        $('paymentCard')
            .scrollIntoView({
                behavior: 'smooth'
            });

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   REGISTRATION PAYMENT
========================================================= */

async function handleRegistrationPayment() {

    try {

        const reference =
            $('payBtn').dataset.reference;

        const phone =
            $('payBtn').dataset.phone;

        const data =
            await api(
                '/payments/registration/start',
                {
                    method: 'POST',

                    body: JSON.stringify({
                        reference_no: reference,
                        phone: phone
                    })
                }
            );

        $('otpCard')
            .classList.remove('hidden');

        if (
            data.data &&
            data.data.development_otp
        ) {

            $('devOtp').textContent =
                `${t('localTestOtp')}: ${data.data.development_otp}`;

            $('devOtp')
                .classList.remove('hidden');
        }

        showAlert(
            data.message
        );

        $('otpCard')
            .scrollIntoView({
                behavior: 'smooth'
            });

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   REGISTRATION OTP
========================================================= */

async function handleRegistrationOtp() {

    try {

        const reference =
            $('payBtn').dataset.reference;

        const phone =
            $('payBtn').dataset.phone;

        const otp =
            $('otp').value.trim();

        const data =
            await api(
                '/payments/registration/verify',
                {
                    method: 'POST',

                    body: JSON.stringify({
                        reference_no: reference,
                        phone: phone,
                        otp: otp
                    })
                }
            );

        showAlert(
            data.message
        );

        $('otpCard')
            .classList.add('hidden');

        $('paymentCard')
            .classList.add('hidden');

        $('registrationForm')
            .reset();

        $('devOtp')
            .classList.add('hidden');

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   SUPPORT
========================================================= */

async function handleSupport(e) {

    e.preventDefault();

    try {

        const phone =
            e.target.phone.value.trim();

        const amount =
            e.target.amount.value.trim();

        if (!phone) {

            showAlert(
                t('phoneRequired'),
                'error'
            );

            return;
        }

        if (
            !amount ||
            Number(amount) <= 0
        ) {

            showAlert(
                t('validAmount'),
                'error'
            );

            return;
        }

        const data =
            await api(
                '/support',
                {
                    method: 'POST',

                    body: JSON.stringify({
                        phone: phone,
                        amount: amount
                    })
                }
            );

        e.target.dataset.reference =
            data.data.reference_no;

        e.target.dataset.phone =
            phone;

        let otpArea =
            $('supportOtpArea');

        if (!otpArea) {

            otpArea =
                document.createElement('div');

            otpArea.id =
                'supportOtpArea';

            otpArea.className =
                'card';

            otpArea.innerHTML = `

                <h3>
                    ${escapeHtml(
                        t('verifySupportOtp')
                    )}
                </h3>

                <p id="supportOtpMessage">
                    ${escapeHtml(
                        t('supportOtpDescription')
                    )}
                </p>

                <div
                    id="supportDevOtp"
                    class="alert"
                    style="margin-bottom:10px;"
                ></div>

                <label>
                    ${escapeHtml(t('otp'))}

                    <input
                        type="text"
                        id="supportOtp"
                        maxlength="6"
                        inputmode="numeric"
                        placeholder="${escapeHtml(
                            t('enterOtp')
                        )}"
                    >
                </label>

                <button
                    type="button"
                    id="completeSupportBtn"
                >
                    ${escapeHtml(
                        t('completeSupport')
                    )}
                </button>
            `;

            e.target.parentNode
                .appendChild(otpArea);

            $('completeSupportBtn')
                .addEventListener(
                    'click',
                    async () => {

                        try {

                            const otp =
                                $('supportOtp')
                                    .value
                                    .trim();

                            const reference =
                                e.target.dataset.reference;

                            const phoneNumber =
                                e.target.dataset.phone;

                            if (
                                !/^\d{6}$/.test(otp)
                            ) {

                                showAlert(
                                    t('validOtp'),
                                    'error'
                                );

                                return;
                            }

                            const result =
                                await api(
                                    '/support/verify',
                                    {
                                        method: 'POST',

                                        body: JSON.stringify({
                                            reference_no:
                                                reference,

                                            phone:
                                                phoneNumber,

                                            otp:
                                                otp
                                        })
                                    }
                                );

                            showAlert(
                                result.message ||
                                t('supportDescription')
                            );

                            otpArea.remove();

                            e.target.reset();

                            delete e.target.dataset.reference;
                            delete e.target.dataset.phone;

                        } catch (error) {

                            showAlert(
                                error.message,
                                'error'
                            );
                        }
                    }
                );
        }

        if (
            data.data &&
            data.data.development_otp
        ) {

            $('supportDevOtp').textContent =
                `${t('localTestOtp')}: ${data.data.development_otp}`;
        }

        otpArea.classList.remove('hidden');

        otpArea.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        showAlert(
            data.message
        );

    } catch (error) {

        showAlert(
            error.message,
            'error'
        );
    }
}


/* =========================================================
   ADMIN LOGIN
========================================================= */

async function handleAdminLogin(e) {

    e.preventDefault();

    try {

        const data =
            await api(
                '/admin/login',
                {
                    method: 'POST',

                    body: JSON.stringify({
                        username:
                            e.target.username.value,

                        password:
                            e.target.password.value
                    })
                }
            );

        showAlert(
            data.message
        );

        checkAdmin();

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   CREATE PROFESSION
========================================================= */

async function handleCreateProfession(e) {

    e.preventDefault();

    try {

        const me =
            await api('/admin/me');

        await api(
            '/admin/professions',
            {
                method: 'POST',

                headers: {
                    'X-CSRF-Token':
                        me.data.csrf
                },

                body: JSON.stringify({
                    name:
                        e.target.name.value
                })
            }
        );

        showAlert(
            t('professionCreated')
        );

        e.target.reset();

        await loadProfessions();

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   ADMIN LOGOUT
========================================================= */

async function handleAdminLogout() {

    try {

        await api(
            '/admin/logout',
            {
                method: 'POST'
            }
        );

        showAlert(
            t('loggedOut')
        );

        checkAdmin();

    } catch (e) {

        showAlert(
            e.message,
            'error'
        );
    }
}


/* =========================================================
   OPTIONAL GEOLOCATION
========================================================= */

const useLocationBtn =
    $('useLocationBtn');

if (useLocationBtn) {

    useLocationBtn.addEventListener(
        'click',
        () => {

            if (!navigator.geolocation) {

                showAlert(
                    'Geolocation is not supported by this browser.',
                    'error'
                );

                return;
            }

            $('locationStatus').textContent =
                'Requesting location...';

            navigator.geolocation.getCurrentPosition(

                position => {

                    setLocation(
                        position.coords.latitude,
                        position.coords.longitude,
                        t('currentLocationSelected')
                    );
                },

                () => {

                    showAlert(
                        'Could not get your location.',
                        'error'
                    );
                },

                {
                    enableHighAccuracy: true,
                    timeout: 10000
                }
            );
        }
    );
}