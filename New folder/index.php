<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Technical Service Finder</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIINfQ3N0cJ5wLQ9b2o8r8x8z+4x8c8x8x8="
          crossorigin="">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
      <div class="language-selector">
        <label for="languageSelect">Language</label>

        <select id="languageSelect">
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            <option value="om">Afaan Oromoo</option>
        </select>
    </div>
<header class="topbar">
    <div>
       <h1 data-i18n="title">Technical Service Finder</h1>
<p data-i18n="subtitle">Find trusted nearby technical professionals.</p>
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

<main class="container">
    <div id="alert" class="alert hidden"></div>

    <section id="find" class="section active">
        <div class="card">
            <h2>Find a Technician</h2>
            <p>No customer account is required.</p>

            <div class="grid two">
                <label>
                    Profession
                    <select id="searchProfession"><option value="">Select profession</option></select>
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
                <label class="location-label">
                    Customer Location
                    <select id="customerLocation" required><option value="">Select your location</option></select>
                </label>
                <span id="locationStatus">Select your area. Coordinates are stored automatically for distance search.</span>
            </div>
            <input id="customerLat" type="hidden">
            <input id="customerLng" type="hidden">

            <button class="primary wide" id="searchBtn">Search Nearby Technicians</button>
        </div>

        <div class="results-layout">
            <div id="results" class="results"></div>
            <div id="map"></div>
        </div>
    </section>

    <section id="register" class="section">
        <div class="card">
            <h2>Technician Registration</h2>
            <p>A phone number may register once for each profession.</p>

            <form id="registrationForm">
                <div class="grid two">
                    <label>
                        Full Name *
                        <input name="name" required>
                    </label>

                    <label>
                        Phone Number *
                        <input name="phone" required placeholder="09xxxxxxxx">
                    </label>

                    <label>
                        Profession *
                        <select name="profession_id" id="registerProfession" required><option value="">Select profession</option></select>
                    </label>

                    <label>
                        Location *
                        <select name="location" id="techLocation" required><option value="">Select your location</option></select>
                    </label>

                    <input name="latitude" id="techLat" type="hidden">
                    <input name="longitude" id="techLng" type="hidden">
                </div>

                <label>
                    Photo
                    <input name="photo" type="file" accept="image/jpeg,image/png,image/webp">
                </label>
<label>
    Protection / Safety Message
    <textarea
        name="protection_message"
        rows="4"
        placeholder="Enter any protection, safety, or service information..."
    ></textarea>
</label>
                <button class="primary wide" type="submit">Submit Registration</button>
            </form>
        </div>

        <div id="paymentCard" class="card hidden">
            <h2>Registration Payment</h2>
            <p>Registration fee: <strong>100 ETB</strong></p>

            <div class="grid two">
                <label>
                    Phone
                    <input id="paymentPhone">
                </label>
                <label>
                    Registration Reference
                    <input id="paymentReference" readonly>
                </label>
            </div>

            <button class="primary wide" id="payBtn">Pay Registration Fee with Telebirr</button>
        </div>

        <div id="otpCard" class="card hidden">
            <h2>Phone OTP Verification</h2>
            <p>Enter the OTP sent to your registration phone.</p>
            <div class="grid two">
                <label>
                    OTP
                    <input id="otp" maxlength="6" inputmode="numeric">
                </label>
            </div>
            <button class="primary wide" id="verifyBtn">Verify OTP & Complete Registration</button>
            <div id="devOtp" class="dev-note hidden"></div>
        </div>
    </section>

    <section id="support" class="section">
        <div class="card narrow">
            <h2>Support the Platform</h2>
            <p>Your voluntary support helps maintain the service.</p>
            <form id="supportForm">
                <label>
                    Phone Number
                    <input name="phone" required placeholder="09xxxxxxxx">
                </label>
                <label>
                    Amount (ETB)
                    <input name="amount" type="number" min="1" step="0.01" required>
                </label>
                <button class="primary wide" type="submit">Support with Telebirr</button>
            </form>
        </div>
    </section>

    <section id="admin" class="section">
        <div id="adminLogin" class="card narrow">
            <h2>Admin Login</h2>
            <form id="adminLoginForm">
                <label>Username <input name="username" value="admin"></label>
                <label>Password <input name="password" type="password"></label>
                <button class="primary wide">Login</button>
            </form>
        </div>

        <div id="adminPanel" class="hidden">
            <div class="card">
                <div class="admin-head">
                    <h2>Admin Dashboard</h2>
                    <button class="danger" id="adminLogout">Logout</button>
                </div>

                <h3>Add Profession</h3>
                <form id="professionForm" class="inline-form">
                    <input name="name" placeholder="e.g. Plumber" required>
                    <button class="primary">Add</button>
                </form>
            </div>

            <div class="card">
                <h3>Technicians</h3>
                <div id="adminTechnicians" class="table-wrap"></div>
            </div>
        </div>
    </section>
</main>

<footer>
    <p>Technical Service Finder &copy; 2026</p>
</footer>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>
<script src="js/app.js"></script>
</body>
</html>
