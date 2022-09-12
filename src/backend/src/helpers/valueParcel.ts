const valueParcel = (totalValue: number, numberParcel: number) => {
  if (numberParcel === 0) {
    return 0;
  }
  const value = Number(totalValue) / numberParcel;

  return value;
};

export default valueParcel;
