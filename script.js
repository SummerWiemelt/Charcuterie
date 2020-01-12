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
      if (pageId == pageIds.reservationPage) {
        const footerRow = document.getElementById("footer-row")
        // footerRow.classList.add("footer-row")
      }
    }
    // else add hide class to classList
    else {
      htmlHelper.hide(this.pageElement);
      if (pageId == pageIds.reservationPage) {
        const footerRow = document.getElementById("footer-row")
        // footerRow.classList.remove("footer-row")
      }
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
  ["Gourmet Yogurt Parfait", "Local vanilla yougurt, fresh seasonal berries, topped with cinammon spiced granola", "$8"],
  ["Stuffed French Toast", "Fluffy french toast filled with a whipped banana walnut cream, topped with brulee banana and whipped cream", "$13"],
  ["Eggs Benedict", "Two poached eggs on english muffins with a choice of smoked salmon or canadian bacon, covered in hollandaise sauce", "$13"],
  ["Croissant Breakfast Sandwhich", "Homeade croissant sandwich with turkey, swiss, lettuce, tomato, red onion, and avacado smothered in a spicy mayonnaise", "$12"]
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
  ["Soup of the day", "Choose from a cup or a bowl of our soup of the day. Changes weekly, and is created in house with the freshest available seasonal ingredients", "$9-13"],
  ["French Country Salad", "Goat cheese, asparagus, beets and pecans served over locally grown arugula. Served with a mustard vinaigrette", "$9"],
  ["Buttermilk fried shrimp", "Fresh shrimp served with a cabbage slaw and a sesame vinaigrette. Comes with a choice of fresh bread", "13"],
  ["Escargot", "Burgundy snails, garlic butter and toasted bread crumbs", "$13"],
  ["Pate charcuterie", "Duck and chicken confit served with warm brie and homeade breads", "$15"],
  ["French dip", "Delicate roast beef, carmelized onions and a horseradish crème served on a fresh homeade roll", "$15"]
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

// Dinner

var dinnerMenuItems = [
  ["Foie Gras", "Apricot gastrique and toasted brioche", "$15"],
  ["Pan Roasted chicken and Vegetables", "Organic locally sourced chicken with crispy skin. Served with artichoke hearts, marbled potatos and roasted garlic and herbs", "$21"],
  ["Bouillabaisse", "Red snapper, lobster, clams, and shrimp served in a delicate stew with locally sourced vegetables. Side of marbled potatoes", "$25"],
  ["Slow Roasted Salmon and Herbs", "Salmon served with a white wine vinaigrette, pancetta braised lentills and fresh herbs", "$26"],
  ["Filet Mignon", "Locally sourced filet mignon, tossed arugula salad, and buttery mashed potatoes", "$28"],
  ["Rosemary Braised Lamb Shank", "Locally sourced lamb served with a red wine reduction, local wild mushrooms, roasted baby carrots, and a creamy blue cheese polenta", "$28"]
]

var dinnerContainer = document.getElementById("dinnerMenuItems")
menuItems = "";
for (var i = 0; i < dinnerMenuItems.length; i++) {
  menuItems += '<div class="row justify-content-between menu-row">';
  menuItems += '<div class="col-xs-6 menu-item">' + dinnerMenuItems[i][0] + '</div>';
  menuItems += '<div class="col-xs-6">' + dinnerMenuItems[i][2] + '</div>';
  menuItems += '</div>';
  menuItems += '<div class="row menu-row">';
  menuItems += '<div class="col-xs-6 menu-item-description">' + dinnerMenuItems[i][1] + '</div>';
  menuItems += '</div>';
  menuItems += '<hr class="menu-divider">';
}

dinnerContainer.innerHTML = menuItems;



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
  eventsItem += '<div class=" col-lg-6 card-col">' + '<div class="card">' + '<div class="card-body shadow">' + '<img src="' + eventsContent[i][0] + '"' + 'class="d-block w-100 shadow">';
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

/*********************************** Contact FAQ **********************************/
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
questionFour = new FAQObject(
  "Is there parking available?",
  'Restaurant customers may park in our front parking lot, or use our free curbside valet service. Those attending our cooking classes should park in our back parking lot and use the back door labeled "classes".',
  "headingFour",
  false,
  "collapseFour"
)
questionFive = new FAQObject(
  "Do I need a reservation?",
  "We recommend getting a reservation on weekend nights and for parties greater than 6.",
  "headingFive",
  false,
  "collapseFive"
)
questionSix = new FAQObject(
  "What type of happy hour deals do you have?",
  "We pride ourselves in having a phenominal happy hour selection. We offer $2 beers and drinks, and half off appetizers and specials.",
  "headingSix",
  false,
  "collapseSix"
)
questionSeven = new FAQObject(
  "Are children welcome?",
  "Children are welcome to our restaurant, however, we require participants of our classes to be 18 or older due to the frequency we cook with and taste alcohol.",
  "headingSeven",
  false,
  "collapseSeven"
)

questionsFAQ = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven
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