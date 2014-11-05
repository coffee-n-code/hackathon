var fit_image = function(img) {
	var img_w = img.width;
	var img_h = img.height;
	
	if (!img_w) {
		setTimeout(fit_image.bind(this, img), 1000);
		return;
	}
	
	var w = img.parentNode.clientWidth;
	var h = img.parentNode.clientHeight;
	var parent_ratio = w / h;
	
	var img_ratio = img_w / img_h;
	
	if (img_ratio > parent_ratio) {
		var scale = h / img_h;
		img_h *= scale;
		img_w *= scale;
		img.style.height = Math.round(img_h) + 'px';
	} else {
		var scale = w / img_w;
		img_h *= scale;
		img_w *= scale;
		img.style.width = Math.round(img_w) + 'px';
	}
	
	img.style.top = ((h - img_h) / 2) + 'px';
	img.style.left = ((w - img_w) / 2) + 'px';
}.bind(this);

var fit_images = function() {
	var images = document.getElementsByTagName('img');
	for (var i = 0, l = images.length; i < l; i++) {
		var img = images[i];
		var parent_tag = img.parentNode.tagName.toLowerCase();
		if (parent_tag === 'h2' || parent_tag === 'h1')
			fit_image(img);
	}
};

var override_tags = function() {
	var tags = document.getElementsByTagName('a');
	/*
		TO IMPLEMENT:
			
			We should have an animation which scrolls the page
			quickly towards the appropriate link within the page.
			
			This requires knowing some coordinates... which MAY
			be tricky.  HOWEVER, I have some code for that somewhere.
	*/
};

window.addEventListener('resize', fit_images, false);
fit_images();
override_tags();