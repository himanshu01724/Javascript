import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const intitialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = intitialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoad.fullName,
        nationalId: action.payLoad.nationalId,
        createdAt: new Date().toISOString(),
      };
    case "customer/updateName":
      return { ...state, fullName: action.payLoad };
    default:
      return state;
  }
}

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/widthraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payloan":
      return {
        ...state,
        loanPurpose: "",
        loan: 0,
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

//defining and combininig both the reducers

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function widthraw(amount) {
  return { type: "account/widthraw", payload: amount };
}
function requestLoan(am, purpose) {
  return {
    type: "account/loan",
    payload: { amount: am, purpose: purpose },
  };
}
function payLoan() {
  return { type: "account/payloan" };
}

store.dispatch(deposit(700));
store.dispatch(widthraw(9));
store.dispatch(requestLoan(8234343, "I want to buy some choclates"));

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payLoad: { fullName, nationalId },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("Himanshu Joshi", "23232323"));
//customer.updateName()

console.log(store.getState());
