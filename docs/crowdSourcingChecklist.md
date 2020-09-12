# Crowdsourcing Checklist

- [ ] Add qualifications to HIT.
- [ ] Test on sandbox

* Latest experiment hosted on S3
* Commit and tag code.
* Open monitoring and email to respond to turkers
* MTurk batch sized correctly ("assignments per HIT" and HIT price)
* Post HITs
* Download data
* Accept HITs
* Pay bonuses
* Grant qualifications

Things to remember:

- You don't have any qualifications in the sandbox, so you might not be able to test your HIT

HIT Template:

Need to replace ut_id and the url.

```(html)
<!--<script src="//uniqueturker.myleott.com/lib.js" type="text/javascript"></script><script type="text/javascript">
(function(){
    var ut_id = "4f76d3d2fede286a768ff081304398f8";
    if (UTWorkerLimitReached(ut_id)) {
        document.getElementById('mturk_form').style.display = 'none';
        document.getElementsByTagName('body')[0].innerHTML = "You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.";
    }
})();
</script>--><!-- For help on using this template, see the blog post: https://blog.mturk.com/editing-the-survey-link-project-template-in-the-ui-7c75285105fb#.py7towsdx --><!-- HIT template: SurveyLink-v3.0 --><!-- The following snippet enables the 'responsive' behavior on smaller screens -->
<meta content="width=device-width,initial-scale=1" name="viewport" /><script type='text/javascript' src='https://s3.amazonaws.com/mturk-public/externalHIT_v1.js'></script>
<section class="container" id="SurveyLink">
<div class="row">
<div class="col-xs-12 col-md-12">
<div class="panel panel-primary"><a class="panel-heading" href="javascript:void(0);" id="collapseTrigger"><strong>Instructions</strong> <span class="collapse-text">(Click to expand)</span> </a>
<div class="panel-body" id="instructionBody">
<p>This is a study by the University of Canterbury.&nbsp;</p>

<p>You will drag a box to a target location using two different techniques, answer a question and then drag the box again.&nbsp;</p>

<p>You will be paid $1.25 for approximately 5 minutes of work.</p>

<p><strong>NOTE:</strong> Although there are multiple HITs in this batch you will only be able to complete one.</p>

<p>To complete this task:</p>

<ol>
	<li>Click on the button below. This will open our task website in a new window.</li>
	<li>Follow the instructions on the website.</li>
	<li>On the final screen of the task, a confirmation code will appear. Copy this code into the box below and submit it.</li>
</ol>

<p>&nbsp;</p>

<p>If you have any questions please email <a href="mailto:blaine.lewis@uwaterloo.ca">blaine.lewis@uwaterloo.ca</a></p>

<p class="text-center"><input class="btn btn-primary" disabled="disabled" id="taskButton" type="button" value="You must ACCEPT the HIT before you can begin the task (Refresh this page after you ACCEPT the HIT)." /></p>
</div>
</div>
</div>
</div>
<!-- End Instructions --><!-- Survey Link Layout -->

<div class="row" id="workContent">
<div class="col-xs-12 col-md-6 col-md-offset-3"><!-- Content for Worker --><!-- End Content for Worker --><!-- Input from Worker -->
<div class="form-group"><label for="surveycode">Provide the confirmation code here:</label> <input class="form-control" id="surveycode" name="surveycode" placeholder="e.g. 123456" required="" type="text" /></div>
<!-- End input from Worker --></div>
</div>
<!-- End Survey Link Layout --></section>
<!-- Please note that Bootstrap CSS/JS and JQuery are 3rd party libraries that may update their url/code at any time. Amazon Mechanical Turk (MTurk) is including these libraries as a default option for you, but is not responsible for any changes to the external libraries --><!-- External CSS references -->
<link crossorigin="anonymous" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" integrity="sha384-IS73LIqjtYesmURkDE9MXKbXqYA8rvKEp/ghicjem7Vc3mGRdQRptJSz60tvrB6+" rel="stylesheet" /><!-- Open internal style sheet -->
<style type="text/css">#collapseTrigger{
  color:#fff;
  display: block;
  text-decoration: none;
}
#submitButton{
  white-space: normal;
}
.image{
  margin-bottom: 15px;
}
/* CSS for breaking long words/urls */
.dont-break-out {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
</style>
<!-- Close internal style sheet --><!-- External JS references --><script src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js" integrity="sha384-s1ITto93iSMDxlp/79qhWHi+LsIi9Gx6yL+cOKDuymvihkfol83TYbLbOw+W/wv4" crossorigin="anonymous"></script><!-- Open internal javascript --><script>
  var workerID = turkGetParam('workerId', false);
  var assignmentID = turkGetParam('assignmentId', false);
  if (assignmentID && assignmentID !== "ASSIGNMENT_ID_NOT_AVAILABLE") {
    document.getElementById('assignmentId').value = assignmentID;
    btn = document.getElementById("taskButton");
    if (btn) {
      btn.disabled = false;
      btn.value = "Click to begin task";
      var url = 'http://framing-hci.s3-website.us-east-2.amazonaws.com/' + 'WORKER_ID=' + workerID + "&ASSIGNMENT_ID=" + assignmentID + "&EXPERIMENT=${EXPERIMENT}&CONDITION=${CONDITION}";
      btn.onclick = function () {
        window.open(url);
      };
      console.log("Setting URL:" + url);
    }
  }
</script><!-- Close internal javascript -->
```
