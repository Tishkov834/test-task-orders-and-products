export const formatDate = (date: string, isShortFormat: boolean = true) => {
  const [datePart] = date.split(' ');
  const [year, month, day] = datePart.split('-');

  const months = [
    'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
    'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
  ];

  return isShortFormat ? `${day} / ${month}` : `${day.padStart(2, '0')} / ${months[Number(month) - 1]} / ${year}`;
};
