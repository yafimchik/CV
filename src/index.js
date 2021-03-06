import('./scss/styles.scss').then(async () => {
  const tbody = document.querySelector('#t-body');
  const content = tbody.content.cloneNode(true);
  document.body.appendChild(content);
  await import('@fortawesome/fontawesome-free/js/fontawesome');
  import('@fortawesome/fontawesome-free/js/solid');
  import('@fortawesome/fontawesome-free/js/brands');
});

