var req = new XMLHttpRequest();
req.open('GET', 'https://www.hebcal.com/converter/?cfg=json&gy=2011&gm=6&gd=2&g2h=1', false);
req.send(null);
if(req.status == 200) {
  let hebrewCalendar = JSON.parse(req.responseText);
  console.log(hebrewCalendar.hebrew);
  document.getElementById("ajaxLoadedContent").innerText = hebrewCalendar.hebrew;

}
