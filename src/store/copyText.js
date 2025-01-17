import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const copyText = createAsyncThunk("copy", async (textToCopy) => {
  if(navigator.clipboard && window.isSecureContext){
    await navigator.clipboard.writeText(textToCopy);
  }else{
    console.error("Failwriting text to clipboard")
  }
  
});

const copySlice = createSlice({
  name: "copy-text",
  initialState: {
    textToCopy: "",
    message: "",
    copied: false,
  },
  extraReducers: (builder) => {
    builder.addCase(copyText.fulfilled, (state) => {
      state.message = "Copied to clipboard!";
      state.copied = true;
      
    })
    builder.addCase(copyText.rejected, (state) => {
        state.message = "Failed to copy! Please try again";
        
    });
    
  },
});

export default copySlice.reducer;
