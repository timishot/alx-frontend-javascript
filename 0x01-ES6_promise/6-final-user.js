import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, fileName) => {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Using Promise.allSettled to handle both promises
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })))
    .catch((error) => [{ status: 'rejected', value: error.message }]);
};

export default handleProfileSignup;
