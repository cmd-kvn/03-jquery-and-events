// IN-CLASS TODO: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    console.log('I work');
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
  if ($(this).val()) {
    var $article = $('article');
    var authorName = $(this).val();
    /* TODO: If the slect box changes to an option that has a value, we should:*/
    // 1. Hide all of the articles
    $article.hide();
    // 2. Fade in only the articles that match based on on the author that was aselected. Hint: use an attribute selector to find those articles that match the value, and then fade them in.
    $('article[data-author="' + authorName + '"]').fadeIn(2000);
  } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
    $article.not('template').show();
  }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function() {
  if ($(this).val()) {
    var $article = $('article');
    var category = $(this).val();
    /* TODO: If the slect box changes to an option that has a value, we should:*/
    // 1. Hide all of the articles
    $article.hide();
    // 2. Fade in only the articles that match based on on the category that was selected. Hint: use an attribute selector to find those articles that match the value, and then fade them in.
    $('article[data-category="' + category + '"]').fadeIn(2000);
  } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
    $article.not('template').show();
  }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    var clickedTab = $(this).attr('data-content');
    // TODO:
    //   1. Hide all of the .tab-content sections
    $('.tab-content').hide();
    //   2. Fade in the single .tab-content section that is associated with the .tab element's data-content attribute.
    $('#' + clickedTab).fadeIn(2000);
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.*/
  var $readOn = $('a.read-on');
    // When a .read-on link is clicked, we can:
  $readOn.on('click', function(event){
    // 1. Prevent the defaul actionof a link.
    event.preventDefault();
    // 2. Reveal everything in that particular article now.
    $('.article-body *:nth-of-type(n+2)').show();
    // 3. Hide that read-on link!
    $readOn.hide();
  });

    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
};

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
