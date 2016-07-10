 function  Slider(opt){
	this.wrap = opt.wrap;
	this.left=opt.left;
	this.right=opt.right;
	this.callback=opt.callback;
	this.type =opt.type;
	//鎵ц�鏂规硶
	this.init();
	this.initDom();
	this.initEvent();
}
Slider.prototype = {
	init : function(){
		//alert(1)
		this._width = $(window).width();
		this._height = $(window).height();
		//console.log(this._height);
		this.idx = 0;
		this.local = false;
		this.suo = false;
	},
	initDom : function(){
		this._item = this.wrap.find(".main");
		//console.log(this._item);
		var self=this
		for(var i=0;i<self._item.length;i++){
			//console.log($(self._item[i]));
			$(self._item[i]).css({"-webkit-transform":"translate3d(0,"+i*self._height+"px"+",0)"});
		}
		if(this.idx == 0){
			$(".one").show().siblings().hide();
		}
	},
	initEvent : function(){
		var startY,moveY,offsetY,self=this,len=this._item.length;
		$(this._item).on("touchstart",function(e){
			e.preventDefault();
			startY = e.touches[0].screenY;
			offsetY=0;
			//console.log(startY);
		})
		$(this._item).on("touchmove",function(e){
			//console.log(self.local);
			if(self.local){
			   return false;
			}
			if(self.suo){
			   return false;
			}
			e.preventDefault();
			moveY = e.touches[0].screenY;//console.log(startY);
			offsetY =  moveY - startY ;

			var height = self._height,
				_offsetY = self.offsetY;
				
				for(var i = 0;i<self._item.length;i++){
					if($(self._item[i])){
						//console.log(i);
						//console.log(self.idx);
						//console.log(offsetX);
						$(self._item[i]).css("-webkit-transform","translate3d(0,"+(((i-self.idx)*height)+offsetY)+"px,0)");
						$(self._item[i]).css("-webkit-transtion","none");
					}
				}
			/*for(var i= 0;i<len;i++){//console.log($(self._item[i]));
				$(self._item[0]).css("-webkit-transform","translate3d("+offsetX+"px"+",0,0)");
			}*/
		}),
/*

		this.left.on("tap",function(e){
			//alert("a");
			self.startX("-1",e.type);
		}),
		this.right.on("tap",function(e){
			self.startX("+1",e.type);
		})
*/

		$(this._item).on("touchend",function(e){
			var _offsetY= offsetY;
			if(_offsetY){
				if(_offsetY  < 0){
					self.startX("+1",e.type);
				}else{
					self.startX("-1",e.type);
				}
		    }
		})

	},
	index : function(){
        return this.idx;
    },
	startX : function(num,type){
		//console.log(num);
		var idx = this.idx,
			height = this._height,
			item = this._item,
			len = item.length;
		if(typeof(num) == "number"){
			nowIdx = idx+num;
		}
		if(typeof(num) == "string"){
			nowIdx = idx + num*1;
		}
		//console.log(newidx);
		if(nowIdx<0) nowIdx = 0;
		if(nowIdx>len-1) nowIdx = len-1;


		item[nowIdx]   && ($(item[nowIdx]).css("-webkit-transform","translate3d(0,0,0)"));
		item[nowIdx-1] && ($(item[nowIdx-1]).css("-webkit-transform","translate3d(0,"+(-height)+"px,0)"));
		item[nowIdx+1] && ($(item[nowIdx+1]).css("-webkit-transform","translate3d(0,"+height+"px,0)"));

		item[nowIdx]   && ($(item[nowIdx]).css("-webkit-transition","all .4s ease-in"));
		item[nowIdx-1] && ($(item[nowIdx-1]).css("-webkit-transition","all .4s ease-in"));
		item[nowIdx+1] && ($(item[nowIdx+1]).css("-webkit-transition","all .4s ease-in"));
		this.idx= nowIdx;

		//this.callback();

		if(type.indexOf(this.type)>=0) this.callback && this.callback();
		//console.log(type);
		//console.log(type);
		
	}
}                                                                         


