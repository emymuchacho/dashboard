import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifcation: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03c907');
    const [pickerColor, setPickerColor] = useState('#03c907');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
  const [pageClose, setPageClose] = useState(true);
  
  

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setPicker = (picker) => {
        setPickerColor(picker);
        localStorage.setItem('colorMode', picker);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
      setIsClicked({ ...initialState, [clicked]: true });
      setPageClose(true);
    }


    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,
          currentColor,
          currentMode,
          themeSettings,
            setThemeSettings,
          setMode, setColor,
                setPicker,
          pickerColor, pageClose, setPageClose
        }}
      >
        {children}
      </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);