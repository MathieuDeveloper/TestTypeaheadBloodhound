
var bestPictures = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  
  remote: {
    url: 'https://api.themoviedb.org/3/search/movie?api_key=06c5d7152a9119d9afbc2813da1ff6ed&query=%QUERY',
    wildcard: '%QUERY',
    
  }
});

//var parse1 = JSON.stringify(bestPictures);
//var parse2 = JSON.parse(parse1).title;

$('#remote .typeahead').typeahead(null, {
  //name: '',
  //display: '',
  source: function(bestPictures){ return JSON.parse(JSON.stringify(bestPictures))}
});




//url: 'https://api.themoviedb.org/3/search/movie?api_key=06c5d7152a9119d9afbc2813da1ff6ed&query=%QUERY.json',
function funcClickTest(){};