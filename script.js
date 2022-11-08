const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Debajo hay una lista dinámica. Haz clic en cualquier parte de la página para añádir un nuevo item a la lista. Haz clic en cualquier item para cambiar su texto.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('¿Qué texto quieres que tenga el item?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Escribe el nuevo texto del item:');
    this.textContent = listContent;
  }
}
