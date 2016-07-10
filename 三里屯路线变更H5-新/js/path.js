  		var _canvas = document.getElementById("canvas"),
	   			_context = _canvas.getContext("2d"),
	   			timer,
	   			i,
	   			timer2,
	   			arr1 = [],arr2 = [],arr3 = [],arr4 = [],arr5 = [];

	   			arr1 = [
	   				{
	   					moveX : 54,
	   					moveY : 182,
	   					toX : 26,
	   					toY : 0
	   				},
	   				{
	   					moveX : 80,
	   					moveY : 182,
	   					toX : 0,
	   					toY : 0
	   				},
	   				{
	   					moveX : 80,
	   					moveY : 182,
	   					toX : 0,
	   					toY :137
	   				},
	   				{
	   					moveX : 80,
	   					moveY :46,
	   					toX : 60,
	   					toY : 0
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 46,
	   					toX : 0,
	   					toY : -50
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 96,
	   					toX : -10,
	   					toY : 0
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 96,
	   					toX : 0,
	   					toY : -83
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 179,
	   					toX : -45,
	   					toY : 0
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 179,
	   					toX : 0,
	   					toY : 13
	   				}
	   			]
	   			arr2 = [
	   				{
	   					moveX : 44,
	   					moveY : 46,
	   					toX : 100,
	   					toY : 0
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 46,
	   					toX : 0,
	   					toY : 0
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 46,
	   					toX : 0,
	   					toY : -50
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 96,
	   					toX : -10,
	   					toY : 0
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 96,
	   					toX : 0,
	   					toY : -83
	   				},
	   				{
	   					moveX : 144,
	   					moveY : 179,
	   					toX : -45,
	   					toY : 0
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 179,
	   					toX : 0,
	   					toY : 13
	   				}
	   			]
	   			arr3 = [
	   				{
	   					moveX : 145,
	   					moveY : 195,
	   					toX : 0,
	   					toY : 12
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 195,
	   					toX : 0,
	   					toY : 0
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 183,
	   					toX : -45,
	   					toY : 0
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 183,
	   					toX : 0,
	   					toY : 18
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 165,
	   					toX : 0,
	   					toY : -18
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 183,
	   					toX : 45,
	   					toY : 0
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 183,
	   					toX : 0,
	   					toY : 85
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 98,
	   					toX : -10,
	   					toY : 0
	   				}
	   			]
	   			arr4 = [
	   				{
	   					moveX : 236,
	   					moveY : 195,
	   					toX : 0,
	   					toY : 12
	   				},
	   				{
	   					moveX : 236,
	   					moveY : 195,
	   					toX : 0,
	   					toY : 0
	   				},
	   				{
	   					moveX : 236,
	   					moveY : 183,
	   					toX : -136,
	   					toY : 0
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 183,
	   					toX : 0,
	   					toY : 18
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 165,
	   					toX : 0,
	   					toY : -18
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 183,
	   					toX : 45,
	   					toY : 0
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 183,
	   					toX : 0,
	   					toY : 85
	   				},
	   				{
	   					moveX : 145,
	   					moveY : 98,
	   					toX : -10,
	   					toY : 0
	   				}
	   			]
	   			arr5 = [
	   				{
	   					moveX : 236,
	   					moveY : 30,
	   					toX : 0,
	   					toY : -16
	   				},
	   				{
	   					moveX : 236,
	   					moveY : 46,
	   					toX : 0,
	   					toY : 0
	   				},
	   				{
	   					moveX : 236,
	   					moveY : 46,
	   					toX : -85,
	   					toY : 0
	   				},
	   				{
	   					moveX : 151,
	   					moveY : 46,
	   					toX : 0,
	   					toY : -50
	   				},
	   				{
	   					moveX : 151,
	   					moveY : 96,
	   					toX : -10,
	   					toY : 0
	   				},
	   				
	   				{
	   					moveX : 141,
	   					moveY : 96,
	   					toX : 10,
	   					toY : 0
	   				},
	   				{
	   					moveX : 151,
	   					moveY : 96,
	   					toX : 0,
	   					toY : 50
	   				},
	   				{
	   					moveX : 151,
	   					moveY : 96,
	   					toX : 0,
	   					toY : -86
	   				},
	   				{
	   					moveX : 151,
	   					moveY : 182,
	   					toX : -51,
	   					toY : 0
	   				},
	   				{
	   					moveX : 100,
	   					moveY : 182,
	   					toX : 0,
	   					toY : 13
	   				}
	   			]
	//console.log(arr);


	   	var i = 0;
	   	function Line(arr,num){
	   		i = 0;
	   		arr = arr;
	   		timer2 = setTimeout(function(){
	   			num++;
	   			if(num>=arr.length){
	   				clearTimeout(timer2);
	   				return false;
	   			}
	   			Line(arr,num);
	   			
	   		},1060)
	   		timer = setInterval(function(){
	   				i+=1
	   				//console.log(num);
		   			if(i>=10){
		   				clearInterval(timer);
		   			}
	   			_context.strokeStyle = "red";
	   			_context.lineWidth = 3;
	   			_context.lineCap = "square";
	   			_context.beginPath();

	           /*_context.moveTo(0,200);
	            _context.lineTo(i*10,200);*/
	            if(arr[num].toX == 0){
	            	 _context.moveTo(arr[num].moveX,arr[num].moveY);
	            	 _context.lineTo(arr[num].moveX,arr[num].moveY-arr[num].toY/10*i);
	            }else{
	            	 _context.moveTo(arr[num].moveX,arr[num].moveY);
	            	 _context.lineTo(arr[num].moveX+arr[num].toX/10*i,arr[num].moveY);
	            }
	            
	           
	            _context.stroke();
	            _context.closePath();
	   		},100)
	   	}

	   var local = false;

	$(".nine_img_1").on("tap",function(){
		if(local==true){
			return false;
		}
		$(".nine_img_2").hide();
		$(".nine_img_3").hide();
		$(".nine_img_4").hide();
		$(".nine_img_5").hide();
		Line(arr1,0)
		local = true;
	})
	$(".nine_img_2").on("tap",function(){
		if(local){
			return false;
		}
		$(".nine_img_1").hide();
		$(".nine_img_3").hide();
		$(".nine_img_4").hide();
		$(".nine_img_5").hide();
		Line(arr2,0)
		local = true;
	})
	$(".nine_img_3").on("tap",function(){
		if(local==true){
			return false;
		}
		$(".nine_img_1").hide();
		$(".nine_img_2").hide();
		$(".nine_img_4").hide();
		$(".nine_img_5").hide();
		Line(arr5,0)
		local = true;
	})
	$(".nine_img_4").on("tap",function(){
		if(local==true){
			return false;
		}
		$(".nine_img_1").hide();
		$(".nine_img_2").hide();
		$(".nine_img_3").hide();
		$(".nine_img_5").hide();
		Line(arr4,0)
		local = true;
	})

	$(".nine_img_5").on("tap",function(){
		if(local==true){
			return false;
		}
		$(".nine_img_1").hide();
		$(".nine_img_2").hide();
		$(".nine_img_3").hide();
		$(".nine_img_4").hide();
		Line(arr3,0)
		local = true;
	})

	$(".nine_p3_return").on("tap",function(){
		if(local){
			$(".btn").show();
			_context.clearRect(0,0,310,350);
			local = false;
			clearInterval(timer);
			clearTimeout(timer2);
		}else if(local == false){
			window.location.reload();
		}

	})


	
	$(".two").on("swipeDown",function(){
		$(".one").show().siblings().hide();
	})
	