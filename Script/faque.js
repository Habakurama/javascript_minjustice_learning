//This eventListener works for loading DOM(document object model)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.info-button');
  const infoContents = document.querySelectorAll('.info-content');
//this is event object fuction that has responsiblity to make event, change when user click on button
  buttons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.stopPropagation();
          const targetInfo = button.getAttribute('data-info');
          const infoContent = document.getElementById(targetInfo);
//this is condition that will loaded for making contant visible or invisible on screen
          infoContents.forEach(content => {
              if (content.id === targetInfo) {
                  content.classList.toggle('show');
                  positionInfoContent(button, content);
              } else {
                  content.classList.remove('show'); 
              }
          });
      });
  });
//this will load when user click out side of content to make its invisible
  document.addEventListener('click', () => {
      infoContents.forEach(content => content.classList.remove('show'));
  });
//this is function used to make possition of contants
  function positionInfoContent(button, content) {
      const buttonRect = button.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      let top = buttonRect.bottom + window.scrollY;
      let left = buttonRect.left + window.scrollX;

      if (left + contentRect.width > window.innerWidth) {
          left = window.innerWidth - contentRect.width - 10;
      }

      content.style.top = `${top}px`;
      content.style.left = `${left}px`;
  }
});