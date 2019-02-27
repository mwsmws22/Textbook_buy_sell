var url_string = window.location.href; 
var url = new URL(url_string);
var course_id = url.searchParams.get("course_id");

//Object retrieval operations
var client = algoliasearch('C2ZUSONNI6', 'ace8178d8d8f86f292f600e2e324e5fe');
var index = client.initIndex('Textbooks');

index.search({ query: course_id }).then(res => {
  console.log(res);
});

console.log(course_id);