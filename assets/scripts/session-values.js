var form = document.querySelector(".session-and-retire-time");

form.addEventListener('submit', event => {
    event.preventDefault();

    var selectedOptionSessionTime = document.getElementById('session-time').value;
    var selectedOptionRetireTime = document.getElementById("retire-time").value;

    var url = `timer.html?option=${selectedOptionSessionTime}&option=${selectedOptionRetireTime}`;
    window.location.href = url;
  });