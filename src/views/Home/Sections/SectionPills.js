import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { ChildCare, BusinessCenter, RecordVoiceOver, FlightTakeoff, QuestionAnswer, LabelImportant, ShoppingCart } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";


const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
          <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "For Beginners",
                    tabIcon: LabelImportant,
                    tabContent: (
                      <span>
                        <p>
                        Basic conversation, grammar, vocabulary practice. Lessons for those just starting to learn!
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "For Kids",
                    tabIcon: ChildCare,
                    tabContent: (
                      <span>
                        <p>
                        Alphabet, Let’s Go ... Popular English materials for kids
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Business",
                    tabIcon: BusinessCenter,
                    tabContent: (
                      <span>
                        <p>
                        Practice useful English for office workers
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Speaking Test",
                    tabIcon: RecordVoiceOver,
                    tabContent: (
                      <span>
                        <p>
                        Familiarize yourself with TOEIC Speaking, TOEFL Speaking test
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Travel & Culture",
                    tabIcon: FlightTakeoff,
                    tabContent: (
                      <span>
                        <p>
                        Learn phrases you will need when traveling abroad
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Discussion",
                    tabIcon: QuestionAnswer,
                    tabContent: (
                      <span>
                        <p>
                        High quality English lessons based on news articles - updated daily!
                        </p>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
        </GridItem>
          </GridContainer>
          <div>
          <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>Get Started Today</h1>
          <Button color="primary" round>
                <ShoppingCart className={classes.icons} /> GET A FREE TRIAL
              </Button>
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}
