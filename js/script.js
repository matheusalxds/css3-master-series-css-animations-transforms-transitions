let header = document.getElementById('header');
let navToggle = document.getElementById('toggle');

navToggle.addEventListener('click', function () {
  toggleClass(header, 'sidebar__open')
});

function toggleClass(element, className) {
  let classList = element.className.split(' ');

  if ((classList.indexOf(className)) !== -1) {
    removeClass(element, className);
  } else {
    addClass(element, className)
  }
}

function addClass(element, className) {
  let classList = element.className.split(' ');
  classList.push(className);
  element.className = classList.join(' ');
}

function removeClass(element, className) {
  let classList = element.className.split(' ');
  classList = classList.filter(function (e) {
    return e !== className;
  });
  element.className = classList.join(' ');
}
