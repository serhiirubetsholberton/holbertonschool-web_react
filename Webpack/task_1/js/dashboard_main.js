import $ from "jquery";
import _ from "lodash";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let clicksCount = 0;

function updateCounter(e) {
  $('#count').html(`${++clicksCount} clicks on the button`);
}

const debouncedClicker = _.debounce(updateCounter, 300);
$('button').on('click', debouncedClicker);
console.log($('#count'))