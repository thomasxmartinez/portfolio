var resumeFilter = {};

resumeFilter.createFilter = function() {
  $('article').not('.template').each(function() {
    var location, jobTitle, optionFilter;
    location = $(this).find('address a').text();
    optionFilter = '<option value="' + location + '">' + location + '</option>';
    $('#resume-info').append(optionFilter);
    jobTitle = $(this).attr('title-category');
  });
};

resumeFilter.orgResumeFilter = function() {
  $('#resume-info').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article').val();
      $('article[information-attribute="' + $(this).val() +'"]').attr('option', sourceData).fadeIn(3000);
    } else {
      $('article').not('.template').show();
    }
    $('#resume-info').val('');
  });
};

resumeFilter.topNav = function () {
  $('.top-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(3000);
  });
  $('.top-nav .tab:first').click();
};

resumeFilter.setTeasers = function() {
  $('.resume-body *:nth-of-type(n+2)').hide();
  $('article').on('click','.read-on',function(event) {
    event.preventDefault();
    if ($(this).html() === 'Read on →') {
      console.log('readon');
      $(this).prev().children().show();
      $(this).html('&larr; Show less');
    } else {
      $('.resume-body *:nth-of-type(n+2)').hide();
      $(this).html('Read on &rarr;');
    }
    return false;
  });
};

resumeFilter.renderIndexPage = function() {
  Roles.previousRoles.forEach(function(a) {
    $('#resume-info').append(a.toHtml('#resume-template'));
  });

  resumeFilter.createFilter();
  resumeFilter.orgResumeFilter();
  resumeFilter.topNav();
  resumeFilter.setTeasers();
};
Roles.fetchAll(resumeFilter.renderIndexPage);
