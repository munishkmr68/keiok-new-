// IntlProvider.js
import { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from './en.json';
import frMessages from './fr.json';
import grMessages from './gr.json';

const messages = {
    en: enMessages,
    gr: grMessages,
    fr: frMessages,

};
const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export default function IntlLang({ children }) {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            <IntlProvider locale={selectedLanguage} messages={messages[selectedLanguage]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>

    );
}


