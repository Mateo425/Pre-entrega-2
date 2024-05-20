const contacts = []; // Array para almacenar los contactos

const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const addButton = document.getElementById('addButton');
const contactList = document.getElementById('contacts');
// Función para agregar un nuevo contacto
function addContact(name, phone) {
  const newContact = {
      name: name,
      phone: phone
  };
  contacts.push(newContact);
  displayContacts(contacts);
}

function displayContacts(contactArray) {
  contactList.innerHTML = '';
  contactArray.forEach(contact => {
      const listItem = document.createElement('li');
      listItem.textContent = `${contact.name} - ${contact.phone}`;
      contactList.appendChild(listItem);
  });
}

// Event listener para el botón de agregar
addButton.addEventListener('click', () => {
  const name = contactNameInput.value;
  const phone = contactPhoneInput.value;
  if (name && phone) {
      addContact(name, phone);
      contactNameInput.value = '';
      contactPhoneInput.value = '';
  }
});
// El objeto de contacto se crea dentro de la función `addContact`:
const newContact = {
  name: name,
  phone: phone
};
// Función para buscar contactos por nombre
function searchContacts(query) {
  query = query.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(query));
}