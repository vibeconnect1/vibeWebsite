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
import DoctorAppointmentPage from "./pages/VibeConnectWebsite/DoctorAppointmentpage.jsx";
import EmployeeOnboardingPage from "./pages/VibeConnectWebsite/EmployeeOnboardingpage.jsx";
import PayrollmanagementPage from "./pages/VibeConnectWebsite/payrollmanagementpage.jsx";
import AttendancemanagementPage from "./pages/VibeConnectWebsite/AttendanceManagementpage.jsx";
import FBPage from "./pages/VibeConnectWebsite/FBPage.jsx";
import RostermanagementPage from "./pages/VibeConnectWebsite/RosterManagementPage.jsx";
import ReportsAnalyticsPage from "./pages/VibeConnectWebsite/ReportsAnalyticsPage.jsx";
import LeavemanagementPage from "./pages/VibeConnectWebsite/LeaveManagementPage.jsx";
import IncidentPage from "./pages/VibeConnectWebsite/IncidentPage.jsx";
import SupplierPage from "./pages/VibeConnectWebsite/SuppliersWebsite.jsx";
import MeetingsPage from "./pages/VibeConnectWebsite/MeetingsPage.jsx";
import OtherBillsPage from "./pages/VibeConnectWebsite/OtherBillsPage.jsx";
import ServicePRPage from "./pages/VibeConnectWebsite/ServicePRPage.jsx";
import PermitPage from "./pages/VibeConnectWebsite/PermitPage.jsx";
import IntegrationPage from "./pages/VibeConnectWebsite/IntegrationPage.jsx";
import TransportationPage from "./pages/VibeConnectWebsite/TransportationPage.jsx";
import ServiceDeskPage from "./pages/VibeConnectWebsite/ServiceDeskPage.jsx";
import DocumentProPage from "./pages/VibeConnectWebsite/DocumentProPage.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Layout />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/Personal-Financial"
          element={<PersonalFinancialWebsite />}
        />
        <Route
          path="/Project-Management"
          element={<ProjectManagementWebsite />}
        />
        <Route path="/Suppliers" element={<SuppliersWebsite />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact-us" element={<ContactForm />} />
        <Route path="/KnowMore-page" element={<KnowMorePage />} />
        <Route path="/KnowMore-page1" element={<KnowMorePage1 />} />
        <Route path="/KnowMore-page2" element={<KnowMorePage2 />} />
        <Route path="/KnowMore-page3" element={<KnowMorePage3 />} />
        <Route path="/Purchase" element={<PurchaseWebsite />} />
        <Route path="/billpay" element={<BillPayWebPage />} />
        <Route path="/audit" element={<AuditWebPage />} />
        <Route path="/insurance" element={<InsuranceWebPage />} />
        <Route
          path="/communication"
          element={<CommunicationWebsite />}
        />
        <Route path="/fitness" element={<FitnessWebPage />} />
        <Route path="/skill-Grow" element={<SkillGrowWebPage />} />
        <Route path="/Asset" element={<AssetWebPage />} />
        <Route path="/SoftServices" element={<SoftServicesWebPage />} />
        <Route path="/Passes" element={<PassesWebPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/calendar" element={<CalendarWebPage />} />
        <Route path="/billpay" element={<BillPayWebPage />} />
        <Route path="/birthday" element={<BirthdayWebPage />} />
        <Route
          path="/advance-salary"
          element={<AdvanceSalaryWebPage />}
        />
        <Route
          path="/doctor-appointment"
          element={<DoctorAppointmentPage/>}
        />
        <Route
          path="/employee-onboarding"
          element={<EmployeeOnboardingPage/>}
        />
        <Route
          path="/payroll-management"
          element={<PayrollmanagementPage/>}
        />
        <Route
          path="/roster-management"
          element={<RostermanagementPage/>}
        />
        <Route
          path="/leave-management"
          element={<LeavemanagementPage/>}
        />
         <Route
          path="/reports-analytics"
          element={<ReportsAnalyticsPage/>}
        />
        <Route
          path="/attendance-tracking"
          element={<AttendancemanagementPage/>}
        />
        <Route
          path="/fb"
          element={<FBPage/>}
        />
        <Route
          path="/incident"
          element={<IncidentPage/>}
        />
        <Route
          path="/suppliers"
          element={<SupplierPage/>}
        />
        <Route
          path="/Meeting"
          element={<MeetingsPage/>}
        />
        <Route
          path="/Other-bills"
          element={<OtherBillsPage/>}
        />
        <Route
          path="/servicepr-wo"
          element={<ServicePRPage/>}
        />
        <Route
          path="/Permit"
          element={<PermitPage/>}
        />
        <Route
          path="/Integration"
          element={<IntegrationPage/>}
        />
        <Route
          path="/Transportation"
          element={<TransportationPage/>}
        />
        <Route
          path="/Service-desk"
          element={<ServiceDeskPage/>}
        />
        <Route
          path="/DocumentPro"
          element={<DocumentProPage/>}
        />
       
      </Routes>
    </Router>
  );
}

export default App;
