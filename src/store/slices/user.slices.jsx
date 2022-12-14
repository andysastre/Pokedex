import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
		name: 'user',
    initialState: "UserDefault",
    reducers: {
        changeUser:(state, action) =>{
          return action.payload;
        }
       
        
    }
})

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;