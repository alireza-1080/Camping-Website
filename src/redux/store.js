import { configureStore } from "@reduxjs/toolkit";
import headerStatesSlicer from "./headerStatesSlicer";

const store = configureStore({
    reducer: {
        headerStates: headerStatesSlicer,
    }
});

export default store;