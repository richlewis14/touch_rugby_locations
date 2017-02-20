const AWS = require('aws-sdk');
const helper = require('../helpers/helper');

const s3Params = {
  Bucket: process.env.AWS_BUCKET,
  Key: process.env.AWS_ACCESS_KEY_ID,
};

const s3Bucket = new AWS.S3({ params: s3Params });

// Upload image to S3
function uploadToS3(files) {
  return new Promise((resolve, reject) => {
    if (!files || !files.imageBanner) {
      reject(new Error('No image found'));
      return;
    }
    const data = {
      Key: files.imageBanner.name,
      Body: files.imageBanner.data,
      ACL: 'public-read',
      ContentType: helper.getContentTypeByFile(files.imageBanner.name),
    };
    s3Bucket.putObject(data, function(err) {
      if (err) {
        console.log('Error uploading data:');
        reject(new Error('Error uploading data'));
      } else {
        console.log('Uploaded data:');
        resolve(data);
      }
    });
  });
}

module.exports = {
  uploadToS3,
};
