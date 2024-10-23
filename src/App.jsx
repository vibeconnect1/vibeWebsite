import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./pages/VibeConnectWebsite/Layout.jsx";
import PersonalFinancialWebsite from "./pages/VibeConnectWebsite/PersonalFinancialWebsite.jsx";
import ProjectManagementWebsite from "./pages/VibeConnectWebsite/ProjectManagementWebsite.jsx";
import SuppliersWebsite from "./pages/VibeConnectWebsite/SuppliersWebsite.jsx";
import HRMSWebsite from "./pages/VibeConnectWebsite/HRMSWebsite.jsx";
import AboutUs from "./pages/VibeConnectWebsite/AboutUs.jsx";
import ContactForm from "./pages/VibeConnectWebsite/Contact.jsx";
import KnowMorePage from "./pages/VibeConnectWebsite/KnowMorePage.jsx";
import KnowMorePage1 from "./pages/VibeConnectWebsite/KnowMorePage1.jsx";
import KnowMorePage2 from "./pages/VibeConnectWebsite/KnowMorePage2.jsx";
import KnowMorePage3 from "./pages/VibeConnectWebsite/KnowMorePage3.jsx";
import PurchaseWebsite from "./pages/VibeConnectWebsite/PurchaseWebsite.jsx";
import BillPayWebPage from "./pages/VibeConnectWebsite/BillPayWebPage.jsx";
import AuditWebPage from "./pages/VibeConnectWebsite/AuditWebpage.jsx";
import InsuranceWebPage from "./pages/VibeConnectWebsite/InsuranceWebPage.jsx";
import CommunicationWebsite from "./pages/VibeConnectWebsite/CommunicationWebPage.jsx";
import FitnessWebPage from "./pages/VibeConnectWebsite/FitnessWebPage.jsx";
import SkillGrowWebPage from "./pages/VibeConnectWebsite/SkillgrowWebPage.jsx";
import AssetWebPage from "./pages/VibeConnectWebsite/AssetWebPage.jsx";
import SoftServicesWebPage from "./pages/VibeConnectWebsite/SoftServicesWebPage.jsx";
import PassesWebPage from "./pages/VibeConnectWebsite/PassesWebpage.jsx";
import FAQ from "./pages/VibeConnectWebsite/FAQ.jsx";
import CalendarWebPage from "./pages/VibeConnectWebsite/CalendarWebpage.jsx";
import BirthdayWebPage from "./pages/VibeConnectWebsite/BirthdayWebpage.jsx";
import AdvanceSalaryWebPage from "./pages/VibeConnectWebsite/AdvanceSalaryWebsite.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Layout />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/Personal-Financial-website"
          element={<PersonalFinancialWebsite />}
        />
        <Route
          path="/Project-Management-website"
          element={<ProjectManagementWebsite />}
        />
        <Route path="/Suppliers-website" element={<SuppliersWebsite />} />
        <Route path="/HRMS-website" element={<HRMSWebsite />} />
        <Route path="/AboutUs-website" element={<AboutUs />} />
        <Route path="/Contact-us" element={<ContactForm />} />
        <Route path="/KnowMore-page" element={<KnowMorePage />} />
        <Route path="/KnowMore-page1" element={<KnowMorePage1 />} />
        <Route path="/KnowMore-page2" element={<KnowMorePage2 />} />
        <Route path="/KnowMore-page3" element={<KnowMorePage3 />} />
        <Route path="/Purchase-website" element={<PurchaseWebsite />} />
        <Route path="/billpay-website" element={<BillPayWebPage />} />
        <Route path="/audit-website" element={<AuditWebPage />} />
        <Route path="/insurance-website" element={<InsuranceWebPage />} />
        <Route
          path="/communication-website"
          element={<CommunicationWebsite />}
        />
        <Route path="/fitness-website" element={<FitnessWebPage />} />
        <Route path="/skill-Grow-website" element={<SkillGrowWebPage />} />
        <Route path="/Asset-website" element={<AssetWebPage />} />
        <Route path="/SoftServices-website" element={<SoftServicesWebPage />} />
        <Route path="/Passes-website" element={<PassesWebPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/calendar-website" element={<CalendarWebPage />} />
        <Route path="/billpay-website" element={<BillPayWebPage />} />
        <Route path="/birthday-website" element={<BirthdayWebPage />} />
        <Route
          path="/advance-salary-website"
          element={<AdvanceSalaryWebPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
