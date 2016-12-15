resumeFilter.renderAd = function() {
  var infoRender = Handlebars.compile($('#about').html());
  $('#about .tab-content').text(Roles.previousRoles.length);
  $('#about .tab-content').text(Roles.numWordsAll());
};

Roles.fetchAll(resumeFilter.renderAd);
