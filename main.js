if (window.location.href != "https://hac40.esp.k12.ar.us/HomeAccess40/Content/Student/Assignments.aspx") {
  alert("You need to be in the direct page, not the class page or any other page. Redirecting to the direct page. You will need to rerun the code.")
  window.location.href = "https://hac40.esp.k12.ar.us/HomeAccess40/Content/Student/Assignments.aspx"
} else {
  document.getElementsByClassName("sg-header")[0].innerHTML = document.getElementsByClassName("sg-header")[0].innerHTML + '<button id="plnMain_btnCollapseExpand" type="button" class="sg-button sg-right sg-5px-margin btnCollapseExpand ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" title="Show assignments that you have Ns or Zs in." onclick="javascript:main();" role="button"><span class="ui-button-text">NZ Grade Check</span></button>'
}

var notTurnedIn

function main() {
  notTurnedIn = []
  for (var i = 0; i < document.getElementsByClassName("AssignmentClass").length; i++) {
    for (var j = 0; j < document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr").length-6; j++) {
      if (document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[4].innerText == "N") {
        notTurnedIn.push(document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[2].innerText+": "+document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[4].innerText)
      }
      if (document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[4].innerText == "Z") {
        notTurnedIn.push(document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[2].innerText+": "+document.getElementsByClassName("AssignmentClass")[i].getElementsByTagName("tr")[j].getElementsByTagName("td")[4].innerText)
      }
    }
  }
  setTimeout(function(){formatAlert()},100)
}

function formatAlert() {
  if(notTurnedIn.length != 0) {
    var output = "<div>Assignments that you have N/Zs in:</div>"
    for (var i = 0; i < notTurnedIn.length; i++) {
      output = output + "<div>" + notTurnedIn[i] + "</div>"
    }
  } else {
    var output="<div>No Assignments with N/Zs.</div>"
  }
  SunGard.Common.ShowDialog(output, "NZ Grade Check", undefined, 750, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, 500);
}
