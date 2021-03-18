$(function() {
    selecHistory();
})
function selecHistory(){
	    $.ajax({
        url: "../../action/salary/historySalaryList.php",
        dataType: "json",
        type: "POST",
        success: function(data) {
            if (data != null) {
                var html =
                    `<thead>
                        <tr>
                            <td>姓名</td>
                            <td>月份</td>
                            <td>实发</td>
                            <td>奖金</td>
                            <td>发放时间</td>
                            <td>备注</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>`;
                for (var i = 0; i < data.length; i++) {
                    var teachers = data[i];
                    html += `<tr>
                            <td>` + teachers['tName'] + `</td>
							<td>` + teachers['month'] + `月份</td>
							<td>` + teachers['receive'] + `</td>
							<td>` + teachers['withhold'] + `</td>
							<td>` + teachers['time'] + `</td>
							<td>` + teachers['remark'] + `</td>
                            <td><button class="btn btn-danger btn-mini" onclick="delet(` + teachers['Id'] + `)">删除</button></td>
                        </tr>`;
                }
                html += `</tbody>`;
                $("#historySalaryList").html(html);
            } else {
                alert('无结果!');
            }
        },
    });
}
function delet(id){
	//delethis.php
	$.ajax({
        url: "../../action/salary/delethis.php",
        dataType: "json",
        type: "POST",
        data:{
        id:id
        },
        success: function(data) {
            console.log(data);
            selecHistory();
        },
    });
}
