(function(module) {
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

  Roles.loadAll = function(data) {
    Roles.previousRoles = data.map(function(ele) {
      return new Roles(ele);
    });
  };

  Roles.fetchAll = function(next) {
    if (localStorage.resumeData) {
      $.ajax({
        type: 'HEAD',
        url: '/data/resumeData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            Roles.getAll(next);
          } else {
            Roles.loadAll(JSON.parse(localStorage.resumeData));
            next();
          }
        }
      });
    } else {
      Roles.getAll(next);
    }
  };
  Roles.getAll = function(next) {
    $.getJSON('/data/resumeData.json', function(resumeData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      Roles.loadAll(resumeData);
      localStorage.resumeData = JSON.stringify(resumeData);
      next();
    });
  };

  Roles.numWordsAll = function() {
    return Roles.previousRoles.map(function(prevRoles) {
      return prevRoles.jobDescription.split(' ').length;
    })
    .reduce(function() {
    });
  };

  module.Roles = Roles;
})(window);
