import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
} from "@material-ui/icons";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import chk from "../styles/checkout.module.css";
import router from "next/router";
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  Settings,
  Logout,
  PersonAdd,
  Badge,
} from "@material-ui/core";
import { NavDropdown } from "react-bootstrap";

const Navbar2 = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [part, setPart] = useState("");
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [vehs, setVehs] = useState([]);
  const [loggedIn, setloggedIn] = useState("");
  const [errormodal, setErrorModal] = useState(false);
  const [logdiv, setLogDiv] = useState(false);
  const errortoggle = () => setErrorModal(!errormodal);

  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(true);
    console.log("hello in click");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setPart(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setloggedIn(localStorage.getItem("token"));
      console.log("token", localStorage.getItem("token"));
      //setloggedIn("");
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
    } else {
      setloggedIn("");
    }
    axios
      .get(`https://api.mazglobal.co.uk/maz-api/products`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.mazglobal.co.uk/maz-api/categories`)
      .then((res) => {
        setCats(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.mazglobal.co.uk/maz-api/vehicles`)
      .then((res) => {
        setVehs(res.data.data);
      })
      .catch((err) => console.log(err));

    // alert('Finished loading');
  }, [id]);

  const Search = () => {
    let status = 0;

    let prId = 0;
    let cId = 0;
    let vId = 0;
    products.map((pr) => {
      if (
        pr.part_no == part ||
        pr.oem_no == part ||
        pr.name.toUpperCase() == part.toUpperCase()
      ) {
        setId(pr.id);
        prId = pr.id;

        setPart("");
        status = 1;
      }
    });

    cats.map((ct) => {
      if (ct.name.toUpperCase() == part.toUpperCase()) {
        status = 2;
        cId = ct.id;
      }
    });

    vehs.map((vh) => {
      if (vh.name.toUpperCase() == part.toUpperCase()) {
        status = 3;
        vId = vh.id;
      }
    });

    if (status == 0) {
      // errortoggle()
      router.push({ pathname: "/products", query: { part: part } });
    }
    if (status == 1) {
      router.push(`/productdescp/${prId}`);
    }
    if (status == 2) {
      router.push(`/category/${cId}`);
    }

    if (status == 3) {
      router.push(`/vehicle/${vId}`);
    }
  };

  const [state, setState] = useState({
    dropdownOpen: false,
  });

  const toggle = () =>
    setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));

  const removeToken = () => {
    localStorage.removeItem("token");
    router.push("/account/login");
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      Search();
    }
  };

  return (
    <div className={nav.Container}>
      <div className={nav.Wrapper}>
        <div className={nav.Topbar}>
          <Link href="tel:+44 (0)20 86542 7567">
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                marginLeft: "100px",
              }}
            >
              <PhoneOutlined
                style={{
                  color: "rgba(16, 103, 138, 0.933)",
                  marginTop: "9px",
                  marginLeft: "140px",
                  fontWeight: "400",
                }}
                width="25px"
                height="25px"
                className={nav.hide}
              />
              <p
                style={{
                  marginTop: "9px",
                  marginLeft: "10px",
                  fontWeight: "400",
                }}
              >
                +44 (0)20 86542 7567
              </p>
            </div>
          </Link>
          <Link href="mailto:contact@mazglobal.co.uk?subject=SendMail&body=Description">
            <div style={{ display: "flex", cursor: "pointer" }}>
              <EmailOutlined
                style={{
                  color: "rgba(16, 103, 138, 0.933)",
                  marginTop: "9px",
                  marginLeft: "50px",
                  fontWeight: "400",
                }}
                width="25px"
                className={nav.hide}
                height="25px"
              />
              <p
                style={{
                  marginTop: "9px",
                  marginLeft: "10px",
                  fontWeight: "400",
                }}
              >
                info@mazglobal.com
              </p>
            </div>
          </Link>
          {/* <TextField
          style={{marginLeft:'auto',marginTop:'4px',background:'white',height:'30px',marginRight:'200px',paddingLeft:'8px', fontFamily: "'Montserrat', sans-serif"}}
          className={nav.Search}
          onChange={ (event) => setPart(event.target.value) }
          onKeyDown={ (e)=>handleKeyDown(e)}
            value={part}
            //label="   Enter Chance No.OEM No"
            placeholder="Search Part Details"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon style={{marginTop:'0px'}} onClick={()=>Search()}/>
                  </IconButton>
                </InputAdornment>
              )
            }}
           /> */}

          {/*                
               <Link href="/cart" as={`/cart`}>
                <ShoppingCartOutlined
                        color="action"
                        className={chk.cart}
                      />
                             
                 
                </Link>
                {cartItems.length > -1 && (
                    <Badge style={{marginTop:'10px',right:'20px'}} badgeContent={cartItems.length} color="primary">
                      
                    </Badge>
                  )}    */}

          <div style={{ marginLeft: "auto" }}>
            <Tooltip title="Account settings" placement="top">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                style={{
                  background: "lightgrey",
                  width: "38px",
                  height: "38px",
                  marginRight: "70px",
                  marginTop: "4px",
                  marginBottom: "4px",
                }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Person sx={{ width: 32, height: 32 }}></Person>
              </IconButton>
            </Tooltip>

            <Menu
              style={{ top: "-510px" }}
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={() => setAnchorEl(false)}
              onClick={() => setAnchorEl(false)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem>
                <Avatar />
                <Link href="/account/register">
                  <p
                    style={{
                      textDecoration: "none",
                      padding: "8px",
                      marginTop: "8px",
                    }}
                  >
                    {" "}
                    Register
                  </p>
                </Link>
              </MenuItem>
              <MenuItem>
                <Avatar />
                <Link href="/account/login">
                  <p
                    style={{
                      textDecoration: "none",
                      padding: "8px",
                      marginTop: "8px",
                    }}
                  >
                    {" "}
                    Login
                  </p>
                </Link>
              </MenuItem>
              <Divider />
            </Menu>
          </div>
        </div>

        {/* <ToastContainer align={'right'} position={'top'} />  */}
      </div>
      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>!OOpps</ModalHeader>
        <ModalBody>
          <>!Not Found Product With this part no</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Navbar2;

const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid light grey;
`;
