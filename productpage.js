var url_string = window.location.href;
var url = new URL(url_string);
var course_id = url.searchParams.get("course_id");

function hitProduct(hit){
  return `
	  <img class="grid-image" src= "textbook.jpg">
	  <p><b>Textbook Name:</b> ${hit.textbook_name}</p>
	  <p><b>Condition:</b> ${hit.condition}</p>
	  <p><b>Price:</b> ${hit.cost}</p>
	  <p><b>Seller:</b> ${hit.contact}</p>
  `;
}

var client = algoliasearch('C2ZUSONNI6', 'ace8178d8d8f86f292f600e2e324e5fe');
var index = client.initIndex('Textbooks');

var grid = document.getElementById("productGrid");

index.search({ query: course_id }).then(res => {
  var hits = res.hits;

  for (i=0; i<hits.length; i++) {
	var hit = hitProduct(hits[i]);
  	var template = document.createElement('div');
  	template.classList.add("grid-item");
	hit = hit.trim(); 
  	template.innerHTML = hit;
  	grid.appendChild(template);
  }
});