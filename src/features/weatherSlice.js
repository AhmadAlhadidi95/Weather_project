import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk("WeatherAPI", async () => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=36.3450&lon=43.1510&appid=f2e09d94504ebc4f1011c6b1e8f16f6a`);

    let city = response.data.name;
    let temp = Math.round(response.data.main.temp - 273.15);
    let minTemp = Math.round(response.data.main.temp_min - 273.15);
    let maxTemp = Math.round(response.data.main.temp_max - 273.15);
    let desc = response.data.weather[0].description;
    let icon = response.data.weather[0].icon;

    return {city, temp, minTemp, maxTemp, desc, iconOfWeather: `https://openweathermap.org/img/wn/${icon}@2x.png`};

});

export const weatherSlice = createSlice({
    
    name: "Weather",

    initialState: {
        result: 44,
        loading: false,
        obj: {}
    },

    // reducers: { في هذا المشروع reducers لمم يتم أحتياج ال
    //     addPoint: (state, action) => {
            
    //     }
    // },

    extraReducers(builder) {
        builder.addCase(fetchWeather.pending, (state, action) => {
            // console.log("Pending 1");
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            // console.log("Fulfilled 2");
            state.loading = true;
            state.obj = action.payload;
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            // console.log("Rejected 3");
        })
    }

});

export const {addPoint} = weatherSlice.actions;

export default weatherSlice.reducer;