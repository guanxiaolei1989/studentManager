/*查询*/
function search() {
    adminSelect();
}
search();
//确认缴费
function checkisPay(event) {
    /*if(confirm('是否为ID为：'+$(event).attr("id")+'的学生确认缴费？')){*/
    if (confirm('是否为' + $(event).attr("name") + '确认缴费？')) {
        $.ajax({
            url: bulicUrl + "checkisPay.php",
            data: {
                id: $(event).attr("id"),
                num: "2"
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {

                    alert('缴费成功');
                    adminSelect();
                } else {
                    alert("失败!");
                }
            }
        })
    }
}
/*确认报名*/
function isBao(event) {
    $.ajax({
        url: bulicUrl + "checkisPay.php",
        data: {
            id: $(event).attr("id"),
            num: "1"

        },
        type: "POST",
        dataType: "text",
        success: function(data) {
            console.log(data);
            if (data == "1") {
                alert('报名成功');
                adminSelect();
            } else {
                alert("失败!");
            }
        }
    })
}
//修改
function updated(event) {
    if (window.sessionStorage["scale"] == 1 || window.sessionStorage["scale"] == 4) {
        $('#tname').removeAttr("disabled");
    }

    setVal("addorupdate", 1); //0添加/1修改
    var idd = $(event).attr("id");

    $.ajax({
        url: bulicUrl + "tName.php",
        type: "POST",
        dataType: "text",
        success: function(data) {
            dta = JSON.parse(data);
            $("#tname option:selected").remove();
            dta.forEach(function(value, index) {
                $("<option value=" + value.id + ">" + value.tname + "</option>").appendTo("#tname");
            })
        }
    })
    $.ajax({
        url: bulicUrl + "selectOneClassify.php",
        data: {
            id: idd,
            classify: "students"
        },
        type: "POST",
        dataType: "text",
        success: function(data) {
            dta = JSON.parse(data)[0];
            setVal("id", dta.id);
            setVal("name", dta.name);
            setVal("phone", dta.phone);
            setVal("cardid", dta.cardid);
            setVal("mail", dta.mail);
            setVal("sosperson", dta.sosperson);
            setVal("sosphone", dta.sosphone);
            setVal("school", dta.school);
            setVal("major", dta.major);
            setVal("remarks", dta.remarks);
            setVal("money", dta.money);
            setVal("oweafee", dta.oweafee);
            $("#educationType").val(dta.educationType);

            // setVal("tname", dta.tname);
            // setVal("tname", 123);
            $("#tname option:selected").text(dta.tname);
            $("#tname option:selected").val(dta.tid);

            if (dta.ispay == 1) {
                if (window.sessionStorage["scale"] == 1) {

                } else {
                    $("input[name='money']").attr("disabled", "disabled");
                }

            } else {
                $("input[name='money']").removeAttr("disabled");
            }
        }
    })

}

//添加
function addstudentInfo() {
    $('#tname').attr("disabled", true);
    //清空内容
    setVal("addorupdate", "0");
    setVal("name", "");
    setVal("mail", "");
    setVal("phone", "");
    setVal("cardid", "");
    setVal("sosperson", "");
    setVal("sosphone", "");
    setVal("school", "");
    setVal("major", "");
    setVal("money", "0");
    setVal("remarks", "");
    setVal("oweafee", "0");
    $("#educationType").val("0");
    $("input[name='money']").removeAttr("disabled");
    $("#tname option:selected").text(window.sessionStorage["userName"]);
    $("#tname option:selected").val(window.sessionStorage["userId"]);
}
//保存insert
$("#save").click(function(event) {

    console.log($("#tname").find("option:selected").attr("value"));
    if ($("#educationType").val() < 1) {
        alert('请选择学历类别!');
        return;
    }
    var people = {
        tid: $("#tname").find("option:selected").attr("value"),
        educationType: $("#educationType").find("option:selected").attr("value"),
        school: $("input[name='school']").val(),
        major: $("input[name='major']").val(),
        name: $("input[name='name']").val(),
        phone: $("input[name='phone']").val(),
        cardid: $("input[name='cardid']").val(),
        mail: $("input[name='mail']").val(),
        sosperson: $("input[name='sosperson']").val(),
        sosphone: $("input[name='sosphone']").val(),
        remarks: $("input[name='remarks']").val(),
        money: $("input[name='money']").val(),
        oweafee: $("input[name='oweafee']").val(),
    };
    if ($("input[name='addorupdate']").val() == 0) { //添加
        people.ispay = 0;
        people.creattime = getTime();
        $.ajax({
            url: bulicUrl + "addInfo.php",
            data: people,
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    alert("添加成功");
                    search();
                    addstudentInfo()
                } else {
                    alert("添加失败!");
                }
            }
        })
    } else { //修改
        if ($("input[name='money']").attr("disabled") == "disabled") {
            people.ispay = 1;
        }
        people.creattime;
        people.id = $("input[name='id']").val();

        $.ajax({
            url: bulicUrl + "updated.php",
            data: people,
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    alert("修改成功!");
                    search();
                } else {
                    alert("修改失败!");
                }
            }
        })
    }

})

//删除
function deleted(event) {

    var id = $(event).attr("id"); //拿到对应id

    if (confirm('是否删除学号为: ' + id + ' 的学生信息?')) {
        $.ajax({
            url: bulicUrl + "deleted.php",
            data: {
                id: id
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    search();
                } else {
                    alert("删除失败!");
                }
            }
        })
    }
}
/*确认返费*/
function updatedisfun(event, num) {
    var id = $(event).attr("id"); //拿到对应id
    var num = num;
    var name = $(event).attr("name"); //拿到对应id
    var money = $(event).prev().val();
    if (confirm('是否为学号为: ' + id + ' 的学生信息添加返费?')) {
        $.ajax({
            url: bulicUrl + "updateIsFanMoney.php",
            data: {
                id: id,
                Refund: money,
                num: num
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    search();
                } else {
                    alert("发放失败!");
                }
            }
        })
    }
}

//查询
function adminSelect() {

    $.ajax({
        url: bulicUrl + "adminselectAll.php",
        dataType: "json",
        type: "POST",
        data: {
            searchName: $("#searchName").val(),
            searchCardid: $("#searchCardid").val(),
            searchTeacher: $("#searchTeacher").val(),
            searchSchool: $("#searchSchool").val(),
            ispay: $("#ispayL").val(),
            isBao: $("#isApply").val(),
            condition: window.sessionStorage["condition"],
            scale: window.sessionStorage["scale"],
            userid: window.sessionStorage["userId"]
        },
        success: function(data) {
            if (data != null) {

                var html = `<thead >
        			<tr>
        			    <td style="width:50px">序列</td>
		                <td style="display:none">Id</td>
		                <td style="width:36px">姓名</td>
		                <td style="width: 120px;">身份证号</td>
		                <td style="width:73px">手机</td>
		                <td style="width:48px" class="two2">报名老师</td>
		                <td>院校</td>
		                <td style="width:108px">专业</td>
		                <td style="width:60px">学历类型</td>
		                <td style="width:139px">录入时间</td>
		                <td style="width:108px">备注</td>
		                <td style="width:48px">是否缴费</td>
		                <td style="width:48px" class="two2">缴费金额</td>
		                <td style="width:48px" class="two2">欠费金额</td>
		                <td style="width:138px" class="two2 ">提成</td>
	            		<td style="width:79px" class="two2 two3 two5">提交资料</td>
	            		<td style="width:36px" class="two2 ">报名</td>
		                <td class="two2" style="width:100px">操作</td>
	                </tr>
            	</thead>
            	<tbody>`;
                var mko = 0;
                var monsy = 0;
                for (var i = 0; i < data.length; i++) {
                    var students = data[i];
                    var isRefund;
                    var red = "style='color:black;margin-top:5px;margin-left:5px'";
                    var refer = ""
                    if (students['ispay'] == 1) {
                        mko += (Number(students.money) - Number(students.Refund) - Number(students.oweafee));
                    }

                    if (students['isRefund'] == 1) {
                        isRefund = "已发放";
                        red = "style='color:red;margin-top:5px;margin-left:5px'"
                    } else {
                        isRefund = "未发放";
                        monsy = monsy + Number(students.Refund);
                    }

                    html += `<tr>
                        <td>` + (i + 1) + `<input type="checkbox" name="vehicle" value="` + students['id'] + `" style="vertical-align: text-bottom;margin-left: 3px;" /></td>
	            		<td style="display:none">` + students.id + `</td>
	            		<td>` + students['name'] + `</td>
	            		<td>` + students['cardid'] + `</td>
	            		<td>` + students['phone'] + `</td>
	            	
						<td class="two2">` + students['tname'] + `</td>
	            		<td>` + students['school'] + `</td>
	            		<td>` + students['major'] + `</td>
	            		<td>` + map1.get(students['educationType']) + `</td>
	            		
	            		<td>` + students['creattime'] + `</td>
	            		<td style="overflow:hidden;overflow-x:auto">` + students['remarks'] + `</td>
	            		<td ` + mapred(students['ispay']) + `>` + map2.get(students['ispay']) + `</td>
	            		<td class="two2">¥` + students['money'] + `</td>
	            		<td class="two2">¥` + students['oweafee'] + `</td>
	            		<td class="two2 " style="padding-top:10px;"><input value="` + students['Refund'] + `" style="width:50px" class="two3 two5"/><button onclick='updatedisfun(this,2);' name="` + students['name'] + `" id="` + students['id'] + `" class='deleted btn btn-danger btn-mini two3' style="margin-left:5px">确认</button><small ` + red + `>` + isRefund + `</small></td>
	            		<td class="two2 two3 two5" ` + mapred(students['isTi']) + `>` + map3.get(students['isTi']) + `<button id="` + students['id'] + `" class='updated btn btn-info btn-mini ' href='#mymodal-link' onclick='submitTi(this);' style="margin-left:5px">提交</button></td>
	            		<td class="two2 ">` + map4.get(students['isBao']) + `</td>
	            		<td style="overflow:inherit;" class="two2" id="admin">`;
                    if (window.sessionStorage["scale"] == 3 && students['ispay'] == 1 && students['isBao'] == 1) {
                        html += `已缴费报名不能操作`;
                    } else {
                        html += `<div class="dropdown">
						  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    操作
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a  class='dropdown-item   operate '>` + students['name'] + `</a><br>
						    <a  name="` + students['name'] + `" onclick='isBao(this);' id="` + students['id'] + `" class='dropdown-item  operate '>报名</a><br>`

                        if (window.sessionStorage["scale"] == 3 && students['ispay'] == 1) {

                        } else {
                            html += `<a   id="` + students.id + `" class='dropdown-item   operate ' data-toggle='modal' href='#mymodal-link' onclick='updated(this);'>修改</a><br>
						    <a  onclick='deleted(this);' id="` + students['id'] + `" class='dropdown-item    operate'>删除</a><br>`
                        }

                        html += `<a  name="` + students['name'] + `" onclick='checkisPay(this);' id="` + students['id'] + `" class='dropdown-item   operate  two3 two5'>缴费</a><br>
						    <a  onclick='updatedisfun(this,1);' id="` + students['id'] + `" class='dropdown-item   operate  two3 two5'>返费</a><br>
						    <a  class='dropdown-item  two3 two5  operate' onclick="openBillView(this);" >发票</a><br>
						  </div>
						</div>`
                    }
                    html += `</td>
			            		
            		</tr>`;

                }
                console.log(mko);
                html += `</tbody>`;
                $("#students").html(html);
                $("#studentsGon").html("代付提成  " + monsy);
                var clas = ""
                if (window.sessionStorage["scale"] == 1) {
                    /*管理员查询*/
                    $(".two1").css('display', 'none');
                } else if (window.sessionStorage["scale"] == 2) {
                    /*二级管理员查询*/
                    $(".two2").css('display', 'none');

                } else if (window.sessionStorage["scale"] == 3) {
                    /*三级管理员查询*/
                    $(".two3").css('display', 'none');

                } else if (window.sessionStorage["scale"] == 5) {
                    /*三级管理员查询*/
                    $(".two5").css('display', 'none');

                }
            } else {
                alert("无结果");

            }
        },
    });

}
/*提交资料给远大*/
function submitTi(event) {
    $.ajax({
        url: bulicUrl + "submitW.php",
        dataType: "json",
        type: "POST",
        data: {
            id: event.id
        },
        success: function(data) {
            if (data == 1) {
                alert("添加成功");
                search()
            } else {
                alert("未添加成功");
            }
        }
    })

}

//下拉联动
cities = new Object();
cities['牡丹江师范学院'] = new Array('汉语言文学', '物理学', '体育教育', '英语', '化学', '思想政治教育', '生物技术');
cities['温春农校'] = new Array('农产品营销', '春小麦栽培技术', '大豆栽培技术', '山特产品加工与检测技术', '玉米栽培技术', '数控车削加工', '大豆栽培技术', '春小麦栽培技术', '农产品营销', '山特产品加工与检测技术', '养蜂技术', '作物栽培技术', '国际贸易实务', '药用化学', '经济法', '药物制剂技术', '统计实用技术', '基础会计', '网络营销', '经济学基础', 'VB程序设计', '植物学');
cities['牡丹江商业技术职业学院'] = new Array('管理学基础', '商务礼仪', '经济法', '市场调查与预测', '企业财会基础', '市场营销', '商务谈判', '推销技术', '网络营销', '广告实务', '经济法', '营销策划');

function set_city(province, city) {
    var pv, cv;
    var i, ii;

    pv = province.value;
    cv = city.value;

    city.length = 1;

    if (pv == '0') return;
    if (typeof(cities[pv]) == 'undefined') return;

    for (i = 0; i < cities[pv].length; i++) {
        ii = i + 1;
        city.options[ii] = new Option();
        city.options[ii].text = cities[pv][i];
        city.options[ii].value = cities[pv][i];
    }

}

//打开发票视图
function openBillView(event) {

    window.sessionStorage.removeItem("name");
    window.sessionStorage.removeItem("tname");
    window.sessionStorage.removeItem("educationType");
    window.sessionStorage.removeItem("money");
    window.sessionStorage.setItem('name', $(event).parent().parent().parent().siblings()[2].innerText); //学生姓名
    window.sessionStorage.setItem('tname', $(event).parent().parent().parent().siblings()[5].innerText); //报名老师
    window.sessionStorage.setItem('educationType', $(event).parent().parent().parent().siblings()[8].innerText); //学历类型
    window.sessionStorage.setItem('money', toChinesNum($(event).parent().parent().parent().siblings()[12].innerText.substring(1))); //缴费金额

    window.open("bill.html", '打印发票', 'width=' + 800 + ',height=' + 600 + ',left=' + (window.screen.width - 800) / 2 + ',top=' + (window.screen.height - 600) / 2 + ',resizable=no,status=yes,toolbar=no,location=no,menubar=no,menu=yes,scrollbars=yes');
}

//完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。
function toChinesNum(num) {
    let changeNum = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; //changeNum[0] = "零"
    let unit = ["", "拾", "佰", "仟", "万"];
    num = parseInt(num);
    let getWan = (temp) => {
        let strArr = temp.toString().split("").reverse();
        let newNum = "";
        for (var i = 0; i < strArr.length; i++) {
            newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
        }
        return newNum;
    }
    let overWan = Math.floor(num / 10000);
    let noWan = num % 10000;
    if (noWan.toString().length < 4) noWan = "0" + noWan;
    return overWan ? getWan(overWan) + "万" + getWan(noWan) + '元整' : getWan(num) + '元整';

}