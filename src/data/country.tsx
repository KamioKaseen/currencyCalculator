
interface CountryData {
  [currencyCode: string]: {name: string;};
}

const country: CountryData = {
  AUD: { name: "Австралийский доллар" },
  BGN: { name: "Болгарский лев" },
  BRL: { name: "Бразильский реал" },
  CAD: { name: "Канадский доллар" },
  CHF: { name: "Швейцарский франк" },
  CNY: { name: "Китайский юань" },
  CZK: { name: "Чешская крона" },
  DKK: { name: "Датская крона" },
  EUR: { name: "Евро" },
  GBP: { name: "Британский фунт" },
  HKD: { name: "Гонконгский доллар" },
  HRK: { name: "Хорватская куна" },
  HUF: { name: "Венгерский форинт" },
  IDR: { name: "Индонезийская рупия" },
  ILS: { name: "Израильский шекель" },
  INR: { name: "Индийская рупия" },
  ISK: { name: "Исландская крона" },
  JPY: { name: "Японская иена" },
  KRW: { name: "Южнокорейская вона" },
  MXN: { name: "Мексиканский песо" },
  MYR: { name: "Малайзийский ринггит" },
  NOK: { name: "Норвежская крона" },
  NZD: { name: "Новозеландский доллар" },
  PHP: { name: "Филиппинское песо" },
  PLN: { name: "Польский злотый" },
  RON: { name: "Румынский лей" },
  RUB: { name: "Российский рубль" },
  SEK: { name: "Шведская крона" },
  SGD: { name: "Сингапурский доллар" },
  THB: { name: "Тайский бат" },
  TRY: { name: "Турецкая лира" },
  USD: { name: "Доллар США" },
  ZAR: { name: "Южноафриканский рэнд" }
};
  
export default country;
