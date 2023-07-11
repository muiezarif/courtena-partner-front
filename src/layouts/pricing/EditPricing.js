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

import { useNavigate,useLocation } from "react-router-dom";
import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import { Dropzone, FileMosaic} from "@dropzone-ui/react"
import courtena from "api/courtena";
// import OpeningHours from "./components/OpeningHours";
import "../../global.css"
import { ArrowDropDown } from "@mui/icons-material";
function EditPricing() {
  const [name,setName] = useState("")

  const [pricingName,setPricingName] = useState("")
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [startTime,setStartTime] = useState("")
  const [endTime,setEndTime] = useState("")
  const [weekdays,setWeekdays] = useState(false)
  const [weekends,setWeekends] = useState(false)
  const [monday,setMonday] = useState(false)
  const [tuesday,setTuesday] = useState(false)
  const [wednesday,setWednesday] = useState(false)
  const [thursday,setThursday] = useState(false)
  const [friday,setFriday] = useState(false)
  const [saturday,setSaturday] = useState(false)
  const [sunday,setSunday] = useState(false)
  const [int30min,setInt30Min] = useState(false)
  const [int30minPrice,setInt30MinPrice] = useState(0)
  const [int60min,setInt60Min] = useState(false)
  const [int60minPrice,setInt60MinPrice] = useState(0)
  const [int90min,setInt90Min] = useState(false)
  const [int90minPrice,setInt90MinPrice] = useState(0)
  const [int120min,setInt120Min] = useState(false)
  const [int120minPrice,setInt120MinPrice] = useState(0)
  const [int150min,setInt150Min] = useState(false)
  const [int150minPrice,setInt150MinPrice] = useState(0)
  const [int180min,setInt180Min] = useState(false)
  const [int180minPrice,setInt180MinPrice] = useState(0)
  const [courts,setCourts] = useState([])
  const [pricingIntervals,setPricingIntervals] = useState([])
  const [reservationRule,setReservationRule] = useState(1)
  const [courtsLoaded,setCourtsLoaded] = useState(false)
  const [price,setPrice] = useState()
  const [backdrop,setBackdrop] = useState(false)
  const [reservationRules,setReservationRules] = useState([])
  const [allCourts,setAllCourts] = useState([])
  const [checkedItems, setCheckedItems] = useState({});
  const [timedPrice,setTimedPrice] = useState(false)
  let navigate = useNavigate();
  let location = useLocation()
  const [files, setFiles] = useState([]);
  let allSportsComponent
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  const handleChange = (event) => {
    
    if(event.target.checked){
        setCourts([...courts,event.target.name])
    }else{
        const newArray = courts.filter(item => item !== event.target.name);
        setCourts(newArray);
    }
    
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked,id:event.target.name });
  };
  async function getPricingDetails() {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    setBackdrop(true)
    await courtena.get("/partner/pricing/"+location.state.pricingId,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '*/*',
          'Authorization': partnerInfo.token
      }
      }).then((response) => {
        console.log(response.data)
        if(response.data.success){
            setName(response.data.result.name)
            setReservationRule(response.data.result.reservationRules.id)
            setTimedPrice(response.data.result.dateTime.timedPrice)
            setPricingName(response.data.result.dateTime.pricingName)
            setStartDate(response.data.result.dateTime.startDate)
            setEndDate(response.data.result.dateTime.endDate)
            setStartTime(response.data.result.dateTime.startTime)
            setEndTime(response.data.result.dateTime.endTime)
            setMonday(response.data.result.weekdays.monday)
            setTuesday(response.data.result.weekdays.tuesday)
            setWednesday(response.data.result.weekdays.wednesday)
            setThursday(response.data.result.weekdays.thursday)
            setFriday(response.data.result.weekdays.friday)
            setSaturday(response.data.result.weekends.saturday)
            setSunday(response.data.result.weekends.sunday)
            response.data.result.pricing.map(item => {
                if(item.interval === "30min"){
                    setInt30Min(item.active)
                    setInt30MinPrice(item.price)
                }
                if(item.interval === "60min"){
                    setInt60Min(item.active)
                    setInt60MinPrice(item.price)
                }
                if(item.interval === "90min"){
                    setInt90Min(item.active)
                    setInt90MinPrice(item.price)
                }
                if(item.interval === "120min"){
                    setInt120Min(item.active)
                    setInt120MinPrice(item.price)
                }
                if(item.interval === "150min"){
                    setInt150Min(item.active)
                    setInt150MinPrice(item.price)
                }
                if(item.interval === "180min"){
                    setInt180Min(item.active)
                    setInt180MinPrice(item.price)
                }
            })
            response.data.result.courtsLinked.map(item => {
                
            })
            
            setBackdrop(false)
        }else{
            setBackdrop(false)
            setError(true)
            setErrorMessage(response.data.message)
        }
        
      }).catch(err => console.log(err.message));
  }
  async function getPricingInfo(){
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    setCourtsLoaded(true)
    await courtena.get("/partner/pricing/pricing-info/"+partnerInfo._id,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': '*/*',
          'Authorization': partnerInfo.token
      }
      }).then((response) => {
        let newCourts = []
        let newReservationRules = []
        if(response.data.success){
            setReservationRule(response.data.result.reservation_rules[0].id)
            setReservationRules(response.data.result.reservation_rules)
            response.data.result.courts.map((item) => {
                newCourts.push({id:item._id,name:item.title})
            })
            setAllCourts(newCourts)
            setCourtsLoaded(false)
        }else{
            setAllSports([])
            setCourtsLoaded(false)
        }
      }).catch(err => {
        setAllSports([])
        console.log(err)
        setCourtsLoaded(false)
      })
  }

  useEffect(() => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    getPricingInfo()
    getPricingDetails()

    
  },[])
  useEffect(() => {
  },[allCourts,reservationRules])
  const handleSubmit = async (e) => {
    var partnerInfoString = localStorage.getItem("partner")
    var partnerInfo = JSON.parse(partnerInfoString)
    var pricingIntervals = [{interval:"30min",price:int30minPrice,active:int30min},{interval:"60min",price:int60minPrice,active:int60min},{interval:"90min",price:int90minPrice,active:int90min},{interval:"120min",price:int120minPrice,active:int120min},{interval:"150min",price:int150minPrice,active:int150min},{interval:"180min",price:int180minPrice,active:int180min}]
    const data = {name:name,courtsLinked:courts,reservationRules:{id:reservationRule},pricing:pricingIntervals,dateTime:{timedPrice:timedPrice,pricingName:pricingName,startDate:startDate,endDate:endDate,startTime:startTime,endTime:endTime},weekdays:{monday:monday,tuesday:tuesday,wednesday:wednesday,thursday:thursday,friday:friday},weekends:{saturday:saturday,sunday:sunday},partner:partnerInfo._id}
    setBackdrop(true)
    await courtena.put("/partner/pricing/"+location.state.pricingId+"/update",{...data},{
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

  }

  
  function MyCourts() {

  
    return (
      <Card>
        <SoftBox pt={2} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Apply Pricing to Courts
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
            {courtsLoaded ? <CircularProgress color="info"/> : null}
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox width="80%" ml={2}>
            <FormGroup>
            {allCourts.map((option) => (
            <FormControlLabel
            key={option.id}
            control={<Checkbox checked={checkedItems[option.id] || false} onChange={handleChange} name={option.id} />}
            label={option.name}
            />
            ))}

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
            Pricing Info
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
                <Grid item xs={12} md={6} xl={6}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Name
                </SoftTypography>
                <SoftBox mb={2}>
                    <SoftInput name="name" value={name}  onChange={(val) => setName(val.target.value)} type="text" placeholder="Name" />
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Reservation Rules
                </SoftTypography>
                <Select
                    className="selectArrow"
                    labelId="reservation-rules-label-id"
                    id="reservation-rules-label-id"
                    value={reservationRule}
                    label="Reservation Rule"
                    style={{width:"100%"}}
                    IconComponent={() =><ArrowDropDown/>}
                    onChange={(val) => {setReservationRule(val.target.value)}}
                >
                    {reservationRules.map(item => <MenuItem style={{width:"100%"}} key={item.id} value={item.id}>{item.name}</MenuItem>)}
                    {/* <MenuItem value="venue1">Venue 1</MenuItem>
                    <MenuItem value="venue2">Venue 2</MenuItem>
                    <MenuItem value="venue3">Venue 3</MenuItem> */}
                </Select>
                </Grid>
                <Grid item xs={0} md={5} xl={5}>

                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                <SoftBox mb={2}>
                <Card>
        <SoftBox pt={2} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Date & Time
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
          <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Timed Price
                  </SoftTypography>
              <Switch checked={timedPrice} onChange={() => setTimedPrice(!timedPrice)} />
            </SoftBox>
            <SoftBox width="100%" ml={2}>
            <Grid container spacing={2}>
                <Grid item md={4}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Pricing Name
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="pricingName" value={pricingName}  onChange={(val) => setPricingName(val.target.value)} type="text" placeholder="Pricing Name" />
                  </SoftBox>
                  </Grid>
                  {timedPrice ?<Grid item md={4}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Start Date
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="startDate" value={startDate}  onChange={(val) => setStartDate(val.target.value)} type="date" placeholder="Start Date" />
                  </SoftBox>
                  </Grid>: null}
                  {timedPrice ?<Grid item md={4}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   End Date
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="endDate" value={endDate}  onChange={(val) => setEndDate(val.target.value)} type="date" placeholder="End Date" />
                  </SoftBox>
                  </Grid>: null}
                  
              </Grid>
            </SoftBox>
            
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox width="100%" ml={2}>
          <Grid container spacing={2}>
                <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Start Time
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="startTime" value={startTime}  onChange={(val) => setStartTime(val.target.value)} type="time" placeholder="Start Time" />
                  </SoftBox>
                  </Grid>
                  <Grid item md={6}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   End Time
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="endTime" value={endTime}  onChange={(val) => setEndTime(val.target.value)} type="time" placeholder="End Time" />
                  </SoftBox>
                  </Grid>
                  </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox width="100%" ml={2}>
          <Grid container spacing={2}>
          <Grid item md={6}>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked={weekdays} onChange={(val) => {
                setWeekdays(val.target.checked)
                setMonday(val.target.checked)
                setTuesday(val.target.checked)
                setWednesday(val.target.checked)
                setThursday(val.target.checked)
                setFriday(val.target.checked)
                }} />} label="Weekdays" />
              <FormControlLabel control={<Checkbox checked={monday} onChange={(val) => {setMonday(val.target.checked)}} />} label="Monday" />
              <FormControlLabel control={<Checkbox checked={tuesday} onChange={(val) => {setTuesday(val.target.checked)}} />} label="Tuesday" />
              <FormControlLabel control={<Checkbox checked={wednesday} onChange={(val) => {setWednesday(val.target.checked)}} />} label="Wednesday" />
              <FormControlLabel control={<Checkbox checked={thursday} onChange={(val) => {setThursday(val.target.checked)}} />} label="Thursday" />
              <FormControlLabel control={<Checkbox checked={friday} onChange={(val) => {setFriday(val.target.checked)}} />} label="Friday" />
              </FormGroup>
              </Grid>
              <Grid item md={6}>
              <FormGroup>
              <FormControlLabel control={<Checkbox checked={weekends} onChange={(val) => {
                setWeekends(val.target.checked)
                setSaturday(val.target.checked)
                setSunday(val.target.checked)
                }} />} label="Weekends" />
              <FormControlLabel control={<Checkbox checked={saturday} onChange={(val) => {setSaturday(val.target.checked)}} />} label="Saturday" />
              <FormControlLabel control={<Checkbox checked={sunday} onChange={(val) => {setSunday(val.target.checked)}} />} label="Sunday" />              
              </FormGroup>
              </Grid>
              </Grid>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
                </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                <Card>
        <SoftBox pt={2} px={2}>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Intervals
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   30 min
                  </SoftTypography>
              <Switch checked={int30min} onChange={() => setInt30Min(!int30min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int30min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="30min" value={int30minPrice}  onChange={(val) => setInt30MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
                  
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   60 min
                  </SoftTypography>
              <Switch checked={int60min} onChange={() => setInt60Min(!int60min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int60min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="60min"  value={int60minPrice}  onChange={(val) => setInt60MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
                  
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   90 min
                  </SoftTypography>
              <Switch checked={int90min} onChange={() => setInt90Min(!int90min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int90min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="90min"  value={int90minPrice}  onChange={(val) => setInt90MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
                  
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   120 min
                  </SoftTypography>
              <Switch checked={int120min} onChange={() => setInt120Min(!int120min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int120min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="120min"  value={int120minPrice}  onChange={(val) => setInt120MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
                  
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   150 min
                  </SoftTypography>
              <Switch checked={int150min} onChange={() => setInt150Min(!int150min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int150min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="150min"  value={int150minPrice}  onChange={(val) => setInt150MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
              </Grid>
            </SoftBox>
          </SoftBox>
          <SoftBox mt={1}>
          </SoftBox>
          <SoftBox display="flex" py={1} mb={0.25}>
            <SoftBox mt={0.25}>
            <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   180 min
                  </SoftTypography>
              <Switch checked={int180min} onChange={() => setInt180Min(!int180min)} />
            </SoftBox>
            <SoftBox width="80%" ml={2}>
            <Grid container spacing={2}>
                  {int180min?<Grid item md={12}>
                  <SoftTypography variant="caption" fontWeight="bold" color="dark" textTransform="uppercase">
                   Price
                  </SoftTypography>
                  <SoftBox mb={2}>
                      <SoftInput name="180min"  value={int180minPrice}  onChange={(val) => setInt180MinPrice(val.target.value)} type="number" placeholder="SAR" />
                  </SoftBox>
                  </Grid>:null}
              </Grid>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
                </SoftBox>
                </Grid>
                {/* <Grid item xs={12} md={6} xl={4}>
                <SoftBox mb={2}>
                    <MyCourts/>
                </SoftBox>
                </Grid> */}
                
                
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

export default EditPricing;
