import React, { useEffect, useState } from 'react';

import { clockIcon } from '../../assets/icons';
import './styles.css';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const getCurrentDay = (): string => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return days[currentDate.getDay()];
  };

  const getCurrentDate = (): string => {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${date} ${month}, ${year}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTime = (): string => {
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();

    return `${hours}:${minutesString}`;
  };
  return (
    <div className="current-date-wrapper">
      <p className="current-date-text">{getCurrentDay()}</p>
      <div className="current-date">
        <p className="current-date-text">{getCurrentDate()}</p>
        <div className="clock-icon">{clockIcon}</div>
        <p className="current-date-text">{getCurrentTime()}</p>
      </div>
    </div>
  );
};

export default CurrentDate;
