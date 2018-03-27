const linkList = document.getElementsByClassName('list');

linkList[0].addEventListener('click', (e) => {
  console.log(e.target.textContent);

  if (e.target.matches('.special-item')) {
    console.log('special item: ', e.target.textContent);
  }
});
