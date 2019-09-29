const pageIds = {
  menuPage: "menu-content",
  eventsPage: "events-content",
  galleryPage: "gallery-content",
  contactPage: "contact-content",
  reservationsPage: "reservation-content"
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

function onLoad(pageId) {
  // Purpose: to execute on the load of the page and hide any pages that should be hidden based on the url, and show any pages that should be shown.
  // PageObjects
  for (var i = 0; i < PageObjects.length - 1; i++) {
    var pageObject = PageObjects[i];
    pageObject.shouldShow(pageId);
  }
  // loop through list of page objects and ask page to determine if it should be shown.
  // Depending on what the object determines, it will either show itself or hide itself.
}

class Page {
  constructor(pageId) {
    this.pageId = pageId;
    this.pageElement = document.getElementById(this.pageId);
  }

  shouldShow(pageId) {
    if (!this.pageElement) {
      return false;
    }
    // If object id is equal to passed in id, remove hide classList
    if (this.pageId == pageId) {
      HtmlHelper.show(this.pageElement);
    }
    // else add hide class to classList
    else {
      HtmlHelper.hide(this.pageElement);
    }
    return true;
  }
}

const PageObjects = [
  new Page(pageIds.menuPage),
  new Page(pageIds.eventsPage),
  new Page(pageIds.galleryPage),
  new Page(pageIds.contactPage),
  new Page(pageIds.reservationsPage)
];

function getCurrentPage() {
  var url = document.URL;
  // If the string ends with a /, remove it
  if (url && url.lastIndexOf("/") == url.length - 1) {
    url = url.slice(0, url.length - 1);
  }
  var lastSlashIndex = url.lastIndexOf("/");
  var pageId = url.slice(lastSlashIndex, url.length - 1)
  console.log(pageId)
}
getCurrentPage()
//print(document.URL)
currentPage = document.URL;