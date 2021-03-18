
// $(function(){
//             $(".onbutton #onsubmit").on('click',function(){
//              var $username = $("#username").val(),
//                  $pass  = $("#pass").val();
//                 if($username=='' || $pass==''){
//                     alert("用户名及密码不能为空");
//                     return false;
//                 }else{
//                     var datas={
//                         username:$username,
//                         pass:$pass
//                     };
//                     $.ajax({
//                         url:'user.php',
//                         type:'post',
//                         dataType:'json',
//                         data:datas,
//                         success:function(result){
//                             if(result=='nameerror'){
//                                 alert('用户名不存在');
//                             }else if(result=="passerror"){
//                                 alert("密码错误");
//                             }else{
//                                 window.location.href = 'http://127.0.0.1/index1.html';//登录成功跳转
//                             }
//                         },
//                         error:function(){
//                             alert('false');
//                         }
//                     })
//                 }return false;
//             })

// // function ajaxfunction(str){
// // 	if (str = 'login') {

// // 		alert('登录');

// // 		var username = $('#username').val();
// //     	var password = $('#password').val();

// //     	$.ajax({
// //                         url:'action/dologin.php',
// //                         type:'POST',
// //                         dataType:'json',
// //                         data:{username:username,password:password},
// //                         success:function(result){
// //                             if(result=='nameerror'){
// //                                 alert('用户名不存在');
// //                             }else if(result=="passerror"){
// //                                 alert("密码错误");
// //                             }else{
// //                                 window.location.href = 'http://www.sogou.com';//登录成功跳转
// //                             }
// //                         },
// //                         error:function(){
// //                             alert('false');
// //                         }
// //                     })

// // 	}else if (str = 'select') {

// // 		alert('查询');

// // 	}
// // 	else if (str = 'update') {

// // 		alert('修改');

// // 	}
// // 	else if (str = 'delete') {

// // 		alert('删除');

// // 	}
// // }




















// //    //       $.ajax({
// // 			// 	type: 'POST',
// // 			// 	url: "action/dologin.php",
// // 			// 	data: {username: username, password: password},
// // 			// 	dataType: "JSON",
// // 			// 	success: function(data,status){
// // 			// 		alert(data+" "+status);
// // 			// 		// if (result) {
// // 			// 		// 	window.sessionStorage["username"] = username;
// // 			// 		//     window.location.href="index1.html";
// // 			// 		// } else {
// // 			// 		//     alert("登录失败");
// // 			// 		// }
// // 			// 	}
// // 			// });

