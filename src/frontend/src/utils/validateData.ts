const checkDataUser = (email: string, password: string): boolean => {
  const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const MIN_NUMBER = 6;

  return !(regexEmail.test(email) && password.length >= MIN_NUMBER);
};

export default checkDataUser;
