const valueParcel = (totalValue: string, numberParcel: number) => {
  if (numberParcel === 0) {
    return 0;
  }
  const value = (Number(totalValue) / numberParcel).toFixed(2).replace('.', ',');

  return value;
};

export default valueParcel;
