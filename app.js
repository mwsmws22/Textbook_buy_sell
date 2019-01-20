function hitTemplate(hit) {
  return `
    <div class="hit">
      <div class="hit-content">
        <h2>${hit._highlightResult.title.value}</h2>
        <p>${hit._highlightResult.instructor.value}, ${hit._highlightResult.term.value}</p>
      </div>
    </div>
  `;
}

const search = instantsearch({
  appId: "C2ZUSONNI6",
  apiKey: "ace8178d8d8f86f292f600e2e324e5fe",
  indexName: "EECS_courses",
});

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    hitsPerPage: 10,
    templates: {
      empty: "No results.",
      item: function(hit) {
        return hitTemplate(hit);
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for classes",
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.start();