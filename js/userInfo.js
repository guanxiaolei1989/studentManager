$(document).ready(function() {
    selectallUser();
});

function search() {
    selectallUser();
}

//编辑
function updated(event) {
    setVal("addorupdate", 1); //0添加/1修改
    /*  selectOneteacher.php*/
    /*var idd = $(event).parent().siblings()[0].innerText;*/
   var idd=$(event).attr("id");
   $("input[name='id']").val(idd);
   console.log($("input[name='id']").val());
    console.log($(event).attr("id"));
    $.ajax({
        url: bulicUrl + "selectOneClassify.php",
        data: {
            id: idd,
            classify: "teachers"
        },
        type: "POST",
        dataType: "text",
        success: function(data) {
            dta = JSON.parse(data)[0];
            console.log(dta);
            setVal("username", dta.username);
            setVal("userpwd", dta.userpwd);
            setVal("tname", dta.tname);
            setVal("tphone", dta.tphone);
            setVal("yhc", dta.yhc);
            setVal("idCard", dta.idCard);
            setVal("id", idd);
            setVal("salary", dta.salary);
            $("#scale").val(dta.scale);
            if (window.sessionStorage["scale"] == 1 || window.sessionStorage["scale"] == 4) {
                $("#scale").removeAttr("disabled");
            }

        }
    })
}

//管理员添加
function adduserInfo() {
    //清空内容
    setVal("addorupdate", "0");
    setVal("id", "");
    setVal("username", "");
    setVal("userpwd", "");
    setVal("tname", "");
    setVal("tphone", "");
    setVal("yhc", "");
    setVal("idCard", "");
    setVal("salary", "");
    $("#scale").val("3");
}

//保存insert
$("#save").click(function(event) {

    if ($("input[name='addorupdate']").val() == 0) { //添加
        $.ajax({
            url: "../../action/adduserInfo.php",
            data: {
                username: $("input[name='username']").val(),
                userpwd: $("input[name='userpwd']").val(),
                tname: $("input[name='tname']").val(),
                tphone: $("input[name='tphone']").val(),
                yhc: $("input[name='yhc']").val(),
                idCard: $("input[name='idCard']").val(),
                scale: $("select[name='scale']").val(),
                salary: $("input[name='salary']").val()
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
            	console.log(data);
                if (data == "1") {
                    alert("添加成功");
                    selectallUser();
                } else {
                    alert("添加失败!");
                }
            }
        })
    } else { //修改

        $.ajax({
            url: "../../action/updateuserInfo.php",
            data: {
                id: $("input[name='id']").val(), //修改谁
                username: $("input[name='username']").val(),
                userpwd: $("input[name='userpwd']").val(),
                tname: $("input[name='tname']").val(),
                tphone: $("input[name='tphone']").val(),
                yhc: $("input[name='yhc']").val(),
                idCard: $("input[name='idCard']").val(),
                scale: $("select[name='scale']").val(),
                salary: $("input[name='salary']").val()
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    alert("修改成功!");
                    selectallUser();
                } else {
                    alert("修改失败!");
                }
            }
        })
    }

})

//删除用户
function deleted(event) {

    var id = $(event).attr("id"); //拿到对应id

    if (confirm('是否删除ID为: ' + id + ' 的老师信息?')) {
        $.ajax({
            url: "../../action/deletedUser.php",
            data: { id: id },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    selectallUser();
                } else {
                    alert("删除失败!");
                }
            }
        })
    }
}

//查询所有用户
function selectallUser() {
    var searchText =
        $.ajax({
            url: "../../action/selectallUser.php",
            dataType: "json",
            type: "POST",
            data: {
                searchText: $("#searchText").val(),
                id: window.sessionStorage["userId"],
                scale: window.sessionStorage["scale"]
            },
            success: function(data) {
                if (data != null) {
                    var html = `<thead>
		        			<tr>
				                <td>序号</td>
				                <td>登录用户名</td>
				                <td style="display:none;">password</td>
				                <td>真实姓名</td>
				                <td>手机</td>
				                <td>级别</td>
				                <td>银行卡</td>
				                <td>身份证号</td>
				                <td>操作</td>
			                </tr>
		            	</thead>
		            	<tbody>`;

                    for (var i = 0; i < data.length; i++) {
                        var teachers = data[i];
                        var jibie;
                        if (teachers['scale'] == 1) {
                            jibie = "一级管理员";
                        } else if (teachers['scale'] == 2) {
                            jibie = "二级管理员";
                        } else if (teachers['scale'] == 3){
                            jibie = "三级管理员";
                        }else if (teachers['scale'] == 4){
                            jibie = "四级管理员";
                        }else if (teachers['scale'] == 5){
                            jibie = "五级管理员";
                        }
                        html += `<tr>
			            		<td>` + (i+1) + `</td>
			            		<td>` + teachers['username'] + `</td>
			            		<td style="display:none;">` + teachers['userpwd'] + `</td>
			            		<td>` + teachers['tname'] + `</td>
			            		<td>` + teachers['tphone'] + `</td>
			            		<td>` + jibie + `</td>
			            		<td>` + teachers['yhc'] + `</td>
			            		<td>` + teachers['idCard'] + `</td>
								<td id="admin"><button id="` + teachers['id'] + `" class='updated btn btn-info btn-mini' data-toggle='modal' href='#mymodal-link' onclick='updated(this);'>编辑</button> <button onclick='deleted(this);' id="` + teachers['id'] + `" class='deleted btn btn-danger btn-mini'>删除</button></td>
								<td style="display:none;">` + teachers['salary'] + `</td>
		            		</tr>`;
                    }
                    html += `</tbody>`;
                    $("#teachers").html(html);
                } else {
                    alert('无结果!');
                }
            },
        });
}