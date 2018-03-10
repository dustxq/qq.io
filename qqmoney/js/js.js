	$(function(){
		$(window).resize(function(){
			var wdh = $(window).width();
			var sze = wdh/(750/0.625);
			$('html').css('font-size',sze*100+"%");
		});
		$('.layout').fullpage({
            //anchors: ['page1', 'page2', 'page3'],
            //'navigation': true,
            //'navigationPosition': 'right',
            afterLoad: function(anchorLink, index){
                    //$('.section1').addClass('loaded');
                    //alert('ok');
            },
            onLeave: function(index, direction){
                    
            }
        });
        //ios
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		   //alert(navigator.userAgent); 
		   
		   //add a new meta node of viewport in head node
		        head = document.getElementsByTagName('head');
		        viewport = document.createElement('meta');
		        viewport.name = 'viewport';
		        viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
		        head.length > 0 && head[head.length - 1].appendChild(viewport);    
		   
		}
	})