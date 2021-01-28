document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
function dropdown(id) {
    var dropdownElement = document.querySelector(".expandable#"+id);
    if (dropdownElement.classList.contains("is-open")) {
        dropdownElement.classList.remove("is-open");
    }
    else {
        dropdownElement.classList.add("is-open");
    }
}
