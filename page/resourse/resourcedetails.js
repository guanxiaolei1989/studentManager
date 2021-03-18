/*添加*/
function saveCorporations() {
	var produ = getVal("produ");
	var type = $("#type").val();
	if(produ == ""||type<1) {
		alert("不能输入空的数据，请填写完整");
		return;
	}
	var produIntroduce = getVal("produIntroduce");
	var price = getVal("price");
	
	var Agencyprice = getVal("Agencyprice");
	var Externalprice = getVal("Externalprice");
	var remarks = gtetVal("remarks");
	var time = getTime();
	var addorupdate = getVal("addorupdate");
	var id = getVal("id");
	var rid = $("#rid").val();
	/*0是添加*/
	/*1是编辑*/
	$.ajax({
		url: bulicUrl + "resourse/addetail.php",
		data: {
			produ: produ,
			type: type,
			produIntroduce: produIntroduce,
			price: price,

			Agencyprice: Agencyprice,
			Externalprice:Externalprice,
			remarks:remarks,
			time:time,
			addorupdate:addorupdate,
			id: id,

			rid:rid
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
/*	console.log();*/
	setVal("produ",""); 
	setVal("produIntroduce",""); 
	setVal("searchWebsite",""); 
	setVal("price",""); 
	setVal("Agencyprice",""); 
	setVal("Externalprice",""); 
	stetVal("remarks","");
	
	
		/*		type: type,
			produ: produ,
			produIntroduce: produIntroduce,
			price: price,
			Agencyprice: Agencyprice,
			Externalprice:Externalprice,
			searchWebsite
			remarks:remarks,*/
	
	
	/*类型补充*/
	sletyp();
	/*查询资源表格*/
	sleresou();





}
/*编辑设置*/
function setDatal(data){
	console.log(data);
	setVal("type",data.type);
	setVal("produ",data.produ); 
	setVal("produIntroduce",data.produIntroduce); 
	setVal("price",data.price); 
	setVal("Agencyprice",data.Agencyprice); 
	setVal("Externalprice",data.Externalprice); 
	setVal("searchWebsite",data.searchWebsite); 
	stetVal("remarks",data.remarks);
	$("#rid").val(data.rid);
	$("#type").val(data.type);
}
/*删除某一个*/
function deleteTbel(id){
		$.ajax({
		url: bulicUrl + "resourse/delectResource.php",
		data: {
			table:"resourcedetails",
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
/*类型补充*/
sletyp();
function sletyp(){
	var html="";
        	map1.forEach(function (element, index, array) {
			        /*console.log(element); //当前元素的值
			        console.log(index);   //当前下标
			        console.log(array);  //数组本身 */
			        html+="<option value='"+index+"'>"+element+"</option>";
			});
			$("#type").html(html);
			$("#typephj").html(html);
			$("#typephj option:first").val("");
			$("#type,#typephj option:first").prop("selected",'selected');;
}
/*查询资源表格*/
sleresou();
function sleresou(){
		$.ajax({
		url: bulicUrl + "resourse/selectreSource.php",
		data: {
			resource:"resource"
		},
		type: "GET",
		dataType: "text",
		success: function(datas) {
			var datao=JSON.parse(datas).data;
			var html="";
			html+="<option value=''>请选择</option>";
        	for(var i=0;i<datao.length;i++){
        		html+="<option value='"+datao[i].Id+"'>"+datao[i].companyName+"</option>";
        	}
			$("#rid").html(html);
			$("#typeLo").html(html);
		}
	})
}
