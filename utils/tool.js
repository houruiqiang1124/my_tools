const tool = {
    /**
     * 获取URL参数
     * @param {String} name 要查询的属性值
     */
    GetQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return "";
    },
    /**
     * 判断是否为微信
     */
    isWeixin: function() {
        return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
    },
    /**
     * 版本比较，返回Boolean
     * @param {String} ver1 版本1
     * @param {String} ver2 版本2
     */
    versionfunegt: function (ver1,ver2) {
        var isSatisfy =false; 
        var v1 = ver1;
        var v1Arr = ver1.split(".");
        var v2Arr = ver2.split(".");
        for(var i=0;i<v1Arr.length; i++) {
            if(Number(v1Arr[i]) > Number(v2Arr[i])) {
                isSatisfy = true;
                break;
            } else if(v1Arr[i] == v2Arr[i]) {
                isSatisfy = true;
                continue;
            } else {
                isSatisfy = false;
                break;
            }
            
        } 
        return isSatisfy
      
    },
    /**
     * 获取微信版本号
     */
    getWxVersion: function() {
        var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
        return wechatInfo[1]
    },
    /**
     * 获取当前所在平台
     */
    getPlatform: function() {
        return navigator.platform;
    },
    /**
     * 获取系统版本
     */
    getOsVersion: function() {
        var u = navigator.userAgent, version = ''
        if (u.indexOf('Mac OS X') > -1) {
            // ios
            var regStr_saf = /OS [\d._]*/gi
            var verinfo = u.match(regStr_saf)
            version = (verinfo + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
        } else if (u.indexOf('Android') > -1 ||
            u.indexOf('Linux') > -1) {
            // android
            version =  u.substr(u.indexOf('Android') + 8, u.indexOf(';', u.indexOf('Android')) - u.indexOf('Android') - 8)
        } else if (u.indexOf('BB10') > -1) {
            // 黑莓bb10系统
            version = 'blackberry' + u.substr(u.indexOf('BB10') + 5, u.indexOf(';', u.indexOf('BB10')) - u.indexOf('BB10') - 5)
        } else if (u.indexOf('IEMobile') > -1) {
            // windows phone
            version = 'winphone' + u.substr(u.indexOf('IEMobile') + 9, u.indexOf(';', u.indexOf('IEMobile')) - u.indexOf('IEMobile') - 9)
        } else {
            var userAgent = navigator.userAgent.toLowerCase()
            if (userAgent.indexOf('windows nt 5.0') > -1) {
            version = 'Windows 2000'
            } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
            version = 'Windows XP'
            } else if (userAgent.indexOf('windows nt 6.0') > -1) {
            version = 'Windows Vista'
            } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
            version = 'Windows 7'
            } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
            version = 'Windows 8'
            } else if (userAgent.indexOf('windows nt 6.3') > -1) {
            version = 'Windows 8.1'
            } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
            version = 'Windows 10'
            } else {
            version = 'Unknown'
            }
        }
        return version
    },
    /**
     * 手机验证
     * @param {String} mobile 手机号
     */
    checkMobile: function (mobile) {
        let reg = /^[1]([3-9])[0-9]{9}$/;
        return reg.test(mobile);
    },
    /**
     * 邮箱验证
     * @param {String} email email邮箱
     */
    checkEmail:function(email){
        let reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return reg.test(email);
    },
}