mangaReader.component('info', {
  controllerAs: 'info',
  controller: function(mangaFactory, $scope) {
    const info = this;

    info.selected = {};

    info.select = (selected) => {
      info.selected = selected;
    }

    info.$onInit = function() {
      info.selectedManga = mangaFactory.getSelectedManga();
    };

    info.$onDestroy = function() {
      mangaFactory.setFilePath('/Users/liv/Itoshi-no-Nekokke-ch31.zip');
    }
  },
  templateUrl: './components/info/info.template.html'
});