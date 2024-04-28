import './styles.css';

function component() {
  const content = document.querySelector('#content');

  // Lodash, currently included via a script, is required for this line to work
  content.textContent = 'Hi mom';

  return content;
}

document.body.appendChild(component());
