function Slider(opt){
	this.wrap = opt.wrap;
	this.left= opt.left;
	this.right = opt.right;
    this._next = opt._next;
    this.prev = opt.prev;
	this.callback = opt.callback;
	this.type=opt.type;
    this.autoPlay = opt.autoPlay;
	this.int();
	this.inDom();
	this.inEvent();

}
Slider.prototype={
	int : function(){
		this._height=$(window).height();
		this.idx=0;
		this._lock = false;
	},
	inDom : function(){
		this._item=this.wrap.find(".main");
		var self=this;
		for(var i=0;i<self._item.length;i++){
			$(self._item[i]).css('-webkit-transform','translate3d(0,'+i*self._height+'px'+',0)');
		}
	},
	inEvent :function(){
		var startY,moveY,offsetY,self=this,len=this._item.length;
		this._item.on("touchstart",function(e){
			self.offsetY=0;
			e.preventDefault();
			self.startY=e.touches[0].screenY;
			
		})
		this._item.on("touchmove",function(e){
			console.log(self._lock);
			if(self._lock){
                return false;
            }
			e.preventDefault();
			self.moveY=e.touches[0].screenY;
			self.offsetY=self.moveY-self.startY;
			var _height=self._height,
				_ofset=self.offsetY;
			for(var i=0;i<len;i++){
				if($(self._item[i])){
					$(self._item[i]).css('-webkit-transform','translateY('+(((i-self.idx)*_height)+_ofset)+'px');
					$(self._item[i]).css('-webkit-transition','none');
				}
			}/*"+(((i - self._idx) * width) + offsetX) + "px*/
		})
		this._item.on("touchend",function(e){
			if(self.offsetY==0){
				return false
			}
			console.log(self.offsetY)
			var offsetY=self.offsetY;
			/*if(offsetY==0){
				return false;
			}*/
			if(offsetY<0){
				self.starY("+1",e.type);
			}else{
				self.starY("-1",e.type);
			}
		})	
		
		this._next && this._next.on("click",function(e){
            self.starY("+1",e.type);
         })
        this.prev  && this.prev.on("click",function(e){
            self.starY("-1",e.type);
        })
    	this.autoPlay && 
    	setInterval(function(){

            self.starY("+1");
        },1000)
		
	},
	/*callback : function(){
		if(this.idx == 0){
			this._item[this.idx].siblings().hide();
		}
	},*/
	index : function(){
        return this.idx;
    },
	starY : function(num,type){
		var idx=this.idx,
			_width=this._width,
			_height=this._height,
			_item=this._item,
			len=_item.length;
			if(typeof(num)=="number"){
				nowIndex=idx+num;
			}
			if(typeof(num)=="string"){
				nowIndex=idx+num*1;
			}
			if(nowIndex>len-1) nowIndex=len-1;
			if(nowIndex<0) nowIndex=0;
			//console.log(nowIndex)
			$(_item[nowIndex]) && $(_item[nowIndex]).css('-webkit-transform','translate3d(0,0,0)');
			$(_item[nowIndex-1]) && $(_item[nowIndex-1]).css('-webkit-transform','translate3d(0,'+(-_height)+'px,0)');
			$(_item[nowIndex+1]) && $(_item[nowIndex+1]).css('-webkit-transform','translate3d(0,'+(_height)+'px,0)');

			$(_item[nowIndex]) && $(_item[nowIndex]).css('-webkit-transition','all 0.3s');
			$(_item[nowIndex-1]) && $(_item[nowIndex-1]).css('-webkit-transition','all 0.3s');
			$(_item[nowIndex+1]) && $(_item[nowIndex+1]).css('-webkit-transition','all 0.3s');
			
			this.idx=nowIndex;
			//console.log(type);
			if(type.indexOf(this.type)>=0){
				this.callback && this.callback()
			}
			//this._hua();
	}
	/*_hua : function(){
		var self = this;
		if(this.idx == 0){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 1){
			$(this._item[this.idx]).show().siblings().hide();
			//self.local = true;
		}else if(this.idx == 2){
				$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 3){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 4){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 5){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 6){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 7){
			$(this._item[this.idx]).show().siblings().hide();
		}else if(this.idx == 8){
			$(this._item[this.idx]).show().siblings().hide();
		}
	}*/

}