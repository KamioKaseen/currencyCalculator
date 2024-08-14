import styles from './styles.module.scss';
import CurrencySelect from '../currencySelect/currencySelect';

type CurrencyFormProps = {
  currencies: (string | number)[];
  fromCurrency: string | number;
  toCurrency: string | number;
  amountFrom: string;
  setAmountFrom: (value: string) => void; 
  amountTo: string; 
  setAmountTo: (value: string) => void;
  setFromCurrency: (value: string) => void;
  setToCurrency: (value: string) => void;
};

const CurrencyForm: React.FC<CurrencyFormProps> = ({
  currencies, 
  fromCurrency, 
  toCurrency, 
  amountFrom, 
  setAmountFrom, 
  amountTo, 
  setAmountTo, 
  setFromCurrency, 
  setToCurrency 
}) => {
  return (
    <form className={styles.currencyForm}>
      <div className={styles.currencyForm__container}>
        <span className={styles.currencyForm__text}>У меня есть</span>
        <input
          className={styles.currencyForm__input}
          type="number"
          value={amountFrom}
          onChange={(e) => setAmountFrom(e.target.value)}
          min="0"
          step="0.01"
        />
        <CurrencySelect
          selectedCurrency={fromCurrency}
          currencies={currencies}
          onCurrencyChange={setFromCurrency}
        />
      </div>
      
      <div className={styles.currencyForm__container}>
        <span className={styles.currencyForm__text}>Я получу</span>
        <input
          className={styles.currencyForm__input}
          type="number"
          value={amountTo}
          onChange={(e) => setAmountTo(e.target.value)}
          min="0"
          step="0.01"
        />
        <CurrencySelect
          selectedCurrency={toCurrency}
          currencies={currencies}
          onCurrencyChange={setToCurrency}
        />
      </div>
    </form>
  );
};

export default CurrencyForm;
