/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
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
import Venues from "layouts/venues";
import Courts from "layouts/courts";
import { Business,SportsTennis,Group,BookOnline,RequestQuote,CardMembership,Assessment,PriceChange } from "@mui/icons-material";
import Pricing from "layouts/pricing";
import BillingInformation from "layouts/billinginformation";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Categories",
  //   key: "categories",
  //   route: "/categories",
  //   icon: <Shop size="12px" />,
  //   component: <Categories />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Partners",
  //   key: "partners",
  //   route: "/partners",
  //   icon: <Shop size="12px" />,
  //   component: <Partners />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Venues",
    key: "venues",
    route: "/venues",
    icon: <Business size="10px" />,
    component: <Venues />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Courts",
    key: "courts",
    route: "/courts",
    icon: <SportsTennis size="10px" />,
    component: <Courts />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Pricing",
    key: "pricing",
    route: "/pricing",
    icon: <PriceChange size="10px" />,
    component: <Pricing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="14px" />,
    component: <BillingInformation />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    route: "/customers",
    icon: <Group size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bookings",
    key: "bookings",
    route: "/bookings",
    icon: <BookOnline size="10px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settlements",
    key: "settlements",
    route: "/settlements",
    icon: <RequestQuote size="10px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Subscription",
    key: "subscriptions",
    route: "/subscriptions",
    icon: <CardMembership size="10px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <Assessment size="10px" />,
    component: <Dashboard />,
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
    name: "Billing Demo",
    key: "billing-demo",
    route: "/billing-demo",
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
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/authentication/sign-in",
  //   icon: <Document size="12px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Forgot Password",
  //   key: "forgot-password",
  //   route: "/authentication/forgot-password",
  //   icon: <SpaceShip size="12px" />,
  //   component: <ForgotPassword />,
  //   noCollapse: true,
  // },
];

export default routes;
