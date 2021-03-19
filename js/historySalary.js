$(function() {
    selecHistory();
})

function selecHistory(time) {
    $.ajax({
        url: "../../action/salary/historySalaryList.php",
        dataType: "json",
        type: "POST",
        data: {
            time: time
        },
        success: function(data) {
            console.log(data);
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
							<td contentEditable = "true">` + teachers['month'] + `</td>
							<td contentEditable = "true">` + teachers['receive'] + `</td>
							<td contentEditable = "true">` + teachers['withhold'] + `</td>
							<td>` + teachers['time'] + `</td>
							<td contentEditable = "true">` + teachers['remark'] + `</td>
                            <td>
                                <button class="btn btn-info " onclick="update(` + teachers['Id'] + `,this)">修改</button>
                                <button class="btn btn-danger " onclick="delet(` + teachers['Id'] + `)">删除</button>
                            </td>
                        </tr>`;
                }
                html += `</tbody>`;
                $("#historySalaryList").empty();

                $("#historySalaryList").html(html);
            } else {
                alert('无结果!');
            }
        },
    });
}

function delet(id) {
    //delethis.php
    $.ajax({
        url: "../../action/salary/delethis.php",
        dataType: "json",
        type: "POST",
        data: {
            id: id
        },
        success: function(data) {
            console.log(data);
            selecHistory();
        },
    });
}

function update(id, e) {
    $.ajax({
        url: "../../action/salary/updatehis.php",
        dataType: "json",
        type: "POST",
        data: {
            id: id,
            month: $(e).parent().siblings()[1].innerHTML,
            receive: $(e).parent().siblings()[2].innerHTML,
            withhold: $(e).parent().siblings()[3].innerHTML,
            time: $(e).parent().siblings()[4].innerHTML,
            remark: $(e).parent().siblings()[5].innerHTML,
        },
        success: function(data) {
            if (data == 1) {
                alert('修改成功！');
            } else {
                alert('修改失败！');
            }
            selecHistory($('#datetimepicker').val());
        },
    });
}