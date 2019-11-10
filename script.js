// Navigation
const pageIds = {
  menuPage: "menu-content",
  menuButton: "menu-button",
  eventsPage: "events-content",
  eventsButton: "events-button",
  galleryPage: "gallery-content",
  galleryButton: "gallery-button",
  contactPage: "contact-content",
  contactButton: "contact-button",
  reservationPage: "reservation-content",
  reservationButton: "reservation-button"
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

// Menu
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

// Gallery 
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


// TO DO: make menu a function + add dinner section
// hide footer on mobile contact page 
// reservation page */