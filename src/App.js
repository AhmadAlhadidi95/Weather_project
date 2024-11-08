import './App.css';
import { Box } from './Box';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPoint, fetchWeather } from './features/weatherSlice';
import { useTranslation } from 'react-i18next';

function App() {

  const [theLocale, setTheLocale] = useState("ar");

  const {t, i18n} = useTranslation();

  const theLoader = useSelector((state) => {
    return state.theWeather.loading;
  });

  const theObj = useSelector((state) => {
    return state.theWeather.obj;
  });
  
  const dispatch = useDispatch();

  useEffect(() => {

    i18n.changeLanguage(theLocale);

    dispatch(fetchWeather());

  }, []);

  function handleLanguage() {
    if (theLocale == "ar") {
      setTheLocale("en");
      i18n.changeLanguage("en");
    } else {
      setTheLocale("ar");
      i18n.changeLanguage("ar");
    }
  };

  return (
    <div className="App">
      <div className="container">
          <Box
          time={theLocale}
          city={t("Mosul")}
          temperature={theObj.temp}
          description={t(theObj.desc)}
          icon={theObj.iconOfWeather}
          minTemp={theObj.minTemp}
          maxTemp={theObj.maxTemp}
          min={t("Min")}
          max={t("Max")}
          loader={theLoader}/>

          <ul className="buttons">
            <button onClick={handleLanguage}>{theLocale == "ar" ? "English" : "العربية"}</button>
          </ul>
      </div>
    </div>
  );
}

export default App;
