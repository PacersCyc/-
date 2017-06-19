var timer=null,
	index=0,
	pics=/*document.getElement*/byId("slide-main").getElementsByTagName("div"),
	dots=/*document.getElement*/byId("dots").getElementsByTagName('i'),
	len=pics.length,
	prev=/*document.getElement*/byId("prev"),
	next=/*document.getElement*/byId("next");

function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

// 清除定时器,停止自动播放
function stopAutoPlay(){
	if(timer){
       clearInterval(timer);
	}
}
// 图片自动轮播
function startAutoPlay(){
   timer = setInterval(function(){
       index++;
       if(index >= len){
          index = 0;
       }
       changeImg();
   },3000)
}

function changeImg(){
   for(var i=0,len=dots.length;i<len;i++){
       dots[i].className = "";
       pics[i].style.display = "none";
   }
   dots[index].className="active";
   pics[index].style.display = "block";
}

function slideImg(){
    var main = byId("slide-main");
    //var banner = byId("banner");
    //var menuContent = byId("menu-content");
    main.onmouseover = function(){
    	stopAutoPlay();
    }
    main.onmouseout = function(){
    	startAutoPlay();
    }
    main.onmouseout();

    // 点击导航切换
    for(var i=0,l=dots.length;i<l;i++){
       dots[i].id = i;
       dots[i].onclick = function(){
           index = this.id;
           changeImg();
       }
    }

    // 下一张
    next.onclick = function(){
       index++;
       if(index>=len) index=0;
       changeImg();
    }
    // 上一张
    prev.onclick = function(){
       index--;
       if(index<0) index=len-1;
       changeImg();
    }
}
slideImg();
//商城限时购倒计时
function FreshTime(){
	var endtime=new Date("2017/6/18,12:00:00"),
		nowtime=new Date(),
		lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000),
		//d=parseInt(lefttime/(60*60*24)),
		h=parseInt(lefttime/(60*60)),
		m=parseInt((lefttime/60)%60),
		//console.log(m);
		s=parseInt(lefttime%60);
		hours=document.getElementById('hours'),
		minutes=document.getElementById('minutes'),
		seconds=document.getElementById('seconds'),
		countdown=document.getElementById('countdown');
	if(h<10){
		hours.innerHTML="0"+h;
	}else{
		hours.innerHTML=h;
	}
	if(m<10){
		minutes.innerHTML="0"+m;
	}else{
		minutes.innerHTML=m;
	}
	if(s<10){
		seconds.innerHTML="0"+s;
	}else{
		seconds.innerHTML=s;
	}
	if(lefttime<=0){
		countdown.innerHTML="活动已结束";
		clearInterval(sh);
	}
}
FreshTime();
var sh;
sh=setInterval(FreshTime,500);
//隐藏二级菜单显示
