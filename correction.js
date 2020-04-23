// Je créé mon tableau d'objets
var monTab = [
    {
      nom: "Richard",
      prenom: "Tristan",
      ville: "Stuttgart",
      tel : "00.49.89.1.23.45.67.89"
    },
    {
      nom: "Savoy",
      prenom: "Stéphane",
      ville: "Chambery",
      tel : "06.17.82.01.07"
    },
    {
      nom: "Sourdon",
      prenom: "Fabien",
      ville: "Nancy",
      tel : "06.17.82.01.07"
    }]
  
  var collAff = ["nom","prenom","ville","tel"]
  var focus = "";
  
  // On supprime une ligne du tableau
  function suppLigne(num) {
    return function (e) {
      monTab.splice(num, 1)
      
      refresh()
    }
  }
  
  //On ajoute une ligne éditable
  function ajoutCol() {
    for(let i in monTab) {
      monTab[i].edit=true;
      monTab[i].notes.push(0);
      monTab[i].old_nom = monTab[i].nom
      monTab[i].old_notes = []
      for (var j in monTab[i].notes) {
        monTab[i].old_notes[j] = monTab[i].notes[j]
      }
    }
    refresh()
  }
  //On ajoute une ligne éditable
  function ajoutLigne() {
    let maLig  ={};
    maLig.edit=true;
    for (var j in collAff) {
      maLig[collAff[j]] = ""
    }
    monTab.push(maLig)
    refresh()
  }
  
  
  // On passe une ligne en édition, on sauvegarde les anciennes data pour fonct annul
  function editLigne(num) {
    return function (e) {
      monTab[num].edit = true
      monTab[num].old_nom = monTab[num].nom
      monTab[num].old_notes = []
      for (var j in monTab[num].notes) {
        monTab[num].old_notes[j] = monTab[num].notes[j]
      }
  refresh()
    }
  }
  
  // On restaure les anciennes data
  function annulLigne(num) {
    return function (e) {
      monTab[num].nom = monTab[num].old_nom
      monTab[num].notes = monTab[num].old_notes
      monTab[num].edit = false
      refresh()
    }
  }
  
  //On valide la modification
  function validLigne(num) {
    return function (e) {
      monTab[num].edit = false
      refresh()
    }
  }
  
  
  //On modifie le nom quand il est modifié dans le input
  function changeValNom(id, num) {
    return function (e) {
      console.log(id + "nomElMod : " + num)
      monTab[num].nom = document.getElementById(id + "nomElMod").value
      refresh()
    }
  }
  
  //On modifie la note quand elle est modifié dans le input
  function changeValNote(id, num, indice) {
    return function (e) {
      monTab[num].notes[indice] = document.getElementById(id + "noteElMod" + indice).value
      refresh()
    }
  }
  
  //On gère l'affichage
  function refresh() {
    //Ma fonction s'occuppe de vider la table et de la reconstruire avec le DOM
    document.getElementById('maTable').innerHTML = " "
    
    //On génère la ligne d'entête
    let monEntLig = document.createElement('tr')
    monEntLig.classList.add("entLigTab")
    for (var i in monTab[0])
    {
      if(collAff.indexOf(i)!=-1)
        {
      let monTh = document.createElement('th')
      monTh.innerHTML = i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
      monEntLig.appendChild(monTh)
        }
    }
    let monThOut = document.createElement('th')
    monThOut.innerHTML = "Outils"
    monEntLig.appendChild(monThOut)
    document.getElementById('maTable').appendChild(monEntLig)
    
    // Je fais une boucle qui parcours le premier tableau
    for (var i in monTab) {
      let monElem = document.createElement('tr')
      if(i%2==0)
        {
          monElem.classList.add("LigTabPaire")
        }
      else
        {
          monElem.classList.add("LigTabImpaire")
        }
     for (var j in monTab[i]) {
        //Je créé un élément de type TD pour une note
        if(collAff.indexOf(j)!=-1)
        {
      var monTd = document.createElement('td')
        if (monTab[i].edit) {
          //Si on est en mode édition, on affiche un input
          var inpNote = document.createElement('input')
          inpNote.id = "Ligne" + i + "noteElMod" + j
          inpNote.type = "text"
          inpNote.value = monTab[i][j]
          //C'est le bordel, il y a pleins d'évènement à gérer pour une seule action !
          inpNote.addEventListener("change", changeValNote("Ligne" + i, i, j))
          //J'ajoute le input à la cellule
          monTd.appendChild(inpNote)
        
        }
        else {
          //On est en affichage simple =)
          monTd.innerHTML = monTab[i][j];
        }
        //J'ajoute la note à la ligne
        monElem.appendChild(monTd)
        }
      }
  
      //Je créé un élément de type TD pour les bouttons
      var monTdEdit = document.createElement('td')
      monTdEdit.classList.add('cellOut')
      if (monTab[i].edit) {
        //Je créé le boutton de validation
        var monbutVal = document.createElement('input')
        monbutVal.type = "button"
        monbutVal.value = "Valid"
        //J'ajoute la gestion du clic sur Valid
        monbutVal.addEventListener("click", validLigne(i));
        //J'ajoute le bouton dans la cellule
        monTdEdit.appendChild(monbutVal)
  
        //Je créé le boutton d'annulation
        var monbutAnn = document.createElement('input')
        monbutAnn.type = "button"
        monbutAnn.value = "Annuler"
        //J'ajoute la gestion du clic sur Annuler
        monbutAnn.addEventListener("click", annulLigne(i));
        //J'ajoute le boutton dans la cellule
        monTdEdit.appendChild(monbutAnn)
      }
      else {
        //Je créé le boutton d'édition
        var monbutEdit = document.createElement('input')
        monbutEdit.type = "button"
        monbutEdit.value = "Edit"
        //J'ajoute la gestion du clic sur Edit
        monbutEdit.addEventListener("click", editLigne(i));
        //J'ajoute le bouton dans la cellule
        monTdEdit.appendChild(monbutEdit)
  
        //Je créé le boutton de suppréssion
        var monbutSup = document.createElement('input')
        monbutSup.type = "button"
        monbutSup.value = "Sup"
        //J'ajoute la gestion du clic sur supp
        monbutSup.addEventListener("click", suppLigne(i));
        //J'ajoute le boutton dans la cellule
        monTdEdit.appendChild(monbutSup)
      }
      //J'ajoute les boutons à la ligne
      monElem.appendChild(monTdEdit)
  
      //J'ajoute la ligne dans la table
      document.getElementById('maTable').appendChild(monElem)
  
    }
  }
  //On appelle la fonction une fois
  refresh()
  document.getElementById('elAjout').addEventListener("click", ajoutLigne);
  