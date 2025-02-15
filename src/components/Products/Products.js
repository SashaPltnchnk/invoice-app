import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Spinner from '../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../../store/products/actions';

import { getProductsArray } from '../../store/products/selectors';




const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const styles = theme => ({
  root: {
    width: '95%',
    marginTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});




class Products extends Component {

  componentDidMount() {

  }

  render () {

    const {
      classes,
      isLoading,
      // error,
      products
    } = this.props;


    const productsRows =  products.map(product => (
        <StyledTableRow key={product._id}>
          <StyledTableCell component="th" scope="row">{product.name}</StyledTableCell>
          <StyledTableCell >{product.price}</StyledTableCell>
        </StyledTableRow>
      ))

    if(isLoading)  {
      return <Spinner />
    }

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell >Product Name</StyledTableCell>
              <StyledTableCell >Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {productsRows}

          </TableBody>
        </Table>
      </Paper>
    );
  }

}

const mapStateToProps =  state => {
  return {
    products: getProductsArray(state),
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getProducts
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));