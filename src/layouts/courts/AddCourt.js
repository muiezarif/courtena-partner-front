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

import { Backdrop, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, Icon, InputLabel, MenuItem, Select, Switch,  } from "@mui/material";
import SoftButton from "components/SoftButton";

import { useNavigate } from "react-router-dom";
import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import { Dropzone, FileMosaic} from "@dropzone-ui/react"
import courtena from "api/courtena";
// import OpeningHours from "./components/OpeningHours";
import "../../global.css"
import { ArrowDropDown } from "@mui/icons-material";
function AddCourt() {
  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const [address,setAddress] = useState("")
  const [description,setDescription] = useState("")
  const [contactNum,setContactNum] = useState("")
  const [sports,setSports] = useState()
  const [courtType,setCourtType] = useState("indoor")
  const [venue,setVenue] = useState()
  const [bookableOnline,setBookableOnline] = useState(false)
  const [activeCourt,setActiveCourt] = useState(false)
  const [wall,setWall] = useState(false)
  const [crystal,setCrystal] = useState(false)
  const [panoramic,setPanoramic] = useState(false)
  const [single,setSingle] = useState(false)
  const [double,setDouble] = useState(false)
  const [price,setPrice] = useState(0)
  const [maxPeople,setMaxPeople] = useState()
  const [backdrop,setBackdrop] = useState(false)
  const [showSports,setShowSports] = useState(false)
  const [allSports,setAllSports] = useState([])
  const [allVenues,setAllVenues] = useState([])
  let navigate = useNavigate();
  
  const [files, setFiles] = useState([]);
  let allSportsComponent
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  async function getAllSports(){
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    await courtena.get("/sports/",{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '*/*',
          'Authorization': partnerInfo.token
      }
      }).then((response) => {
        let newAllSports = []
        console.log(response.data)
        if(response.data.success){
            response.data.result.map((item) => {
                newAllSports.push({
                    name:item.name,
                    id:item._id
                })
            })
            
            setAllSports(newAllSports)
            setSports(newAllSports[0].id)
            console.log(newAllSports[0].id)
            
        }else{
            setAllSports([])
        }
      }).catch(err => {
        setAllSports([])
        console.log(err)
      })
  }
  async function getAllVenues(){
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    await courtena.get("/venues/"+partnerInfo._id,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '*/*',
          'Authorization': partnerInfo.token
      }
      }).then((response) => {
        let newAllVenues = []
        console.log(response.data)
        if(response.data.success){
            if(response.data.result.venues !== []){
              response.data.result.venues.map((item) => {
                newAllVenues.push({
                    name:item.name,
                    id:item._id
                })
            })
            setAllVenues(newAllVenues)
            // setVenue(newAllVenues[0].id)
            // console.log(newAllVenues[0].id)
            }else{
              setAllVenues([])
              setVenue()
            }
            
            
            
            
        }else{
            setAllSports([])
        }
      }).catch(err => {
        setAllSports([])
        console.log(err)
      })
  }
  useEffect(() => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    getAllSports()
    getAllVenues()
    console.log(allSports)
    
  },[])
  useEffect(() => {
    console.log(sports)
    console.log(venue)
    console.log(allSports)
    console.log(allVenues)

    
  },[sports,allSports,venue,allVenues])
  const handleSubmit = async (e) => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    setBackdrop(true)
    const data = {title:name,description:description,price:price,courtFeature:{wall:wall,crystal:crystal,panoramic:panoramic,single:single,double:double},courtType:courtType,advancedSettings:{bookableOnline:bookableOnline,courtActive:activeCourt},maxPeople:maxPeople,partner:partnerInfo._id,sports:sports,venue:venue}
    await courtena.post("/courts/create/"+venue,{...data},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
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

  
  function AdvancedSettings() {

  
    return (
      <Card>
        <SoftBox pt={2} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Advanced Settings
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox width="80%" ml={2}>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={bookableOnline} onChange={(val) => {setBookableOnline(val.target.checked)}} />} label="Bookable Online" />
              <FormControlLabel control={<Checkbox checked={activeCourt} onChange={(val) => {setActiveCourt(val.target.checked)}} />} label="Active Court" />
              
              </FormGroup>
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
            Court Info
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
                    <SoftInput name="description" value={description} onChange={(val) => setDescription(val.target.value)} type="text" placeholder="Description" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                {/* <SoftBox mb={2}>
                    <SoftInput name="price" value={price} onChange={(val) => setPrice(val.target.value)} type="number" placeholder="Price(60min)" />
                </SoftBox> */}
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <SoftInput name="maxPeople" value={maxPeople} onChange={(val) => setMaxPeople(val.target.value)} type="number" placeholder="Max People" />
                </SoftBox>
                </Grid>
                
                
                <Grid item xs={12} md={3} xl={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Court Type
                </SoftTypography>
                <Select
                    className="selectArrow"
                    labelId="sports-label-id"
                    id="sports-label-id"
                    value={courtType}
                    label="Court Type"
                    style={{width:"100%"}}
                    IconComponent={() =><ArrowDropDown/>}
                    onChange={(val) => {setCourtType(val.target.value)}}
                >
                    <MenuItem value="indoor">Indoor</MenuItem>
                    <MenuItem value="outdoor">Outdoor</MenuItem>
                    <MenuItem value="roofed-outdoor">Roofed Outdoor</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={12} md={3} xl={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Venue
                </SoftTypography>
                <Select
                    className="selectArrow"
                    labelId="sports-label-id"
                    id="sports-label-id"
                    value={venue}
                    label="Venue"
                    style={{width:"100%"}}
                    IconComponent={() =><ArrowDropDown/>}
                    onChange={(val) => {setVenue(val.target.value)}}
                >
                    {allVenues.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                    {/* <MenuItem value="venue1">Venue 1</MenuItem>
                    <MenuItem value="venue2">Venue 2</MenuItem>
                    <MenuItem value="venue3">Venue 3</MenuItem> */}
                </Select>
                </Grid>
                <Grid visibility="hidden" item xs={12} md={3} xl={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Sports
                </SoftTypography>
                <Select
                    className="selectArrow"
                    labelId="sports-label-id"
                    id="sports-label-id"
                    value={sports ? sports : null}
                    label="Sports"
                    style={{width:"100%"}}
                    hidden="true"
                    IconComponent={() =><ArrowDropDown/>}
                    onChange={(val) => {setSports(val.target.value)}}
                >
                    {allSports.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                    
                    {/* <MenuItem value="tennis">Tennis</MenuItem>
                    <MenuItem value="squash">Squash</MenuItem> */}
                </Select>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                <Card>
                <SoftBox pt={2} px={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Court Features
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
                <SoftBox display="flex" py={1} mb={0.25}>
                    <SoftBox width="80%" ml={2}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox checked={wall} onChange={(val) => {
                        setWall(val.target.checked)
                        setCrystal(false)
                        setPanoramic(false)
                        }} />} label="Wall" />
                    <FormControlLabel control={<Checkbox checked={crystal} onChange={(val) => {
                        setCrystal(val.target.checked)
                        setWall(false)
                        setPanoramic(false)
                        }} />} label="Crystal" />
                    <FormControlLabel control={<Checkbox checked={panoramic} onChange={(val) => {
                        setPanoramic(val.target.checked)
                        setWall(false)
                        setCrystal(false)
                        }} />} label="Panoramic" />
                    
                    </FormGroup>
                    </SoftBox>
                </SoftBox>
                </SoftBox>
                <SoftBox pt={2} px={2}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Court Size
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
                <SoftBox display="flex" py={1} mb={0.25}>
                    <SoftBox width="80%" ml={2}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox checked={single} onChange={(val) => {
                        setSingle(val.target.checked)
                        setDouble(false)
                        }} />} label="Single" />
                    <FormControlLabel control={<Checkbox checked={double} onChange={(val) => {
                        setDouble(val.target.checked)
                        setSingle(false)
                        }} />} label="Double" />
                    </FormGroup>
                    </SoftBox>
                </SoftBox>
                </SoftBox>
                </Card>
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <AdvancedSettings/>
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                {/* <SoftBox> */}
                {/* <SoftTypography variant="h6">Upload Venue Images</SoftTypography> */}
                {/* <Dropzone onChange={updateFiles} value={files}>
                    {files.map((file) => (
                        <FileMosaic key={file} {...file} preview />
                    ))}
                </Dropzone> */}
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
                {/* </SoftBox> */}
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

export default AddCourt;
