console.log('angular comics -- app.js loaded!');

angular
  .module("comicApp", [])
  .controller("ComicController", comicController);

function comicController(){
  var vm = this;

  vm.comicList = [
    {
      id: 1,
      name: 'Gundam: The Origin',
      type: 'Mecha Manga',
      recommender: 'Matt',
      rating: 5
    },
    {
      id: 2,
      name: 'Crying Freeman',
      type: 'Modern Assasin',
      recommender: 'Noah',
      rating: 2
    },
    {
      id: 5,
      name: 'Berserk',
      type: 'Dark Fantasy Manga',
      recommender: 'Breon',
      rating: 4
    },
    {
      id: 6,
      name: 'Code Geass',
      type: 'Manga',
      recommender: 'Breon',
      rating: 2
    }
   ];
  console.log(vm);
}

function addComic() {

}
