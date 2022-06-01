
// ------ code activator tabs ------


var buttons = [
  "kotlin",
  "swift",
  "sdk",
  "natif",
  "reply",
  "notify",
  "succeeded",
  "result",
  "failed"
]

function tabActivator (clickedTab) {

  // target code block related to tabs
  var clikedBlock = clickedTab.closest(".code-block")
  
  buttons.filter( clickedClass => {
    if (
      // filter activation-class (the one in [buttons]) in tab
      clickedTab.className.split(" ").includes(clickedClass)
      &&
      // filter activation-class (the one in [buttons]) in block
      !clikedBlock.className.split(" ").includes(clickedClass)
    ) {
        // filter activation-class in code block 
        buttons.filter( previousClass => {
          if (clikedBlock.className.split(" ").includes(previousClass)) 
            // replace previousClass with clickedClass
            clikedBlock.classList.replace(previousClass, clickedClass)
          })
      }
    }
  )
}

var tabs = document.querySelectorAll(".api-code-tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => tabActivator(tab))
})


// ------ end code activator tabs ------

// ------ api-table nested objects ------

var parentsElements = document.querySelectorAll(".parent");

function makeClickable(triggeredParentElement) {

    triggeredParentElement.addEventListener("click", () => {

        var isActiveTriggeredParentElement = triggeredParentElement.classList.contains("parent-open");
        var triggeredNestedElements = document.querySelectorAll("[nested="+triggeredParentElement.getAttribute("parent")+"]");

        if (isActiveTriggeredParentElement) {
            unTriggerTableRows(triggeredParentElement, triggeredNestedElements);
        }
        else {
            triggerTableRows(triggeredParentElement, triggeredNestedElements);
        }
    });
}

function triggerTableRows(triggeredParentElement, triggeredNestedElements) {
    
    triggeredNestedElements.forEach( triggeredNestedElement => {
        triggeredNestedElement.style.display = "table-row";
    } );
    
    triggeredParentElement.classList.add("parent-open");
    
}

function unTriggerTableRows(triggeredParentElement, triggeredNestedElements) {
    
    triggeredNestedElements.forEach( triggeredNestedElement => {
        triggeredNestedElement.style.display = "none";
    } );
    
    triggeredParentElement.classList.remove("parent-open");
    
}

parentsElements.forEach( parentElement => makeClickable(parentElement) );


// ---- end api-table nested objects ----
