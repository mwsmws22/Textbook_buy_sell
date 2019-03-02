function hitTemplate(hit) {
  return `
    <div class="hit">
      <div class="hit-content">
        <div onclick="getPage(${hit.course_id})">
          <h4>${hit._highlightResult.title.value}</h4>
          <p>${hit._highlightResult.instructor.value}, ${hit._highlightResult.term.value}</p>
        </div>
      </div>
    </div>
  `;
}

var currentHits = [];

function wipeCurrentHits(event) {
  var x = event.which || event.keyCode;
  if (x != 13) {
    currentHits = [];
  }
}

function enterEvent(event) {
  var x = event.which || event.keyCode;
  if (currentHits) {
    if (x == 13) {
      getPage(currentHits[0].course_id)
    }
  }
}

function getPage(id){
  window.location.href = './productpage.html?course_id=' + id;
}

const search = instantsearch({
  appId: "C2ZUSONNI6",
  apiKey: "ace8178d8d8f86f292f600e2e324e5fe",
  indexName: "EECS_courses",
  searchFunction: function(helper) {
    if (helper.state.query === '') {
      document.querySelector('#hits').innerHTML = '';
      return;
    }
    helper.search();
  }
});

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 10,
    templates: {
      empty: "No results.",
      item: function(hit) {
        currentHits.push(hit);
        return hitTemplate(hit);
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "SEARCH FOR CLASSES",
    autofocus: false
  })
);

search.start();
