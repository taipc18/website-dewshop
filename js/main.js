document.addEventListener("DOMContentLoaded",function(){
    var iconX = document.querySelector(".header__colse");
    var overlay = document.querySelector(".header__overlay");
// Khai báo scroll
    var menuScroll = document.querySelector(".header__overlay");
    var menuGroup = document.querySelector(".menu__group");
// Khai báo menu bars
    var backgroud = document.querySelector(".menu__bars");
    var navMobile = document.querySelector(".nav__mobile");
    var barsColse = document.querySelector(".nav__mobile-colse");
    var barsMenu = document.querySelector(".menu__bars-btn");
    var thoigian = setInterval(function(){ 
        autoSlide() 
    },2000);
// Xử lí code close menu 1
    iconX.onclick = function(){
        overlay.classList.add('close__X');
    };
// Xử lí code menu bars
    barsMenu.onclick = function(){
        backgroud.classList.add('br__overlay');
        navMobile.classList.add('menu__right');
    }
    barsColse.onclick = function(){
        navMobile.classList.remove('menu__right')
        backgroud.classList.remove('br__overlay');
    }
    backgroud.onclick = function(){
        this.classList.remove('br__overlay')
        navMobile.classList.remove('menu__right')
    }
// Xử lí code scroll menu
    window.addEventListener('scroll',function(){
        // console.log(window.pageYOffset);
        if( window.pageYOffset > 100 ){
            menuScroll.classList.add('menu-scroll');
            menuGroup.classList.add('menu-group');
        }else if( window.pageYOffset < 100 ){
            menuScroll.classList.remove('menu-scroll');
            menuGroup.classList.remove('menu-group');
        }
    })
// Xử lí slide
    var rs = document.querySelectorAll(".rs__slide ul li");
    var slide = document.querySelectorAll(".slide__group ul li") 
// bắt sự kiện cho từng nút
    for (let i = 0; i < rs.length; i++) {
        rs[i].addEventListener('click',function(){
            console.log("click slide sắp thành công");
            for (let i = 0; i < rs.length; i++) {
                rs[i].classList.remove('active')
            }
            this.classList.add('active')
//Xử lý vị trí của slide
            var openKickHoat = this; 
            var viTri = 0;
            for (viTri = 0; openKickHoat = openKickHoat.previousElementSibling; viTri++) {}
                // console.log("vi tri của class:",viTri);
// Bước 1: cho all slide ẩn đi bằng cách rovemo .active 
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('activeSlide');
                slide[viTri].classList.add('activeSlide');
            }
        });
    }
// hết sự kiện 
    function autoSlide(){
        clearInterval(thoigian);
// Bước 1: xem  vị trí slide nào hiện thị.
        var viTri2 = 0;
        var slideHienTai = document.querySelector(".slide__group ul li.activeSlide");
        console.log(slideHienTai.previousElementSibling);
        console.log(slideHienTai);
        for (viTri2 = 0; slideHienTai = slideHienTai.previousElementSibling; viTri2++) {}
            if(viTri2 < (slide.length - 1)){
                // Ẩn các phẩn tử đi 
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('activeSlide');
                    rs[i].classList.remove('active');
                }
// Cho các phẩn tử slide hiển ra
                    slide[viTri2].nextElementSibling.classList.add('activeSlide');
                    rs[viTri2].nextElementSibling.classList.add('active');
            }else{
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('activeSlide');
                    rs[i].classList.remove('active');
                }
                    slide[0].classList.add('activeSlide');
                    rs[0].classList.add('active');
            }
            console.log("vi tri slide hien tai la", viTri2);
        
        
    }
},false)

