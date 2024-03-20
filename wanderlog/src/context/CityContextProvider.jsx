import { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";

const CityData = createContext();

const initialState = { city: [], isLoading: false, currentCity: {}, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "loader":
      return { ...state, isLoading: true };

    case "cities/loading":
      return { ...state, isLoading: false, city: action.payload };

    case "cities/loaded":
      return { ...state, currentCity: action.payload, isLoading: false };

    case "cities/created":
      return {
        ...state,
        city: [...state.city, action.payload],
        isLoading: false,
      };
    case "cities/deleted":
      return {
        ...state,
        city: state.city.filter((val) => val.id !== action.payload),
        isLoading: false,
      };

    case "rejected":
      return { ...state, error: action.payload, isLoading: false };

    default:
      throw new Error("Unknown action");
  }
}

function CityContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { city, isLoading, currentCity } = state;

  useEffect(() => {
    fetchingData();
  }, []);

  //fetch request

  async function fetchingData() {
    dispatch({ type: "loader" });
    try {
      const response = await fetch(`http://127.0.0.1:8001/cities`);
      if (!response.ok) {
        throw new Error("Error in network connection");
      }
      const data = await response.json();
      dispatch({ type: "cities/loading", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: "There was a problem in loading data",
      });
    }
  }

  //For matching id of the city...
  // function getCity(id) {
  //   const currCity = city.reduce((acc, item) => {
  //     return item.id == id ? item : acc;
  //   }, null);

  //   dispatch({ type: "cities/loaded", payload: currCity });
  // }

  async function getCity(id) {
    try {
      const res = await fetch(`http://127.0.0.1:8001/cities/${id}`);
      if (!res.ok) {
        throw new Error(`Network Error`);
      }
      const data = await res.json();
      console.log(data);
      dispatch({ type: "cities/loaded", payload: data });
    } catch (err) {
      console.log(err);
    }
  }

  async function addNewCity(newCity) {
    dispatch({ type: "loader" });
    try {
      const res = await fetch(`http://127.0.0.1:8001/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`Network error`);
      }
      const data = await res.json();
      console.log(data);
      dispatch({ type: "cities/created", payload: newCity });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was a problem in loading data",
      });
    }
  }

  async function handleRemoveCity(id) {
    try {
      const response = await fetch(`http://127.0.0.1:8001/cities/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error in reaching to API`);
      }
      const data = await response.json();
      dispatch({ type: "cities/deleted", payload: id });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CityData.Provider
      value={{
        city,
        isLoading,
        getCity,
        currentCity,
        addNewCity,
        handleRemoveCity,
      }}
    >
      {children}
    </CityData.Provider>
  );
}

function useProvider() {
  const context = useContext(CityData);
  return context;
}

export { CityContextProvider, useProvider };
