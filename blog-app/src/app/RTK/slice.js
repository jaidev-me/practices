const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  progress: 0,
  loading: true
};

export const loadingProgressSlice = createSlice({
  name: "loadingProgress",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setLoading: (state, action)=>{
      state.loading=action.payload;
    }
    
  },
});

export const { setProgress, setLoading } = loadingProgressSlice.actions;

export default loadingProgressSlice.reducer
