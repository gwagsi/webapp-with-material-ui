import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";



// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import ProcessSection from "./Sections/ProcessSection.js";


const useStyles = makeStyles(styles);

export default function HowTo(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="LEARNING PACK"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"

        {...rest}
      />
      <br/>
       <br/>
       <br/>

     <div className={classNames(classes.main, classes.mainRaised)}>
     <ProcessSection/>
      <Footer />
    </div>
    </div>
  );
}
