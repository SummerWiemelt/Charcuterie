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


var breakfastBeginnings = [
  ["Avacado Toast", "Homeade bread of your choice (rye, wheat, or crossiont topped with seasoned avacado and a sunnyside egg", "$7"],
  ["Gourmet Yogurt Parfait", "Description", "Price"],
  ["Stuffed French Toast", "Description", "Price"],
  ["Eggs Benedict", "Description", "Price"],
  ["Croissant Breakfast Sandwhich", "Description", "Price"]
]
var breakfastBeginningsContainer = document.getElementById("BreakfastMenuItems")
menuItems = "";
for (var i = 0; i < breakfastBeginnings.length; i++ ) { 
  console.log("test")
  menuItems += '<div class="row justify-content-between menu-row">';
  menuItems += '<div class="col-xs-6 menu-item">' + breakfastBeginnings[i][0] + '</div>';
  menuItems += '<div class="col-xs-6">' + breakfastBeginnings[i][2] + '</div>';
  menuItems += '</div>';
  menuItems += '<div class="row menu-row">';
  menuItems += '<div class="col-xs-6 menu-item-description">' + breakfastBeginnings[i][1] + '</div>';
  menuItems += '</div>';
  menuItems += '<hr class="menu-divider">';
}
console.log(menuItems)
breakfastBeginningsContainer.innerHTML = menuItems;