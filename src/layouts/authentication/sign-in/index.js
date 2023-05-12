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

import { useState,useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import {connect, useDispatch} from "react-redux"
import { loginAdmin } from "../../../actions";
import courtena from "api/courtena";
import { useNavigate } from "react-router-dom";
import SoftAlert from "components/SoftAlert";
function SignIn(props) {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  let navigate = useNavigate();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSubmit = async (e) => {
    const data = {email:email,password:password}
    await courtena.post("/auth/login-admin",{...data},{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*'
    }
    }).then((response) => {
      console.log(response.data)
      if(response.data.success){
        localStorage.setItem('admin', JSON.stringify(response.data.result));
        localStorage.setItem('token', response.data.result.token);
        localStorage.setItem('adminRemainLoggedIn', true);
        navigate("/dashboard")
      }else{
        setError(true)
        setErrorMessage(response.data.message)
      }
      
    }).catch(err => console.log(err.message));
  }
  useEffect(() => {
    const loggedIn = Boolean(localStorage.getItem('adminRemainLoggedIn'));
    console.log(loggedIn)
    if(loggedIn){
      if(loggedIn == true){
        navigate("/dashboard")
      }
    }
  },[])
  return (
    <CoverLayout
      title="Welcome back"
      description=""
      image={curved9}
    >
      <SoftBox component="form" role="form">
        {error ? <SoftAlert color="error" dismissible onClick={() => setError(false)} > {errorMessage}</SoftAlert> : null}
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput name="email" onChange={(val) => setEmail(val.target.value)} type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput name="password" onChange={(val) => setPassword(val.target.value)} type="password" placeholder="Password" />
        </SoftBox>
        {/* <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox> */}
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={() => handleSubmit()} variant="gradient" color="info" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          
            <SoftTypography
              component={Link}
              to="/authentication/forgot-password"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
              
            >
              Forgot Password ?
            </SoftTypography>
          
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
              
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}
const mapStateToProps = (state) =>{
  return {
      responseData:state.auth.user
  };
}
const mapDispatchToProps = (dispatch) =>{
  return {
      login:dispatch(loginAdmin())
  };
}
export default connect(mapStateToProps,{loginAdmin})(SignIn);
