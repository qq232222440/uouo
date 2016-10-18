let createDate = ()=>{
		var CalendarData = new Array(100);
	    var madd = new Array(12);
	    var tgString = "甲乙丙丁戊己庚辛壬癸";
	    var dzString = "子丑寅卯辰巳午未申酉戌亥";
	    var numString = "一二三四五六七八九十";
	    var monString = "正二三四五六七八九十冬腊";
	    var weekString = "日,一,二,三,四,五,六";
	    var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
	    var cYear, cMonth, cDay, TheDate;
	    CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
	    madd[0] = 0;
	    madd[1] = 31;
	    madd[2] = 59;
	    madd[3] = 90;
	    madd[4] = 120;
	    madd[5] = 151;
	    madd[6] = 181;
	    madd[7] = 212;
	    madd[8] = 243;
	    madd[9] = 273;
	    madd[10] = 304;
	    madd[11] = 334;
	    function GetBit(m, n) {
	        return (m >> n) & 1;
	    }
	    function e2c() {
	        TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
	        var total, m, n, k;
	        var isEnd = false;
	        var tmp = TheDate.getYear();
	        if (tmp < 1900) {
	            tmp += 1900;
	        }
	        total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

	        if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
	            total++;
	        }
	        for (m = 0; ; m++) {
	            k = (CalendarData[m] < 0xfff) ? 11 : 12;
	            for (n = k; n >= 0; n--) {
	                if (total <= 29 + GetBit(CalendarData[m], n)) {
	                    isEnd = true; break;
	                }
	                total = total - 29 - GetBit(CalendarData[m], n);
	            }
	            if (isEnd) break;
	        }
	        cYear = 1921 + m;
	        cMonth = k - n + 1;
	        cDay = total;
	        if (k == 12) {
	            if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
	                cMonth = 1 - cMonth;
	            }
	            if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
	                cMonth--;
	            }
	        }
	    }

	    function GetcDateString() {
	        var tmp = "";
	     //   tmp += tgString.charAt((cYear - 4) % 10);
	      //  tmp += dzString.charAt((cYear - 4) % 12);
	      //  tmp += "(";
	      //  tmp += sx.charAt((cYear - 4) % 12);
	      //  tmp += ")年 ";
	        if (cMonth < 1) {
	            tmp += "(闰)";
	            tmp += monString.charAt(-cMonth - 1);
	        } else {
	            tmp += monString.charAt(cMonth - 1);
	        }
	        tmp += "月";
	        tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
	        if (cDay % 10 != 0 || cDay == 10) {
	            tmp += numString.charAt((cDay - 1) % 10);
	        }
	        return tmp;
	    }

	    function GetLunarDay(solarYear, solarMonth, solarDay) {
	        //solarYear = solarYear<1900?(1900+solarYear):solarYear;
	        if (solarYear < 1921 || solarYear > 2020) {
	            return "";
	        } else {
	            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
	            e2c(solarYear, solarMonth, solarDay);
	            return GetcDateString();
	        }
	    }

	    var LiChang = {
            getByClass: function (oPare, cla) {
                var oChild = oPare.getElementsByTagName("*");
                var arr = [];
                for (var i = 0; i < oChild.length; i++) {
                    var arrCla = oChild[i].className.split(" ");
                    var j;
                    for (var j in arrCla) {
                        if (arrCla[j] == cla) {
                            arr.push(oChild[i]);
                            break;
                        } 
                    } 
                } 
                return arr;
            } 
        }
        function showDate(option) {
            this.obj = document.getElementById(option.id);
        }
        showDate.prototype.init = function () {
            var _self = this;
            _self.dateText = LiChang.getByClass(_self.obj, "showDate")[0];
            _self.dateBox = LiChang.getByClass(_self.obj, "sel_date")[0];
            _self.yearBox = LiChang.getByClass(_self.obj, "year")[0];
            _self.mnBox = LiChang.getByClass(_self.obj, "month")[0];

            _self.dataTable = LiChang.getByClass(_self.dateBox, "data_table")[0];
            _self.tbody = _self.dataTable.tBodies[0];
            _self.td = _self.tbody.getElementsByTagName("td");
            _self.prevM = LiChang.getByClass(_self.dateBox, "prev_m")[0];
            _self.nextM = LiChang.getByClass(_self.dateBox, "next_m")[0];
            _self.prevY = LiChang.getByClass(_self.dateBox, "prev_y")[0];
            _self.nextY = LiChang.getByClass(_self.dateBox, "next_y")[0];

            //显示日历
            _self.dateText.onclick = function () {
                _self.changeDefault(this);
                _self.show();
                _self.showNow();
                //_self.dateText.blur();
            }

            //点击空白 隐藏日历
            document.onclick = function (event) {
                event = event || window.event;
                var Target = event.target || event.srcElement;
                _self.hide(event, Target, this);
            }
            //点击选择日期
            for (var i = 0; i < _self.td.length; i++) {
                _self.td[i].onclick = function () {
                    var newDd = this.innerHTML;
                    var newYear = parseInt(_self.yearBox.value, 10);
                    var newMn = parseInt(_self.mnBox.value, 10);
                    if (newDd.match(/^\s{0}$/g)) {  //如果td有值;
                        return false;
                    }
                    if (isNaN(newYear) || isNaN(newMn) || newYear < 1900 || newYear > 2099 || newMn < 1 || newMn > 12) {  //如果td有值;
                        //alert("请填写正确的年和月！"); 
                        return false; 
                    }
                    _self.dateText.innerHTML = newYear + "年" + newMn + "月" + newDd + "日";
                    _self.dateBox.className += " ";
                    _self.dateBox.className += "dn";
                } 
                _self.td[i].onmouseover = function () { 
                    if (this.className.indexOf("hove") == -1) {
                        this.className += " hover";
                    }
                }
                _self.td[i].onmouseout = function () {
                    this.className = this.className.replace("hover", "")
                }
            }
            //点击切换月份 
            _self.prevM.onclick = _self.nextM.onclick = function () {
                _self.changeMn(this);
                return this;
            }
            //点击切换年份 
            // _self.prevY.onclick = _self.nextY.onclick = function () {
            //     _self.changeYr(this);
            //     return this;
            // }
            _self.yearBox.onkeyup = _self.mnBox.onkeyup = function () {
                this.value = this.value.replace(/\D/g, "");
                var year = parseInt(_self.yearBox.value, 10);
                var month = parseInt(_self.mnBox.value, 10);
                if (!isNaN(year) && year <= 2099 && year >= 1900 && !isNaN(month) && month <= 12 && month >= 1) {
                    _self.showAllDay(year, month - 1);
                }
                if (this == _self.yearBox && year >= 1900 && year <= 2099) {
                    _self.mnBox.focus();
                } else if (this == _self.mnBox && (month < 1 || month > 12)) {
                    if (this.value.slice(0, 1) > 1) { //如果第一位大于1
                        this.value = this.value.slice(0, 1);
                    } else if (month > 12) { //
                        this.value = 12;
                    }
                    year = parseInt(_self.yearBox.value, 10);
                    month = parseInt(_self.mnBox.value, 10);
                    _self.showAllDay(year, month - 1);
                }
            }
            _self.yearBox.onblur = function () {
                var year = parseInt(this.value, 10);
                if (year < 1900 || year > 2099 || isNaN(year)) {
                    this.focus();
                    alert("请输入正确年份！");
                    this.value = "";
                }
            }
            _self.mnBox.onfocus = function () {
                var year = parseInt(_self.yearBox.value, 10);
                if (isNaN(year)) {
                    _self.yearBox.focus();
                }
            }
            _self.mnBox.onblur = function () {
                var month = parseInt(this.value, 10);
                var year = parseInt(_self.yearBox.value, 10);
                if (month < 1 || month > 12 || isNaN(month)) {
                    alert("请输入正确月份！");
                    this.value = "";
                }
            }
        }
        //点击切换月份
        showDate.prototype.changeMn = function (obj) {
            var _self = this;
            var NewMn = parseInt(_self.mnBox.value, 10);
            var newYear = parseInt(_self.yearBox.value, 10);
            if (isNaN(NewMn) || isNaN(newYear)) {
                alert("请填写正确的年和月！");
                return false;
            }
            if (obj == _self.nextM) {
                NewMn++;
            } else {
                NewMn--;
            }
            if (NewMn < 1) {
                NewMn = 12;
                newYear -= 1;
            } else if (NewMn > 12) {
                NewMn = 1;
                newYear += 1;
            }
            _self.mnBox.value = NewMn;
            _self.showNow(newYear, NewMn);
        }
        //点击切换年份
        showDate.prototype.changeYr = function (obj) {
            var _self = this;
            var NewMn = parseInt(_self.mnBox.value, 10);
            var newYear = parseInt(_self.yearBox.value, 10);
            if (isNaN(NewMn) || isNaN(newYear)) {
                alert("请填写正确的年和月！");
                return false;
            }
            if (obj == _self.nextY) {
                newYear++;
            } else {
                newYear--;
            } 
            if (newYear < 1900) {
                newYear = 1900;
            } else if (newYear > 2099) {
                newYear = 2099;
            }
            _self.mnBox.value = NewMn;
            _self.showNow(newYear, NewMn); 
        }
        //文本框 清空初始值
        showDate.prototype.changeDefault = function (obj) {
            var _self = this;
            var deVal = obj.innerHTML;
            var regExp = /^\s{0,}$/g;
            if (deVal == "") {
                obj.innerHTML = "";
                _self.showNow();
            } else if (deVal.match(regExp) === null && _self.dateBox.className.indexOf("dn") != -1) { //如果显示的是非空字符
                var dayArr = deVal.match(/[0-9]{1,4}/g);
                _self.showNow(dayArr[0], dayArr[1], dayArr[2]); //刷新日期
            }
        }
        //文本框 还原初始值
        showDate.prototype.changeDefault2 = function (obj) {
            var _self = this;
            var deVal = obj.innerHTML;
            if (deVal.match(/^\s{0}$/)) {
                obj.innerHTML = "";
            }
        }
        //显示日历
        showDate.prototype.show = function () {
            var _self = this;
            if (_self.dateBox.className.indexOf("dn") != -1) {
                var cls = _self.dateBox.className;
                _self.dateBox.className = cls.replace("dn", "");
            }
        }
        //隐藏日历
        showDate.prototype.hide = function (event, Target, obj) {
            var _self = this;
            var oPare = Target.parentNode;
            var isChild = true; //默认是子元素
            if (oPare == obj || Target == obj) {
                isChild = false;
            } else {
                loop: while (oPare != _self.obj) {
                    oPare = oPare.parentNode;
                    if (oPare == obj) {
                        isChild = false;
                        break loop;
                    }
                }
            }
            if (!isChild && _self.dateBox.className.indexOf("dn") == -1) {
                _self.dateBox.className += " ";
                _self.dateBox.className += "dn";
                _self.changeDefault2(_self.dateText);
            }

        }
        //填充年、月
        showDate.prototype.showNow = function (yr, mn, date) {
            var _self = this;
            var now = new Date();
            var year = yr || now.getFullYear();
            var month = mn - 1 || now.getMonth();
            var dd = date || now.getDate();
            //填充 年 和 月
            _self.yearBox.value = year;
            _self.mnBox.value = mn || now.getMonth() + 1;
            //填充日期
            _self.showAllDay(year, month, dd);
        }
        //填充当月的所有日期
        showDate.prototype.showAllDay = function (Yr, Mn, Dd) {

            var _self = this;
            var arr31 = [1, 3, 5, 7, 8, 10, 12];
            var is31 = true;
            var newDd = new Date();  //根据传入的数值生成新的日期
            Dd = Dd ? Dd : newDd.getDate();
            newDd.setFullYear(Yr, Mn, Dd);
            var year = newDd.getFullYear(),
                month = newDd.getMonth(),
                dd = newDd.getDate();

            var firstD = new Date();
            firstD.setFullYear(year, month, 1);
            var firstDay = firstD.getDay();

            var str31 = arr31.join(",");
            var regExp = eval("/" + (month + 1) + ",|," + (month + 1) + ",|," + (month + 1) + "/g");
            var dayLen = 31;
            //判断每个月有多少天
            if (str31.search(regExp) == -1) { 
                dayLen = 30;
            }
            //清空日期
            for (var i = 0; i < _self.td.length; i++) {
                _self.td[i].innerHTML = "";
                _self.td[i].className = _self.td[i].className.replace("active", "");
            }
            //如果有31天
            for (var j = 0; j < dayLen; j++) {
                _self.td[j + firstDay].innerHTML = j + 1;
                if (j + 1 == dd && _self.td[j + firstDay].className.indexOf("active") == -1) {
                    _self.td[j + firstDay].className += " ";
                    _self.td[j + firstDay].className += "active";
                }
            }
        }

	    //调用
	    var D = new Date();
	    var yy = D.getFullYear();   
	    var mm = D.getMonth() + 1;  
	    var dd = D.getDate();   
	    var ww = D.getDay(); 
	    var ss = parseInt(D.getTime() / 1000);    
	    if (yy < 100) yy = "19" + yy;  
	    function GetCNDate() {  
	        return GetLunarDay(yy, mm, dd);    
	    }  
        var d = '<p>'+mm+'月'+dd+'日 星期'+weekString.split(",")[ww]+'</p><p>农历 '+GetCNDate()+'</p>';   
        let uiDate = $(".ui-date");
        uiDate.html(d);
		var showDate1 = new showDate({ id: "data_box" }); 
		showDate1.init();
        let uiDateY = uiDate.offset().left-105;

        $(".data_box").css({"left":uiDateY+"px"})
		$(".yi-date").html('农历 '+GetCNDate())
	}
