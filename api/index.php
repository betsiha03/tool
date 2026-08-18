<?php
declare(strict_types=1);

session_start();

require_once dirname(__DIR__, 2) . '/config/config.php';
require_once dirname(__DIR__, 2) . '/config/database.php';
require_once dirname(__DIR__, 2) . '/src/Api.php';
require_once dirname(__DIR__, 2) . '/src/Auth.php';
require_once dirname(__DIR__, 2) . '/src/OtpService.php';
require_once dirname(__DIR__, 2) . '/src/TelebirrService.php';
require_once dirname(__DIR__, 2) . '/src/TechnicianController.php';
require_once dirname(__DIR__, 2) . '/src/PaymentController.php';
require_once dirname(__DIR__, 2) . '/src/AdminController.php';
require_once dirname(__DIR__, 2) . '/src/SupportController.php';

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

// Support both Apache PATH_INFO and direct index.php URLs.
$marker = '/public/api';
$pos = strpos($uri, $marker);
if ($pos !== false) {
    $path = substr($uri, $pos + strlen($marker));
} else {
    $path = $uri;
}

// When URL is /api/index.php/professions, remove index.php.
$path = preg_replace('#^/index\.php#', '', $path);
$path = '/' . trim((string)$path, '/');
$method = Api::method();

try {
    if ($method === 'GET' && $path === '/professions') {
        TechnicianController::professions();
    }

    if ($method === 'POST' && $path === '/technicians/register') {
        TechnicianController::register();
    }

    if ($method === 'GET' && $path === '/locations') {
        TechnicianController::locations();
    }

    if ($method === 'GET' && $path === '/technicians/nearby') {
        TechnicianController::nearby();
    }

    if ($method === 'POST' && $path === '/payments/registration/start') {
        PaymentController::startRegistrationPayment();
    }

    if ($method === 'POST' && $path === '/payments/registration/verify') {
        PaymentController::verifyRegistration();
    }
    if ($method === 'POST' && $path === '/support') {
    SupportController::create();
}

if ($method === 'POST' && $path === '/support/verify') {
    SupportController::verify();
}

    if ($method === 'POST' && $path === '/admin/login') {
        AdminController::login();
    }

    if ($method === 'POST' && $path === '/admin/logout') {
        AdminController::logout();
    }

    if ($method === 'GET' && $path === '/admin/me') {
        AdminController::me();
    }

    if ($method === 'GET' && $path === '/admin/technicians') {
        AdminController::technicians();
    }

    if ($method === 'POST' && $path === '/admin/technicians/status') {
        AdminController::updateTechnicianStatus();
    }

    if ($method === 'POST' && $path === '/admin/professions') {
        AdminController::createProfession();
    }

    Api::error('Route not found', 404);
} catch (Throwable $e) {
    error_log((string)$e);
    Api::error('Server error. Check the PHP error log.', 500);
}
