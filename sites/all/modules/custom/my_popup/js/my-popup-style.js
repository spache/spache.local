Drupal.theme.prototype.my_popup_style = function () {
  var html = '';
  html += '<div id="ctools-modal" class="popups-box my-first-popup">';
  html += ' <div class="ctools-modal-content my-popup ">';
  html += ' <span class="popups-close"><a class="close" href="#"></a></span>';
  html += ' <div class="modal-msg"></div>';
  html += ' <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';
  html += ' </div>';
  html += '</div>';
  return html;
}
// Drupal.theme.prototype.my_popup_style = function () {
//   var html = '';
//   html += '<div id="ctools-modal" class="ctools-modal-custom">';
//   html += '  <div class="ctools-modal-content ctools-modal-custom-help-content">';
//   html += '    <div class="modal-header">';
//   html += '      <span class="popups-close"><a class="close" href="#">' + Drupal.CTools.Modal.currentSettings.closeImage + '</a></span>';
//   html += '      <div class="modal-title">Help test</div>';
//   html += '    </div>';
//   html += '    <div class="modal-scroll"><div id="modal-content" class="modal-content modal-content-custom"></div></div>';
//   html += '  </div>';
//   html += '</div>';
//   return html;
// }
/**
* Provide the HTML to create the modal dialog.
*/
// (function ($) {
// Drupal.theme.prototype.my_popup_style = function () {
//   var html = '';
//   html += '<div id="ctools-modal" class="popups-box">';
//   html += '  <div class="ctools-modal-content my-popup">';
//   html += '    <span class="popups-close"><a class="close" href="#">' + Drupal.CTools.Modal.currentSettings.closeImage + '</a></span>';
//   html += '    <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';
//   html += '  </div>';
//   html += '</div>';
//   return html;
// }
// })(jQuery);
// ?>