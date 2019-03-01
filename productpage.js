var url_string = window.location.href;
var url = new URL(url_string);
var course_id = url.searchParams.get("course_id");

// Hit function to display necessary innerHTML

function hitProduct(hit){
  return `
    <div class ="hit">
      <div class = "hit-content">
        <div class = "grid-item">
          <img class="grid-image" src= "textbook.jpg">
          <p><b>Textbook Name:</b> ${hit.textbook_name}</p>
          <p><b>Condition:</b> ${hit.condition}</p>
          <p><b>Price:</b> ${hit.cost}</p>
          <p><b>Seller:</b> ${hit.contact}</p>
        </div>
  `;
}
//Object retrieval operations
var client = algoliasearch('C2ZUSONNI6', 'ace8178d8d8f86f292f600e2e324e5fe');
var index = client.initIndex('Textbooks');

index.search({ query: course_id }).then(res => {
  const total = res.hits;
  for (i=0; i<total.length; i++){
    hitProduct(total[i]);
  }
});
