var client = algoliasearch('C2ZUSONNI6', '175bcd12d4a450b773d484e3a8f039dc');
var index = client.initIndex('Textbooks');

function saveText(text, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}

const isValidElement = element => {
	return element.name && element.value;
};

hashCode = function(s) {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  if (h <= 0) {
  	h = h * -1;
  }
  return h;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
	if (isValidElement(element)) {
		data[element.name] = element.value;
	}
	return data;
}, {});

const handleFormSubmit = event => {
  	event.preventDefault();
  	const content = formToJSON(form.elements);
  	var sig = hashCode(JSON.stringify(content));
  	content.objectID = sig;
    index.addObject(content);
    form.reset();
};

const form = document.getElementsByClassName('list-page')[0];
form.addEventListener('submit', handleFormSubmit);
