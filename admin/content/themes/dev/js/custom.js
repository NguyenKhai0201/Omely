
jQuery(document).on('click', function(event) {

	if (!jQuery(event.target).closest('.aside-item .aside-title').length) {
		jQuery('.filter-content .aside-itemxx').removeClass('active');		
	}
	if (!jQuery(event.target).closest('aside.aside-item.collection-category').length) {
		jQuery('aside.aside-item.collection-category').removeClass('active');		
	}		
});

jQuery(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		jQuery('.loading').removeClass('loaded-content');
	},500);
	return false;
})


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){
	jQuery('.nav-category .fa-angle-down').click(function(e){
		jQuery(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;

/********************************************************
# MENU MOBILE
********************************************************/
function awe_menumobile(){


} window.awe_menumobile=awe_menumobile;

/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	jQuery('.accordion .nav-link').click(function(e){
		e.preventDefault;
		jQuery(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/

/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if (jQuery('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = jQuery(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					jQuery('.back-to-top').addClass('show');
				} else {
					jQuery('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		jQuery(window).on('scroll', function () {
			backToTop();
		});
		jQuery('.back-to-top').on('click', function (e) {
			e.preventDefault();
			jQuery('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

/********************************************************
# TAB
********************************************************/
function awe_tab() {
	jQuery(".e-tabs").each( function(){
		jQuery(this).find('.tabs-title li:first-child').addClass('current');
		jQuery(this).find('.tab-content').first().addClass('current');

		jQuery(this).find('.tabs-title li').click(function(){
			var tab_id = jQuery(this).attr('data-tab');
			var url = jQuery(this).attr('data-url');
			jQuery(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			jQuery(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			jQuery(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			jQuery(this).addClass('current');
			jQuery(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;


function tabcustome() {
	jQuery(".tabcustome_js").each( function(){
		var print_img = jQuery('.imagechanged a img'),
			href = jQuery('.imagechanged a');

		var imgfirst = jQuery(this).find('li.active').attr('data-image'),
			url = jQuery(this).find('li.active').attr('data-url'),
			title = jQuery(this).find('li.active').attr('data-title');

		jQuery(href).attr('href', url);
		jQuery(print_img).attr('src', imgfirst);
		jQuery(print_img).attr('alt', title);


		jQuery('ul li').click(function(){
			var tab_id = jQuery(this).attr('data-tab');
			var imgchanged = jQuery(this).attr('data-image'),
				title = jQuery(this).attr('data-title'),
				url_run = jQuery(this).attr('data-url');

			jQuery('ul li').removeClass('active');
			jQuery('.tab-content').removeClass('current');
			/*fill content check image*/

			jQuery(href).attr('href', url_run);
			jQuery(print_img).attr('src', imgchanged);
			jQuery(print_img).attr('alt', title);

			jQuery(this).addClass('active');
			jQuery("#"+tab_id).addClass('current');
		})
	});
}window.tabcustome=tabcustome;


/********************************************************
# DROPDOWN
********************************************************/
jQuery('.dropdown-toggle').click(function() {
	jQuery(this).parent().toggleClass('open'); 	
}); 
jQuery('.btn-close').click(function() {
	jQuery(this).parents('.dropdown').toggleClass('open');
}); 
jQuery('body').click(function(event) {
	if (!jQuery(event.target).closest('.dropdown').length) {
		jQuery('.dropdown').removeClass('open');
	};
});





/************************************/
/*Show hide Recoverpass*/
jQuery('.recv-text #rcv-pass').click(function(){
	jQuery('.form_recover_').slideToggle('500');
});
/*End*/

jQuery('a.btn-support').click(function(e){
	e.stopPropagation();
	jQuery('.support-content').slideToggle();
});
jQuery('.support-content').click(function(e){
	e.stopPropagation();
});
jQuery(document).click(function(){
	jQuery('.support-content').slideUp();
});
/*dang ky*/
jQuery(".accept_submit input").click(function() {
	if(jQuery(this).is(":checked"))
	{
		jQuery('.button_register').removeAttr('disabled');
	}else {
		jQuery('.button_register').attr('disabled', 'disabled');
	}
});



/***************************************/
jQuery(document).ready(function(){
	var wDW = jQuery(window).width();
	/*Footer*/
	if(wDW > 767){
		jQuery('.toggle-mn').show();
	}else {
		jQuery('.footer-click > .cliked').click(function(){
			jQuery(this).toggleClass('open_');
			jQuery(this).next('ul').slideToggle("fast");
			jQuery(this).next('div').slideToggle("fast");
		});
	}
	if (wDW < 991) {
		jQuery(".filter-group li span label").click(function(){
			jQuery('.dqdt-sidebar').removeClass('openf');
			jQuery('.open-filters').removeClass('openf');
			jQuery('.opacity_filter').removeClass('opacity_filter_true');
		});
		jQuery('.opacity_filter').click(function(e){
			jQuery('.dqdt-sidebar').removeClass('openf');
			jQuery('.open-filters').removeClass('openf');
			jQuery('.opacity_filter').removeClass('opacity_filter_true');
		});
	}
	if (wDW > 992) {
		jQuery(".button_clicked").click(function(){ 
			jQuery('.search_pc').slideToggle('fast');
		})
	}
});
jQuery('.cate_padding  li .fa').click(function() {
	jQuery(this).closest('li').find('> ul').slideToggle("fast");
	jQuery(this).closest('i').toggleClass('fa-caret-down fa-caret-up');
	return false;              
}); 
/*Open filter*/
jQuery('.open-filters').click(function(e){
	e.stopPropagation();
	jQuery(this).toggleClass('openf');
	jQuery('.opacity_filter').toggleClass('opacity_filter_true');
	jQuery('.dqdt-sidebar').toggleClass('openf');
});

jQuery('.button-menu').click(function(){
	jQuery('.menu_mobile').slideToggle('fast');
});

jQuery('.ul_collections li > .fa').click(function(){
	jQuery(this).parent().toggleClass('current');
	jQuery(this).toggleClass('fa-angle-down fa-angle-up');
	jQuery(this).next('ul').slideToggle("fast");
	jQuery(this).next('div').slideToggle("fast");
});


jQuery('.opacity_menu').click(function(e){
	jQuery('.menu_mobile').removeClass('open_sidebar_menu');
	jQuery('.opacity_menu').removeClass('open_opacity');
});
jQuery('.ct-mobile li .ti-plus').click(function() {
	jQuery(this).closest('li').find('> .sub-menu').slideToggle("fast");
	jQuery(this).closest('i').toggleClass('show_open hide_close');
	return false;              
});


/*********************Login register modal **********************/
jQuery('.op_login').click(function(e){
	jQuery('.op_login').removeClass('op_login_true');
	jQuery('.modal_register').hide();
	jQuery('.modal_login').hide();
});
/*dang ky click*/
jQuery('.register_click').click(function(e){
	jQuery('.op_login').toggleClass('op_login_true');
	jQuery('.modal_register').show();
});
/*dang nhap tư form dang ky*/
jQuery('.login_form').click(function(e){
	jQuery('.op_login').add('op_login_true');
	jQuery('.modal_login').show();
	jQuery('.modal_register').hide();
});
/*dang nhap click*/
jQuery('.login_click').click(function(e){
	jQuery('.op_login').toggleClass('op_login_true');
	jQuery('.modal_login').show();
});
/*dang ky tu form dang nhap*/
jQuery('.register_form').click(function(e){
	jQuery('.op_login').add('op_login_true');
	jQuery('.modal_register').show();
	jQuery('.modal_login').hide();
});
/***********************Register mua hang ***********************/

jQuery(document).ready(function(){
	jQuery('.op_login').click(function(e){
		jQuery('.op_login').removeClass('op_login_true');
		jQuery('.modal_dichvu').hide();
	});
	jQuery('#closed_dichvu').on('click', function(e){
		e.preventDefault();
		jQuery('.op_login').removeClass('op_login_true');
		jQuery('.modal_dichvu').hide();
	});
	var test = jQuery('.guilienhe_thanhcong').text();
	if (test != '') {
		jQuery('#datlich_thanhcong').modal();
	}
});


/*dang ky click*/
jQuery(document).on('click', '.register_mua', function(e) {
	var str = "";

	var name = jQuery('.details-pro').find('h1.title-product').text();
	var price = jQuery('.details-pro').find('.price-box .product-price').text();

	jQuery('.info_dichvu .name_dichvu').text(name);
	jQuery('.info_dichvu .input-name').val(name);
	price +=str;
	jQuery('.info_dichvu .price-box').html(price);

	var price_ext = jQuery('.info_dichvu').find('.price-box .product-price').text();
	jQuery(".form-ext .namedichvu").attr('value', name);
	jQuery(".form-ext .giadichvu").attr('value', price);




	jQuery('.op_login').toggleClass('op_login_true');

	jQuery('.modal_dichvu').show();
});

/*************************Convertpricefunction**********************/
/*******************************************************************/

function convertprice(price) { 
	jQuery('.product-item-main').each( function(){
		var pricetext = jQuery(this).find('.price-box .getprice').text().replace('₫', ''),
			so = pricetext.toString().length,
			price = pricetext.replace(/\./g, ""), //xóa dấu .
			text = ConvertNumberToText(price);
    	jQuery(this).find('.getprice').html(text);
	});
}window.convertprice=convertprice;


function IsNumber(number) {
    for (var i = 0; i < number.length; i++) {
        var temp = number.substring(i, i + 1);
        if (!(temp >= "0" && temp <= "9")) {
            return false;
        }
    }
    return true;
}

function ConvertNumberToText(price) {
    if (!IsNumber(price))
        return "";
    price = price;
    var priceTy = parseInt(price / 1000000000, 0)
    var priceTrieu = parseInt((price % 1000000000) / 1000000, 0)
    var priceNgan = parseInt(((price % 1000000000)) % 1000000 / 1000, 0)
    var priceDong = parseInt(((price % 1000000000)) % 1000000 % 1000, 0)
    var strTextPrice = ""
    if (priceTy > 0 && parseInt(price, 0) > 900000000) {
        if (priceTrieu > 0) {
            getTrieu = "," + priceTrieu / 100;
        } else {
            getTrieu = '';
        }
        strTextPrice = strTextPrice + priceTy + getTrieu + " Tỷ ";
    }
    if (priceTy == 0 && priceTrieu > 0) {
        if (priceNgan > 0) {
            getNgan = "," + priceNgan / 100;
        } else {
            getNgan = '';
        }
        strTextPrice = strTextPrice + priceTrieu + getNgan + " Triệu ";
    }
    if (priceTrieu == 0 && priceNgan > 0) {
        if (priceDong > 0) {
            getDong = "," + priceDong / 100;
        } else {
            getDong = '';
        }
        strTextPrice = strTextPrice + priceNgan + getDong + " Ngàn ";
    }
    if (priceNgan == 0 && priceDong > 0) {
        strTextPrice = strTextPrice + priceDong + " Đồng";
    }
    strTextPrice = strTextPrice.replace(/\./g, "");
    return strTextPrice;
}



/*JS CHECK SÐT NHẬP TEXT*/
function preventNonNumericalInput(e) {
	e = e || window.event;
	var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
	var charStr = String.fromCharCode(charCode);

	if (!charStr.match(/^[0-9]+jQuery/))
		e.preventDefault();
}