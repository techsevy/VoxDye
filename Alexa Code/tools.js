module.exports = 
{
	ChangeColorRequest(intensity, fade, color ,callback){
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
	  	const https = require('https');
		var options = {
		  hostname: '10.0.0.1',
		  port: 80,
		  path: "/index.php?intensity=" + intensity + "&fade=" + fade + "&color=" + color + "&get=1",
		  method: 'GET',
		};

		var req = https.request(options, function(res) {
			
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
