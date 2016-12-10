var previousRoles = [];

function Roles (jobs) {
  this.jobTitle = jobs.jobTitle;
  this.location = jobs.location;
  this.jobDescription = jobs.jobDescription;
};

Roles.prototype.toHtml = function() {
  var $source = $('#resume-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};

roleDescriptor.forEach(function(jobsObj) {
  previousRoles.push(new Roles(jobsObj));
});

previousRoles.forEach(function(jobsObj) {
  $('#resume-info').append(jobsObj.toHtml());
});
