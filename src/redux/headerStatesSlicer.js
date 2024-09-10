import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabs: ["Home", "Destination", "Near me", "Events", "Blog", "Gallery", "About", "Contact us"],
    selectedTab: "Home",
    isHamburgerOpen: false,
}

const headerStatesSlicer = createSlice({
    name: "headerStates",
    initialState,
    reducers: {
        updateSelectedTabs: (state, action) => {
            state.selectedTab = action.payload;
        },
        updateIsHamburgerOpen: (state) => {
            if (state.isHamburgerOpen) {
                state.isHamburgerOpen = false
            } else {
                state.isHamburgerOpen = true
            }
        }
    }
})

export const { updateSelectedTabs, updateIsHamburgerOpen } = headerStatesSlicer.actions;
export default headerStatesSlicer.reducer;