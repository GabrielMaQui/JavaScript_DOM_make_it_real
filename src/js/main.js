//Elementos a modificar
const addButton = document.querySelector('#addContact');
const contactInput = document.getElementById('contactName');
const listContact = document.getElementById('contactList');


//Variables de contadores
let index = 0;
let counter = 0;

const cointerCounter = document.getElementById('cointerCounter');
cointerCounter.innerText = cointerCounter.innerText = "Cantidad de contactos: " + counter;;


const addContact =  function(){
  let contacName = contactInput.value;
  //validar que se ha ingresado un nombre
  if(contacName === "" || contacName == null){
    alert("Ingrese un nombre");
    return
  }

  //Validar si un nombre no se ha insertado anteriormente
  if(findContact(contacName)){
    alert("Nombre ya ingresado");
    return
  }
  //Crear el LI

  index++;
  counter++;
  let elementContact = document.createElement('li');
  elementContact.setAttribute("Id", "contacto_"+ index);

  // Etiqueta Span del nombre
  let nameText = document.createElement('span');
  nameText.innerText = contacName;
  elementContact.appendChild(nameText)

  //Crear Botón Editar
  let editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener('click', function() {
    editContact(nameText.innerText);
  })
  elementContact.appendChild(editButton);

  //Crear Botón Eliminar
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Borrar" ;
  deleteButton.addEventListener('click', function () {
    deleteContact(nameText.innerText)
  })
  elementContact.appendChild(deleteButton);
  listContact.appendChild(elementContact)

}

addButton.addEventListener('click', () => {
  addContact();
  contactInput.value = "";
  cointerCounter.innerText = "Cantidad de contactos: " + counter;
});

//funcion eliminar
const deleteContact = function(nameContact){
  const contactos = listContact.getElementsByTagName('li');
  if(contactos.length == 0) return
  for (let i=0; i < contactos.length; i++){
    let contacto = contactos[i].getElementsByTagName('span');
    if(contacto[0].innerText.trim().toLowerCase() == nameContact.trim().toLowerCase()){

      listContact.removeChild(contactos[i]);
      counter--;
    }
  }
  cointerCounter.innerText = "Cantidad de contactos: " + counter;
}


//funcion editar
const editContact = function(nameContact){
  const contactos = listContact.getElementsByTagName('li');
  if(contactos.length == 0) return
  for (let i=0; i < contactos.length; i++){
    let contacto = contactos[i].getElementsByTagName('span');
    if(contacto[0].innerText.trim().toLowerCase() == nameContact.trim().toLowerCase()){
        let newName = prompt("Ingresa el nuevo nombre",contacto[0].innerText );
        while (newName === null){
          alert("Debes escribir un nombre");
           newName = prompt("Ingresa el nuevo nombre");
        }
        contacto[0].innerText = newName;
      }
  }
}


//funcion buscar
const findContact = function(nameContact){
  let contactos = listContact.getElementsByTagName('li');
  if(contactos.length == 0) return false
  for (let i=0; i < contactos.length; i++){
    let contacto = contactos[i].getElementsByTagName('span');
    if(contacto[0].innerText.trim().toLowerCase() == nameContact.trim().toLowerCase())
      return true;
  }
  return false
}






