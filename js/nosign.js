$(document).ready(function() {
	/*查询支出*/
	selectNg();
});

function searchs() {
	selectNg();
}
/*查询未报名信息*/
function selectNg() {
	$.ajax({
		url: bulicUrl + "nosign/adminNoSign.php",
		data: {
			searchName: $("#searchName").val(),
			searchTeacher: $("#searchTeacher").val(),
			scale: window.sessionStorage["scale"],
			userid: window.sessionStorage["userId"]
		},
		type: "POST",
		dataType: "text",
		success: function(data) {
			var datah = JSON.parse(data);
			console.log(datah);
			if(datah==null){
				$("#ouputTable").html("");
				return;
			}
			var html = `
		        <thead>
        			<tr>
        			    <td>序号</td>
		                <td>姓名</td>
		                <td>电话</td>
		                
		                <td>父母名称</td>
		                <td>父母电话</td>
		                <td>负责老师</td>
		                <td>现有身份</td>
		                <td>教育程度</td>
		                <td>家庭住址</td>
		                <td>备注</td>
		                <td>操作</td>
	                </tr>
            	</thead>
            	<tbody>`;
			for(var i = 0; i < datah.length; i++) {
				var datap = datah[i];
				html += `<tr>
				                    <td>` + (i+1) + `</td>
				            		<td>` + datap['name'] + `</td>
				            		<td>` + datap['iphone'] + `</td>
				            		<td >` + datap['parentName'] + `</td>
				            		<td >` + datap['parentIphone'] + `</td>
				            		<td >` + datap['tname'] + `</td>
				            		<td >` +  kind.get(datap['kind'])+ `</td>
				            		<td>` +  education.get(datap['education'])+ `</td>
				            		<td >` + datap['home'] + `</td>
				            		<td >` + datap['remarks'] + `</td>
				            		<td >
				            		<button  id="` + datap['id'] + `"  class='updated btn btn-info btn-mini' data-toggle='modal'   href='#mymodal-link' onclick='ratifyd(this);'>编辑</button>
				            		<button  id="` + datap['id'] + `"  class='updated btn btn-info btn-mini' href='#mymodal-link' onclick='delects(this);'>删除</button>
				            		</td>
		            		</tr>`;

			}
			html += `</tbody>`;
			$("#ouputTable").html(html);

		}
	})
}
/*添加按钮*/
function addBU() {
	$("input[name='addorupdate']").attr("value", 0); //0添加/1修改
	nullLays();
}
/*添加信息*/
function addinputInsert() {
	if($("#education").val() == -1) {
		alert("请选择教育程度？");
		return;
	}
	if($("#kind").val() == -1) {
		alert("请选择种类？");
		return;
	}
	if($("input[name='addorupdate']").val() == 0) {
		//添加
		$("input[name='time']").attr("value", getTime());
		$.ajax({
			url: bulicUrl + "nosign/addStudent.php",
			data: {

				name: $("input[name='name']").val(),
				iphone: $("input[name='iphone']").val(),
				education: $("#education").val(),
				parentName: $("input[name='parentName']").val(),
				parentIphone: $("input[name='parentIphone']").val(),
				kind: $("#kind").val(),
				tid: window.sessionStorage["userId"],
				tname: window.sessionStorage["userName"],
				remarks: $("#remarks").val(),
				home: $("input[name='home']").val(),
				time: getTime()
			},
			type: "POST",
			dataType: "text",
			success: function(data) {
				if(data == 1) {
					nullLays();
					alert("添加成功");
					/*查询支出*/
					searchs();

				} else {
					alert("添加失败")
				}
			}
		})
	} else {
		/*修改*/
		
		$.ajax({
			url: bulicUrl + "nosign/addStudent.php",
			data: {
				id:$("input[name='id']").val(),
				name: $("input[name='name']").val(),
				iphone: $("input[name='iphone']").val(),
				education: $("#education").val(),
				parentName: $("input[name='parentName']").val(),
				parentIphone: $("input[name='parentIphone']").val(),
				kind: $("#kind").val(),
				tid: window.sessionStorage["userId"],
				tname: window.sessionStorage["userName"],
				remarks: $("#remarks").val(),
				home: $("input[name='home']").val(),
				
			},
			type: "POST",
			dataType: "text",
			success: function(data) {
				console.log(data);
				if(data == 1) {
					nullLays();
					alert("修改成功");
					/*查询支出*/
					searchs();
				} else {
					alert("修改失败")
				}
			}
		})

	}

}
/*清空*/
function nullLays() {
	setVal("name", "");
	setVal("iphone", "");
	setVal("parentName", "");
	setVal("parentIphone", "");
	setVal("home", "");
	$("#remarks").val("");
	$("#education").val("-1");
	$("#kind").val("-1");
	/*setVal("id","0");*/
}
/*编辑*/
function ratifyd(event) {

	/*设置编辑*/
	$("input[name='addorupdate']").attr("value", 1);
	var idd = $(event).attr("id");
	$("input[name='id']").val(idd);
	var dta;
	$.ajax({
		url: bulicUrl + "selectOneClassify.php",
		data: {
			id: idd,
			classify: "nosign"
		},
		type: "POST",
		dataType: "text",
		success: function(data) {
			dta = JSON.parse(data)[0];
			console.log(dta);
			setVal("name", dta.name);
			setVal("iphone", dta.iphone);
			setVal("parentIphone", dta.parentIphone);
			setVal("parentName", dta.parentName);
			setVal("home", dta.home);
			$("#kind").val(dta.kind);
			$("#education").val(dta.education);
			$("#remarks").val(dta.remarks);

		}
	})
}
/*{删除}*/
function delects(event) {
	if(confirm('确定删除此人信息?')) {
		$.ajax({
			url: bulicUrl + "nosign/delNoSign.php",
			data: {
				id: $(event).attr("id")
			},
			type: "POST",
			dataType: "text",
			success: function(data) {
				if(data == 1) {
					alert("删除成功");
					/*查询支出*/
					searchs();
				} else {
					alert("删除失败")
				}
			}
		})
	}
}