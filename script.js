/*********************************** Navigation **********************************/
const pageIds = {
  reservationPage: "reservation-content",
  reservationButton: "reservation-button",
  menuPage: "menu-content",
  menuButton: "menu-button",
  eventsPage: "events-content",
  eventsButton: "events-button",
  galleryPage: "gallery-content",
  galleryButton: "gallery-button",
  contactPage: "contact-content",
  contactButton: "contact-button"
};
const displayClass = "display-none";

class HtmlHelper {
  hide(element) {
    element.classList.add(displayClass);
  }
  show(element) {
    element.classList.remove(displayClass);
  }
}
const htmlHelper = new HtmlHelper()

function showPage(pageId) {
  // Purpose: to execute on the load of the page and hide any pages that should be hidden based on the url, and show any pages that should be shown.
  // PageObjects
  for (var i = 0; i < PageObjects.length; i++) {
    var pageObject = PageObjects[i];
    pageObject.shouldShow(pageId);
  }
  // loop through list of page objects and ask page to determine if it should be shown.
  // Depending on what the object determines, it will either show itself or hide itself.
}

class Page {
  constructor(pageId, pageButtonId) {
    this.pageId = pageId;
    this.pageElement = document.getElementById(this.pageId);
    this.pageButtonElement = document.getElementById(pageButtonId);
    this.pageButtonElement.addEventListener("click", () => {
      showPage(this.pageId)
    });
  }

  shouldShow(pageId) {
    if (!this.pageElement) {
      return false;
    }
    // If object id is equal to passed in id, remove hide classList
    if (this.pageId == pageId) {
      htmlHelper.show(this.pageElement);
    }
    // else add hide class to classList
    else {
      htmlHelper.hide(this.pageElement);
    }
    return true;
  }
}

const PageObjects = [
  new Page(pageIds.menuPage, pageIds.menuButton),
  new Page(pageIds.eventsPage, pageIds.eventsButton),
  new Page(pageIds.galleryPage, pageIds.galleryButton),
  new Page(pageIds.contactPage, pageIds.contactButton),
  new Page(pageIds.reservationPage, pageIds.reservationButton)
];

showPage(pageIds.reservationPage);

/*********************************** Menu **********************************/
// Breakfast 
var breakfastBeginnings = [
  ["Avacado Toast", "Homeade bread of your choice (rye, wheat, or crossiont topped with seasoned avacado and a basted egg", "$9"],
  ["Gourmet Yogurt Parfait", "Description", "Price"],
  ["Stuffed French Toast", "Description", "Price"],
  ["Eggs Benedict", "Description", "Price"],
  ["Croissant Breakfast Sandwhich", "Description", "Price"]
]
var breakfastBeginningsContainer = document.getElementById("BreakfastMenuItems")
menuItems = "";
for (var i = 0; i < breakfastBeginnings.length; i++) {

  menuItems += '<div class="row justify-content-between menu-row">';
  menuItems += '<div class="col-xs-6 menu-item">' + breakfastBeginnings[i][0] + '</div>';
  menuItems += '<div class="col-xs-6">' + breakfastBeginnings[i][2] + '</div>';
  menuItems += '</div>';
  menuItems += '<div class="row menu-row">';
  menuItems += '<div class="col-xs-6 menu-item-description">' + breakfastBeginnings[i][1] + '</div>';
  menuItems += '</div>';
  menuItems += '<hr class="menu-divider">';
}

breakfastBeginningsContainer.innerHTML = menuItems;

// Lunch

var lunchMenuItems = [
  ["food", "description", "price"],
  ["food", "description", "price"],
  ["food", "description", "price"],
  ["food", "description", "price"],
  ["food", "description", "price"],
  ["food", "description", "price"]
]

var lunchContainer = document.getElementById("lunchMenuItems")
menuItems = "";
for (var i = 0; i < lunchMenuItems.length; i++) {
  menuItems += '<div class="row justify-content-between menu-row">';
  menuItems += '<div class="col-xs-6 menu-item">' + lunchMenuItems[i][0] + '</div>';
  menuItems += '<div class="col-xs-6">' + lunchMenuItems[i][2] + '</div>';
  menuItems += '</div>';
  menuItems += '<div class="row menu-row">';
  menuItems += '<div class="col-xs-6 menu-item-description">' + lunchMenuItems[i][1] + '</div>';
  menuItems += '</div>';
  menuItems += '<hr class="menu-divider">';
}

lunchContainer.innerHTML = menuItems;

/*********************************** Events  **********************************/
var eventsContent = [
  ["./items/Events/fancy-macaroons.jpg", "Learn to Bake the Perfect Cake", "Join pastry chef Christina Tocci in a cake baking class.", "Saturday, October 5th. 6-9pm", "More Info"],
  ["./items/events/wine-tasting.jpg", "Cheese and Wine Tasting", "Come taste our finest cheeses and wines.", "Sunday, October 6th. 6-8pm", "More Info"],
  ["/items/Events/city-event.jpg", "Join us at the Fall Festival", "Food, shopping, music and more! Come find our booth.", "Saturday, October 12th. 10am-9pm", "More Info"],
  ["./items/Events/girls-talking.jpg", "Sip and Social", "Bring your friends and enjoy drinks and o'dourves.", "Thursday, October 17th. 7-9pm", "More Info"],
  ["./items/Events/pretty-salad.jpg", "The Basics of French Cuisine", "Cooking course with Chef Luis. Level II.", "Sunday, October 20th. 6-9pm", "More Info"],
  ["./items/Events/woman-smiling.jpg", "Hiring Event", "On-the-spot interviews. Hiring chefs, servers, and dishwashers.", "Monday, October 21st. 1-4pm", "More Info"],
  ["./items/Events/cheese.jpg", "Cheese Making and Tasting", "Learn the craft of cheese making with Chef Luis.", "Sunday, October 27th. 11am-2pm", "More Info"],
  ["./items/Events/charcuterie.jpg", "Learn the Art of Charcuterie", "Join us in learning all about our speciality, charcuterie.", "Saturday, November 2nd. 5-8pm", "More Info"],
  ["./items/Events/bread-oven.jpg", "Bread Baking with Chef Mike", "Learn to bake croissants, pan de campagne and pain au chocolat.", "Sunday, November 3rd. 4-8pm", "More Info"],
  ["./items/Events/table-notepad.jpg", "3rd Annual Speed Dating Event", "Our most popular event! 24 5min rounds, plus free drinks.", "Friday, October 8th. 6:30-9pm", "More Info"]
]

var eventsContentContainer = document.getElementById("eventsContent")
eventsItem = "";
eventsItem += '<div class="row">';
for (var i = 0; i < eventsContent.length; i++) {
  eventsItem += '<div class="col-sm-6 col-lg-4 card-col">' + '<div class="card">' + '<div class="card-body shadow">' + '<img src="' + eventsContent[i][0] + '"' + 'class="d-block w-100 shadow">';
  eventsItem += '<div class="card-alltext">' + '<h5 class="card-title">' + eventsContent[i][1] + '</h5>';
  eventsItem += '<p class="card-text">' + eventsContent[i][2] + '<br><br>';
  eventsItem += '<span class="weight-medium">' + eventsContent[i][3] + '</span></p>';
  eventsItem += '<a href="#" class="btn btn-outline-dark info-btn">' + eventsContent[i][4] + '</a>' + '</div>' + '</div>' + '</div>' + '</div>';
}
eventsItem += "</div>"

eventsContentContainer.innerHTML = eventsItem;


/*********************************** Gallery **********************************/
var galleryContent = [
  ["./items/Gallery Images/restaurant-plate.jpg"],
  ["./items/Gallery Images/salmon-dish.jpg"],
  ["./items/Gallery Images/charcuterie-dish.jpg"],
  ["./items/Gallery Images/customers-eating.jpg"],
  ["./items/Gallery Images/shrimp-dish.jpg"],
  ["./items/Gallery Images/pie.jpg"],
  ["./items/Gallery Images/wine-and-food.jpg"],
  ["./items/Gallery Images/lunch.jpg"],
  ["./items/Gallery Images/steak-dish.jpg"],
  ["./items/Gallery Images/burger.jpg"],
  ["./items/Gallery Images/chef-working.jpg"],
  ["./items/Gallery Images/kitchen.jpg"],
  ["./items/Gallery Images/macaron-bowl.jpg"],
  ["./items/Gallery Images/large-charcuterie-spread.jpg"],
  ["./items/Gallery Images/empty-plate.jpg"],
  ["./items/Gallery Images/breakfast-spread.jpg"]
]

var galleryContentContainer = document.getElementById("galleryItems")
galleryImage = "";
galleryImage += '<div class="row no-gutters justify-content-center">';
for (var i = 0; i < galleryContent.length; i++) {
  galleryImage += '<div class="col-12 col-sm-6 col-md-4 gallery-col">' + '<img src="' + galleryContent[i][0] + '"';
  galleryImage += 'class="img-fluid gallery-image"/>';
  galleryImage += '</div>';
}
galleryImage += "</div>"

galleryContentContainer.innerHTML = galleryImage;

/* Contact - FAQ
 var faqContent = [
   ["How often does the menu change?", " Our menu uses in-season ingredients from local farms. Due to the changing nature of our ingredients, our menu changes on a monthly basis."],
   ["Where are your cooking classes held?", "We have a seperate kitchen where our cooking classes are held. Our head chefs rotate between teaching courses and cooking in our restaurant."],
   ["Is there a dress code?", "We have a business casual dress code."],
   ["faq", "description"],
   ["faq", "description"]
 ] */

// var faqCollapse = [
//   ["headingOne", "", "collapseOne", "show"],
//   ["headingTwo", "collapsed", "collapseTwo", ""],
//   ["headingThree", "collapsed", "collapseThree", ""],
//   ["headingFour", "collapsed", "collapseFour", ""],
//   ["headingFive", "collapsed", "collapseFive", ""]
// ]

class FAQObject {
  constructor(question, answer, id_and_arialabel, isActive, dataTarget) {
    this.question = question;
    this.answer = answer;
    this.id_and_arialabel = id_and_arialabel;
    this.isActive = isActive;
    this.dataTarget = dataTarget;

    this.activeClass = "show"
    this.inactiveClass = "collapsed"
  }

  getActiveClass(forElement) {
    if (forElement == "forShow") {
      return question.isActive ? question.activeClass : "";
    } else {
      return question.isActive ? "" : question.inactiveClass
    }
  }
}


questionOne = new FAQObject(
  "How often does the menu change?",
  " Our menu uses in-season ingredients from local farms. Due to the changing nature of our ingredients, our menu changes on a monthly basis.",
  "headingOne",
  true,
  "collapseOne"
)
questionTwo = new FAQObject(
  "Where are your cooking classes held?",
  "We have a seperate kitchen where our cooking classes are held. Our head chefs rotate between teaching courses and cooking in our restaurant.",
  "headingTwo",
  false,
  "collapseTwo"
)
questionThree = new FAQObject(
  "Is there a dress code?",
  "We have a business casual dress code.",
  "headingThree",
  false,
  "collapseThree"
)

questionsFAQ = [
  questionOne,
  questionTwo,
  questionThree
]


var faqContainer = document.getElementById("faqItems")
faqHtml = '<div class="accordion" id="accordionExample">';
for (var i = 0; i < questionsFAQ.length; i++) {
  question = questionsFAQ[i]
  faqHtml += '<div class="card">';
  faqHtml += '<div class="card-header" id="' + question.id_and_arialabel + '">';
  faqHtml += '<h2 class="mb-0">';
  faqHtml += '<button class="btn btn-link-dark ' + question.getActiveClass("forHide") + ' faq-header" type="button" data-toggle="collapse" data-target="#' + question.dataTarget + '" aria-expanded="true" aria-controls="' + question.dataTarget + '">' + question.question + '</button>';
  faqHtml += '</h2>';
  faqHtml += '</div>';
  faqHtml += '<div id="' + question.dataTarget + '" class="collapse' + question.getActiveClass("forShow") + '" aria-labelledby="' + question.id_and_arialabel + '" data-parent="#accordionExample"><div class="card-body faq-text">' + question.answer + '</div>';
  faqHtml += '</div>';
  faqHtml += '</div>';
}
faqHtml += '</div>'

faqContainer.innerHTML = faqHtml;








// TO DO 
// hide footer on mobile contact page 
// adjust footer on reservation - tablet 