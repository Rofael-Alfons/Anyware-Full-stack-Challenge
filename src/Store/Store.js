import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

let user;
if (localStorage.getItem("user") !== null) {
  user = JSON.parse(localStorage.getItem("user"));
}

// let initialUserState = {
//   email: "",
//   id: "",
//   loggedIn: false,
//   isLoading: false,
//   history: [],
// };

let initialUserState = {
  email: user ? user.user.email : "",
  id: user ? user.user._id : "",
  loggedIn: user ? true : false,
  isLoading: false,
  history: [],
};

export const getHistory = createAsyncThunk("user/getHistory", async (data) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/users/history/${initialUserState.id}`
    );
    return response.data;
  } catch (err) {}
});
// export const saveNumber = createAsyncThunk("user/saveNumber", async (data) => {
//   try {
//     const response = await axios.post(
//       `http://localhost:3000/users/updateSearch/${initialUserState.id}`,
//       {
//         data,
//       }
//     );
//     return response.data;
//   } catch (err) {}
// });
export const searchNumber = createAsyncThunk(
  "user/searchNumber",
  async ({ phoneNumber }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/search/${phoneNumber}`
      );
      return response.data;
    } catch (err) {}
  }
);
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      return response.data;
    } catch (err) {}
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/add-user",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (err) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logOut(state) {
      state.loggedIn = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {});
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.email = action.payload.user.email;
      console.log(action.payload.user._id);
      state.id = action.payload.user._id;
    });
    builder.addCase(login.rejected, (state, action) => {});
    //////////////////////////////
    builder.addCase(signUp.pending, (state) => {});
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(signUp.rejected, (state, action) => {});
    ////////////////////////
    builder.addCase(searchNumber.pending, (state) => {});
    builder.addCase(searchNumber.fulfilled, (state, action) => {
      console.log(action.payload);
      state.history = action.payload;
      axios.post(`http://localhost:3000/users/updateSearch/${state.id}`, {
        number: action.payload.number,
        status: action.payload.valid,
        countryName: action.payload.country_name,
      });
    });
    builder.addCase(searchNumber.rejected, (state, action) => {});
    ////////////////////////
    builder.addCase(getHistory.pending, (state) => {});
    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.history = action.payload.searchNumber;
    });
    builder.addCase(getHistory.rejected, (state, action) => {});
    ////////////////////////
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});
export const userActions = userSlice.actions;
export default store;
