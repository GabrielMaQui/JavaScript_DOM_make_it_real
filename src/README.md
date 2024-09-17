# Make It Real - Gestión de Contactos usando JavaScript y DOM

This is a solution to the Gestión de Contactos usando JavaScript y DOM of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add new contacts to the list.
- Edit contact names with an editable field.
- Delete contacts from the list.
- Avoid adding empty or duplicate contacts.
- See the number of contacts dynamically updated

### Screenshot

## My process

### Built with

- Semantic HTML5 markup
- Vanilla JavaScript for DOM manipulation and event handling
- CSS for styling and layout

### What I learned

Working on this project allowed me to improve my skills in DOM manipulation and event handling with Vanilla JavaScript. Some key takeaways include:

Input validation: I learned to validate the contact input, ensuring that the user doesn't add empty contacts or duplicates. This is handled through conditional checks and comparisons using a findContact function to ensure no duplicate names are added.

Dynamic DOM manipulation: I now have a deeper understanding of how to dynamically create, update, and delete DOM elements. Specifically, using document.createElement() to add new contacts to the list, as well as removeChild() to delete them from the DOM.

Event-driven programming: I learned how to handle events efficiently by attaching addEventListener to buttons for adding, editing, and deleting contacts. Each event is designed to interact with the DOM in real-time, allowing for a seamless user experience.

Edit functionality: Implementing the "Edit" functionality was particularly insightful, as I had to ensure that the contact list could be updated dynamically. The use of prompt() to modify the contact name and the validation of the new name were critical for preventing issues like duplicates during the edit process.

Counters and state management: Managing the dynamic counter that tracks the number of contacts helped me understand state management better. The counter updates every time a contact is added or removed, reflecting the correct total.

Here’s a code snippet that helped me implement the edit functionality:

```js
const editContact = function (nameContact) {
  let contacto = findContact(nameContact);
  if (contacto) {
    let currentName = contacto.getElementsByTagName('span')[0];
    let newName = prompt("Enter the new name", currentName.innerText);

    while (!newName) {
      alert("You must enter a name");
      newName = prompt("Enter the new name", currentName.innerText);
    }

    if (findContact(newName)) {
      alert("Name already exists");
      return;
    }

    currentName.innerText = newName;
  }
};
```
### Continued development

Moving forward, I aim to:

- Improve the user experience by adding animations or transitions when adding or removing contacts.
- Implement sorting by multiple criteria (e.g., by date added or alphabetically).
- Optimize the app for better performance by handling a large number of contacts.
- Implement search functionality to quickly find contacts.

### Useful resources


## Author

- Github - [GabrielMaQui](https://github.com/GabrielMaQui)

## Acknowledgments

I would like to thank the Make It Real team for their guidance and insightful feedback throughout this project. Their support helped me push through the challenges and complete the project successfully.
