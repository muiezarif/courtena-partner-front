

import { useState, useEffect, useMemo } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import routes from "routes";
// Images
import brand from "assets/images/courtena-logo-black-nobg.png";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import { useNavigate } from "react-router-dom";
function Dashboard2() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  let navigate = useNavigate();
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );
  return (
    <DashboardLayout>
      <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Courtena"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid onClick={() => {navigate("/categories")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Categories" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/partners")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Partners" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/customers")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Customers" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/bookings")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Bookings" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/settlements")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Settlements" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/subscriptions")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Subscriptions" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            <Grid onClick={() => {navigate("/reports")}} item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Reports" }}
                count=""
                percentage={{ color: "", text: "" }}
                icon={{ color: "", component: "" }}
                
              />
            </Grid>
            {/* <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "sales" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid> */}
          </Grid>
        </SoftBox>
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox> */}
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox> */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard2;
