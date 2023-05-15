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
import { Grid } from "@mui/material";
import SoftInput from "components/SoftInput";

function OpeningHours() {
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
          Opening Hours
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Monday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="mondayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="mondayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Tuesday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="tuesdayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="tuesdayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Wednesday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="wednesdayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="wednesdayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Thursday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="thursdayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="thursdayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Friday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="fridayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="fridayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={3}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Weekend
        </SoftTypography>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Saturday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="saturdayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="saturdayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Sunday
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="sundayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="sundayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={3}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Holidays
        </SoftTypography>
        </SoftBox>
        
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
          <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 Open
                </SoftTypography>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 From
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="holidayFrom"  onChange={(val) => setName(val.target.value)} type="time" placeholder="From" />
                </SoftBox>
                </Grid>
                <Grid item md={6}>
                <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                 To
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="holidayTo"  onChange={(val) => setName(val.target.value)} type="time" placeholder="To" />
                </SoftBox>
                </Grid>
            </Grid>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default OpeningHours;
