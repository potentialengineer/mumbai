// Run this in the browser console, or add it to your site's JavaScript
function removeElfsightWidgets() {
  const widgets = document.querySelectorAll('a[href*="elfsight.com"]');
  widgets.forEach((widget) => {
    if (widget && widget.parentNode) {
      widget.parentNode.removeChild(widget);
    }
  });
}

// Run immediately and also set to run periodically in case widgets are added dynamically
removeElfsightWidgets();
setInterval(removeElfsightWidgets, 2000);
