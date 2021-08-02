// const initialValue = {
//   categoryData: [],
//   errMsg: [],
//   isPending: false,
//   isRejected: false,
//   isFulfilled: false,
// };

// const categoryReducers = (state = initialValue, action) => {
//   switch (action.type) {
//     case "GET_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "GET_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errMsg: action.payload.data,
//       };
//     case "GET_CATEGORY_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "GET_CATEGORY_BY_ID_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "GET_CATEGORY_BY_ID_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errMsg: action.payload.data,
//       };
//     case "GET_CATEGORY_BY_ID_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "POST_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "POST_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errMsg: action.payload.data,
//       };
//     case "POST_CATEGORY_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "PATCH_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "PATCH_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errMsg: action.payload.data,
//       };
//     case "PATCH_CATEGORY_FULLFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "DELETE_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "DELETE_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errMsg: action.payload.data,
//       };
//     case "DELETE_CATEGORY_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "SEARCH_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "SEARCH_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errorMsg: action.payload.data,
//       };
//     case "SEARCH_CATEGORY_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     case "SORT_CATEGORY_PENDING":
//       return {
//         ...state,
//         isPending: true,
//         isRejected: false,
//         isFulfilled: false,
//       };
//     case "SORT_CATEGORY_REJECTED":
//       return {
//         ...state,
//         isPending: false,
//         isRejected: true,
//         errorMsg: action.payload.data,
//       };
//     case "SORT_CATEGORY_FULFILLED":
//       return {
//         ...state,
//         isPending: false,
//         isFulfilled: true,
//         categoryData: action.payload.data,
//       };
//     default:
//       return state;
//   }
// };

// export default categoryReducers;
