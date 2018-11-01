'use strict';

//----- Requires

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var dinoJson = require('./dinosaurs.json');
var curl = new (require( 'curl-request' ))();

//---- Variables

var app = express();
var allDinos = getAllDinos();

//---- Set up Express app

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//----- GET Routes

app.get('/api/dinosaurs', function(req, res) {
	res.json(allDinos);
});

app.get('/api/dinosaur/:id', function(req,res) {
	var id = req.params.id * 1;
	var thisDino = _.find(dinoJson, { id: id });
	res.json(thisDino);
});

//----- GET SerpApi

const agentHeader = 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';

// app.get('/api/read2/:url', function(req, res) {
// 	var url = req.params.url
// 		.replace(/\$/g, '\/')
// 		.replace(/\@/g, '\?')

//   console.log('Received: ', url)

// 	curl.setHeaders([
// 		agentHeader
// 	])
// 	.get(url)
// 	.then(({statusCode, body, headers}) => {
// 			res.json(body)
// 	})
// 	.catch((e) => {
// 			console.log('API - error')
// 			console.log(e);
// 	});

// });


//----- GET Google SRP

const googleUrl = 'https://www.google.com.vn/search?gl=vi&hl=vi&q='
var keyword = '';
var plainKeywork = '';

app.get('/api/read/:keyword', function(req, res) {
	keyword = req.params.keyword;
	plainKeywork = keyword.replace(/\+/g, ' ');

  console.log('Searching: ', googleUrl+keyword);

	curl.setHeaders([
		agentHeader
	])
	.get(googleUrl+keyword)
	.then(({statusCode, body, headers}) => {
			res
				.contentType('html')
				.send(
					addScripts(
						fixHtmlCharset(body)
					)
				)
	})
	.catch((e) => {
			console.log('API - error')
			console.log(e);
	});

});

function fixHtmlCharset(html){
	var parts = html.split('<head><meta', 2)

	if (parts.length < 2) return html

	return parts[0] + '<head><meta charset="UTF-8"><meta' + parts[1]
}

function addScripts(html) {
	var parts = html.split('</body>', 2)

	if (parts.length < 2) return html

	var newHtml = parts[0] 
		+ dragscrollScript() 
		+ highlightKeyword()
		+ '</body>' 
		+ parts[1];

	return addClassToBody(newHtml, 'dragscroll')
}

function dragscrollScript(){
	return '<script src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"></script> \
		<style> \
			body { \
				-webkit-touch-callout: none; /* iOS Safari */ \
				-webkit-user-select: none;   /* Chrome/Safari/Opera */ \
				-khtml-user-select: none;    /* Konqueror */ \
				-moz-user-select: none;      /* Firefox */ \
				-ms-user-select: none;       /* Internet Explorer/Edge*/ \
				 user-select: none; \
				 cursor: -webkit-grab; \
			} \
			#main { margin-left: -140px; } \
		</style> \
		<script> \
			document.addEventListener("click",prevenClicks,true); \
			function prevenClicks(e){ \
				e.stopPropagation(); \
				e.preventDefault(); \
			}\
		</script>';
}

function addClassToBody(html, className) {
	var parts = html.split('<body class="', 2)

	if (parts.length < 2) return html

	return parts[0] + '<body class="' + className + ' ' + parts[1]
}

function highlightKeyword() {
	return '<script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js"></script> \
		<script> \
			var instance = new Mark(document.querySelector("body")); \
			instance.mark("'+plainKeywork+'"); \
		</script>';
}

//---- Serve

app.listen(3001);
console.log('Listening on localhost:3001');

/**
 * Get all dinosaurs (abbreviated details)
 * [{ id: number, name: string }]
 * 
 * @returns {array}
 */
function getAllDinos() {
	return _.map(dinoJson, function(obj) {
		return {
			id: obj.id,
			name: obj.name
		};
	});
}