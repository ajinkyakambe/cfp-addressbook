import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWrapper } from '_helpers';

// create slice

const name = 'register';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

