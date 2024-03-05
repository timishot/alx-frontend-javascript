const uploadPhoto = (fileName) => new Promise((resolve, reject) => {
  if (!fileName.endsWith('.jpg')) {
    resolve(`File ${fileName} processed successfully`);
  } else {
    reject(new Error(`${fileName} cannot be processed`));
  }
});

export default uploadPhoto;
