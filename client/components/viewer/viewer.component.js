mangaReader.component('viewer', {
  controllerAs: 'viewer',
  controller: function($scope, mangaFactory) {
    const viewer = this;
    const filePath = '/Users/liv/Itoshi-no-Nekokke-ch30.zip';

    viewer.test = (val) => console.log('Working!', val);

    viewer.pages = [];
    viewer.index = 0;
    viewer.back = () => { if (viewer.index > 0) viewer.index--; };
    viewer.forward = () => { if (viewer.index < viewer.pages.length - 1) viewer.index++; };

    viewer.$onInit = function() {
      mangaFactory.getCollection(filePath)
      .then(function(blobUrls) {
        viewer.pages = blobUrls;
        $scope.$apply();
      });
    }
  },
  templateUrl: './components/viewer/viewer.template.html'
});