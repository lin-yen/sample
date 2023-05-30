const intRe = /(\d{1,3})(?=(\d{3})+$)/g;
const gold = (value: string | number): string => {
  if (value === '') {
    return String(value);
  }

  const gold = String(value);
  const arr = gold.split('.');

  return `${arr[0].replace(intRe, '$1,')}.${`${arr[1] || ''}00`.substring(
    0,
    2
  )}`;
};

const unit = (value: string | number): string => {
  if (value === '') {
    return String(value);
  }

  const gold = String(Number(value) / 1000);
  const arr = gold.split('.');

  return `${arr[0].replace(intRe, '$1,')}K`;
};

export function usePipe() {
  return {
    gold,
    unit,
  };
}
