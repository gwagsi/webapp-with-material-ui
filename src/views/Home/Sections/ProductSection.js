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
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What Is Learning Pack?</h2>
          <h5 className={classes.description}>
          Learning Pack is the one of the best online English school where you
          can take English conversation lessons from your computer, smartphone or tablet with your own service anytime, anywhere .
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="24hrs Online Tutoring"
              description="Find a tutor Whenever and wherever"
              icon={HomeWorkIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Native And Non-Native Tutors"
              description="Our Tutors are experienced individuals from over the world who are ready to help you with you english"
              icon={LanguageIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Test Prep"
              description="Preparing for a test?, don't boder we got you covered."
              icon={AssessmentIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Learning Materials"
              description="From Business English to TOEFL to Conversation, there’s something for everyone"
              icon={LibraryBooksIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reasonable Prices"
              description="25 minute classes at affordable prices"
              icon={MonetizationOnIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Trial"
              description="Get a free trial to taste our services"
              icon={RowingIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>Get All These Benefits Starting At $33/month!</h1>
          <Button color="primary" round>
                <ShoppingCartIcon className={classes.icons} /> GET A FREE TRIAL
              </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
