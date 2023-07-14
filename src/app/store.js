import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from '../features/CoursesSlice'

export default configureStore({
    reducer:{
        courses: coursesReducer,
    }
})