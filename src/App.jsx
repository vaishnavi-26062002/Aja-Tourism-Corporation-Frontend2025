import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLogin from "./pages/AdminLogin";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import GiveReview from "./pages/GiveReview";
import PackagesPage from "./pages/PackagesPage";

import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import ToursPage from "./pages/ToursPage";
import BookingsPage from "./pages/BookingsPage";
import CustomersPage from "./pages/CustomersPage";
import DestinationsPage from "./pages/DestinationsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

import Bookings from "./pages/Bookings";
import TourismChatbot from "./components/TourismChatbot";
import Footer from "./components/Footer";

import "./App.css";

function AppLayout() {
  const location = useLocation();

  // ✅ Hide footer on dashboard & all nested dashboard routes
  const hideFooter = location.pathname.startsWith("/dashboard");

  return (
    <>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/give-review" element={<GiveReview />} />
        <Route path="/packages" element={<PackagesPage />} />

        {/* Booking */}
        <Route path="/bookings" element={<Bookings />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer only for NON-dashboard pages */}
      {!hideFooter && <Footer />}

      {/* Chatbot (optional – can also hide like footer if needed) */}
      <TourismChatbot />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
