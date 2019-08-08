import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MainPage from '../MainPage/MainPage';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';
import Invoices from '../Invoices/Invoices';
import ViewMode from "../Invoices/Modes/ViewMode";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <LinkTab label="Logo" href="/mainpage" {...a11yProps(0)} />
          <LinkTab label="Products" href="/products" {...a11yProps(1)} />
          <LinkTab label="Customers" href="/customers" {...a11yProps(2)} />
          <LinkTab label="Invoices" href="/invoices" {...a11yProps(3)} />
          <LinkTab label="+ New Invoice" href="/newinvoice" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MainPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Customers />
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Invoices />
      </TabPanel>
      <TabPanel value={value} index={4}>
         <ViewMode />
      </TabPanel>
    </div>
  );
}