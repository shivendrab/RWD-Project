var mobilenamespace = {
    loadcarousel: function(t) {
        var o = t.mobilecarousel;
		
		$("#imgcarousel1").attr("alt", o[0].id),
        $("#h4carousel1txt").text(o[0].h4carousel1txt),
        $("#strongcarousel1txt").text(o[0].strongcarousel1txt),
        $("#pcarousel1txt").text(o[0].pcarousel1txt),
        $("#btncarousel1txt").text(o[0].btncarousel1txt),
		
		$("#imgcarousel2").attr("alt", o[1].id),
        $("#h4carousel2txt").text(o[1].h4carousel2txt),
        $("#strongcarousel2txt").text(o[1].strongcarousel2txt),
        $("#pcarousel2txt").text(o[1].pcarousel2txt),
        $("#btncarousel2txt").text(o[1].btncarousel2txt),
		
		$("#imgcarousel3").attr("alt", o[2].id),
        $("#h4carousel3txt").text(o[2].h4carousel3txt),
        $("#strongcarousel3txt").text(o[2].strongcarousel3txt),
        $("#pcarousel3txt").text(o[2].pcarousel3txt),
        $("#btncarousel3txt").text(o[2].btncarousel3txt)
    },
    loaddata: function(t) {
        this.loadcarousel(t),
        this.loadimage(t),		
		
        $("#home").text(t.navbar[0]),
        $("#Mobiles").text(t.navbar[1]),
        $("#hotdeal").text(t.navbar[2]),
        $("#about").text(t.navbar[3]),
        $("#contact").text(t.navbar[4]),
		
		$("#lnkNewArrival1").text(t.newarrivals[0].label0),
		$("#lnkNewArrival2").text(t.newarrivals[1].label1),
		$("#lnkNewArrival3").text(t.newarrivals[2].label2),
		$("#lnkNewArrival4").text(t.newarrivals[3].label3),
		
		$("#imgNewArrival1").attr("alt", t.newarrivals[0].label0),
		$("#imgNewArrival2").attr("alt", t.newarrivals[1].label1),
		$("#imgNewArrival3").attr("alt", t.newarrivals[2].label2),
		$("#imgNewArrival4").attr("alt", t.newarrivals[3].label3),
		
		$("#imgNewArrivalcart1").attr("alt", t.newarrivals[0].description),
		$("#imgNewArrivalcart1").attr("alt", t.newarrivals[1].description),
		$("#imgNewArrivalcart1").attr("alt", t.newarrivals[2].description),
		$("#imgNewArrivalcart1").attr("alt", t.newarrivals[3].description),
		
		$("#imgNewArrivalWish1").attr("alt", t.newarrivals[0].description),
		$("#imgNewArrivalWish2").attr("alt", t.newarrivals[1].description),
		$("#imgNewArrivalWish3").attr("alt", t.newarrivals[2].description),
		$("#imgNewArrivalWish4").attr("alt", t.newarrivals[3].description),
		        
        $("#newArrivalMain1").text(t.information[0].Mainlabel01),
        $("#newArrivalMain2").text(t.information[0].Mainlabel02),
        $("#newArrivalDesc").text(t.information[0].description),
		
		$("#bestSalesMain1").text(t.information[1].Mainlabel01),
        $("#bestSalesMain2").text(t.information[1].Mainlabel02),
        $("#bestSalesDesc").text(t.information[1].description),
		
		$("#h3LoadAllbtntxt").text(t.information[4].Mainlabel01),
		
		$("#imgSalesProduct1").attr("alt", t.sales[0].label0),
		$("#imgSalesProduct2").attr("alt", t.sales[1].label1),
		$("#imgSalesProduct3").attr("alt", t.sales[2].label2),
		
		$("#lnkSalesProduct1").text(t.sales[0].label0),
		$("#lnkSalesProduct2").text(t.sales[1].label1),
		$("#lnkSalesProduct3").text(t.sales[2].label2),
		
		$("#userReviewsMain1").text(t.information[2].Mainlabel01),
        $("#userReviewsMain2").text(t.information[2].Mainlabel02),
        $("#userReviewsDesc").text(t.information[2].description),		
		
		$("#imgReviewsProduct1").attr("alt", t.reviews[0].id),
		$("#imgReviewsProduct2").attr("alt", t.reviews[1].id),
		$("#imgReviewsProduct3").attr("alt", t.reviews[2].id),
		
		$("#txtReviewsProduct1").text(t.reviews[0].description),
		$("#txtReviewsProduct2").text(t.reviews[1].description),
		$("#txtReviewsProduct3").text(t.reviews[2].description),
		
		$("#txtNewsLetter").text(t.information[3].Mainlabel01),
        $("#txtTypeEmail").text(t.information[3].Mainlabel02),
        $("#txtNewsLetterDesc").text(t.information[3].description),
		$("#btnSubscribe").text(t.information[3].buttontext),
		
		$("#imgEmail").attr("alt", t.information[4].Mainlabel02),
		
		$("#about1").append(t.footer[0].aboutfooter),
        $("#Sub1").append(t.footer[0].subfooter),
		$("#Sub2").append(t.footer[0].subfooter),
		
		$("#imgpayment").attr("alt", t.payments[2].description),
		
        $("#paymenticons").append(t.payments[0].description)      
        
    },
    loadimage: function(t) {
        var o = t.imageLoad[0];
		
		$("#imgcarousel1").attr("src", o.imgcarousel1),
		$("#imgcarousel2").attr("src", o.imgcarousel2),
		$("#imgcarousel3").attr("src", o.imgcarousel3),
		
		$("#imgNewArrival1").attr("src", o.imgNewArrival1),
		$("#imgNewArrival2").attr("src", o.imgNewArrival2),
		$("#imgNewArrival3").attr("src", o.imgNewArrival3),
		$("#imgNewArrival4").attr("src", o.imgNewArrival4),
		
		$("#imgNewArrivalcart1").attr("src", o.imgNewArrivalcart1),
		$("#imgNewArrivalcart2").attr("src", o.imgNewArrivalcart2),
		$("#imgNewArrivalcart3").attr("src", o.imgNewArrivalcart3),
		$("#imgNewArrivalcart4").attr("src", o.imgNewArrivalcart4),
		
		$("#imgNewArrivalWish1").attr("src", o.imgNewArrivalWish1),
		$("#imgNewArrivalWish2").attr("src", o.imgNewArrivalWish2),
		$("#imgNewArrivalWish3").attr("src", o.imgNewArrivalWish3),
		$("#imgNewArrivalWish4").attr("src", o.imgNewArrivalWish4),
		
		$("#imgSalesProduct1").attr("src", o.imgSalesProduct1),
		$("#imgSalesProduct2").attr("src", o.imgSalesProduct2),
		$("#imgSalesProduct3").attr("src", o.imgSalesProduct3),
		
		$("#imgReviewsProduct1").attr("src", o.imgReviewsProduct1),
		$("#imgReviewsProduct2").attr("src", o.imgReviewsProduct2),
		$("#imgReviewsProduct3").attr("src", o.imgReviewsProduct3),
		
		$("#imgEmail").attr("src", o.imgemail),
		$("#imgpayment").attr("src", o.imgpaymenticon),
		
        $("#headersrc").attr("src", o.imgsearch24),
        $("#headerusr").attr("src", o.imguser24),
        $("#headercart").attr("src", o.imgcart32),
        $("#imglogo").attr("src", o.imglogo) 
		$("#whishlist1").attr("src", o.whishlist1)		
    }
};
