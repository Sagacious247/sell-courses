import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

export const coursesSlice = createSlice({
    name: "courses",
    initialState:{
        courses: [
            {
          id: uuidv4(),
          name: "Make Money as a Developer",
          description: "Learn to make money with Twitter",
          price: "30",
          by: "Sagacious Paul",
          rating: 4,
            },
            {
                id: uuidv4(),
                name: "Become a better Developer",
                description: "tips for developer",
                price: "25",
                by: "Namthan Paul",
                rating: 6
            },
            {
                id: uuidv4(),
                name: "WhatsApp Monetization Course",
                Description: "Learn how to take advantage of whatsapp to make money online",
                prrice: "15",
                By: "Sagacious Paul",
                rating: 9,
            },
            {
                id: uuidv4(),
                name: "Learn the basic content in Content creation",
                Description: "Master the act of using your creative instinct to create content that are needed today",
                price: "20",
                by: "Julius Paul",
                rating: 3
            }
        ],
    },
    reducers: {
        setCourses: (state,action) => {
            state.courses.push(action.payload);
        }
    }
});

export const {setCourses} = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;
export default coursesSlice.reducer;