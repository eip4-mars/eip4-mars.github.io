function openPage(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function uploadAndClassifyImage(model) {
	var fileInput = document.getElementById('FileUpload').files; 
	if (!fileInput.length) {
	return alert('Please choose a file to upload first.')};
	
	switch(model){
		case 'resnet':
			var endPointUrl = 'https://ell7ii8jq4.execute-api.ap-south-1.amazonaws.com/dev/classify';
			break;
		case 'custom':
			var endPointUrl = 'https://wmbnuq57u2.execute-api.ap-south-1.amazonaws.com/dev/classify';
			break;
		default:
			var endPointUrl = 'https://ell7ii8jq4.execute-api.ap-south-1.amazonaws.com/dev/classify';
	}

	var file = fileInput[0]; 
	var filename= file.name

	var formData = new FormData(); 
	formData.append(filename, file);

	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);

	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
	.done(function (response) {
		console.log(response);
		var obj = JSON.parse(response)
		console.log(obj.label)
		console.log(obj.predicted)
		document.getElementById('pred').innerHTML = "Prediction : </br></br> <u>Input Image</u>";
		document.getElementById("inputImageClassify").src = window.URL.createObjectURL(file);
		document.getElementById('class').textContent = "Predicted class : "+obj.predicted;
		document.getElementById('label').textContent = "Prediction Label : "+obj.label;
	})
	.fail(function() {alert ("There was an error while sending prediction request."); });
};


function alignFace() {
	var fileInput = document.getElementById('alignFileUpload').files; 
	if (!fileInput.length) {
	return alert('Please choose a file to upload first.')};
	
	var endPointUrl = 'https://5oaxa974n2.execute-api.ap-south-1.amazonaws.com/dev/alignFace';

	var file = fileInput[0]; 
	var filename= file.name

	var formData = new FormData(); 
	formData.append(filename, file);
	
	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);
	
	// Clear Output
	document.getElementById("alignedImage").innerHTML = "";
	document.getElementById("forwardArrow").innerHTML = "";
	document.getElementById("inputImage").src = "";

	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
	.done(function (response, statusText, xhr) {
		console.log(response);
		console.log(statusText);
		console.log(xhr.status);
		var obj = JSON.parse(response)
		switch(xhr.status){
			case 200:
				var b64Image = obj.aligned;
				var binImage = atob(b64Image);
				var elem = document.createElement("img");
				elem.style.width = "300px";
				elem.style.height = "300px";
				elem.src = "data:image/jpg;base64,"+b64Image;
				document.getElementById("inputImage").src = window.URL.createObjectURL(file) ;
				document.getElementById("forwardArrow").innerHTML = "</br></br></br>   &#8658";
				document.getElementById("alignedImage").append(elem);
				break;
			
			case 202:
				document.getElementById("alignedImage").innerHTML = obj.error;
				break;
		}
	})
	.fail(function() {alert ("There was an error while sending prediction request."); });
};

function fr(){
    var fileInput = document.getElementById('frFileUpload').files; 
	if (!fileInput.length) {
	return alert('Please choose a file to upload first.')};
	
	var endPointUrl = 'https://0i59uu84a8.execute-api.ap-south-1.amazonaws.com/dev/face_rec1';

	var file = fileInput[0]; 
	var filename= file.name

	var formData = new FormData(); 
	formData.append(filename, file);
	
	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);
	
    // Clear Output
	document.getElementById("frInputImage").innerHTML = "";
	document.getElementById("frPred").innerHTML = "";
	
    
	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
	.done(function (response, statusText, xhr) {
		console.log(response);
		console.log(statusText);
		console.log(xhr.status);
		var obj = JSON.parse(response)
		switch(xhr.status){
			case 200:
				document.getElementById("frInputImage").src = window.URL.createObjectURL(file) ;
				if (obj.status == "Predicted"){
					document.getElementById("frPred").innerHTML = "</br></br>Predicted : "+ obj.label;
				}
				else{
					document.getElementById("frPred").innerHTML = "</br></br>"+ obj.status;
				}
				break;
			
			case 202:
				document.getElementById("frPred").innerHTML = obj.error;
				break;
		}
	})
	.fail(function() {alert ("There was an error while sending prediction request."); });
}

function hpe() {
	var fileInput = document.getElementById('hpeFileUpload').files; 
	if (!fileInput.length) {
	return alert('Please choose a file to upload first.')};
	
	var endPointUrl = 'https://sejszmh528.execute-api.ap-south-1.amazonaws.com/dev/hpeLine';

	var file = fileInput[0]; 
	var filename= file.name

	var formData = new FormData(); 
	formData.append(filename, file);
	
	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);
	
	// Clear Output
	document.getElementById("hpeOutputImage").innerHTML = "";
	document.getElementById("hpeForwardArrow").innerHTML = "";
	document.getElementById("hpeInputImage").src = "";

	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
	.done(function (response, statusText, xhr) {
		console.log(response);
		console.log(statusText);
		console.log(xhr.status);
		var obj = JSON.parse(response)
		switch(xhr.status){
			case 200:
				var b64Image = obj.aligned;
				var binImage = atob(b64Image);
				var elem = document.createElement("img");
				// elem.style.width = "400px";
				elem.style.height = "400px";
				elem.src = "data:image/jpg;base64,"+b64Image;
				document.getElementById("hpeInputImage").src = window.URL.createObjectURL(file) ;
				document.getElementById("hpeForwardArrow").innerHTML = "</br></br></br>   &#8658";
				document.getElementById("hpeOutputImage").append(elem);
				break;
			
			case 202:
				document.getElementById("hpeOutputImage").innerHTML = obj.error;
				break;
		}
	})
	.fail(function() {alert ("There was an error while sending Pose Estimation request."); });
};

function gan() {
	
	var endPointUrl = 'https://gfz5a72nvh.execute-api.ap-south-1.amazonaws.com/dev/carGan';

		
	// Clear Output
	document.getElementById("ganFixedText").innerHTML = "";
	document.getElementById("ganOutImage").innerHTML = "";
	
	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		// data: formData,
		processData: false, 
		contentType: false, 
		// mimeType: "multipart/form-data",
	})
	.done(function (response, statusText, xhr) {
		console.log(JSON.stringify(response))
		// console.log(statusText);
		// console.log(xhr.status);
		var obj = JSON.parse(JSON.stringify(response))
		switch(xhr.status){
			case 200:
				var b64Image = obj.aligned;
				var binImage = atob(b64Image);
				var elem = document.createElement("img");
				
				elem.style.height = "200px";
				elem.src = "data:image/jpg;base64,"+b64Image;
				document.getElementById("ganFixedText").innerHTML = "Random Generated Car Image";
				document.getElementById("ganOutImage").append(elem) ;
				
				break;
			
			case 202:
				document.getElementById("ganOutImage").innerHTML = obj.error;
				break;
		}
	})
	.fail(function() {alert ("There was an error while sending Pose Estimation request."); });
};


function srgan() {
	var fileInput = document.getElementById('srganFileUpload').files; 
	if (!fileInput.length) {
	return alert('Please choose a file to upload first.')};
	
	var endPointUrl = 'https://1rpqxivq4k.execute-api.ap-south-1.amazonaws.com/dev/superRes';

	var file = fileInput[0]; 
	var filename= file.name

	var formData = new FormData(); 
	formData.append(filename, file);
	
	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);
	
	// Clear Output
	document.getElementById("srganOutputImage").innerHTML = "";
	document.getElementById("srganForwardArrow").innerHTML = "";
	document.getElementById("srganInputImage").src = "";

	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
	.done(function (response, statusText, xhr) {
		console.log(response);
		console.log(statusText);
		console.log(xhr.status);
		var obj = JSON.parse(response)
		switch(xhr.status){
			case 200:
				var b64Image = obj.sr;
				var binImage = atob(b64Image);
				var elem = document.createElement("img");
				// elem.style.width = "400px";
				elem.style.height = "400px";
				elem.src = "data:image/jpg;base64,"+b64Image;
				document.getElementById("srganInputImage").src = window.URL.createObjectURL(file) ;
				document.getElementById("srganForwardArrow").innerHTML = "</br></br></br>   &#8658";
				document.getElementById("srganOutputImage").append(elem);
				break;
			
			case 202:
				document.getElementById("srganOutputImage").innerHTML = obj.error;
				break;
		}
	})
	.fail(function() {alert ("There was an error while sending Super Resolution request."); });
};



function warmUpLambda(model) {
	var fileInput = NaN
	switch(model){
		case 'resnet':
			var endPointUrl = 'https://ell7ii8jq4.execute-api.ap-south-1.amazonaws.com/dev/classify';
			break;
		case 'custom':
			var endPointUrl = 'https://wmbnuq57u2.execute-api.ap-south-1.amazonaws.com/dev/classify';
			break;
		case 'align':
			var endPointUrl = 'https://5oaxa974n2.execute-api.ap-south-1.amazonaws.com/dev/alignFace';
			break;
		case 'fr':
			var endPointUrl = 'https://0i59uu84a8.execute-api.ap-south-1.amazonaws.com/dev/face_rec1';
			break;
		case 'hpe':
			var endPointUrl = 'https://sejszmh528.execute-api.ap-south-1.amazonaws.com/dev/hpeLine';
			break;
		case 'hpe':
			var endPointUrl = 'https://gfz5a72nvh.execute-api.ap-south-1.amazonaws.com/dev/carGan';
			break;
		case 'srgan':
			var endPointUrl = 'https://1rpqxivq4k.execute-api.ap-south-1.amazonaws.com/dev/superRes';
			break;
		default:
			var endPointUrl = 'https://ell7ii8jq4.execute-api.ap-south-1.amazonaws.com/dev/classify';
	}

	var file = NaN; 
	var filename= NaN

	var formData = new FormData(); 
	formData.append(filename, file);

	console.log(filename);
	console.log(endPointUrl);
	console.log(formData);

	$.ajax({
		async: true,
		CrossDomain: true, 
		method: 'POST',
		url: endPointUrl, 
		data: formData,
		processData: false, 
		contentType: false, 
		mimeType: "multipart/form-data",
	})
};

function callback(page){
	if (page == 'classify'){
		document.getElementById('up').innerHTML="Lambda should be up now"
		document.getElementById('preNum').innerHTML = ""
		document.getElementById('countdown').innerHTML = ""
		document.getElementById('postNum').innerHTML = ""
	}
	else if (page == 'align'){
		document.getElementById('up1').innerHTML="Lambda should be up now"
		document.getElementById('preNum1').innerHTML = ""
		document.getElementById('countdown1').innerHTML = ""
		document.getElementById('postNum1').innerHTML = ""
	}
	else if (page == 'fr'){
		document.getElementById('up2').innerHTML="Lambda should be up now"
		document.getElementById('preNum2').innerHTML = ""
		document.getElementById('countdown2').innerHTML = ""
		document.getElementById('postNum2').innerHTML = ""
	}
	else if (page == 'hpe'){
		document.getElementById('up3').innerHTML="Lambda should be up now"
		document.getElementById('preNum3').innerHTML = ""
		document.getElementById('countdown3').innerHTML = ""
		document.getElementById('postNum3').innerHTML = ""
	}
	else if (page == 'gan'){
		document.getElementById('up4').innerHTML="Lambda should be up now"
		document.getElementById('preNum4').innerHTML = ""
		document.getElementById('countdown4').innerHTML = ""
		document.getElementById('postNum4').innerHTML = ""
	}
	else if (page == 'srgan'){
		document.getElementById('up5').innerHTML="Lambda should be up now"
		document.getElementById('preNum5').innerHTML = ""
		document.getElementById('countdown5').innerHTML = ""
		document.getElementById('postNum5').innerHTML = ""
	}
}
async function warmupX(page){
	if (page == 'classify'){
		var elemID = 'countdown'
		await Promise.all([warmUpLambda('resnet'), warmUpLambda('custom')]);
		document.getElementById('load').innerHTML = ""
		document.getElementById('preNum').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum').innerHTML = "&nbsp Seconds .."
		document.getElementById('up').innerHTML=""
		
	}
	else if (page == 'align'){
		var elemID = 'countdown1'
		await Promise.all([warmUpLambda('align')]);
		document.getElementById('load1').innerHTML = ""
		document.getElementById('preNum1').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum1').innerHTML = "&nbsp Seconds .."
		document.getElementById('up1').innerHTML=""
	}
	else if (page == 'fr'){
		var elemID = 'countdown2'
		await Promise.all([warmUpLambda('align'), warmUpLambda('fr')]);
		document.getElementById('load2').innerHTML = ""
		document.getElementById('preNum2').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum2').innerHTML = "&nbsp Seconds .."
		document.getElementById('up2').innerHTML=""
	}
	else if (page == 'hpe'){
		var elemID = 'countdown3'
		await Promise.all([warmUpLambda('hpe')]);
		document.getElementById('load3').innerHTML = ""
		document.getElementById('preNum3').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum3').innerHTML = "&nbsp Seconds .."
		document.getElementById('up3').innerHTML=""
	}
	else if (page == 'gan'){
		var elemID = 'countdown4'
		await Promise.all([warmUpLambda('gan')]);
		document.getElementById('load4').innerHTML = ""
		document.getElementById('preNum4').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum4').innerHTML = "&nbsp Seconds .."
		document.getElementById('up4').innerHTML=""
	}
	else if (page == 'srgan'){
		var elemID = 'countdown5'
		await Promise.all([warmUpLambda('srgan')]);
		document.getElementById('load5').innerHTML = ""
		document.getElementById('preNum5').innerHTML = "Warming up Lambda. Please wait &nbsp"
		document.getElementById(elemID).innerHTML = 40
		document.getElementById('postNum5').innerHTML = "&nbsp Seconds .."
		document.getElementById('up5').innerHTML=""
	}
	
    console.log(elemID)
    console.log(page)
    function decrease_count(){
        var div = document.getElementById(elemID);
        if( --div.innerHTML == 0 ) {
            clearInterval(timer)
            callback(page);
        }
    }
    var timer = setInterval(decrease_count, 1000);
}