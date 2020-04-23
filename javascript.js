
 var mesNotes= [
    {nom : "Tristan",
    notes : [10,12,3]},
    {nom : "Stéphane",
    notes : [7,15,6]},
    {nom : "Fabien",
    notes : [7,18,9]}]
  
 function refresh()
{

  document.getElementById("liste").innerHTML=" "


  for ( var i in mesNotes){

    var monElem = document.createElement('tr')
    var monTd= document.createElement('td')
    monElem.id = "ligne"+i
    monTd.innerHTML = mesNotes[i].nom;
    monElem.appendChild(monTd)
 

    
    for ( var j in mesNotes[i].notes){

        var monElem2 = document.createElement('td')

        monElem2.innerHTML = mesNotes[i].notes[j];
       
        monElem.appendChild(monElem2)
        
        } 
       
    var boutonModif=document.createElement('BUTTON')
    boutonModif.innerHTML= "EDIT";
    monElem.appendChild(boutonModif)
    boutonModif.addEventListener("click", edditline("ligne"+i))

    var boutonSup=document.createElement('BUTTON')
    boutonSup.innerHTML= "SUP";
    monElem.appendChild(boutonSup)
    boutonSup.addEventListener("click", suppLigne("ligne"+i));
    
    document.getElementById('liste').appendChild(monElem)
  

 } 
  //Ma fonction s'occuppe de cider la table et de la reconstruire avec le DOM

  
 

function suppLigne(id)
 {

  return function(e)
  {
 
    document.getElementById(id).remove()
  }
}


function edditline(id)
{
  
  return function(e)
  {

  document.getElementById(id).remove()

  monElem.appendChild(boutonValider)
  monElem.appendChild(boutonAnnuler)

  }


}


setTimeout(refresh,1000)

}


//On appelle la fonction une fois
refresh()



