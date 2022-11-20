import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service"

// Create adn export async Thunk for access through app
export const findTuitsThunk = createAsyncThunk(
  // send returned data into actions payload
  'tuits/findTuits', async () => {
    return await service.findTuits()
  }
)

export const deleteTuitThunk = createAsyncThunk(
  'tuits/deleteTuit', async (tid) => {
    await service.deleteTuit(tid)
    return tid;
  }
)


export const createTuitThunk = createAsyncThunk(
  'tuits/createTuit', async (tuit) => {
    await service.createTuit(tuit)
    return tuit
  }
)

export const updateTuitThunk = createAsyncThunk(
  'tuits/updateTuit', async (tuit) =>
    await service.updateTuit(tuit)
)
