mangaReader.component('infoList', {
  bindings: {
    manga: '<',
    numbers: '<',
    type: '<',
  },
  controllerAs: 'list',
  controller: function(mangaFactory) {
    const list = this;
    list.click = function(file) {
      mangaFactory.setSelectedFile({
        currentPage: 0,
        currentFile: path.join(__dirname, './.manga', list.manga, file),
      });
    }
  },
  templateUrl: './components/info/list/info-list.template.html'
});