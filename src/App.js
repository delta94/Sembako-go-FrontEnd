import React from "react";
//import logo from './logo.svg';
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarAwal from "./Component/NavbarAwal";
import jwt_decode from "jwt-decode";

//import Banner from './Component/Banner';
//import gambar from './img/gambar4.jpg';
import "react-bootstrap";
//import Figure from 'react-bootstrap/Figure';
//import FigureImage from 'react-bootstrap/FigureImage';
//import FigureCaption from 'react-bootstrap/FigureCaption';
//import Footer from './Component/Footer';
//import Routes from './Router';
import NavbarPembeli from "./Component/NavbarUser";
import NavbarPenjual from "./Component/NavbarPenjual";
import { login, register } from "./View/UserFunctions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Roles: "",
    };
  }
  render() {
    const token=localStorage.getItem('usertoken');
    if(token === null){
      return <NavbarAwal />;
    }
    const decoded = jwt_decode(token);

    if (decoded.roles === "Penjual") {
      return <NavbarPenjual />;
    } else if (decoded.roles === "Pembeli") {
      return <NavbarPembeli />;
    } else {
      return <NavbarAwal />;
    }
  }
}
export default App;
