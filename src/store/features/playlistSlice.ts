
import { trackType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs/promises";

type PlaylistStateType = {
  initialplaylist: trackType[];
  currentTrack: trackType | null;
  isPlaying: boolean;
  isShuffle: boolean;
  playlist: trackType[];
}

const initialState: PlaylistStateType = {
  initialplaylist: [],
  currentTrack: null,
  isPlaying: false,
  isShuffle: false,
  playlist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<{ currentTrack: trackType | null; playlist: trackType[] }>) => {
      state.initialplaylist = action.payload.playlist;
      state.currentTrack = action.payload.currentTrack;
      state.playlist = action.payload.playlist;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle ? state.playlist : state.initialplaylist;
      const currentIndex = playlist.findIndex((track) => track._id === state.currentTrack?._id);
      if (currentIndex === -1 || currentIndex === playlist.length - 1) {
        state.isPlaying = false;
      } else {
        state.currentTrack = playlist[currentIndex + 1];
      }
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffle ? state.playlist : state.initialplaylist;
      const currentIndex = playlist.findIndex((track) => track._id === state.currentTrack?._id);
      if (currentIndex <= 0) {
        state.isPlaying = false;
      } else {
        state.currentTrack = playlist[currentIndex - 1];
      }
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.playlist = [...state.initialplaylist].sort(() => Math.random() - 0.5);
      } else {
        state.playlist = state.initialplaylist;
      }
      state.isShuffle = action.payload;
    },
  },
});


export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  setIsShuffle,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;