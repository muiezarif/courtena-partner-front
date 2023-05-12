
import Dashboard from "layouts/dashboard";
import Dashboard2 from "layouts/dashboard/Dashboard2";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Categories from "layouts/categories";
import ForgotPassword from "layouts/authentication/forgotpassword";
import Partners from "layouts/partners";
import AddPartners from "layouts/partners/AddPartner";
import Subscriptions from "layouts/subscriptions";
import AddSubscription from "layouts/subscriptions/AddSubscription";
import Customers from "layouts/customers";
import Bookings from "layouts/bookings";
import Settlements from "layouts/settlements";
import Reports from "layouts/reports";


const allRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard2 />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Categories",
    key: "categories",
    route: "/categories",
    icon: <Shop size="12px" />,
    component: <Categories />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Partners",
    key: "partners",
    route: "/partners",
    icon: <Shop size="12px" />,
    component: <Partners />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "AddPartners",
    key: "addpartners",
    route: "/partners/add-partners",
    icon: <Shop size="12px" />,
    component: <AddPartners />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    route: "/customers",
    icon: <Shop size="12px" />,
    component: <Customers />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bookings",
    key: "bookings",
    route: "/bookings",
    icon: <Shop size="12px" />,
    component: <Bookings />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settlements",
    key: "settlements",
    route: "/settlements",
    icon: <Shop size="12px" />,
    component: <Settlements />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Subscriptions",
    key: "subscriptions",
    route: "/subscriptions",
    icon: <Shop size="12px" />,
    component: <Subscriptions />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Subscriptions",
    key: "add-subscriptions",
    route: "/subscriptions/add-subscription",
    icon: <Shop size="12px" />,
    component: <AddSubscription />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <Shop size="12px" />,
    component: <Reports />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Forgot Password",
    key: "forgot-password",
    route: "/authentication/forgot-password",
    icon: <SpaceShip size="12px" />,
    component: <ForgotPassword />,
    noCollapse: true,
  },
];

export default allRoutes;
