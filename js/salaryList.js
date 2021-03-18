$(function() {
   selectSa();
})

//应发
function calc(e) {
	var par=e.parentNode.parentNode;
	var reward=par.getElementsByClassName("reward");
 	var rewardNu=0;
	for(var i=0;i<reward.length;i++){
		rewardNu+=Number($(reward[i]).val());
	}
	var jine=par.getElementsByClassName("jine")[0];
	$(jine).text(rewardNu);
	deduct();
	
}
//确认发放
function confirm(e) {
    if ($(e).parent().siblings()[5].innerText.substr(1) == '') {
        alert('工资不能为0');
    } else{
    	var par=e.parentNode.parentNode;
    	var tname=par.getElementsByClassName("tName")[0].innerHTML;//姓名
    		var par=e.parentNode.parentNode;
			var reward=par.getElementsByClassName("reward");
		 	var rewardNu=0;
			for(var i=0;i<reward.length;i++){
				rewardNu+=Number($(reward[i]).val());
			}
    	var receive=rewardNu;//实发金额
    	var withhold=par.getElementsByClassName("withhold")[0].value;//扣款
    	var textSara=par.getElementsByClassName("textSara")[0].value;//备注
    	var month=new Date().getMonth() + 1;//时间
        $.ajax({
            url: bulicUrl + "addHistorySalary.php",
            data: {
                tname: tname,
                receive: receive,
                withhold: withhold,
                textSara:textSara,
                month:month,
                time:getTime()
            },
            type: "POST",
            dataType: "text",
            success: function(data) {
                if (data == "1") {
                    alert("发放成功!");
                    selectSa();
                } else {
                    alert("发放失败!");
                   
                }
            }
        })
    }

}
/*更改底薪*/
function salaryUpdata(e){
	var salar=$(e).prev().val();
	var ids=$(e).attr("clk");
	$.ajax({
        url: "../../action/teacher/updatateacher.php",
        dataType: "json",
        data:{
        	id:ids,
        	salary:salar
        },
        type: "POST",
        success: function(data) {
           if(data!=null){
           	   selectSa();
           }
        },
    });
}
/*查询表*/
function  selectSa(){
	 $.ajax({
        url: "../../action/salaryList.php",
        dataType: "json",
        type: "POST",
        success: function(data) {
        	console.log(data)
            if (data != null) {
                var html =
                    `<thead>
                        <tr>
                            <td>姓名</td>
                            <td>底薪</td>
                            <td>提成</td>
                            <td>扣款</td>
                            <td>银行卡</td>
                            <td>共计</td>
                            <td>备注</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>`;
                var gdx=0;
                for (var i = 0; i < data.length; i++) {
                	
                    var teachers = data[i];
                    gdx+=Number(teachers['salary']);
                    html += `<tr>
                            <td class="tName">` + teachers['tname'] + `</td>
                            <td>
                               ¥ <input  type="text" name="reward" placeholder="底薪" value="` + teachers['salary'] + `" class="nki reward"'>
                                 <button class='btn btn-info'  clk="` + teachers['id'] + `" onchange='calc(this)'; onclick="salaryUpdata(this)">更改底薪</button>
                            </td>
                            <td>¥  <input  type="text" name="reward" placeholder="提成" value="0" onchange='calc(this)'; class="nki reward deduct"></td>
                            <td><input  type="text" name="reward" placeholder="额外奖金" value="0" onchange='calc(this)'; class="nki reward withhold"></td>
                            <td>` + teachers['yhc'] + `</td>
                            <td class="jine" id="receive">` + teachers['salary'] + `</td>
                            <td><textarea class="textSara"></textarea></td>
                            <td id="admin">
                                  <button class='btn btn-info' onclick='confirm(this);'>确认发放</button>
                            </td>
                        </tr>`;
                }
                html += `</tbody>`;
                $("#salaryList").html(html);
                $("#gdx").html(gdx);
            } else {
                alert('无结果!');
            }
        },
    });
}
/*提成总计*/
function deduct(){
		var deduct=document.getElementsByClassName("deduct");
	 	var rewardNu=0;
		for(var i=0;i<deduct.length;i++){
			rewardNu+=Number($(deduct[i]).val());
		}
		 $("#deduct").html(rewardNu);
}
