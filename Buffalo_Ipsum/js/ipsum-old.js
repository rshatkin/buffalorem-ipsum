$(document).ready(function() {


  //start event listener for 'click'
  $('#ipsum-form').submit(function() {
    var paragraphs = '',
        paragraph_count = $('#paragraph_count').val(),
        words = [],

        selected = [];

        $.each ($("#ipsum-form input[name='option']:checked"), function(i, element) {
          $(element).attr('value');
          console.log($(element).attr('value'));
        });
        //$("#ipsum-form input[name='option']:checked"),


console.log('heyo', selected);

    //get selected categories from form
    // SWIFTSUM function getSelectedCategories() {
    //   var categories = [],
    //       allCategories = allCategories || [],
    //       checkboxes = $('#category');

    //   //get all checked category values
    //   for(var j = 0; j < checkboxes.length; j ++) {
    //     if(checkboxes[j].checked === true) {
    //       catgories.push(checkboxes[j].value);
    //     }
    //   }
    //   //concat selected categories
    //   for(var i = 0; i < categories.length; i ++) {
    //     allCategories = allCategories.concat(buffWords[categories[i]]);
    //   }
    //   return allCategories;
    //   console.log(allCategories);
    // }

    //randomizes number of sentences in each paragraph
    var sentence_number = Math.floor( (Math.random() + 4) * 2);

    //randomize contents of word array
    function wordBuffalo(words) {
      var i = words.length, j, tempi, tempj;
      if (i == 0) return false;
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = words[i];
        tempj = words[j];
        words[i] = tempj;
        words[j] = tempi;
      }
      return words;
      console.log(words);
    }

    //start building sentences from word bank
    for (var z = 0; z < paragraph_count; z++) {
      var sentence_group = '';

    //second loop building sentence groups from sentences
      for (var y = 0; y < sentence_number; y++) {

    //third loop building paragraphs from sentence groups
        for (var x = 0; x <words.length; x++ ) {

    //variable for randomized words
          var words_randomize = wordBuffalo(words);

    //convert array to string with no commas or quotes and add period to end of sentences
          var sentence = words_randomize.toString().replace(/,/g, ' ') + '. ';
    //capitalize first letter in sentence
          function firstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          var sentence_capped = firstLetter(sentence);
          //end building sentences from word bank
        }
        sentence_group += sentence_capped;
        //end second loop building sentence groups from sentences
      }
      paragraphs +='<p>' +sentence_group + '</p>';
      //end third loop adding spaces and builds paragraphs from sentence groups
    }

    $('#print-ipsum').empty().html(paragraphs);
    //prevent form from actually submitting (prevent page reload)
      return false;

  //end jQuery event listener
  });
//end document ready
});
