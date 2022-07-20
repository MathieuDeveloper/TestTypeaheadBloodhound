
var myJson
var bloodMovies = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
 

  remote: {
    url: 'https://api.themoviedb.org/3/search/movie?api_key=06c5d7152a9119d9afbc2813da1ff6ed&query=%QUERY',
    wildcard: '%QUERY',
    
  }

});


$('#bloodhound .typeahead').typeahead(null, 
  {
  name: 'title',
  display:'',
  source: bloodMovies
});


function funcClickTest();