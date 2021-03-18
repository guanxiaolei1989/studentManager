$(document).ready(function(){
	    /*查询支出*/
		selectEx();
	});
	
/*查询支出费用*/
function selectEx(){
	$.ajax({
		url:bulicUrl+"selectOutput.php",
		data:{
			
		},
		type:"POST",
		dataType:"text",
		success:function(data){
		        var datah=JSON.parse(data);
		        var html = `
		        <thead>
        			<tr>
		                <td>序号</td>
		                <td>消费标题</td>
		                <td>消费金额</td>
		                <td>申请姓名</td>
		                <td>是否同意</td>
		                <td>申请时间</td>
		                <td>申请理由</td>
		                <td>操作</td>
	                </tr>
            	</thead>
            	<tbody>`;
            	var agree="";
            	console.log(datah);
            	if(datah==null){
            		 html += `</tbody>`;
            	    $("#ouputTable").html(html);
            		return;
            	}
            	else{
            		
            	}
            	var zong=0;
            	for(var i=0;i<datah.length;i++){
            		 var data=datah[i];
            		 if(data['agree']==0){
            		 	agree="待批"
            		 }
            		 else{
            		 	agree="已批"
            		 }
            		 zong+=Number(data['money']);
            		 html+=`<tr>
				            		<td>`+data['id']+`</td>
				            		<td>`+data['name']+`</td>
				            		<td>`+data['money']+`</td>
				            		<td >`+data['peopleName']+`</td>
				            		<td >`+agree+`</td>
				            		<td >`+data['time']+`</td>
				            		<td >`+data['reason']+`</td>
				            		<td >
				            		<button  id="`+data['id']+`"  class='updated btn btn-info btn-mini' data-toggle='modal'   href='#mymodal-link' onclick='ratify(this);'>编辑</button>
				            		<button  id="`+data['id']+`"  class='updated btn btn-info btn-mini' href='#mymodal-link' onclick='delect(this);'>删除</button>
				            		</td>
		            		</tr>`;
	            	
            	}
            	  html += `</tbody>`;
            	$("#ouputTable").html(html);
            	$("#zong").html("共计费用"+zong);
		      }
		})
}
/*添加支出按钮*/
function addinput(){
	$("input[name='peopleName']").attr("value",window.sessionStorage["userName"]);
	$("input[name='time']").attr("value",getTime());
	$("input[name='addorupdate']").attr("value",0);//0添加/1修改
	nullLay();
}
/*添加支出*/
function addinputInsert(){
    if($("#agree").find("option:selected").val()==-1){
    	alert("请选择是否同意批准");
    	return;
    }
	if($("input[name='addorupdate']").val() == 0){
		//添加
		$("input[name='peopleName']").attr("value",window.sessionStorage["userName"]);
		$("input[name='time']").attr("value",getTime());
			$.ajax({
				url:bulicUrl+"addOutput.php",
				data:{
					name:$("input[name='name']").val(),
					money:$("input[name='money']").val(),
					peopleName:$("input[name='peopleName']").val(),
					agree:$("#agree").find("option:selected").val(),
					reason:$("#reason").val(),
					time:$("input[name='time']").val(),
		
				},
				type:"POST",
				dataType:"text",
				success:function(data){
				        if(data==1){
				        	nullLay();
				        	alert("添加成功");
				        	/*查询支出*/
							selectEx();
							
				        }
				        else {
				        	alert("添加失败")
				        }
				      }
				})
	}
	else{
		/*修改*/
		/*id:$("input[name='id']").val()*/
		$.ajax({
				url:bulicUrl+"addOutput.php",
				data:{
					id:$("input[name='id']").val(),
					name:$("input[name='name']").val(),
					money:$("input[name='money']").val(),
					peopleName:$("input[name='peopleName']").val(),
					agree:$("select option:selected").val(),
					reason:$("#reason").val(),
					time:$("input[name='time']").val(),
				},
				type:"POST",
				dataType:"text",
				success:function(data){
				        if(data==1){
				        	nullLay();
				        	alert("修改成功");
				        	/*查询支出*/
							selectEx();
				        }
				        else {
				        	alert("修改失败")
				        }
				      }
				})
		
	}
		
}
/*清空*/
function nullLay(){
	setVal("name","");
	setVal("money","");
	$("#reason").val("");
	$("#agree").val("-1");
	setVal("id","0");
}
/*编辑*/
function ratify(event){
	
	/*设置编辑*/
	$("input[name='addorupdate']").attr("value",1);
	var idd=$(event).parent().siblings()[0].innerText;
	$("input[name='id']").attr("value",idd);
	var dta;
	$.ajax({
				url:bulicUrl+"selectOneClassify.php",
				data:{
					id:idd,
					classify:"output"
				},
				type:"POST",
				dataType:"text",
				success:function(data){
				         dta=JSON.parse(data)[0];
				         console.log(dta);
				         setVal("name",dta.name);
				         setVal("money",dta.money);
				         setVal("peopleName",dta.peopleName);
				         setVal("time",dta.time);
				         $("#reason").val(dta.reason);
						$("#agree").val(dta.agree);
						console.log($("input[name='name']").val());
									       
				      }
			})
}
/*{删除}*/
function delect(event){
	console.log($(event).attr("id"));
	if(confirm('确定删除此条费用信息?')){
			$.ajax({
					url:bulicUrl+"delOutput.php",
					data:{
						id:$(event).attr("id")
			
					},
					type:"POST",
					dataType:"text",
					success:function(data){
					         if(data==1){
						        	alert("删除成功");
						        	/*查询支出*/
									selectEx();
						        }
						        else {
						        	alert("删除失败")
						        }
					      }
					})
	}
}

