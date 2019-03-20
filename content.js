var mergeMessage = document.querySelector(".merge-message");
var altMergeOptions = mergeMessage.querySelector(".alt-merge-options");
var selectMenuButton = mergeMessage.querySelector(".select-menu-button");
var mergeButton = mergeMessage.querySelector(".btn");

// Only do this if it's a clean merge
if (mergeButton.classList.contains("btn-primary")) {
  // Hide the things around the button
  altMergeOptions.style.display = "none";
  selectMenuButton.style.display = "none";

  mergeMessage.style.position = "relative";
  mergeMessage.style.height = "400px";

  // Change the merge button to have a special ID which overrides all other styles
  mergeButton.id = "special-merge-button";
}
