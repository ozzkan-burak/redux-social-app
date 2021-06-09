import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: "0", name: "Burak Özkan"},
  {id: "1", name: "Tekin Mekin"},
  {id: "2", name: "Mert Dert"},
  {id: "3", name: "Buket Kutlu"},
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default userSlice.reducer;