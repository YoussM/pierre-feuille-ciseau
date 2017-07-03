var joueur = prompt(" pierre,feuille,ciseau ?");
console.log(joueur);

var ordi = Math.random();
//console.log(ordi);

if (ordi < 0.33){
console.log ("pierre");

  if(joueur == "feuille"){
    alert("gagne");
  }
  else if( joueur == "pierre"){
    alert("nul");
  }
  else if (joueur == "ciseau"){
    alert("perdu");
  }
    
}

else if (ordi< 0.66 ){
  console.log ("ciseau");
  
  if(joueur == "feuille"){
    alert("perdu");
  }
  else if( joueur == "pierre"){
    alert("gagne");
  }
  else if (joueur == "ciseau"){
    alert("nul");
  }
   
}



else if (ordi < 0.99 ){
 console.log ("feuille");
  
  
   if(joueur == "feuille"){
    alert("nul");
  }
  else if( joueur == "pierre"){
    alert("perdu");
  }
  else if (joueur == "ciseau"){
    alert("gagne");
  }
  
}


