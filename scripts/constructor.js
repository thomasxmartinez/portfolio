function Roles (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Roles.previousRoles = [];

Roles.prototype.toHtml = function() {
  var $source = $('#resume-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};

Roles.loadAll = function(input) {
  input.forEach(function(ele) {
    Roles.previousRoles.push(new Roles(ele));
  });
};

Roles.fetchAll = function() {
  if (localStorage.resumeData) {
    Roles.loadAll(JSON.parse(localStorage.resumeData));
    resumeFilter.renderIndexPage();
  } else {
    $.getJSON('data/resumeData.json', function (data) {
      localStorage.resumeData = JSON.stringify(data);
      resumeFilter.renderIndexPage();
    });
  }
};
