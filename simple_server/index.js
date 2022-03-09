const port = 65503, 
	http = require("http"), 
	httpStatus = require("http-status-codes"), 
	app = http.createServer((request, response) => {
		console.log("Received an incoming request!");
		console.log(request.method);
		console.log(request.url);
		console.log(request.headers);
		response.writeHead(httpStatus.OK, {"Content-Type": "text/html"});
		let responseMessage = "<h1>Hello, Universe!</h1>";
		response.write(responseMessage);
		response.end();
		console.log(`Sent a response : ${responseMessage}`);
	});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

const getJSONString = obj => {
	return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res) => {
	var body = [];
	req.on("data", (bodyData) => {
		body.push(bodyData);
	});

}
