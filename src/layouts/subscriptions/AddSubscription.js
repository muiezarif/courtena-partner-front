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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
// import partnersTableData from "layouts/tables/data/partnersTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import { Grid, Icon } from "@mui/material";
import SoftButton from "components/SoftButton";
// import partnersTableData from "./data/partnersTableData";
import { useNavigate } from "react-router-dom";
import SoftAlert from "components/SoftAlert";
import SoftInput from "components/SoftInput";

function AddSubscription() {
  
  let navigate = useNavigate();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card> 
          <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Subscription Info
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
          {/* {error ? <SoftAlert color="error" dismissible onClick={() => setError(false)} > {errorMessage}</SoftAlert> : null} */}
          {/* {success ? <SoftAlert color="success" dismissible onClick={() => setSuccess(false)} > {successMessage}</SoftAlert> : null} */}
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftBox mb={2}>
              <SoftInput name="username" onChange={(val) => setUsername(val.target.value)} type="text" placeholder="Username" />
            </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftBox mb={2}>
              <SoftInput name="username" onChange={(val) => setUsername(val.target.value)} type="text" placeholder="Username" />
            </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftBox mb={2}>
              <SoftInput name="username" onChange={(val) => setUsername(val.target.value)} type="text" placeholder="Username" />
            </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftBox mb={2}>
              <SoftInput name="username" onChange={(val) => setUsername(val.target.value)} type="text" placeholder="Username" />
            </SoftBox>
                </Grid>
          </Grid>

            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={() => handleSubmit()} variant="gradient" color="dark" fullWidth>
                Save
              </SoftButton>
            </SoftBox>

          </SoftBox>
        </SoftBox>
          </Card>
        </SoftBox>
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddSubscription;
