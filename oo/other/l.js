function MiU() {}
MiU.prototype = {
	locationInfo:{},sLocation:'',rd:'rd=',beacon:'/oo/other/m.gif?',
	go: function() {
		this.setLocationInfo();
		if (!(document.referrer == null || document.referrer == '')) {
			this.setReferInfo();
		}
		for(var key in this.locationInfo) {
			this.sLocation += key + '=' + encodeURIComponent(this.locationInfo[key]) + '&';
		}
		var img = new Image();
		this.rd += Math.random();
		img.src = this.beacon + this.sLocation + this.rd;
	},
	setLocationInfo: function() {
		this.locationInfo['host'] = document.location.hostname;
		this.locationInfo['path'] = document.location.pathname;
		if (!(document.location.search.substr(1) == null || document.location.search.substr(1) == '')){this.locationInfo['query'] = document.location.search.substr(1);}
	},
	setReferInfo: function() {
		var protocol = document.referrer.substr(0, (document.referrer.indexOf('://') + 3));
		var refer = document.referrer.substr(protocol.length, document.referrer.length);
		var refers = refer.split('/');
		var referHost = refers[0];
		this.locationInfo['rhost'] = referHost;
		this.locationInfo['rpath'] = refer.substr(this.locationInfo['rhost'].length, refer.length);
		if(refer.indexOf('?') != -1){
			var work = refer.split('?');
			rquery = work[1];
			params = rquery.split('&');
			for(var i = 0; i<params.length; i++){
				var pair = params[i];
				param = pair.split('=');
				if(param[0] == 'q' || param[0] == 'as_q' || param[0] == 'p' || param[0] == 'MT') sSearchWord = param[1].replace('+',' ');
			}
		}
	}
}
