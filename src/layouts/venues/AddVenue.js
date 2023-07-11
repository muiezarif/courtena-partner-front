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
import React from "react";
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

import { Backdrop, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Icon, Switch } from "@mui/material";
import SoftButton from "components/SoftButton";

import { useNavigate } from "react-router-dom";
import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import { Dropzone, FileMosaic} from "@dropzone-ui/react"
import courtena from "api/courtena";
// import OpeningHours from "./components/OpeningHours";

function AddVenue() {
  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const [address,setAddress] = useState("")
  const [description,setDescription] = useState("")
  const [contactNum,setContactNum] = useState()
  const [mondayFrom,setMondayFrom] = useState("")
  const [mondayTo,setMondayTo] = useState("")
  const [tuesdayFrom,setTuesdayFrom] = useState("")
  const [tuesdayTo,setTuesdayTo] = useState("")
  const [wedFrom,setWedFrom] = useState("")
  const [wedTo,setWedTo] = useState("")
  const [thursdayFrom,setThursdayFrom] = useState("")
  const [thursdayTo,setThursdayTo] = useState("")
  const [friFrom,setFriFrom] = useState("")
  const [friTo,setFriTo] = useState("")
  const [satFrom,setSatFrom] = useState("")
  const [satTo,setSatTo] = useState("")
  const [sunFrom,setSunFrom] = useState("")
  const [sunTo,setSunTo] = useState("")
  const [holidayFrom,setHolidayFrom] = useState("")
  const [holidayTo,setHolidayTo] = useState("")
  const [cafeteria,setCafeteria] = useState(false)
  const [changingRoom,setChangingRoom] = useState(false)
  const [disabledAccess,setDisabledAccess] = useState(false)
  const [freeParking,setFreeParking] = useState(false)
  const [lockers,setLockers] = useState(false)
  const [materialRenting,setMaterialRenting] = useState(false)
  const [playPark,setPlayPark] = useState(false)
  const [privateParking,setPrivateParking] = useState(false)
  const [restaurant,setRestaurant] = useState(false)
  const [snackbar,setSnackBar] = useState(false)
  const [store,setStore] = useState(false)
  const [vendingMachine,setVendingMachine] = useState(false)
  const [wifi,setWifi] = useState(false)
  const [mondayOpen,setMondayOpen] = useState(false)
  const [tuesdayOpen,setTuesdayOpen] = useState(false)
  const [wednesdayOpen,setWednesdayOpen] = useState(false)
  const [thursdayOpen,setThursdayOpen] = useState(false)
  const [fridayOpen,setFridayOpen] = useState(false)
  const [saturdayOpen,setSaturdayOpen] = useState(false)
  const [sundayOpen,setSundayOpen] = useState(false)
  const [holidayOpen,setHolidayOpen] = useState(false)
  const [price,setPrice] = useState(0)
  const [backdrop,setBackdrop] = useState(false)
  let navigate = useNavigate();
  
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState('');
  const updateFiles = (incommingFiles) => {
    console.log(incommingFiles)
    setFiles(incommingFiles);
    
  };
  useEffect(() => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
  },[])
  const handleSubmit = async (e) => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    setBackdrop(true)
    const formData = new FormData()
    const data = {name:name,city:city,address:address,photos:files,description:description,cheapestPrice:price,venuePhone:contactNum,
      postalCode:1234,amenities:{cafeteria:cafeteria,changeRoom:changingRoom,disabledAccess:disabledAccess,playPark:playPark,freeParking:freeParking,lockers:lockers,materialRenting:materialRenting,privateParking:privateParking,restaurant:restaurant,snackbar:snackbar,store:store,vendingMachine:vendingMachine,wifi:wifi},
      timing:{mondayOn:mondayOpen,mondayFrom:mondayFrom,mondayTo:mondayTo,tuesdayOn:tuesdayOpen,tuesdayFrom:tuesdayFrom,tuesdayTo:tuesdayTo,wedOn:wednesdayOpen,wedFrom:wedFrom,wedTo:wedTo,thursdayOn:thursdayOpen,thursdayFrom:thursdayFrom,thursdayTo:thursdayTo,fridayOn:fridayOpen,fridayFrom:friFrom,fridayTo:friTo,satOn:saturdayOpen,satFrom:satFrom,satTo:satTo,sunOn:sundayOpen,sunFrom:sunFrom,sunTo:sunTo,holidayOn:holidayOpen,holidayFrom:holidayFrom,holidayTo:holidayTo},partner:partnerInfo._id}
    formData.append("name",name)
    formData.append("city",city)
    formData.append("address",address)
    // for(let i = 0; i< files.length; i++){
    //   console.log(files[i].file)
    //   formData.append("images",files[i])
    // }
    for(let i = 0; i< files.length; i++){
      formData.append("photos",files[i].file)
    }
    // formData.append("photos",JSON.stringify(files))
    formData.append("description",description)
    formData.append("cheapestPrice",price)
    formData.append("venuePhone",contactNum)
    formData.append("postalCode",1234)
    formData.append("partner",partnerInfo._id)
    formData.append("amenities",JSON.stringify({cafeteria:cafeteria,changeRoom:changingRoom,disabledAccess:disabledAccess,playPark:playPark,freeParking:freeParking,lockers:lockers,materialRenting:materialRenting,privateParking:privateParking,restaurant:restaurant,snackbar:snackbar,store:store,vendingMachine:vendingMachine,wifi:wifi}))
    formData.append("timing",JSON.stringify({mondayOn:mondayOpen,mondayFrom:mondayFrom,mondayTo:mondayTo,tuesdayOn:tuesdayOpen,tuesdayFrom:tuesdayFrom,tuesdayTo:tuesdayTo,wedOn:wednesdayOpen,wedFrom:wedFrom,wedTo:wedTo,thursdayOn:thursdayOpen,thursdayFrom:thursdayFrom,thursdayTo:thursdayTo,fridayOn:fridayOpen,fridayFrom:friFrom,fridayTo:friTo,satOn:saturdayOpen,satFrom:satFrom,satTo:satTo,sunOn:sundayOpen,sunFrom:sunFrom,sunTo:sunTo,holidayOn:holidayOpen,holidayFrom:holidayFrom,holidayTo:holidayTo}))
    await courtena.post("/venues/create",formData,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': partnerInfo.token
    }
    }).then((response) => {
      console.log(response.data)
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

  }

  
  function AmenitiesChecks() {

  
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
              <FormControlLabel control={<Checkbox checked={cafeteria} onChange={(val) => {setCafeteria(val.target.checked)}} />} label="Cafeteria" />
              <FormControlLabel control={<Checkbox checked={changingRoom} onChange={(val) => {setChangingRoom(val.target.checked)}} />} label="Changing Room" />
              <FormControlLabel control={<Checkbox checked={disabledAccess} onChange={(val) => {setDisabledAccess(val.target.checked)}} />} label="Disabled Access" />
              <FormControlLabel control={<Checkbox checked={freeParking} onChange={(val) => {setFreeParking(val.target.checked)}} />} label="Free Parkings" />
              <FormControlLabel control={<Checkbox checked={lockers} onChange={(val) => {setLockers(val.target.checked)}} />} label="Lockers" />
              <FormControlLabel control={<Checkbox checked={materialRenting} onChange={(val) => {setMaterialRenting(val.target.checked)}} />} label="Material Renting" />
              <FormControlLabel control={<Checkbox checked={playPark} onChange={(val) => {setPlayPark(val.target.checked)}} />} label="Play Park" />
              <FormControlLabel control={<Checkbox checked={privateParking} onChange={(val) => {setPrivateParking(val.target.checked)}} />} label="Private Parking" />
              <FormControlLabel control={<Checkbox checked={restaurant} onChange={(val) => {setRestaurant(val.target.checked)}} />} label="Restaurant" />
              <FormControlLabel control={<Checkbox checked={snackbar} onChange={(val) => {setSnackBar(val.target.checked)}} />} label="Snack Bar" />
              <FormControlLabel control={<Checkbox checked={store} onChange={(val) => {setStore(val.target.checked)}} />} label="Store" />
              <FormControlLabel control={<Checkbox checked={vendingMachine} onChange={(val) => {setVendingMachine(val.target.checked)}} />} label="Vending Machine" />
              <FormControlLabel control={<Checkbox checked={wifi} onChange={(val) => {setWifi(val.target.checked)}} />} label="Wifi" />
              </FormGroup>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    );
  }
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
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Monday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={mondayOpen} onChange={() => setMondayOpen(!mondayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="mondayFrom" value={mondayFrom}  onChange={(val) => setMondayFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="mondayTo" value={mondayTo}  onChange={(val) => setMondayTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Tuesday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={tuesdayOpen} onChange={() => setTuesdayOpen(!tuesdayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="tuesdayFrom"  value={tuesdayFrom}  onChange={(val) => setTuesdayFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="tuesdayTo"  value={tuesdayTo}  onChange={(val) => setTuesdayTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Wednesday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={wednesdayOpen} onChange={() => setWednesdayOpen(!wednesdayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="wednesdayFrom"  value={wedFrom}  onChange={(val) => setWedFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="wednesdayTo"  value={wedTo}  onChange={(val) => setWedTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Thursday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={thursdayOpen} onChange={() => setThursdayOpen(!thursdayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="thursdayFrom"  value={thursdayFrom}  onChange={(val) => setThursdayFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="thursdayTo"  value={thursdayTo}  onChange={(val) => setThursdayTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Friday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={fridayOpen} onChange={() => setFridayOpen(!fridayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="fridayFrom"  value={friFrom}  onChange={(val) => setFriFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="fridayTo"  value={friTo}  onChange={(val) => setFriTo(val.target.value)} type="time" placeholder="To" />
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
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Saturday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={saturdayOpen} onChange={() => setSaturdayOpen(!saturdayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="saturdayFrom"  value={satFrom}  onChange={(val) => setSatFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="saturdayTo"  value={satTo}  onChange={(val) => setSatTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
            Sunday
          </SoftTypography>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={sundayOpen} onChange={() => setSundayOpen(!sundayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="sundayFrom"  value={sunFrom}  onChange={(val) => setSunFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="sundayTo"  value={sunTo}  onChange={(val) => setSunTo(val.target.value)} type="time" placeholder="To" />
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
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Open
                  </SoftTypography>
              <Switch checked={holidayOpen} onChange={() => setHolidayOpen(!holidayOpen)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   From
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="holidayFrom"  value={holidayFrom}  onChange={(val) => setHolidayFrom(val.target.value)} type="time" placeholder="From" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   To
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="holidayTo"  value={holidayTo}  onChange={(val) => setHolidayTo(val.target.value)} type="time" placeholder="To" />
                  </SoftBox>
                  </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar light={true} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card> 
          <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Venue Info
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
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="name" value={name}  onChange={(val) => setName(val.target.value)} type="text" placeholder="Name" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="city" value={city} onChange={(val) => setCity(val.target.value)} type="text" placeholder="City" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="address" value={address} onChange={(val) => setAddress(val.target.value)} type="text" placeholder="Address" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="description" value={description} onChange={(val) => setDescription(val.target.value)} type="text" placeholder="Description" />
                </SoftBox>
                </Grid>
                
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="phone" required={true} value={contactNum} onChange={(val) => setContactNum(val.target.value)} type="tel" placeholder="Venue Contact Number" />
                </SoftBox>
                </Grid>
                <Grid visibility="hidden" item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="price" value={price} onChange={(val) => setPrice(val.target.value)} type="text" placeholder="Price(60min)" />
                </SoftBox>
                </Grid>
                {/* <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <input name="photos" required={true} onChange={(val) => {
                      console.log(val.target.files)
                      setFiles(val.target.files)
                      }} type="file" multiple />
                </SoftBox>
                </Grid> */}
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <OpeningHours/>
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <AmenitiesChecks/>
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                <SoftBox>
                <SoftTypography variant="h6">Upload Venue Images</SoftTypography>
                <Dropzone name="photos" onChange={updateFiles} value={files}>
                    {files.map((file) => (
                        <FileMosaic key={file} {...file} preview />
                    ))}
                </Dropzone>
                    {/* {files.length > 0 && (
                    <SoftBox mt={2}>
                        <SoftTypography variant="body1">
                        {files.length} file(s) selected
                        </SoftTypography>
                        {files.map((file) => (
                        <SoftTypography variant="body2" key={file.name}>
                            {file.name}
                        </SoftTypography>
                        ))}
                    </SoftBox>
                    )} */}
                </SoftBox>
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
        </SoftBox>
        
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddVenue;
