module.exports = 
{
	ChangeColorRequest(intensity, fade, color ,callback){
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
	  	const http = require('http');
		var options = {
		  hostname: '2601:282:80',
		  port: 80,
		  path: "/index.php?intensity=" + intensity + "&fade=" + fade + "&color=" + color + "&get=1",
		  method: 'GET',
		};

		var req = http.request(options, function(res) {
			
			var data = '';
			res.on('data', function(d) {
				data += d;
			});
		  
			res.on('end', function(){
				callback(data);
			});			
		});
		req.end();
		
		req.on('error', function(e) {
		  console.error(e);
		});  
	}
}
