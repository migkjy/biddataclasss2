window.onload=function(){
	var list_zone=document.getElementById("inner_list");
	var list_a=list_zone.getElementsByTagName("a");

	for(var i=0;i<list_a.length;i++){
		list_a[i].onclick=function(){
			 var ph=document.getElementById("photo").children[0];
			 ph.src=this.href;
			 return false;
		}
	}
	
	var b_btn=document.getElementById("next_btn");
	var m_num=0;
	
	b_btn.onclick=function(){
		if(m_num>=list_a.length-3) return false;
		m_num++;
		list_zone.style.marginLeft=-100*m_num+"px";
		return false;
	}
	
	var n_btn=document.getElementById("before_btn");
	
	n_btn.onclick=function(){
		if(m_num<=0) return false;
		m_num--;
		list_zone.style.marginLeft=-100*m_num+"px";
		return false;   
		//<a>tag는 기본 클릭시 이동링크가 걸려있다. return false는 수행하지 말라는 뜻
	}
}
