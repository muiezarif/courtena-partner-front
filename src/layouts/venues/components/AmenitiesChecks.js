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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import SoftInput from "components/SoftInput";

function AmenitiesChecks() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Amenities
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox width="80%" ml={2}>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Cafeteria" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Changing Room" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Disabled Access" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Free Parkings" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Lockers" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Material Renting" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Play Park" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Private Parking" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Restaurant" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Snack Bar" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Store" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Vending Machine" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Wifi" />
            </FormGroup>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default AmenitiesChecks;
