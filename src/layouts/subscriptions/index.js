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
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Backdrop, CircularProgress, Grid, Icon } from "@mui/material";
import SoftButton from "components/SoftButton";
import partnersTableData from "layouts/partners/data/partnersTableData";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import courtena from "api/courtena";

function Subscriptions() {
  const [partnerSub,setPartnerSub] = useState({})
    const [partnerInfo,setPartnerInfo] = useState({})
    const [subscriptionType,setSubscriptionType] = useState({})
    const [backdrop,setBackdrop] = useState(false)

  let navigate = useNavigate();
  async function getPartnerSubscriptionInfo (){
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    setBackdrop(true)
    // const data = {name:name,city:city,address:address,description:description,cheapestPrice:price,venuePhone:contactNum,postalCode:1234,amenities:{cafeteria:cafeteria,changeRoom:changingRoom,disabledAccess:disabledAccess,freeParking:freeParking,lockers:lockers,materialRenting:materialRenting,privateParking:privateParking,restaurant:restaurant,snackbar:snackbar,store:store,vendingMachine:vendingMachine,wifi:wifi},timing:{mondayOn:mondayOpen,mondayFrom:mondayFrom,mondayTo:mondayTo,tuesdayOn:tuesdayOpen,tuesdayFrom:tuesdayFrom,tuesdayTo:tuesdayTo,wedOn:wednesdayOpen,wedFrom:wedFrom,wedTo:wedTo,thursdayOn:thursdayOpen,thursdayFrom:thursdayFrom,thursdayTo:thursdayTo,fridayOn:fridayOpen,fridayFrom:friFrom,fridayTo:friTo,satOn:saturdayOpen,satFrom:satFrom,satTo:satTo,sunOn:sundayOpen,sunFrom:sunFrom,sunTo:sunTo,holidayOn:holidayOpen,holidayFrom:holidayFrom,holidayTo:holidayTo},partner:partnerInfo._id}
    await courtena.get("/partner/subscription/get-partner-subscription-info/"+partnerInfo._id,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Authorization': partnerInfo.token
    }
    }).then((response) => {
      console.log(response.data)
      if(response.data.success){
        
        let newSports = []
        if(response.data.result){
          setPartnerSub(response.data.result.partnerSubscription)
          setPartnerInfo(response.data.result.partner)
          setSubscriptionType(response.data.result.subscriptionType)

      }
        setBackdrop(false)
        
      }else{
        setBackdrop(false)
        setError(true)
        setErrorMessage(response.data.message)
      }
      
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    getPartnerSubscriptionInfo()
  },[])
  return (
    <DashboardLayout>
      <DashboardNavbar light={true} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          {/* <Card>  */}
            

            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <SoftBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor="grey-100"
        borderRadius="lg"
        p={3}
        mt={2}
      >
              {partnerSub ? <SoftBox width="100%" display="flex" flexDirection="column">
          <SoftBox
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            mb={2}
          >
            <SoftTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {partnerInfo.username ? partnerInfo.username : null}
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={1} lineHeight={0}>
            <SoftTypography variant="caption" color="dark">
              Subscription Name:&nbsp;&nbsp;&nbsp;
              <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                {subscriptionType.name}
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={1} lineHeight={0}>
            <SoftTypography variant="caption" color="dark">
              Subscription Price:&nbsp;&nbsp;&nbsp;
              <SoftTypography variant="caption" fontWeight="medium">
                {subscriptionType.price}
              </SoftTypography>
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="dark">
            Subscription Tier:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" fontWeight="medium">
              {subscriptionType.tier}
            </SoftTypography>
          </SoftTypography>
          </SoftBox>
          <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="dark">
            Created at:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" fontWeight="medium">
              {new Date(partnerSub.createdAt).toLocaleString('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
              {/* {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(partnerSub.createdAt)} */}
            </SoftTypography>
          </SoftTypography>
          </SoftBox>
          <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="caption" color="dark">
            Updated at:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" fontWeight="medium">
            {new Date(partnerSub.updatedAt).toLocaleString('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})}
            </SoftTypography>
          </SoftTypography>
          </SoftBox>
        </SoftBox>: "Subscribe first by going to billing -> pricing plans"}
        </SoftBox>
              {/* <Table columns={columns} rows={rows} /> */}
            </SoftBox>
          {/* </Card> */}
        </SoftBox>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}>
        <CircularProgress color="inherit" />
        </Backdrop>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Subscriptions;
