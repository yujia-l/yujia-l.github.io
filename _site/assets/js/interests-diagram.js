(function () {
  var diagram = document.getElementById("interests-diagram");
  if (!diagram) return;

  var projects = diagram.querySelectorAll(".interests-project");
  var zones = diagram.querySelectorAll(".interests-zone, .interests-zone-label");
  var lines = diagram.querySelectorAll(".interests-line");
  var dots = diagram.querySelectorAll(".interests-dot");

  function clearActive() {
    diagram.classList.remove("is-active");
    [].forEach.call(projects, function (el) { el.classList.remove("is-active"); });
    [].forEach.call(zones, function (el) { el.classList.remove("is-active"); });
    [].forEach.call(lines, function (el) { el.classList.remove("is-active"); });
    [].forEach.call(dots, function (el) { el.classList.remove("is-active"); });
  }

  function activateProject(projectId) {
    clearActive();
    diagram.classList.add("is-active");

    var project = diagram.querySelector('.interests-project[data-project="' + projectId + '"]');
    if (project) {
      project.classList.add("is-active");
      var zoneList = (project.getAttribute("data-zones") || "").split(" ");
      zoneList.forEach(function (zone) {
        [].forEach.call(diagram.querySelectorAll('[data-zone="' + zone + '"]'), function (el) {
          el.classList.add("is-active");
        });
      });
    }

    [].forEach.call(diagram.querySelectorAll('[data-project="' + projectId + '"]'), function (el) {
      el.classList.add("is-active");
    });
  }

  function activateZone(zoneId) {
    clearActive();
    diagram.classList.add("is-active");

    [].forEach.call(diagram.querySelectorAll('[data-zone="' + zoneId + '"]'), function (el) {
      el.classList.add("is-active");
    });

    [].forEach.call(projects, function (project) {
      var zoneList = (project.getAttribute("data-zones") || "").split(" ");
      if (zoneList.indexOf(zoneId) !== -1) {
        project.classList.add("is-active");
        var projectId = project.getAttribute("data-project");
        [].forEach.call(diagram.querySelectorAll('[data-project="' + projectId + '"]'), function (el) {
          el.classList.add("is-active");
        });
      }
    });
  }

  [].forEach.call(projects, function (project) {
    project.addEventListener("mouseenter", function () {
      activateProject(project.getAttribute("data-project"));
    });
    project.addEventListener("focus", function () {
      activateProject(project.getAttribute("data-project"));
    });
  });

  [].forEach.call(zones, function (zone) {
    zone.addEventListener("mouseenter", function () {
      activateZone(zone.getAttribute("data-zone"));
    });
  });

  diagram.addEventListener("mouseleave", clearActive);
  diagram.addEventListener("focusout", function (event) {
    if (!diagram.contains(event.relatedTarget)) clearActive();
  });
})();
