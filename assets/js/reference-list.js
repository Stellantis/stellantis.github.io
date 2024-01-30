var clickedDropdown;
var currentDropdown = null;

var clickedButton;
var currentButton;

const slideDown = element => {
  element.style.height = `${element.scrollHeight}px`;
}
const slideUp = element => {
  element.style.height = `0`;
}

function dropdownApiContent(dropdownId, buttonId) {
    clickedDropdown = document.getElementById(dropdownId);
    clickedButton = document.getElementById(buttonId);

    if (clickedDropdown.parentElement.classList.contains("is-open")) {
        if (clickedDropdown.classList.contains('is-active')){
        slideUp(clickedDropdown);
        clickedDropdown.classList.remove("is-active");
        clickedButton.classList.remove("is-active");
        clickedDropdown.parentElement.classList.remove("is-open");

        }
        else {
        slideUp(clickedDropdown.parentElement.querySelector(".dropdown-api.is-active"));
        clickedDropdown.parentElement.querySelector(".dropdown-api.is-active").classList.remove("is-active");
        clickedButton.parentElement.parentElement.querySelector(".is-active").classList.remove("is-active");

        slideDown(clickedDropdown)
        clickedDropdown.classList.add('is-active');
        clickedButton.classList.add("is-active");
        }
    }
    else {
    slideDown(clickedDropdown);
    clickedDropdown.classList.add("is-active");
    clickedButton.classList.add("is-active");
    clickedDropdown.parentElement.classList.add("is-open");

    }
}

// code activator
var apiCodeTab = document.querySelectorAll(".api-code-tab");

function codeExampleActivator(clickedTab){
    var apiCode = clickedTab.closest(".api-content-code");
    
    if (clickedTab.classList[1].includes("req")) {
        if (clickedTab.classList[1].includes("kotlin")) {
            apiCode.classList.replace(apiCode.classList[1], "api-content-code-req-kotlin");
        }
        else if (clickedTab.classList[1].includes("swift")) {
            apiCode.classList.replace(apiCode.classList[1], "api-content-code-req-swift");
        }
        else {
            apiCode.classList.replace(apiCode.classList[1], "api-content-code-req");
        }
    }
    else if(clickedTab.classList[1].includes("res")) {
        apiCode.classList.replace(apiCode.classList[1], "api-content-code-res");
    }
    else if(clickedTab.classList[1].includes("notif")) {
        apiCode.classList.replace(apiCode.classList[1], "api-content-code-notif");
    }
    else if(clickedTab.classList[1].includes("err")) {
        apiCode.classList.replace(apiCode.classList[1], "api-content-code-err");
    }
}

apiCodeTab.forEach(tab => {
    tab.addEventListener("click", () => codeExampleActivator(tab));
});

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
        slideDown(triggeredParentElement.closest(".dropdown-api.is-active"));
        console.log(triggeredParentElement.closest(".dropdown-api.is-active"))
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
    
    triggeredParentElement.closest(".dropdown-api.is-active").style.height = "100%"

}

parentsElements.forEach( parentElement => makeClickable(parentElement) );


// ---- end api-table nested objects ----
