import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const SettingsContext = createContext({});

const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/settings/main');
        setSettings(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSettings();
  }, []);

  if(settings != null){
	return (
		<SettingsContext.Provider value={settings}>
		  {children}
		</SettingsContext.Provider>
	  );
  }
};

const useSettings = () => useContext(SettingsContext);

export { SettingsProvider, useSettings };
