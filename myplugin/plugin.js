myplugin = {};

// Executed on startup.
alert("Starting up MyPlugin!");

// Executed on shutdown.
myplugin.shutdown = function() {
  alert("Shutting down MyPlugin!");
};

// Add menu item.
builder.gui.menu.addItem('file', "Show me a cat!", 'file-show-cat', function() {
  // Using newNode to create dialog.
  var dialog = newNode('div', {'class': 'dialog', 'id': 'cat-dialog'},
    newNode('h1', "A cat!"),
    // Getting full resource path.
    newNode('img', {'src': builder.plugins.getResourcePath('myplugin', 'animals-cat.png')}),
    // Adding listeners in newNode.
    newNode('p',
      newNode('a', {'href': '#', 'click': function() { jQuery('#cat-dialog').remove(); }}, "Close")
    )
  );
  // Showing dialog.
  builder.dialogs.show(dialog);
});

// Listening for "clear results" event.
builder.views.script.addClearResultsListener(function() {
  alert("Clearing results!");
});