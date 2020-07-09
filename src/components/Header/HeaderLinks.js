/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload} from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to={"/home"} className={classes.link}>
      <Button href="" color="white" target="_blank" className={classes.navLink}>
        <HomeIcon className={classes.icons}/>HOME
      </Button>
      </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to={"/how-to"} className={classes.link}>
      <Button href="" color="white" target="_blank" className={classes.navLink}>
        <AccessibilityIcon className={classes.icons}/>HOW TO
      </Button>
      </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={"/start-teaching"} className={classes.link}>
      <Button href="" color="white" target="_blank" className={classes.navLink}>
        <SupervisorAccountIcon className={classes.icons}/>BECOME A TUTOR
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="MORE"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ArrowDropDownCircleIcon}
          dropdownList={[
            <Link to="/quick-guide" className={classes.dropdownLink}>
              Quick Guide
            </Link>,
            <Link to="/price" className={classes.dropdownLink}>
            Price
            </Link>,
            <Link to="/about" className={classes.dropdownLink}>
             About-Us
            </Link>,
            <Link to="/faq" className={classes.dropdownLink}>
            FAQ
           </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
