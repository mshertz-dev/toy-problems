// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
  if (names.length === 0) {
    return '';
  } else if (names.length === 1) {
    return names[0]['name'];
  } else if (names.length === 2) {
    return names[0]['name'] + ' & ' + names[1]['name'];
  } else {
    let output = '';
    while (names.length > 2) {
      output += names[0]['name'] + ', ';
      names.shift();
    }
    return output + names[0]['name'] + ' & ' + names[1]['name'];
  }
}