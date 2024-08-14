import styles from './styles.module.scss';
import countryData from '../../data/country.tsx';
import Select from 'react-select';

type CurrencySelectProps = {
  selectedCurrency: string | number;
  currencies: (string | number)[];
  onCurrencyChange: (currency: string) => void;
};

type OptionType = {
  value: string;
  label: string;
};

const CurrencySelect: React.FC<CurrencySelectProps> = ({ selectedCurrency, currencies, onCurrencyChange }) => {
  const options: OptionType[] = currencies.map(currency => ({
    value: String(currency),
    label: countryData[currency]?.name 
  }));

  return (
    <Select
      className={styles.select}
      options={options}
      value={options.find(option => option.value === selectedCurrency)}
      onChange={(selectedOption) => {
        if (selectedOption) {
          onCurrencyChange(selectedOption.value);
        }
      }}
      styles={{
        menu: (provided) => ({
          ...provided,
          height: 200
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: 200
        })
      }}
      menuPlacement="auto"
    />
  );
};

export default CurrencySelect;
