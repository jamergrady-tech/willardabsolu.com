// Inquiry form -> mailto: builder (no backend, no third-party services).
(function () {
  var f = document.getElementById('inquiry');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var v = function (n) { return (f.elements[n] && f.elements[n].value || '').trim(); };
    var body = 'Name: ' + v('name') + '\nCompany: ' + v('company') + '\nEmail: ' + v('email') + '\n\n' + v('msg');
    window.location.href = 'mailto:' + f.getAttribute('data-to') +
      '?subject=' + encodeURIComponent('WAI inquiry') + '&body=' + encodeURIComponent(body);
  });
})();
