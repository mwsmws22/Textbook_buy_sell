
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
  	console.log(sig);
  	const content_list = [];
  	content_list.push(content);
	saveText(JSON.stringify(content_list, null), "content.json");
  	//textContent = JSON.stringify(content, null, "  ");
  	//console.log(textContent)
};

const form = document.getElementsByClassName('list-page')[0];
console.log(form);
form.addEventListener('submit', handleFormSubmit);
