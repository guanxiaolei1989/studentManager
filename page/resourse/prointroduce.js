
/*企业页面*/
/*添加信息*/
function saveCorporations() {
/*name   项目名字
type     工种种类
leel     级别
cycle    周期
InformationRequired    需要资料
searchWebsite    查询网址
remarks 备注
time 时间*/
	var name = getVal("name")
	var type = gtetVal("type")
	var levetd = getVal("levetd")
	var cycle = getVal("cycle")
	var InformationRequired = gtetVal("InformationRequired");
	var searchWebsite = getVal("searchWebsite");
	var remarks = gtetVal("remarks");
	var time = getTime();
	var addorupdate = getVal("addorupdate");
	var id = getVal("id");
	if(name == "") {
		alert("不能输入空的数据，请填写完整");
		return;
	}
	/*0是添加*/
	/*1是编辑*/
	$.ajax({
		url: bulicUrl + "resourse/addPro.php",
		data: {
			name: name,
			type: type,
			level: levetd,
			cycle: cycle,
			InformationRequired: InformationRequired,
			searchWebsite:searchWebsite,
			remarks:remarks,
			time:time,
			addorupdate:addorupdate,
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
/*点击添加项目*/
function addCos() {
	setVal("addorupdate", 0); //0添加/1修改
}
/*清除*/
function clearData(){
	console.log();
	setVal("name",""); 
	stetVal("type",""); 
	setVal("levetd",""); 
	console.log(getVal("levetd"));
	setVal("cycle",""); 
	stetVal("InformationRequired","");
	setVal("searchWebsite",""); 
	stetVal("remarks",""); 
	

}
/*编辑设置*/
function setDatal(data){
	console.log(data);
	setVal("name",data.name); 
	stetVal("type",data.type); 
	setVal("levetd",data.level); 
	setVal("cycle",data.cycle); 
	stetVal("InformationRequired",data.InformationRequired);
	setVal("searchWebsite",data.searchWebsite);
	stetVal("remarks",data.remarks);
	setVal("id",data.Id); 
}
/*删除某一个*/
function deleteTbel(id){
		$.ajax({
		url: bulicUrl + "resourse/delectResource.php",
		data: {
			table:"prointroduce",
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
