/* eslint-disable react/prop-types */
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
// import partnersTableData from "layouts/partners/data/partnersTableData";

import { Avatar, Backdrop, CardContent, Chip, CircularProgress, Grid, Icon, MenuItem, Select, Tab, Tabs } from "@mui/material";
import SoftButton from "components/SoftButton";
// import partnersTableData from "./data/partnersTableData";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import courtena from "api/courtena";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import { ArrowDropDown, DeleteForeverOutlined, EditOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import SoftInput from "components/SoftInput";
function BillingInformation() {
    const [pricing,setPricing] = useState([])
    const [backdrop,setBackdrop] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0);
    const [companyName,setCompanyName] = useState("")
    const [companyEmail,setCompanyEmail] = useState("")
    const [taxIdType,setTaxIdType] = useState("Saudi Arabia TAX")
    const [taxNumber,setTaxNumber] = useState("")
    const [vatTax,setVatTax] = useState("")
    const [country,setCountry] = useState("Saudi Arabia")
    const [city,setCity] = useState("")
    const [streetAdrress,setStreetAddress] = useState("")
    const [postalCode,setPostalCode] = useState("")
    const [iban,setIban] = useState("")
    const [bicSwift,setBicSwift] = useState("")
    const [edit,setEdit] = useState(false)
    const [editId,setEditId] = useState()
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    let navigate = useNavigate();
    const partnersTableData = {
        columns: [
          { name: "name", align: "center" },
          { name: "time_range", align: "center" },
          // { name: "courts", align: "center" },
          { name: "action", align: "center" },
        ],
      };

      const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
      };
    
  const { columns } = partnersTableData;
  const handleSubmit = async (e) => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    const data = {companyName:companyName,email:companyEmail,taxInformation:{taxIDType:taxIdType,taxNumber:taxNumber,vatTax:vatTax},companyAddress:{streetAdrress:streetAdrress,postalCode:postalCode,city:city,country:country},bankInformation:{iban:iban,bicSwift:bicSwift},partner:partnerInfo._id}
    setBackdrop(true)
    if(edit){
        
        await courtena.put("/partner/billing/"+editId+"/update",{...data},{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': '*/*',
              'Authorization': partnerInfo.token
          }
          }).then((response) => {
      
            if(response.data.success){
              setBackdrop(false)
              setSuccess(true)
              setSuccessMessage(response.data.message)
            }else{
              setBackdrop(false)
              setError(true)
              setErrorMessage(response.data.message)
            }
            
          }).catch(err => console.log(err.message));
    }else{
        await courtena.post("/partner/billing/create/",{...data},{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': '*/*',
              'Authorization': partnerInfo.token
          }
          }).then((response) => {
      
            if(response.data.success){
              setBackdrop(false)
              setSuccess(true)
              setSuccessMessage(response.data.message)
            }else{
              setBackdrop(false)
              setError(true)
            //   setErrorMessage(response.data.message)
            }
            
          }).catch(err => console.log(err.message));
    }
    

  }
      async function getBillingInfo (){
        var partnerInfoString = localStorage.getItem("partner")
        var partnerInfo = JSON.parse(partnerInfoString)
        setBackdrop(true)
        // const data = {name:name,city:city,address:address,description:description,cheapestPrice:price,venuePhone:contactNum,postalCode:1234,amenities:{cafeteria:cafeteria,changeRoom:changingRoom,disabledAccess:disabledAccess,freeParking:freeParking,lockers:lockers,materialRenting:materialRenting,privateParking:privateParking,restaurant:restaurant,snackbar:snackbar,store:store,vendingMachine:vendingMachine,wifi:wifi},timing:{mondayOn:mondayOpen,mondayFrom:mondayFrom,mondayTo:mondayTo,tuesdayOn:tuesdayOpen,tuesdayFrom:tuesdayFrom,tuesdayTo:tuesdayTo,wedOn:wednesdayOpen,wedFrom:wedFrom,wedTo:wedTo,thursdayOn:thursdayOpen,thursdayFrom:thursdayFrom,thursdayTo:thursdayTo,fridayOn:fridayOpen,fridayFrom:friFrom,fridayTo:friTo,satOn:saturdayOpen,satFrom:satFrom,satTo:satTo,sunOn:sundayOpen,sunFrom:sunFrom,sunTo:sunTo,holidayOn:holidayOpen,holidayFrom:holidayFrom,holidayTo:holidayTo},partner:partnerInfo._id}
        await courtena.get("/partner/billing/billing-info/"+partnerInfo._id,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Authorization': partnerInfo.token
        }
        }).then((response) => {
          console.log(response.data)
          if(response.data.success){
            let newPricing = []
            if(response.data.result !== null){
                setCompanyName(response.data.result.companyName)
                setCompanyEmail(response.data.result.email)
                setTaxIdType(response.data.result.taxInformation.taxIDType)
                setTaxNumber(response.data.result.taxInformation.taxNumber)
                setVatTax(response.data.result.taxInformation.vatTax)
                setIban(response.data.result.bankInformation.iban)
                setBicSwift(response.data.result.bankInformation.bicSwift)
                setStreetAddress(response.data.result.companyAddress.streetAdrress)
                setPostalCode(response.data.result.companyAddress.postalCode)
                setCountry(response.data.result.companyAddress.country)
                setCity(response.data.result.companyAddress.city)
                setEditId(response.data.result._id)
                setEdit(true)
            }else{
                setEdit(false)
            }
            setBackdrop(false)
            
          }else{
            setBackdrop(false)
            setError(true)
            setErrorMessage(response.data.message)
          }
          
        }).catch(err => console.log(err));
      }
      async function getPricingPlans (){
        var partnerInfoString = localStorage.getItem("partner")
        var partnerInfo = JSON.parse(partnerInfoString)
        setBackdrop(true)
        // const data = {name:name,city:city,address:address,description:description,cheapestPrice:price,venuePhone:contactNum,postalCode:1234,amenities:{cafeteria:cafeteria,changeRoom:changingRoom,disabledAccess:disabledAccess,freeParking:freeParking,lockers:lockers,materialRenting:materialRenting,privateParking:privateParking,restaurant:restaurant,snackbar:snackbar,store:store,vendingMachine:vendingMachine,wifi:wifi},timing:{mondayOn:mondayOpen,mondayFrom:mondayFrom,mondayTo:mondayTo,tuesdayOn:tuesdayOpen,tuesdayFrom:tuesdayFrom,tuesdayTo:tuesdayTo,wedOn:wednesdayOpen,wedFrom:wedFrom,wedTo:wedTo,thursdayOn:thursdayOpen,thursdayFrom:thursdayFrom,thursdayTo:thursdayTo,fridayOn:fridayOpen,fridayFrom:friFrom,fridayTo:friTo,satOn:saturdayOpen,satFrom:satFrom,satTo:satTo,sunOn:sundayOpen,sunFrom:sunFrom,sunTo:sunTo,holidayOn:holidayOpen,holidayFrom:holidayFrom,holidayTo:holidayTo},partner:partnerInfo._id}
        await courtena.get("/admin/subscriptions/",{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Authorization': partnerInfo.token
        }
        }).then((response) => {
          console.log(response.data)
          if(response.data.success){
                let newPricing = []
                response.data.result.map((item) => {
                    newPricing.push(item)
                })
            setPricing(newPricing)
            setBackdrop(false)
            
          }else{
            setBackdrop(false)
            setError(true)
            setErrorMessage(response.data.message)
          }
          
        }).catch(err => console.log(err));
      }
  useEffect( () => {
    getBillingInfo()
    getPricingPlans()
    var partnerInfoString = localStorage.getItem("partner")
        var partnerInfo = JSON.parse(partnerInfoString)
    console.log(partnerInfo)
    // return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect( () => {
    console.log(pricing)
    // return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pricing])
  return (
    <DashboardLayout>
      <DashboardNavbar light={true} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card> 
            {/* <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}> */}
                {/* <Grid item xs={6} md={6}> */}
                    {/* <SoftTypography variant="h6">Billing</SoftTypography> */}
                {/* </Grid> */}
              {/* <Grid item xs={6} md={6}>
                <SoftButton onClick={() => navigate("/pricing/add-pricing")} variant="gradient" color="dark">
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;Add Pricing
                </SoftButton>
                </Grid> */}
            {/* </SoftBox> */}

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
              {/* <Table columns={columns} rows={pricing} /> */}
              <SoftBox sx={{ width: '100%' }}>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Tabs">
        <Tab label="Billing Information" />
        <Tab label="Pricing Plans" />
      </Tabs>
      {selectedTab === 0 && (
        <SoftBox sx={{ p: 3 }}>
          <Card> 
          
        {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
          {/* {error ? <SoftAlert color="error" dismissible onClick={() => setError(false)} > {errorMessage}</SoftAlert> : null} */}
          {/* {success ? <SoftAlert color="success" dismissible onClick={() => setSuccess(false)} > {successMessage}</SoftAlert> : null} */}
          <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Company Information
          </SoftTypography>
        </SoftBox>
          <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                <SoftBox mb={2}>
                    <SoftInput name="companyName" value={companyName}  onChange={(val) => setCompanyName(val.target.value)} type="text" placeholder="Company Name" />
                </SoftBox>
                </Grid>
                
                <Grid item xs={12} md={6} xl={6}>
                <SoftBox mb={2}>
                    <SoftInput name="companyEmail" value={companyEmail} onChange={(val) => setCompanyEmail(val.target.value)} type="text" placeholder="Company Email" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                </SoftBox>
                </Grid>
          </Grid>
          <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Tax Information
          </SoftTypography>
        </SoftBox>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="taxIdType" value={taxIdType} disabled={true} editable={false} onChange={(val) => setTaxIdType(val.target.value)} type="text" placeholder="Tax Id Type" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="taxNumber" value={taxNumber} onChange={(val) => setTaxNumber(val.target.value)} type="number" placeholder="Tax Number" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="vatTax" value={vatTax} onChange={(val) => setVatTax(val.target.value)} type="number" placeholder="Vat/Tax %" />
                </SoftBox>
                </Grid>
          </Grid>
            <SoftBox p={3} mb={1} textAlign="center">
            <SoftTypography variant="h5" fontWeight="medium">
                Company Address
            </SoftTypography>
            </SoftBox>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={6} xl={6}>
                    <SoftBox mb={2}>
                        <SoftInput name="streetAddress" value={streetAdrress} onChange={(val) => setStreetAddress(val.target.value)} type="text" placeholder="Street Address" />
                    </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                    <SoftBox mb={2}>
                        <SoftInput name="postalCode" value={postalCode} onChange={(val) => setPostalCode(val.target.value)} type="text" placeholder="Postal Code" />
                    </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                    <SoftBox mb={2}>
                        <SoftInput name="country" value={country} disabled={true} onChange={(val) => setCountry(val.target.value)} type="text" placeholder="Country" />
                    </SoftBox>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                    <SoftBox mb={2}>
                        <SoftInput name="city" value={city} onChange={(val) => setCity(val.target.value)} type="text" placeholder="City" />
                    </SoftBox>
                    </Grid>
            </Grid>
            <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Bank Information
          </SoftTypography>
        </SoftBox>
          <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                <SoftBox mb={2}>
                    <SoftInput name="iban" value={iban} onChange={(val) => setIban(val.target.value)} type="text" placeholder="IBAN" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                <SoftBox mb={2}>
                    <SoftInput name="bicSwift" value={bicSwift} onChange={(val) => setBicSwift(val.target.value)} type="text" placeholder="BIC / SWIFT" />
                </SoftBox>
                </Grid>
          </Grid> 
            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={() => handleSubmit()} variant="gradient" color="dark" fullWidth>
                Save
              </SoftButton>
            </SoftBox>

          </SoftBox>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}>
        <CircularProgress color="inherit" />
        </Backdrop>
        </SoftBox>
          </Card>
          {/* Add your billing information content here */}
        </SoftBox>
      )}
      {selectedTab === 1 && (
        <SoftBox display="flex" justifyContent="center" alignItems="center" height="auto" sx={{ padding: 5 }}>
            
            {pricing.map((item) => {
                return(
                <Card key={item._id} sx={{ maxWidth: 300 }}>
                    
                <CardContent>
                  <SoftTypography variant="h5" component="div" gutterBottom>
                    {item.name}
                  </SoftTypography>
                  <SoftTypography variant="subtitle1" color="text.secondary" gutterBottom>
                    SAR {item.price}/month
                  </SoftTypography>
                  <SoftTypography variant="body2" color="text.secondary">
                    {item.description}
                  </SoftTypography>
                  <SoftButton onClick={async () => {
                    var partnerInfoString = localStorage.getItem("partner")
                    var partnerInfo = JSON.parse(partnerInfoString)
                    const data = {name:item.name,subscriptionType:item._id,partner:partnerInfo._id}
                    await courtena.post("/partner/subscription/create",{...data},{
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                          'Accept': '*/*',
                          'Authorization': partnerInfo.token
                      }
                      }).then((res) => {
                            const myObject = JSON.parse(localStorage.getItem('partner'));
                            myObject.isSubscribed = res.data.result.partner.isSubscribed;
                            localStorage.setItem('partner', JSON.stringify(myObject));
                      }).catch(err => {
                            console.log(err)
                      })
                  }} variant="contained" fullWidth>
                    Subscribe
                  </SoftButton>
                </CardContent>
              </Card>)
            })}
      </SoftBox>
      )}
    </SoftBox>
              
            </SoftBox>
          </Card>
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

export default BillingInformation;
