function errorCath(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject('No data');
}

export default errorCath;
