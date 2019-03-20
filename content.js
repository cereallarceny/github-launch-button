var mergePullRequestForm = document.querySelector("form.js-merge-pull-request");
var buttonsParent = mergePullRequestForm.querySelector(
  ".commit-form-actions .select-menu"
);
var cancelButton = mergePullRequestForm.querySelector(".btn.js-details-target");
var mergeButton = mergePullRequestForm.querySelector(
  ".btn.js-merge-commit-button"
);

// Only do this if it's a clean merge
if (mergeButton.classList.contains("btn-primary")) {
  // Set parent styles
  buttonsParent.style.position = "relative";
  buttonsParent.style.width = "100%";
  buttonsParent.style.height = "400px";

  // Center the cancel button
  cancelButton.style.marginLeft = "auto";
  cancelButton.style.marginRight = "auto";
  cancelButton.style.display = "block";

  // Change the merge button to have a special ID which overrides all other styles
  mergeButton.id = "special-merge-button";
}
