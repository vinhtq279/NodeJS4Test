const port = 65503, http = require("http"), httpStatus = require("http-status-codes"), app = http.createServer();

app.on("request", (req, res) => {
	if(routeResponseMap[req.url]){
		if (req.url == "/error"){
			res.writeHead(httpStatus.NOT_FOUND, {"Content-Type": "text/html"});
		};
		setTimeout(() => {res.end(routeResponseMap[req.url])},2000) ;
		console.log(`Method: ${getJSONString(req.method)}`);
		console.log(`URL: ${getJSONString(req.url)}`);
		console.log(`Headers: ${getJSONString(res.headers)}`);
	}else{
		setTimeout(() => {res.end("<h1>Welcome!</h1>")}, 2000);
		console.log(`Method: ${getJSONString(req.method)}`);
		console.log(`URL: ${getJSONString(req.url)}`);
		console.log(`Headers: ${getJSONString(res.headers)}`);
	}
	/**
	var body = [];
	req.on("data", (bodyData) => {body.push(bodyData);});
	req.on("end", () => {body = Buffer.concat(body).toString();
		console.log(`Request Body Contents: ${body}`);
	});
	console.log(`Method: ${getJSONString(req.method)}`);
	console.log(`URL: ${getJSONString(req.url)}`);
	console.log(`Headers: ${getJSONString(req.headers)}`);

	res.writeHead(httpStatus.OK, {"Content-Type": "text/html"});

	let responseMessage = "<h1>This will show on the screen</h1>";
	res.end(responseMessage);
	 */
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);


const getJSONString = obj => {
	return JSON.stringify(obj, null, 2);
};

const routeResponseMap = {
	"/info": "<h1>Info Page</h1>",
	"/contact": "<h1>Contact Us",
	"/about": "<h1>Learn More About Us",
	"/hello": "<h1>Say hello by emailing us here<h1>",
	"/error": "<h1>Sorry, the page you are looking for is not here.</h1>"
};

