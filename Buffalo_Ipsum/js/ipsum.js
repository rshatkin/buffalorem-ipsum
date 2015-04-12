"use strict";

function randomWordFromArray(a) {
  return a[Math.floor(Math.random() * a.length)];
}

var sports = ['Buffalo Bills', 'The Ralph', 'Ralph Wilson', 'Tom Brady Sucks', 'The Powder Keg', 'Winter Classic', 'Miller Time', 'Buffalo Sabres', 'hockey', 'football', 'ice rink', 'stadium', 'the box', 'Buffalo Bandits', 'Bandits', 'The Bulls', 'The Jills', 'snowboarding', 'long board', 'skateboarding', 'The Aud', 'BILLIEVE', 'TOP SHELF!', 'WHERE MAMA HIDES THE COOKIES!', 'Stanley Cup', 'touch down', 'next year', 'Bills Mafia', 'Gordy McGordy', 'best fans', 'there is always next year', 'Spezios Dance Dynamics', 'Greater Buffalo', 'Stumpfs', 'hat trick', 'playoffs'];
var weather = ['freezing', 'snow', 'over the wall', 'white out', 'snow day', 'October Storm', 'black ice', 'winter', 'perpetual winter', 'snow in April', 'snow bank', 'snow mobile', 'winter is always coming', 'so fucking cold', 'snow shoes', 'ugg boots', 'electric car starter', 'windchill', 'Southern Tier', 'The South Towns', 'Ellicottville', 'skiing', 'cross country', 'got snowed-out', 'humidity', 'polar vortex', 'snow plow', 'hiberNATION', 'blizzard', 'blistery', 'gust of icy wind', 'snow drift', 'AM Spring, PM Winter', 'high of 76', 'low of negative one million', 'cold front', 'lake effect', 'finger lakes', 'snow plow', 'school closings', 'so god damn cold', 'ice scraper', '-15F', 'I\'m always cold!', 'why is it so cold?', 'let\'s move to Florida'];
var boozefood = ['chicken wings', 'suicide hot', 'death wings', 'Bud Light', 'The Flying Bison', 'hops', 'Pearl Street', 'Community Beer Works', 'Resurgence Brewing', 'Bit Ditch', 'Buffalo Brewing Co.', 'New Buffalo Brewing Lab', 'Woodcock Brothers', 'Ellicottville Brewing Co', 'Brewpub', 'Souther Tier Brewing', 'Anchor Bar', 'Duffs', 'Bar Bill', 'hot sauce', 'Buffalo sauce', 'chickenfinger sub', 'BFLO Distilling', 'Niagara Malt', 'Wegmans', 'fish fry', 'kielbasa', 'pastry heart', 'broiled', 'Ted\'s', 'smells like Cheerios', 'flour mill', 'custard', 'hoagie', 'Blue', 'blue cheese', 'Bocce Club Pizza', 'pizza and wings', 'pizza', 'buff chix pizza', "La Nova's", 'garbage plate', 'beef on weck', 'kummelweck roll', "Sahlen's", 'sponge candy', 'Bison Dip', "Chef's", 'Loganberry', 'Timmy-Hos', "Chiavetta's BBQ", 'salt water taffy', 'suckers', 'pop not soda', '', "Bagel Jay's", 'steakout', , 'wings', 'Chop House', 'pierogies', 'Mighty', 'taco', 'food trucks'];
var culture = ['Albright Knox', 'jazz', 'punk rock', 'Kerfuffle', 'Cheerios', 'because you\'re on Hertle', 'startup', 'Digg', 'The Chip Strip', 'Spyro Gyra', 'Sax Boy Slim', 'ska', 'Ani DiFranco', 'Righteous Babe', 'Cute Is What We Aim For', 'Ball Drop', 'at the zoo', 'the locks', 'Spree', 'Art Voice', 'eh?', 'Canada, eh?', 'good neighbors', 'renaissance', 'bicycle', 'Frank Lloyd Wright', 'crick', 'Huck Finn', 'BPO', 'Maid of the Mist', 'Allen Town', 'co-op', 'so sorry', 'craft beer', 'foodies', 'better than Austin', 'buffaLOVE', 'bike share', 'Scajaquada', 'random loonie', '', 'Step Out', 'Tailgate', 'TATS', 'on Dyngus Day', 'Elmwood', 'Shea\'s', 'Main St', 'Goo Goo Dolls', 'Broadway is dark tonight', 'Nickle City', 'in The Queen City', 'the 716', 'City of Light', 'Canalside', 'Silo City', 'pussy willow', 'marina', 'hydroelectric', 'Buffalo Central Terminal', 'art deco', 'architecture', 'youse', 'railcars', 'wineries', 'Niagara Falls', 'over the falls', 'mistake on the lake', 'UB', 'Buff State'];
var words_all = sports.concat(weather, boozefood, culture);
var x = randomWordFromArray('');

$('#ipsum-form').submit(function() {
  $.each ($("#ipsum-form input[name='option']:checked"), function(i, element) {
    $(elem).value();
    console.log('hello');
  });
  document.getElementById('print-ipsum').innerHTML = generateIpsum(words_all, 2);
  event.preventDefault();
});

function generateSentence(words) {
  var accum = '';
  for(var i = 0; i<12; ++i ) {
    if(i==11) {
      accum += randomWordFromArray(words);
    } else {
      accum += randomWordFromArray(words) + ' ';
    }
  };
  if (accum.endsWith('!' || '?')) {
    return accum;
  } else {
    return accum + '.';
  }
};

function generateParagraph(words) {
  var paragraph = '';
  for(var i = 0; i<5; ++i ) {
    paragraph += generateSentence(words) + '  ';
  };

  return paragraph + '<br>';
};

function generateIpsum(words, count) {
  var ipsum = '';
  for(var i = 0; i < count; ++i ) {
    ipsum += generateParagraph(words) + ' ';
  };

  return ipsum;
};

