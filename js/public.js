var bulicUrl="/productHT/action/";
var map1 = new Map();
map1.set("0","请选择");
map1.set("1","全日制大专");
map1.set("2","成人教育");
map1.set("3","自学考试");
map1.set("4","计算机");
map1.set("5","远程教育");
map1.set("6","资格证书");
map1.set("7","职称证书");
map1.set("8","研究生");
map1.set("9","医学");

var map2 = new Map();
map2.set("0","未缴费");
map2.set("1","已缴费");

var map3 = new Map();
map3.set("1","已提交");
map3.set("0","未提交");


var map4 = new Map();
map4.set("1","已报名");
map4.set("0","未报名");

var map5 = new Map();
map5.set("1","教育机构");
map5.set("2","中专学校");
map5.set("3","大专学校");
/*成人页面需要*/
var map6 = new Map();
map6.set("0","请选择");
map6.set("1","成人教育");
map6.set("2","自学考试");
map6.set("3","网络教育");
map6.set("4","研究生");
/*成人页面需要*/
var map7 = new Map();
map7.set("0","请选择");
map7.set("1","高起专");
map7.set("2","专升本");
map7.set("3","高起本");
map7.set("4","研究生");
map7.set("5","二学历");

var education = new Map();
education.set("1","高中生");
education.set("2","中专生");
education.set("3","社会青年");
education.set("4","大专生");
education.set("5","本科生");


var kind = new Map();
kind.set("1","退伍军人");
kind.set("2","在校大学生");
kind.set("3","在校高中生");
kind.set("4","社会青年");



function mapred(num){
	if(num>0){
		return "style='color:red'"
	}
}

/*function alert(e){
	layer.msg(e);
}*/
//获取服务器时间
function getTime(){
	var date=new Date();
	//年
	var year=date.getFullYear();
	//月
	var month=date.getMonth()+1;
	//日
	var day=date.getDate();
	//时
	var hh=date.getHours();
	//分
	var mm=date.getMinutes();
	//秒
	var ss=date.getSeconds();
	var rq = year+"年"+month+"月"+day+"日"+" "+hh+":"+mm+":"+ss;
	return rq;
}
/*设置修改时的元素*/
function setValue(name,event,val){
	$("input[name='"+name+"']").val($(event).parent().siblings()[val].innerText);
}

function setVal(name,vall){
	$("input[name='"+name+"']").val(vall);
	
}

function getVal(name){
	return $.trim($("input[name='"+name+"']").val());
}
function stetVal(name,vall){
	$("textarea[name='"+name+"']").val(vall);
	
}
function gtetVal(name){
	return $.trim($("textarea[name='"+name+"']").val());
}
/*function ajaX(urls,people){
		$.ajax({
	    url:urls,
	    data:people,
	    type:"POST",
	    dataType:"text",
	    success:function(datas){
	            return datas;
	        }
	    })
}
*/