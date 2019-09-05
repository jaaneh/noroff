// form select based on product
$(document).ready(function() {
  var url = new URL(document.location);
  var param = url.searchParams;
  var name = param.get("name");

  $("#contactSel").val(name);
});
