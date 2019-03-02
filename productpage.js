var url_string = window.location.href;
var url = new URL(url_string);
var course_id = url.searchParams.get("course_id");

function hitProduct(hit){
  return `
	  <img class="grid-image" src= "book1.jpg">
	  <p><b>Textbook Name:</b> ${hit.textbook_name}</p>
	  <p><b>Price:</b> ${hit.cost}</p>
	  <p><b>Seller:</b> ${hit.contact}</p>
  `;
}

var client = algoliasearch('C2ZUSONNI6', 'ace8178d8d8f86f292f600e2e324e5fe');
var index = client.initIndex('Textbooks');
var indexClass = client.initIndex('EECS_courses');

var grid = document.getElementById("productGrid");
var title = document.getElementById("title");

indexClass.search({ query: course_id }).then(res => {
  title.innerHTML = res.hits[0].title;
});

index.search({ query: course_id }).then(res => {
  var hits = res.hits;
  console.log(hits);
  if (hits.length == 0){
    var emptyMessage = `<p><b>No textbooks for sale currently, check back soon!</b></p>`;
    var template = document.createElement('div');
    template.classList.add("grid-item");
    template.innerHTML = emptyMessage;
    grid.appendChild(template);
  }else{
    for (i=0; i<hits.length; i++) {
      var hit = hitProduct(hits[i]);
        var template = document.createElement('div');
        template.classList.add("grid-item");
        hit = hit.trim();
        template.innerHTML = hit;
        grid.appendChild(template);
    }
  }

});
