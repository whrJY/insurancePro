function getActionUrl(action,parameters){
	var url = 'http://192.168.1.23:7001/admin/'+action+'?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",'+parameters+'}';
	return url
}


export default {getActionUrl} 