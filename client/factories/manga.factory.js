mangaReader.factory('mangaFactory', function () {
  const libraryIndexPath = path.join(__dirname, '/.manga/index.json');

  let filePath = '/Users/liv/Itoshi-no-Nekokke-ch30.zip';
  const getFilePath = () => filePath;
  const setFilePath = (newFilePath) => filePath = newFilePath;

  const getIndex = function() {
    return new Promise(function(res, rej) {
      fs.readFile(libraryIndexPath, 'utf8', function(err, indexContents) {
        res(JSON.parse(indexContents));
      });
    });
  }

  const getCollection = function(filePath) {
    console.log(filePath)
    return new Promise(function(res, rej) {
      fs.readFile(filePath, function(err, data) {
        if (err) rej(err);

        JSZip.loadAsync(data).then(function ({ files }) {
          const onlyFiles = lodash
            .chain(files)
            .filter(file => !file.dir)
            .filter(file => path.extname(file.name) === '.png')
            .filter(file => !file.name.includes('__MACOSX'))
            .map(file => {
              return file.async('blob').then(function(blob) {
                var urlCreator = window.URL || window.webkitURL;
                return urlCreator.createObjectURL(blob);
              });
            })
            .value();
          const pAll = Promise.all(onlyFiles);
          res(pAll);
        });

      });
    });
  };


  return {
    getIndex,
    getCollection,
    getFilePath,
    setFilePath,
  };
})