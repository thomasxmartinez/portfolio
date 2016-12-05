var previousRoles = [];

function Roles (jobs) {
  this.jobTitle = jobs.jobTitle;
  this.location = jobs.location;
  this.jobDescription = jobs.jobDescription;
};

Roles.prototype.toHtml = function() {
  var $newRoles = $('article.template').clone();
  $newRoles.find('.job-title').text(this.location);
  $newRoles.find('.location').text(this.jobTitle);
  $newRoles.find('.resume-body').html(this.jobDescription);
  $newRoles.removeClass('template');
  return $newRoles;
};

roleDescriptor.forEach(function(jobsObj) {
  previousRoles.push(new Roles(jobsObj));
});

previousRoles.forEach(function(jobsObj) {
  $('#resume-info').append(jobsObj.toHtml());
});
