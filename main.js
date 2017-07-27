document.getElementById('kginput').addEventListener('input', function(e){
  let kilogram = e.target.value;
  //in grams
    document.getElementById('gramsoutput').innerHTML = kilogram*1000;
  //in milligrams
    document.getElementById('milligramsoutput').innerHTML = 
    kilogram*1000000;
  //in pound
    document.getElementById('ozoutput').innerHTML = kilogram*35.27396;
});