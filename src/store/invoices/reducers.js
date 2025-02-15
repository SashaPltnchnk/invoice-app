import {
  GET_INVOICES_SUCCEEDED,
  GET_INVOICE_SUCCEEDED,
  GET_INVOICE_ITEMS_SUCCEEDED,
  UPDATE_INVOICE_SUCCEEDED
} from './actions';

const initialState = {
  // invoices: [],
  // invoiceItems: [],
  // invoice: null,
  entities: {},
  ids: [],
  currentInvoiceId: null,
  invoiceItems: []
};

export default function invoicesReducer(state = initialState, action) {
  switch (action.type) {

    case GET_INVOICES_SUCCEEDED: {
      const invoices = action.payload


      const newEntities = invoices.reduce((acc, invoice) => {
        return {
          ...acc,
          [invoice._id]: invoice
        }
      }, {})

      const newIds = invoices.reduce((acc, invoice) => {
        return  [...acc, invoice._id]
      }, [])

      return {
        ...state,
        entities: newEntities,
        ids: newIds,
      };
    }

    case GET_INVOICE_ITEMS_SUCCEEDED: {
      return {
        ...state,
        invoiceItems: action.payload
      };
    }

    case GET_INVOICE_SUCCEEDED:
    case UPDATE_INVOICE_SUCCEEDED: {
      return {
        ...state,
        invoice: {
          ...state.invoice,
          invoice: action.payload
        }
      };
    }

    default:
      return state;
  }
}