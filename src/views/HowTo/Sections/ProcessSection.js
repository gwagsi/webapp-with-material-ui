import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AssessmentIcon from '@material-ui/icons/Assessment';
import LanguageIcon from '@material-ui/icons/Language';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import RowingIcon from '@material-ui/icons/Rowing';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SkypeWithCircle from "@styled-icons/entypo-social/SkypeWithCircle/SkypeWithCircle.js";
import * as entypoSocial from '@styled-icons/entypo-social';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { FolderOpen, Phone, AccountBalance, Class } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProcessSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How It Works (For Students)</h2>
          <h5 className={classes.description}>
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="1. Prepare Skype"
              description="Register at Skype.com and get your own Skype Name"
              icon={Phone}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="2. Sign Up"
              description="Sign up with your email address and Skype Name"
              icon={AccountBalance}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="3. Choose a Plan"
              description="Choose one of our Everyday Lesson or Coin plans."
              icon={MonetizationOnIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="4. Search & Book"
              description="Search for available teachers & book sessions."
              icon={LibraryBooksIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="5. Learn"
              description="Conduct learning sessions via Skype video."
              icon={Class}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={2}>
            <InfoArea
              title="6. Rate"
              description="Leave feedback for your teachers. They appreciate it!"
              icon={RowingIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </div>
     
  );
}
