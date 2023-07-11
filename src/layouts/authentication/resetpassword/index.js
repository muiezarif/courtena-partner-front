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

import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { useNavigate,useLocation } from "react-router-dom";
import SoftAlert from "components/SoftAlert";
import courtena from "api/courtena";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const [successMessage,setSuccessMessage] = useState("")
  const handleSetAgremment = () => setAgremment(!agreement);
  let navigate = useNavigate();
  let location = useLocation();

  const handleSubmit = async (e) => {
    // let data
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('token');
    
    if(password === cpassword){
        console.log(paramValue)
        const data = {password:password,fp:paramValue}
        await courtena.post("/auth/reset-password-partner",{...data},{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': '*/*'
          }
          }).then((response) => {
            console.log(response.data)
            if(response.data.success){
              setSuccess(true)
              setSuccessMessage(response.data.message)
            }else{
              setError(true)
              setErrorMessage(response.data.message)
            }
            
          }).catch(err => console.log(err.message));
    }else{
        setError(true)
        setErrorMessage("Passwords don't match")
        return
    }


  }
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('token');
    console.log(paramValue)
  },[])
  return (
    <BasicLayout
      title=""
      description=""
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Reset Password 
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <Separator /> */}
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
          {error ? <SoftAlert color="error" dismissible onClick={() => setError(false)} > {errorMessage}</SoftAlert> : null}
          {success ? <SoftAlert color="success" dismissible onClick={() => setSuccess(false)} > {successMessage}</SoftAlert> : null}
            <SoftBox mb={2}>
              <SoftInput name="password" value={password} onChange={(val) => setPassword(val.target.value)} type="password" placeholder="Password" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput name="confirmpassword" value={cpassword} onChange={(val) => setCPassword(val.target.value)} type="password" placeholder="Confirm Password" />
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton onClick={() => handleSubmit()} variant="gradient" color="dark" fullWidth>
                Send
              </SoftButton>
            </SoftBox>
            {/* <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox> */}
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default ResetPassword;
