import React, { useState, createContext, useContext } from 'react';

type SettingsContextData = {
  showSettings: boolean;
  setShowSettings: (value: boolean) => void;
  autoAdvanceWords: boolean;
  setAutoAdvanceWords: (value: boolean) => void;
  autoPlayAudio: boolean;
  setAutoPlayAudio: (value: boolean) => void;
  gender:boolean;
  setGender: (value: boolean) => void;
};

const SettingsContextDefaultValues = {
  showSettings: false,
  setShowSettings: () => null,
  autoAdvanceWords: false,
  setAutoAdvanceWords: () => null,
  autoPlayAudio: false,
  setAutoPlayAudio: () => null,
  gender:false,
  setGender: () => null
};

const SettingsContext = createContext<SettingsContextData>(
  SettingsContextDefaultValues
);

export type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [autoAdvanceWords, setAutoAdvanceWords] = useState<boolean>(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);
  const [gender, setGender] = useState<boolean>(false);
  return (
    <SettingsContext.Provider
      value={{
        showSettings,
        setShowSettings,
        autoAdvanceWords,
        setAutoAdvanceWords,
        autoPlayAudio,
        setAutoPlayAudio,
        gender,
        setGender
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => useContext(SettingsContext);

export { useSettings };
