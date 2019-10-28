if (window.location.href != "https://hac40.esp.k12.ar.us/HomeAccess40/Content/Student/Assignments.aspx") {
  alert("You need to be in the direct page, not the class page or any other page. Redirecting to the direct page. You will need to rerun the code.")
  window.location.href = "https://hac40.esp.k12.ar.us/HomeAccess40/Content/Student/Assignments.aspx"
} 

lowGradeThreshold = 70

var classesElement = document.getElementsByClassName("AssignmentClass");

for (var i = 0; i < classesElement.length; i++) {
    assignmentsElements = classesElement[i].getElementsByTagName("tr")
    for (var j = 0; j < assignmentsElements.length; j++) {
        console.log(assignmentsElements.length)
        console.log("i"+i+" j"+j)
        if (assignmentsElements[j].getElementsByTagName("td")[0].innerText[0] == "0" || assignmentsElements[j].getElementsByTagName("td")[0].innerText[0] == "1") {
            if (assignmentsElements[j].getElementsByTagName("td")[4].innerText == "N" || assignmentsElements[j].getElementsByTagName("td")[4].innerText == "Z") {
                assignmentsElements[j].style.color = "white"
                assignmentsElements[j].style.backgroundColor = "red"
                assignmentsElements[j].children[2].children[0].style.color = "white"
            } else if (Number(assignmentsElements[j].getElementsByTagName("td")[9].innerText.split("%")[0]) < lowGradeThreshold && assignmentsElements[j].getElementsByTagName("td")[9].innerText != " ") {
                assignmentsElements[j].style.backgroundColor = "yellow"     
            }
        }
    }
}    


// If i want to add a way to edit the lowGradeThreshold
// <input type="number" name="lowGradeThresholdInput" class="sg-button sg-right sg-5px-margin btnCollapseExpand ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" value="70">
