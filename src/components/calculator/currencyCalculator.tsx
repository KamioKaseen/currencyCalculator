import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import CurrencyForm from '../currencyForm/сurrencyForm';
import { fetchRates } from '../../services/services';
import changeImg from '../../assets/change.png';

type Rates = {
  [key: string]: number;
};

type Currency = keyof Rates;

const CurrencyCalculator = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [rates, setRates] = useState<Rates>({});
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('RUB');
  const [amountFrom, setAmountFrom] = useState<string>(''); 
  const [amountTo, setAmountTo] = useState<string>('');
  const [lastChanged, setLastChanged] = useState<'from' | 'to'>('from');

  useEffect(() => {
    const getRates = async () => {
      try {
        const ratesData: Rates = await fetchRates();
        setRates(ratesData);
        setCurrencies(Object.keys(ratesData)); 
      } catch (error) {
        console.error('Ошибка загрузки курса валют:', error);
      }
    };
  
    getRates();
  }, []);
  

  useEffect(() => {
    if (Object.keys(rates).length === 0) return;

    const convertCurrency = () => {
      if (lastChanged === 'from') {
        if (amountFrom === '' || Number(amountFrom) === 0) {
          setAmountTo('');
        } else {
          const rate = rates[toCurrency] / rates[fromCurrency];
          setAmountTo((Number(amountFrom) * rate).toFixed(2));
        }
      } else if (lastChanged === 'to') {
        if (amountTo === '' || Number(amountTo) === 0) {
          setAmountFrom('');
        } else {
          const rate = rates[fromCurrency] / rates[toCurrency];
          setAmountFrom((Number(amountTo) * rate).toFixed(2));
        }
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, amountFrom, amountTo, lastChanged, rates]);

  const handleCurrencyChange = (isFromCurrency: boolean, value: Currency) => {
    if (isFromCurrency) {
      setFromCurrency(value);
      if (lastChanged === 'from') {
        const rate = rates[value] / rates[toCurrency];
        setAmountTo((Number(amountFrom) * rate).toFixed(2));
      }
    } else {
      setToCurrency(value);
      if (lastChanged === 'to') {
        const rate = rates[fromCurrency] / rates[value];
        setAmountFrom((Number(amountTo) * rate).toFixed(2));
      }
    }
  };

  const swapCurrencies = () => {
    const newFromCurrency = toCurrency;
    const newToCurrency = fromCurrency;
  
    const rate = rates[newFromCurrency] / rates[newFromCurrency];
    const newAmountTo = (Number(amountFrom) * rate).toFixed(2);
  
    setFromCurrency(newFromCurrency);
    setToCurrency(newToCurrency);
    setAmountTo(newAmountTo);
    setLastChanged('from');
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.calculator__title}>Конвертер валют</h1>
      <CurrencyForm
        currencies={currencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        amountFrom={amountFrom}
        setAmountFrom={(value: string) => {
          setAmountFrom(value);
          setLastChanged('from');
        }}
        amountTo={amountTo}
        setAmountTo={(value: string) => {
          setAmountTo(value);
          setLastChanged('to');
        }}
        setFromCurrency={(value: Currency) => handleCurrencyChange(true, value)}
        setToCurrency={(value: Currency) => handleCurrencyChange(false, value)}
      />
      <button onClick={swapCurrencies} className={styles.calculator__button}>
        <img className={styles.calculator__changeImg} src={changeImg} alt="change.png" />
      </button>
    </div>
  );
};

export default CurrencyCalculator;
