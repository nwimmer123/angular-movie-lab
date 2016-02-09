console.log('angular comics -- app.js loaded!');

angular
  .module("comicApp", [])
  .controller("ComicController", comicController);

function comicController(){
  var vm = this;

  vm.comicList = [
    {
      id: 1,
      name: 'Mobile Suit Gundam',
      type: 'Mecha Manga'
    },
    {
      id: 2,
      name: 'Crying Freeman',
      type: 'Modern Assasin'
    }
   ];
  console.log(vm);
}
