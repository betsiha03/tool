<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Technical Service Finder</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossorigin="">

    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #06b6d4;
            --dark: #0f172a;
            --text: #334155;
            --muted: #64748b;
            --light: #f8fafc;
            --border: #e2e8f0;
            --white: #ffffff;
            --success: #16a34a;
            --danger: #dc2626;
            --warning: #f59e0b;
            --shadow: 0 20px 50px rgba(15, 23, 42, .10);
            --radius: 20px;
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            font-family: "Inter", sans-serif;
            color: var(--text);
            background: #f8fafc;
        }

        button,
        input,
        select,
        textarea {
            font: inherit;
        }

        button {
            cursor: pointer;
        }

        /* =========================
           HEADER
        ========================= */

        .topbar {
            position: sticky;
            top: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
            padding: 14px 6%;
            color: white;
            background: rgba(15, 23, 42, .94);
            backdrop-filter: blur(16px);
            box-shadow: 0 5px 25px rgba(0,0,0,.12);
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 250px;
        }

        .brand-icon {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            font-size: 23px;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            box-shadow: 0 8px 25px rgba(37,99,235,.35);
        }

        .brand h1 {
            margin: 0;
            font-size: 18px;
            font-weight: 800;
        }

        .brand p {
            margin: 3px 0 0;
            color: #cbd5e1;
            font-size: 11px;
        }

        nav {
            display: flex;
            align-items: center;
            gap: 7px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        nav button {
            border: 0;
            background: transparent;
            color: #cbd5e1;
            padding: 10px 13px;
            border-radius: 10px;
            font-weight: 600;
            transition: .2s;
        }

        nav button:hover {
            color: white;
            background: rgba(255,255,255,.10);
        }

        nav button:first-child {
            color: white;
            background: var(--primary);
        }

        .language-selector {
            position: fixed;
            top: 84px;
            right: 22px;
            z-index: 1100;
        }

        .language-selector select {
            border: 1px solid rgba(255,255,255,.2);
            background: white;
            color: var(--dark);
            padding: 9px 12px;
            border-radius: 10px;
            outline: none;
            box-shadow: 0 8px 25px rgba(0,0,0,.12);
        }

        /* =========================
           HERO
        ========================= */

        .hero {
            position: relative;
            overflow: hidden;
            min-height: 570px;
            display: flex;
            align-items: center;
            padding: 80px 6%;
            color: white;
            background:
                radial-gradient(circle at 85% 20%, rgba(6,182,212,.35), transparent 28%),
                radial-gradient(circle at 10% 80%, rgba(37,99,235,.40), transparent 30%),
                linear-gradient(135deg, #0f172a 0%, #172554 55%, #0c4a6e 100%);
        }

        .hero::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.08);
            right: -150px;
            top: -120px;
        }

        .hero::after {
            content: "";
            position: absolute;
            width: 350px;
            height: 350px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,.06);
            right: 50px;
            bottom: -180px;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 730px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 13px;
            border: 1px solid rgba(255,255,255,.16);
            border-radius: 100px;
            background: rgba(255,255,255,.08);
            color: #bfdbfe;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .hero h2 {
            margin: 0;
            font-size: clamp(38px, 6vw, 68px);
            line-height: 1.03;
            letter-spacing: -2.5px;
        }

        .hero h2 span {
            color: #38bdf8;
        }

        .hero p {
            max-width: 650px;
            margin: 23px 0 30px;
            color: #cbd5e1;
            font-size: 18px;
            line-height: 1.7;
        }

        .hero-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .hero-btn {
            border: 0;
            padding: 14px 22px;
            border-radius: 12px;
            font-weight: 700;
            transition: .2s;
        }

        .hero-btn.primary {
            color: white;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            box-shadow: 0 12px 30px rgba(37,99,235,.3);
        }

        .hero-btn.secondary {
            color: white;
            border: 1px solid rgba(255,255,255,.2);
            background: rgba(255,255,255,.08);
        }

        .hero-btn:hover {
            transform: translateY(-2px);
        }

        /* =========================
           TRUST BAR
        ========================= */

        .trust-bar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            max-width: 1100px;
            margin: -42px auto 55px;
            position: relative;
            z-index: 10;
            background: white;
            border-radius: 18px;
            box-shadow: var(--shadow);
            overflow: hidden;
        }

        .trust-item {
            padding: 25px;
            text-align: center;
            border-right: 1px solid var(--border);
        }

        .trust-item:last-child {
            border-right: 0;
        }

        .trust-item strong {
            display: block;
            color: var(--dark);
            font-size: 18px;
        }

        .trust-item span {
            color: var(--muted);
            font-size: 12px;
        }

        /* =========================
           MAIN
        ========================= */

        .container {
            width: min(1200px, 92%);
            margin: auto;
            padding-bottom: 60px;
        }

        .section {
            display: none;
            animation: fadeUp .35s ease;
        }

        .section.active {
            display: block;
        }

        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section-heading {
            text-align: center;
            margin-bottom: 30px;
        }

        .section-heading h2 {
            margin: 0 0 8px;
            color: var(--dark);
            font-size: 30px;
        }

        .section-heading p {
            margin: 0;
            color: var(--muted);
        }

        .card {
            background: white;
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 30px;
            margin-bottom: 25px;
            box-shadow: 0 8px 30px rgba(15,23,42,.05);
        }

        .card h2,
        .card h3 {
            color: var(--dark);
            margin-top: 0;
        }

        .card > p {
            color: var(--muted);
        }

        .narrow {
            max-width: 620px;
            margin-left: auto;
            margin-right: auto;
        }

        .search-card {
            margin-top: -10px;
        }

        .search-card-header {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            align-items: center;
            margin-bottom: 24px;
        }

        .search-card-header h2 {
            margin-bottom: 5px;
        }

        .search-icon {
            width: 55px;
            height: 55px;
            display: grid;
            place-items: center;
            border-radius: 16px;
            color: white;
            font-size: 24px;
            background: linear-gradient(135deg, #2563eb, #06b6d4);
        }

        .grid {
            display: grid;
            gap: 18px;
        }

        .grid.two {
            grid-template-columns: repeat(2, 1fr);
        }

        label {
            display: block;
            color: var(--dark);
            font-size: 13px;
            font-weight: 700;
        }

        input,
        select,
        textarea {
            width: 100%;
            margin-top: 8px;
            padding: 13px 14px;
            border: 1px solid var(--border);
            border-radius: 11px;
            background: #fff;
            color: var(--dark);
            outline: none;
            transition: .2s;
        }

        input:focus,
        select:focus,
        textarea:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(37,99,235,.10);
        }

        textarea {
            resize: vertical;
        }

        .location-box {
            margin-top: 18px;
            padding: 18px;
            border-radius: 15px;
            background: #f0f9ff;
            border: 1px solid #bae6fd;
        }

        .location-box span {
            display: block;
            margin-top: 10px;
            color: #0369a1;
            font-size: 12px;
        }

        .primary {
            border: 0;
            color: white;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            box-shadow: 0 10px 25px rgba(37,99,235,.18);
        }

        .primary:hover {
            background: linear-gradient(135deg, var(--primary-dark), #0891b2);
            transform: translateY(-1px);
        }

        .wide {
            width: 100%;
            padding: 15px 20px;
            margin-top: 20px;
            border-radius: 12px;
            font-weight: 700;
        }

        /* =========================
           RESULTS + MAP
        ========================= */

        .results-layout {
            display: grid;
            grid-template-columns: .85fr 1.15fr;
            gap: 20px;
        }

        .results {
            min-height: 250px;
        }

        #map {
            height: 560px;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid var(--border);
            box-shadow: var(--shadow);
            background: #e2e8f0;
        }

        .result-card {
            display: flex;
            gap: 15px;
            padding: 17px;
            margin-bottom: 12px;
            background: white;
            border: 1px solid var(--border);
            border-radius: 16px;
            transition: .2s;
        }

        .result-card:hover {
            border-color: #93c5fd;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(15,23,42,.08);
        }

        .result-card img {
            width: 75px;
            height: 75px;
            flex-shrink: 0;
            object-fit: cover;
            border-radius: 14px;
            background: #e2e8f0;
        }

        .result-card h3 {
            margin: 2px 0 6px;
            color: var(--dark);
        }

        .result-card p {
            margin: 5px 0;
            color: var(--muted);
            font-size: 13px;
        }

        .call {
            display: inline-block;
            margin-top: 7px;
            padding: 8px 12px;
            color: white;
            background: var(--success);
            border-radius: 8px;
            text-decoration: none;
            font-size: 12px;
            font-weight: 700;
        }

        /* =========================
           FEATURES
        ========================= */

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin: 35px 0;
        }

        .feature {
            padding: 25px;
            background: white;
            border: 1px solid var(--border);
            border-radius: 18px;
        }

        .feature-icon {
            width: 45px;
            height: 45px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: #eff6ff;
            color: var(--primary);
            font-size: 20px;
            margin-bottom: 15px;
        }

        .feature h3 {
            color: var(--dark);
            margin: 0 0 8px;
        }

        .feature p {
            color: var(--muted);
            font-size: 13px;
            line-height: 1.6;
            margin: 0;
        }

        /* =========================
           ALERT
        ========================= */

        .alert {
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2000;
            min-width: 280px;
            max-width: 90%;
            padding: 14px 20px;
            border-radius: 12px;
            color: white;
            background: var(--success);
            box-shadow: 0 15px 35px rgba(0,0,0,.2);
            font-weight: 600;
        }

        .alert.error {
            background: var(--danger);
        }

        .alert.hidden,
        .hidden {
            display: none !important;
        }

        /* =========================
           ADMIN
        ========================= */

        .admin-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }

        .danger {
            padding: 10px 15px;
            border: 0;
            border-radius: 9px;
            color: white;
            background: var(--danger);
        }

        .inline-form {
            display: flex;
            gap: 10px;
        }

        .inline-form input {
            margin: 0;
        }

        .inline-form button {
            padding: 0 20px;
            border-radius: 10px;
        }

        .table-wrap {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 13px;
            text-align: left;
            border-bottom: 1px solid var(--border);
            font-size: 13px;
        }

        th {
            color: var(--dark);
            background: #f8fafc;
        }

        .dev-note {
            margin-top: 15px;
            padding: 12px;
            border-radius: 10px;
            color: #92400e;
            background: #fef3c7;
            font-weight: 700;
        }

        /* =========================
           FOOTER
        ========================= */

        footer {
            padding: 35px 20px;
            color: #94a3b8;
            text-align: center;
            background: #0f172a;
        }

        footer strong {
            color: white;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 900px) {
            .topbar {
                align-items: flex-start;
                flex-direction: column;
            }

            nav {
                width: 100%;
                justify-content: flex-start;
                overflow-x: auto;
                flex-wrap: nowrap;
            }

            nav button {
                white-space: nowrap;
            }

            .language-selector {
                top: 15px;
                right: 15px;
            }

            .hero {
                min-height: 520px;
                padding: 65px 5%;
            }

            .hero h2 {
                font-size: 43px;
            }

            .trust-bar {
                grid-template-columns: repeat(2, 1fr);
                width: 90%;
            }

            .trust-item:nth-child(2) {
                border-right: 0;
            }

            .trust-item:nth-child(-n+2) {
                border-bottom: 1px solid var(--border);
            }

            .results-layout {
                grid-template-columns: 1fr;
            }

            #map {
                height: 420px;
            }

            .features {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .brand p {
                display: none;
            }

            .hero {
                padding-top: 55px;
            }

            .hero h2 {
                font-size: 38px;
            }

            .hero p {
                font-size: 15px;
            }

            .grid.two {
                grid-template-columns: 1fr;
            }

            .card {
                padding: 20px;
            }

            .trust-bar {
                grid-template-columns: 1fr 1fr;
            }

            .trust-item {
                padding: 18px 10px;
            }

            .search-card-header {
                align-items: flex-start;
            }
        }
    </style>
</head>

<body>

<!-- LANGUAGE -->
<div class="language-selector">
    <select id="languageSelect" aria-label="Language">
        <option value="en">English</option>
        <option value="am">አማርኛ</option>
        <option value="om">Afaan Oromoo</option>
    </select>
</div>

<!-- HEADER -->
<header class="topbar">

    <div class="brand">
        <div class="brand-icon">🔧</div>

        <div>
            <h1 data-i18n="title">Technical Service Finder</h1>
            <p data-i18n="subtitle">
                Find trusted nearby technical professionals.
            </p>
        </div>
    </div>

    <nav>
        <button onclick="showSection('find')" data-i18n="findTechnician">
            Find Technician
        </button>

        <button onclick="showSection('register')" data-i18n="registerTechnician">
            Register as Technician
        </button>

        <button onclick="showSection('support')" data-i18n="supportPlatform">
            Support Platform
        </button>

        <button onclick="showSection('admin')" data-i18n="admin">
            Admin
        </button>
    </nav>

</header>

<!-- HERO -->
<section class="hero">

    <div class="hero-content">

        <div class="hero-badge">
            <span>●</span>
            <span>Reliable Technical Support</span>
        </div>

        <h2>
            Find the right
            <span>technician</span>
            near you.
        </h2>

        <p>
            Connect with trusted electricians, plumbers, computer technicians,
            appliance specialists and other professionals in your area.
            Fast, simple and designed for local service.
        </p>

        <div class="hero-actions">

            <button class="hero-btn primary"
                    onclick="showSection('find')">
                🔍 Find a Technician
            </button>

            <button class="hero-btn secondary"
                    onclick="showSection('register')">
                🧰 Join as Technician
            </button>

        </div>

    </div>

</section>

<!-- TRUST BAR -->
<div class="trust-bar">

    <div class="trust-item">
        <strong>📍 Nearby</strong>
        <span>Find professionals around you</span>
    </div>

    <div class="trust-item">
        <strong>⚡ Fast</strong>
        <span>Search technicians quickly</span>
    </div>

    <div class="trust-item">
        <strong>📞 Direct Call</strong>
        <span>Contact technicians directly</span>
    </div>

    <div class="trust-item">
        <strong>🌍 3 Languages</strong>
        <span>English · Amharic · Afaan Oromoo</span>
    </div>

</div>

<main class="container">

    <div id="alert" class="alert hidden"></div>

    <!-- FIND -->
    <section id="find" class="section active">

        <div class="section-heading">
            <h2>Find a Technician</h2>
            <p>
                Search for a technical professional close to your location.
            </p>
        </div>

        <div class="card search-card">

            <div class="search-card-header">

                <div>
                    <h2>🔎 Search Nearby</h2>
                    <p>
                        No customer account is required.
                    </p>
                </div>

                <div class="search-icon">
                    🔧
                </div>

            </div>

            <div class="grid two">

                <label>
                    Profession
                    <select id="searchProfession">
                        <option value="">Select profession</option>
                    </select>
                </label>

                <label>
                    Search radius
                    <select id="searchRadius">
                        <option value="3">3 km</option>
                        <option value="5">5 km</option>
                        <option value="10">10 km</option>
                    </select>
                </label>

            </div>

            <div class="location-box">

                <label>
                    📍 Customer Location

                    <select id="customerLocation" required>
                        <option value="">
                            Select your location
                        </option>
                    </select>
                </label>

                <span id="locationStatus">
                    Select your area. Coordinates are stored automatically
                    for distance search.
                </span>

            </div>

            <input id="customerLat" type="hidden">
            <input id="customerLng" type="hidden">

            <button class="primary wide" id="searchBtn">
                🔍 Search Nearby Technicians
            </button>

        </div>

        <div class="results-layout">

            <div id="results" class="results"></div>

            <div id="map"></div>

        </div>

        <div class="features">

            <div class="feature">
                <div class="feature-icon">📍</div>
                <h3>Local Professionals</h3>
                <p>
                    Search technicians according to your selected location
                    and distance.
                </p>
            </div>

            <div class="feature">
                <div class="feature-icon">📞</div>
                <h3>Call Directly</h3>
                <p>
                    Contact available technicians directly using their
                    registered phone number.
                </p>
            </div>

            <div class="feature">
                <div class="feature-icon">🛠️</div>
                <h3>Many Services</h3>
                <p>
                    Find help for electrical, plumbing, appliances,
                    computers and more.
                </p>
            </div>

        </div>

    </section>

    <!-- REGISTER -->
    <section id="register" class="section">

        <div class="section-heading">
            <h2>Become a Technician</h2>
            <p>
                Register your professional service and connect with customers.
            </p>
        </div>

        <div class="card">

            <h2>🧰 Technician Registration</h2>

            <p>
                A phone number may register once for each profession.
            </p>

            <form id="registrationForm">

                <div class="grid two">

                    <label>
                        Full Name *
                        <input name="name" required>
                    </label>

                    <label>
                        Phone Number *
                        <input
                            name="phone"
                            required
                            placeholder="09xxxxxxxx">
                    </label>

                    <label>
                        Profession *
                        <select
                            name="profession_id"
                            id="registerProfession"
                            required>
                            <option value="">
                                Select profession
                            </option>
                        </select>
                    </label>

                    <label>
                        Location *
                        <select
                            name="location"
                            id="techLocation"
                            required>
                            <option value="">
                                Select your location
                            </option>
                        </select>
                    </label>

                    <input
                        name="latitude"
                        id="techLat"
                        type="hidden">

                    <input
                        name="longitude"
                        id="techLng"
                        type="hidden">

                </div>

                <label style="margin-top:18px;">
                    Photo
                    <input
                        name="photo"
                        type="file"
                        accept="image/jpeg,image/png,image/webp">
                </label>

                <label style="margin-top:18px;">
                    Protection / Safety Message

                    <textarea
                        name="protection_message"
                        rows="4"
                        placeholder="Enter any protection, safety, or service information...">
                    </textarea>

                </label>

                <button
                    class="primary wide"
                    type="submit">
                    🚀 Submit Registration
                </button>

            </form>

        </div>

        <!-- PAYMENT -->
        <div id="paymentCard" class="card hidden">

            <h2>💳 Registration Payment</h2>

            <p>
                Registration fee:
                <strong>100 ETB</strong>
            </p>

            <div class="grid two">

                <label>
                    Phone
                    <input id="paymentPhone">
                </label>

                <label>
                    Registration Reference
                    <input
                        id="paymentReference"
                        readonly>
                </label>

            </div>

            <button
                class="primary wide"
                id="payBtn">
                💳 Pay Registration Fee with Telebirr
            </button>

        </div>

        <!-- OTP -->
        <div id="otpCard" class="card hidden">

            <h2>🔐 Phone OTP Verification</h2>

            <p>
                Enter the OTP sent to your registration phone.
            </p>

            <label>
                OTP
                <input
                    id="otp"
                    maxlength="6"
                    inputmode="numeric"
                    placeholder="Enter 6-digit OTP">
            </label>

            <button
                class="primary wide"
                id="verifyBtn">
                ✓ Verify OTP & Complete Registration
            </button>

            <div
                id="devOtp"
                class="dev-note hidden">
            </div>

        </div>

    </section>

    <!-- SUPPORT -->
    <section id="support" class="section">

        <div class="section-heading">
            <h2>Support the Platform</h2>
            <p>
                Help us maintain and improve the technical service platform.
            </p>
        </div>

        <div class="card narrow">

            <div class="search-icon" style="margin-bottom:20px;">
                ❤️
            </div>

            <h2>Support the Platform</h2>

            <p>
                Your voluntary support helps maintain the service.
            </p>

            <form id="supportForm">

                <label>
                    Phone Number
                    <input
                        name="phone"
                        required
                        placeholder="09xxxxxxxx">
                </label>

                <label style="margin-top:18px;">
                    Amount (ETB)
                    <input
                        name="amount"
                        type="number"
                        min="1"
                        step="0.01"
                        required>
                </label>

                <button
                    class="primary wide"
                    type="submit">
                    ❤️ Support with Telebirr
                </button>

            </form>

        </div>

    </section>

    <!-- ADMIN -->
    <section id="admin" class="section">

        <div id="adminLogin" class="card narrow">

            <div class="search-icon" style="margin-bottom:20px;">
                🔐
            </div>

            <h2>Admin Login</h2>

            <form id="adminLoginForm">

                <label>
                    Username
                    <input
                        name="username"
                        value="admin">
                </label>

                <label style="margin-top:18px;">
                    Password
                    <input
                        name="password"
                        type="password">
                </label>

                <button
                    class="primary wide">
                    Login
                </button>

            </form>

        </div>

        <div id="adminPanel" class="hidden">

            <div class="card">

                <div class="admin-head">

                    <h2>Admin Dashboard</h2>

                    <button
                        class="danger"
                        id="adminLogout">
                        Logout
                    </button>

                </div>

                <h3>Add Profession</h3>

                <form
                    id="professionForm"
                    class="inline-form">

                    <input
                        name="name"
                        placeholder="e.g. Plumber"
                        required>

                    <button class="primary">
                        Add
                    </button>

                </form>

            </div>

            <div class="card">

                <h3>Technicians</h3>

                <div
                    id="adminTechnicians"
                    class="table-wrap">
                </div>

            </div>

        </div>

    </section>

</main>

<footer>
    <p>
        <strong>🔧 Technical Service Finder</strong>
        &nbsp; © 2026
    </p>
</footer>

<script
    src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    crossorigin="">
</script>

<script src="js/app.js"></script>

</body>
</html>