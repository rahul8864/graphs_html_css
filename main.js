const inputField = document.getElementById('inputValue');
inputField.addEventListener('input', () => {
  var bar = document.getElementById('bar');
  var pie = document.getElementById('pie');
  var gradient = document.getElementById('gradient');
  var level = document.getElementById('level');
  var level2 = document.getElementById('level2');
  if (inputField.value > 100) {
    alert('Input Value is greater than max Value');
  } else {
    level.innerHTML = `${inputField.value.length > 0 ? inputField.value : 0 }%`;
    level2.innerHTML = `${inputField.value.length > 0 ? inputField.value : 0 }%`;
    bar.style.background = `linear-gradient(#008cff ${inputField.value.length > 0 ? inputField.value : 0 }%, #c3e3ff 0)`;
    pie.style.background = `conic-gradient(#008cff ${inputField.value.length > 0 ? inputField.value : 0 }%, #c3e3ff 0)`;
    pie.setAttribute('data-pie', `${inputField.value.length > 0 ? inputField.value : 0 }%`);
    gradient.style.background = `linear-gradient(#008cff ${inputField.value.length > 0 ? inputField.value : 0 }%, #c3e3ff)`;
  }
});
