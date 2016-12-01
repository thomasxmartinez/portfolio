var projects = [];

function Project (information) {
  this.projectName = information.projectName;
  this.projectLink = information.projectLink;
  this.projectDescription = information.projectDescription;
};

Project.prototype.toHtml = function() {
  var $newProject = $('projects.template').clone();
  $newProject.find('project-name', this.projectName);
  $newArticle.attr('data-category', this.category);
  return $newProject;
};

projects.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});

projects.forEach(function(projectObj) {
  $('#projects').append(projectObj.toHtml());
});
