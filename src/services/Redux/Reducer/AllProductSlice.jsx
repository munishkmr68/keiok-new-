import { createSlice } from '@reduxjs/toolkit';
import api from '../../AxiosHelper';
import { MIDDLE_CREDENTIAL, storeAssigned } from '../../Methods/normalMethods';


const AllProductSlice = createSlice({
  name: "allProductPage",
  initialState: {
    data: [],
    creamData: [],
    paginationData: [],
    IBOProducts: [],
    retailProduct: [],
    prefferedProducts: [],
    totalCount: 0,
    error: '',
    isLoading: false,
    colors: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      if (action.payload?.section === "IBOProducts") {
        state['IBOProducts'] = action.payload?.res;
      } else if (action.payload?.section === "retailProduct") {
        state['retailProduct'] = action.payload?.res;
      } else if (action.payload?.section === "prefferedProducts") {
        state['prefferedProducts'] = action.payload?.res;
      } else {
        state['data'] = action.payload?.res;
      }
    },
    setIsLoading: (state, action) => {
      state['isLoading'] = action.payload;
    },
    setPaginationData: (state, action) => {
      state['paginationData'] = action.payload;
      state['totalCount'] = action.payload?.totalRecords
    },
    setError: (state, action) => {
      state['error'] = 'somthing went wrong please refresh the page.'
    }
  }
});

export const { isLoading, setIsLoading, setAllProducts, setCreamsProducts, setPaginationData, setError } = AllProductSlice.actions;

function _getCurrentCatId(catId, section) {
  const COUNTRYID = { us: 1005, ca: 1011, au: 1017, nz: 1023, mx: 1029, ph: 1035, ng: 1041, cd: 1047, cm: 1053, ke: 1059, mu: 1065, gb: 1071 };

  let id = catId || COUNTRYID[storeAssigned()];
  switch (section) {
    case 'retailProduct':
    case 'prefferedProducts':
    case 'IBOProducts':
    case 'All Products':
      id = 1005;
      break;
    case 'GSH':
      id = 1079;
      break;
    case 'Energy':
      id = 1080;
      break;
    case 'Combos':
      id = 1081;
      break;
    case 'Rave':
      id = 1077;
      break;
  }
  return id;
}

export const getAllProductApi = (section = "All Products", callback, catId = null) => dispatch => {
  dispatch(setIsLoading(true));
  const id = _getCurrentCatId(catId, section);
  api().setHeaders(MIDDLE_CREDENTIAL).post().data({
    method: "GET",
    endpoint: `/Crm/Items/WebCategory/${id}`
  }).success((res) => {
    if (res?.data) {
      dispatch(setAllProducts({ res: res?.data, section }));
      if (callback) {
        callback(res?.data);
      }
      dispatch(setIsLoading(false));
    }
  }).error((err) => {
    dispatch(setIsLoading(false));
  }).send()
};

export const getAllSingleProduct = (section = "All Products", productId = 0, callback, catId = null) => dispatch => {
  dispatch(setIsLoading(true));
  const id = _getCurrentCatId(catId, section);

  api().setHeaders(MIDDLE_CREDENTIAL).post().data({
    method: "GET",
    endpoint: `/Crm/Items?itemId=eq:${productId}`
  }).success((res) => {
    if (res?.data) {
      if (callback) {
        callback(res?.data);
      }
      dispatch(setIsLoading(false));
    }
  }).error((err) => {
    dispatch(setError(err))
    // dispatch(getAllSingleProduct(section, productId, callback, catId))
    window.location.reload()
    dispatch(setIsLoading(false));
  }).send()
};


export default AllProductSlice.reducer;
