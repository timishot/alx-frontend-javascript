import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error(`${error} signup system offline`);
    });
};

export default handleProfileSignup;
