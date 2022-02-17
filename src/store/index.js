import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state: {
    activeStep: 0,
    hotels: [],
    hotelsDetails: [],
    selectedReservation: '123',
  },
  mutations: {
    setStep(state, stepId) {
      state.activeStep = stepId;
    },
    setHotels(state, hotels) {
      state.hotels = [...state.hotels, ...hotels];
    },
    setHotelsDetails(state, details) {
      state.hotelsDetails = [...state.hotelsDetails, ...details];
    },
  },
  getters: {
    _activeStep: (state) => state.activeStep,
    _hotels: (state) => state.hotels,
    _getHotelsDetails: (state) => state.hotelsDetails,
  },
});
