
 var mesNotes= [
    {nom : "Tristan",
    notes : [10,12,3]},
    {nom : "Stéphane",
    notes : [7,15,6]},
    {nom : "Fabien",
    notes : [7,18,9]}]
  

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





 
/*
 var monObj = {
    nom : "Demettre",
    prenom : "Julien",
    age: 37,
    garçon: true,
  }


  
  for(let i in monObj)
  {
    var monElem = document.createElement('p')

    monElem.innerHTML=("Mon "+ i+" est "+monObj[i])

    document.getElementById('bonjour').appendChild(monElem)
  }
 
*/

 /*
 //Je créé le boutton d'édition
 var monbutEdit = document.createElement('input')
 monbutEdit.type = "button"
 monbutEdit.value = "Edit"
 //J'ajoute le bouton dans la cellule
 monTdEdit.appendChild(monbutEdit)
 //Je créé le boutton de suppréssion
 var monbutSup = document.createElement('input')
 monbutSup.type = "button"
 monbutSup.value = "Sup"
 //J'ajoute le boutton dans la cellule
 monTdEdit.appendChild(monbutSup)
 //J'ajoute les boutons à la ligne
 monElem.appendChild(monTdEdit)
*/