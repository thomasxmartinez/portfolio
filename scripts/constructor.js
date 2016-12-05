var previousRoles = [];

function Roles (jobs) {
  this.jobTitle = jobs.jobTitle;
  this.location = jobs.location;
  this.jobDescription = jobs.jobDescription;
};

Roles.prototype.toHtml = function() {
  var $newRoles = $('resume-body.template').clone();
  $newRoles.find('a').attr('href').text(this.location);
  $newRoles.find('h1').text(this.jobTitle);
  $newRoles.find('.resume-body').append(this.jobDescription);
  $newRoles.removeClass('template');
  return $newRoles;
};

roleDescriptor.forEach(function(jobsObj) {
  roleDescriptor.push(new Roles(jobsObj));
});

previousRoles.forEach(function(jobsObj) {
  $('#resume-info').append(jobsObj.toHtml());
});
