const getFullResponseFromAPI = (success) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  }, 10000);
});

export default getFullResponseFromAPI;