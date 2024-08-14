const APIKEY = 'fca_live_8jeSwG65eeS6Tb5SJ3VzuZ82GHETnh1SlK2qcweK';
const URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=';

export const fetchRates = async () => {
  try {
    const response = await fetch(`${URL}${APIKEY}`);
    if (!response.ok) throw new Error('Ошибка соединения!');

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);

    // Добавил для работоспособности, если бесплатный лимит запросов будет привышен
    try {
      const localResponse = await fetch('response.json');
      if (!localResponse.ok) throw new Error('Ошибка загрузки локального файла!');

      const localData = await localResponse.json();
      return localData.data;
    } catch (localError) {
      console.error('Ошибка при чтении локального файла:', localError);
      throw localError;
    }
  }
};