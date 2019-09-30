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


// function getCurrentPage() {
//   var url = document.URL;
//   // If the string ends with a /, remove it
//   if (url && url.lastIndexOf("/") == url.length - 1) {
//     url = url.slice(0, url.length - 1);
//   }
//   var lastSlashIndex = url.lastIndexOf("/");
//   var pageId = url.slice(lastSlashIndex, url.length - 1)
//   console.log(pageId)
// }
// getCurrentPage()
// //print(document.URL)
// currentPage = document.URL;