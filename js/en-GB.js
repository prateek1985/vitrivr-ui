/**
* Contains speech Commands, Error messages, Queries, colors, Language settings 
* <P>
* 
* This file contains all language dependent things
*
* @author Prateek Goel
*/

  // set langauge English(UK)
  const LANGUAGE = 'en-GB';

  // Gets displayed on ON/Off GUI button
  const INSTRUCTION = "Say 'show all commands' for overview of voice queries";

  // These queries are used in follow up commands
  const QUERY_A = 'increase size (of pen) (of brush)';
  const QUERY_B = 'decrease size (of pen) (of brush)';
  const QUERY_C = '(show) (me) (move to) next (video) (container)';
  const QUERY_D = '(show) (me) (move to) previous (video) (container)'; 
  const QUERY_E = 'add (a) (new) Canvas (sheet)';
  const QUERY_F = 'add it';
  const QUERY_G = 'remove it'; 	

  const COMMAND_A = "voice search *tag";
  const COMMAND_B = "*tag1 voice search *tag2";

  var followUpCommands = ['even more','more','even further','further','one more','again one more','One More', 'yes'];

  const PERSON = "UK English Female";   // accent of voice response by UI

  // Static error messages
  const ERR1  = 'Window is open already';
  const ERR2  = 'There is no video playing';
  const ERR3  = 'Ok';
  const ERR4  = 'Please say yes just after my feedback';
  const ERR5  = "Sorry I haven't understood you";
  const ERR6  = 'Query not executed as there is no video results retrieved';
  const ERR7  = 'Please wait till search is in progress';
  const ERR8  = 'Query already executed';
  const ERR9  = 'Please say canvas number after the query';
  const ERR10 = 'Size of pen can not be increase';
  const ERR11 = 'Size of pen can not be decrease';
  const ERR12 = 'You are at the bottom';
  const ERR13 = 'You are at the top';
  const ERR14 = 'First say some query';
  const ERR15 = 'This command works while playing a video';
  const ERR16 = 'User has not clicked any shot';
  const ERR17 = 'Please say an action query';
  const ERR18 = 'There must be atleast one video added as positive feedback';
  const ERR19 = 'Please also say shot number';
  const ERR20 = 'There is no shot retrieved';
  const ERR21 = 'Please also say score';
  const ERR22 = 'Please check the voice query';
  const ERR23 = 'No window is open';
  const ERR24 = 'Please also say which color';


// voice queries/commands linked to their corresponding functions
  var commands = {
      
        'voice search *tag'                                              : voiceSearch_1,
        '*tag1 voice search *tag2'                                       : voiceSearch_2,
        '(toggle) (open) (close) top bar'                                : toggleTopbar,
        'search (the) (my) (Canvas) (sketch) (painting)'                 : searchCanvasQuery,
        '(do) (perform) query search'                                    : searchCanvasQuery,
        'add (a) (new) Canvas (sheet)'                                   : addCanvas,
        'split (video) (into sequences)'                                 : splitVideo,
        '(toggle) (open) (close) sidebar'                                : toggleSidebar,
        'increase size (of pen) (of brush)'                              : increasePenSize,
        'decrease size (of pen) (of brush)'                              : decreasePenSize,
        '(show) (me) (move to) next (video) (container)'                 : browseNext,
        '(show) (me) (move to) previous (video) (container)'             : browsePrevious,
        'search Canvas *tag'                                             : searchParticularCanvas,
        '(show) (me) colour sketch (tool) (option)'                      : showColorSketch,
        '(show) (me) motion sketch (tool) (option)'                      : showMotionSketch,
        'select *color colour (pen) (brush)'                             : selectColor,
        'fill Canvas (number) :num with *color (colour)'                 : fillCanvas,
        'download Canvas (number) :num'                                  : downloadCanvas,
        'delete Canvas (number) :num'                                    : deleteCanvas,
        'clearcanvas (number) :num'                                      : clearCanvas,
        'clear Canvas (number) :num'                                     : clearCanvas,
      
        'play (this) (my) (video) (clip) (shot)'                         : playVideo,
        'search (this) (my) (video) (clip) (shot) id'                    : searchById,
        'include (this) (video) (clip) (shot)'                           : positiveFeedback,
        'remove (this) (video) (clip) (shot)'                            : negativeFeedback,
        'search (my) (this) feedback'                                    : searchFeedback,
        '(put) (drop) (this) (image) (shot) on Canvas'                   : dropOnCanvas,
        'add (serial) numbers here'                                      : addNumbersHere,
        'play first (video) (shot)'                                      : playFirstShot,

        'play (me) video (clip) (shot) (with) (serial) number :num'      : playVideoByNumber,
        'search (me) video (clip) (shot) (with) (serial) number :num'    : searchVideoByNumber,
        '(put) (drop) (image) (shot) number :num on Canvas'              : dropOnCanvasByNumber,
        'include (video) (shot) number *num'                             : positiveFeedbackByNumber,
        'remove (video) (shot) number *num'                              : negativeFeedbackByNumber,
        
        '(toggle) (open) (close) top and sidebar'                        : toggleTopSideBar,
        'search and play (this) (my) (video) (shot)'                     : searchPlayVideo,

        'show (me) (video) (shot) greater than (score) :num'             : showScoredVideo,
        'total (number of) (shots) (videos) retrieved'                   : totalShots,
        'total (number of) (shots) (videos) greater than (score) :num'   : totalSpecificShots,
        'hide (all) (video) (shots) below (score) :num'                  : hideSpecificShots,
        'show (all) (video) (shots) again'                               : showHiddenShots,

        '(even) more'                                                    : followUpPenSize,
        '(even) further'                                                 : followUpBrowsing,
        'One More'                                                       : followUpCanvas,
        '(again) one more'                                               : followUpCanvas,
        'yes'                                                            : setResponse,
        'add it'                                                         : followUpFeedback,
        'remove it'                                                      : followUpFeedback,

        '(show) (display) (overview of) all commands'                    : displayCommands,
        'what can I say'                                                 : displayCommands,
        'close this (window) (box)'                                      : closeWindow,
        'replay (the) (video)'                                           : replayVideo,
        'pause (the) (video)'                                            : pauseVideo,
        'start (the) (video)'                                            : startVideo,
  };

// Commands mapped to their corrosponding base commands
  var baseCommands = {
    
        'voice search *tag'                                              : 'voice search:______',
        '*tag1 voice search *tag2'                                       : '______ voice search:______',
        '(toggle) (open) (close) top bar'                                : 'toggle top bar',
        'search (the) (my) (Canvas) (sketch) (painting)'                 : 'search my Canvas',
        '(do) (perform) query search'                                    : 'perform query search',
        'add (a) (new) Canvas (sheet)'                                   : 'add new Canvas',
        'split (video) (into sequences)'                                 : 'split video into sequences',
        '(toggle) (open) (close) sidebar'                                : 'toggle sidebar',
        'increase size (of pen) (of brush)'                              : 'increase size of pen',
        'decrease size (of pen) (of brush)'                              : 'decrease size of pen',
        '(show) (me) (move to) next (video) (container)'                 : 'show me next video container',
        '(show) (me) (move to) previous (video) (container)'             : 'show me previous video container',
        'search Canvas *tag'                                             : 'search Canvas _____ and _____',
        '(show) (me) colour sketch (tool) (option)'                      : 'show me colour sketch',
        '(show) (me) motion sketch (tool) (option)'                      : 'show me motion sketch',
        'select *color colour (pen) (brush)'                             : 'select _____ colour',
        'fill Canvas (number) :num with *color (colour)'                 : 'fill Canvas _____ with _____ colour',
        'download Canvas (number) :num'                                  : 'download Canvas number _____',
        'delete Canvas (number) :num'                                    : 'delete Canvas number _____',
        'clearcanvas (number) :num'                                      : 'clearcanvas number _____',
        'clear Canvas (number) :num'                                     : 'clear Canvas number _____',

        'play (this) (my) (video) (clip) (shot)'                         : 'play this video',
        'search (this) (my) (video) (clip) (shot) id'                    : 'search this video ID',
        'include (this) (video) (clip) (shot)'                           : 'include this video',
        'remove (this) (video) (clip) (shot)'                            : 'remove this video',
        'search (my) (this) feedback'                                    : 'search my feedback',
        '(put) (drop) (this) (image) (shot) on Canvas'                   : 'drop this shot on Canvas',
        'add (serial) numbers here'                                      : 'add numbers here',
        'play first (video) (shot)'                                      : 'play first shot',

        'play (me) video (clip) (shot) (with) (serial) number :num'      : 'play video shot number:______',
        'search (me) video (clip) (shot) (with) (serial) number :num'    : 'search video number:______',
        '(put) (drop) (image) (shot) number :num on Canvas'              : 'drop shot number:______ on Canvas',
        'include (video) (shot) number *num'                             : 'include video number _____ and _____',
        'remove (video) (shot) number *num'                              : 'remove video number _____ and _____',
        
        '(toggle) (open) (close) top and sidebar'                        : 'toggle top and sidebar',
        'search and play (this) (my) (video) (shot)'                     : 'search and play this video',

        'show (me) (video) (shot) greater than (score) :num'             : 'show me video greater than score _____%',
        'total (number of) (shots) (videos) retrieved'                   : 'total number of shots retrieved',
        'total (number of) (shots) (videos) greater than (score) :num'   : 'total number of shots greater than score _____%',
        'hide (all) (video) (shots) below (score) :num'                  : 'hide all shots below score _____%',
        'show (all) (video) (shots) again'                               : 'show all shots again',

        '(even) more'                                                    : 'even more',
        '(even) further'                                                 : 'even further',
        'One More'                                                       : 'one more',
        '(again) one more'                                               : 'again one more',
        'yes'                                                            : 'yes',
        'add it'                                                         : 'add it',
        'remove it'                                                      : 'remove it',

        '(show) (display) (overview of) all commands'                    : 'show all commands',
        'what can I say'                                                 : 'what can I say',
        'close this (window) (box)'                                      : 'close this window',
        'replay (the) (video)'                                           : 'replay the video',
        'pause (the) (video)'                                            : 'pause the video',
        'start (the) (video)'                                            : 'start the video',
  };

// stop words which get filtered out from unrecognized sentence
var stopwords = ["a", "about", "above", "above", "across", "after", "afterwards", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount",  "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as",  "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "eveno", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"];

// used in preprocessing to replace english number words with integers
var englishNumbers={
      
      "one"     :  "1", 
      "two"     :  "2", 
      "to"      :  "2",
      "three"   :  "3", 
      "four"    :  "4",
      "five"    :  "5",
      "six"     :  "6",
      "seven"   :  "7",
      "eight"   :  "8",
      "nine"    :  "9",
      "ten"     :  "10",

   };

// color mapped to their respective hex codes
var colourToHex = {

    "aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff",
    "blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00",
    "chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c",
    "cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgrey":"#a9a9a9",
    "darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkbrown":"#654321",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f",
    "darkslateblue":"#483d8b","darkslategrey":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3",
    "deeppink":"#ff1493","deepskyblue":"#00bfff","dimgrey":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222",
    "floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff",
    "gold":"#ffd700","goldenrod":"#daa520","grey":"#808080","green":"#008000","greenyellow":"#adff2f","golden":"#daa520",
    "honeydew":"#f0fff0","hotpink":"#ff69b4","indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6",
    "lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3",
    "lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa",
    "lightslategrey":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32",
    "linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd",
    "mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970",
    "mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5",
    "peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460",
    "seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd",
    "slategrey":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080",
    "thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff",
    "whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"
  };

/** 

Languages and there respective code to be added as a parameter in  annyang.setLanguage(parameter)

Afrikaans af
Basque eu
Bulgarian bg
Catalan ca
Arabic (Egypt) ar-EG
Arabic (Jordan) ar-JO
Arabic (Kuwait) ar-KW
Arabic (Lebanon) ar-LB
Arabic (Qatar) ar-QA
Arabic (UAE) ar-AE
Arabic (Morocco) ar-MA
Arabic (Iraq) ar-IQ
Arabic (Algeria) ar-DZ
Arabic (Bahrain) ar-BH
Arabic (Lybia) ar-LY
Arabic (Oman) ar-OM
Arabic (Saudi Arabia) ar-SA
Arabic (Tunisia) ar-TN
Arabic (Yemen) ar-YE
Czech cs
Dutch nl-NL
English (Australia) en-AU
English (Canada) en-CA
English (India) en-IN
English (New Zealand) en-NZ
English (South Africa) en-ZA
English(UK) en-GB
English(US) en-US
Finnish fi
French fr-FR
Galician gl
German de-DE
Hebrew he
Hungarian hu
Icelandic is
Italian it-IT
Indonesian id
Japanese ja
Korean ko
Latin la
Mandarin Chinese zh-CN
Traditional Taiwan zh-TW
Simplified China zh-CN ?
Simplified Hong Kong zh-HK
Yue Chinese (Traditional Hong Kong) zh-yue
Malaysian ms-MY
Norwegian no-NO
Polish pl
Pig Latin xx-piglatin
Portuguese pt-PT
Portuguese (Brasil) pt-BR
Romanian ro-RO
Russian ru
Serbian sr-SP
Slovak sk
Spanish (Argentina) es-AR
Spanish (Bolivia) es-BO
Spanish (Chile) es-CL
Spanish (Colombia) es-CO
Spanish (Costa Rica) es-CR
Spanish (Dominican Republic) es-DO
Spanish (Ecuador) es-EC
Spanish (El Salvador) es-SV
Spanish (Guatemala) es-GT
Spanish (Honduras) es-HN
Spanish (Mexico) es-MX
Spanish (Nicaragua) es-NI
Spanish (Panama) es-PA
Spanish (Paraguay) es-PY
Spanish (Peru) es-PE
Spanish (Puerto Rico) es-PR
Spanish (Spain) es-ES
Spanish (US) es-US
Spanish (Uruguay) es-UY
Spanish (Venezuela) es-VE
Swedish sv-SE
Turkish tr
Zulu zu

*/