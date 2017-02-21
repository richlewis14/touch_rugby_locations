module.exports = {
  getContentTypeByFile(fileName) {
    var rc = 'application/octet-stream';
    var fn = fileName.toLowerCase();

    if (fn.indexOf('.html') >= 0) rc = 'text/html';
    else if (fn.indexOf('.css') >= 0) rc = 'text/css';
    else if (fn.indexOf('.json') >= 0) rc = 'application/json';
    else if (fn.indexOf('.js') >= 0) rc = 'application/x-javascript';
    else if (fn.indexOf('.png') >= 0) rc = 'image/png';
    else if (fn.indexOf('.jpg') >= 0) rc = 'image/jpg';
    else if (fn.indexOf('.jpeg') >= 0) rc = 'image/jpeg';
    return rc;
  },
};
