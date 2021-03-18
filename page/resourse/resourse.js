
/*企业页面*/
/*添加信息*/
function saveCorporation() {

	var companyName = getVal("companyName")
	var contactsIphone = getVal("contactsIphone")
	var contacts = getVal("contacts")
	var remarks = getVal("remarks")
	var addorupdate = getVal("addorupdate");
	var shenfenType = $("#shenfenType").val();
	var id = getVal("id");
	if(companyName == "") {
		alert("不能输入空的数据，请填写完整");
		return;
	}
	/*0是添加*/
	/*1是编辑*/
	$.ajax({
		url: bulicUrl + "resourse/addCos.php",
		data: {
			companyName: companyName,
			contactsIphone: contactsIphone,
			contacts: contacts,
			remarks: remarks,
			addorupdate: addorupdate,
			shenfenType:shenfenType,
			id: id
		},
		type: "GET",
		dataType: "text",
		success: function(data) {
			if(data = 1) {
				if(addorupdate==0){
					alert("添加成功");
				}
				else{
					alert("修改成功");
				}
				$("#selectbyCondition").click();
				clearData();
			}
		}
	})

}
/*点击添加公司*/
function addCos() {
	setVal("addorupdate", 0); //0添加/1修改
}
/*查询*/
function searchq(){
	$.ajax({
		url: bulicUrl + "resourse/selectreSource.php",
		data: {
			resource:"resource"
		},
		type: "GET",
		dataType: "text",
		success: function(data) {
			/*{"Id":"1","companyName":"123","contactsIphone":"","contacts":"","remarks":""}*/
			console.log(data)
		}
	})
}
/*清除*/
function clearData(){
	setVal("companyName",""); 
	setVal("contactsIphone",""); 
	setVal("contacts",""); 
	setVal("remarks",""); 
	setVal("addorupdate","");
	setVal("shenfenType",0); 
	
}
/*编辑设置*/
function setDatal(data){
	console.log(data);
	setVal("companyName",data.companyName); 
	setVal("contactsIphone",data.contactsIphone); 
	setVal("contacts",data.contacts); 
	setVal("remarks",data.remarks); 
	setVal("addorupdate",data.addorupdate);
	$('#shenfenType').val(data.shenfenType)
	setVal("id",data.Id); 
}
/*删除某一个*/
function deleteTbel(id){
		$.ajax({
		url: bulicUrl + "resourse/delectResource.php",
		data: {
			table:"resource",
			id: id
		},
		type: "GET",
		dataType: "text",
		success: function(data) {
			if(data = 1) {
				$("#selectbyCondition").click();
			}
		}
	})
}
/*项目页面*/
