export const GET_INVOICES = 'GET_INVOICES';
export const GET_INVOICES_SUCCEEDED = 'GET_INVOICES_SUCCEEDED';
export const GET_INVOICES_FAIL = 'GET_INVOICES_FAIL';


// export const POST_INVOICE = 'POST_INVOICE';
// export const POST_INVOICE_SUCCESS = 'POST_INVOICE_SUCCESS';
// export const POST_INVOICE_FAILURE = 'POST_INVOICE_FAILURE';
// export const GET_INVOICES_LIST = 'GET_INVOICES_LIST';
// export const GET_INVOICES_LIST_SUCCESS = 'GET_INVOICES_LIST_SUCCESS';
// export const GET_INVOICES_LIST_FAILURE = 'GET_INVOICES_LIST_FAILURE';
// export const DELETE_INVOICE = 'DELETE_INVOICE';
// export const DELETE_INVOICE_SUCCESS = 'DELETE_INVOICE_SUCCESS';
// export const DELETE_INVOICE_FAILURE = 'DELETE_INVOICE_FAILURE';
// export const EDIT_INVOICE = 'EDIT_INVOICE';
// export const EDIT_INVOICE_SUCCESS = 'EDIT_INVOICE_SUCCESS';
// export const EDIT_INVOICE_FAILURE = 'EDIT_INVOICE_FAILURE';



export const getInvoices = () => ({
  type: GET_INVOICES,
});

export const getInvoicesSucceeded = (invoices) => ({
  type: GET_INVOICES_SUCCEEDED,
  payload: invoices
});

export const getInvoicesFail = (error) => ({
  type: GET_INVOICES_FAIL,
  payload: error
});




// export const postInvoice = (payload) => ({
//   type: POST_INVOICE,
//   payload: payload
// });
//
// export const postInvoiceSuccess = (invoices) => ({
//   type: POST_INVOICE_SUCCESS,
//   payload: invoices
// });
//
// export const postInvoiceFailure = (error) => ({
//   type: POST_INVOICE_FAILURE,
//   payload: error
// });
//
// export const getInvoicesList = (id) => ({
//   type: GET_INVOICES_LIST,
//   id: id
// });
//
// export const getInvoicesListSuccess = (invoices) => ({
//   type: GET_INVOICES_LIST_SUCCESS,
//   payload: invoices
// });
//
// export const getInvoicesListFailure = (error) => ({
//   type: GET_INVOICES_LIST_FAILURE,
//   payload: error
// });
//
//
// export const deleteInvoice = (id) => ({
//   type: DELETE_INVOICE,
//   id: id
// });
//
// export const deleteInvoiceSuccess = (invoices) => ({
//   type: DELETE_INVOICE_SUCCESS,
//   payload: invoices
// });
//
// export const deleteInvoiceFailure = (error) => ({
//   type: DELETE_INVOICE_FAILURE,
//   payload: error
// });
//
//
// export const editInvoice = (id, payload) => ({
//   type: EDIT_INVOICE,
//   id: id,
//   payload: payload
// });
//
// export const editInvoiceSuccess = (invoices) => ({
//   type: EDIT_INVOICE_SUCCESS,
//   payload: invoices
// });
//
// export const editInvoiceFailure = (error) => ({
//   type: EDIT_INVOICE_FAILURE,
//   payload: error
// });