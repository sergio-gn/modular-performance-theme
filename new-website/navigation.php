<style>
/*******  globals *********/
body{
    margin: 0;
}
header{
    font-family: system-ui;
}
/* Fixed width container */
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
}

/* Responsive fixed width container for small screens */
@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

/* Responsive fixed width container for medium screens */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

/* Responsive fixed width container for large screens */
@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

/* Responsive fixed width container for extra large screens */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}


.img-auto{
    width:100%;
    height:auto;
}
.p-1{
    padding:1rem;
}
.py-1{
    padding: 1rem 0;
}
.d-flex{
    display:flex;
}
.flex-end{
    justify-content: flex-end;
}
.align-center{
    align-items: center;
}
.justify-center{
    justify-content: center;
}
.justify-between{
    justify-content: space-between;
}
.d-grid{
    display:grid;
}
.grid-5{
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.text-center{
    text-align:center;
}
.text-right{
    text-align:right;
}
.text-white{
    color:#fff;
}
.gap-_25{
    gap: 0.25rem;
}
.gap-1{
    gap:1rem;
}
.gap-2{
    gap:2rem;
}
/*******  top-bar *********/
.top-bar{
    background-color: #000;
}
.link-header{
    color:#fff;
    text-decoration: none;
}
.link-header:hover{
    color: #d42127;
}
.social-icon{
    background: #d42127;
    border-radius: 5px;
    padding: 8px;
}
.social-icon:hover{
    background: #fff;
    border-radius: 5px;
    padding: 8px;
}
.social-icon:hover svg {
    fill: #d42127;
}
/*******  logo-bar *********/

.top-details li{
    list-style: none;
}
/*******  navigation-bar *********/
.nav-class ul{
    display:flex;
    list-style: none;
}
.ast-menu-toggle{
    display:none;
}
.icon-arrow{
    display:none;
}
.menu-item-has-children .icon-arrow{
    display:unset;
}
.navigation-bar {
    background-color: #ececec;
}

.menu-main-menu-container ul.nav-class {
    display:flex;
    justify-content: space-between;
    list-style-type: none; /* Remove default list styles */
    margin: 0;
    padding: 0;
}

.menu-main-menu-container li a {
    padding:1rem;
    display:block;
    color:#000;
    font-weight: bold;
    font-size:1rem;
    text-decoration: none; /* Remove underline from links */
}

.menu-main-menu-container li a:hover {
    color: #d42127;
}

/* Styling for sub-menu items */
.menu-main-menu-container ul.nav-class li ul.sub-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 30%) 7px 8px 8px 0px;
    padding: 0;
    z-index:999;
}

.menu-main-menu-container ul.nav-class li ul.sub-menu li {
    display: block; /* Display sub-menu items vertically */
}

.menu-main-menu-container ul.nav-class li:hover ul.sub-menu {
    display: block; /* Show sub-menu on hover */
}

.menu-item-has-children .sub-menu li a{
    padding:1rem;
    text-decoration: none;
    display:block;
}
.menu-main-menu-container .menu-item-has-children .sub-menu li a:hover {
    color: #fff;
}

.menu-item-has-children .sub-menu li:hover{
    background: #d42127;
}
.head-book{
    color: #fff !important;
    background: linear-gradient(-45deg, #d42127, #000000, #d42127, #000000);
    background-size: 400% 400%;
    animation: gradient 8s ease infinite;
}
.head-book a{
    color: #fff !important;
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.desktop_none{
    display:none;
}
@media(max-width:1100px){
    .menu-main-menu-container{
        display:none;
    }
    .mobile_nav{
        padding: 0.7rem;
    }
    .button_mb{
        background: #000;
        color: #fff;
        border: none;
        padding: 0.5rem 1rem;
    }
    .menu-main-menu-container ul.nav-class{
        flex-direction: column;
    }
    .menu-main-menu-container.active{
        display: block;
    }
    .custom-logo{
        width: 40%;
    }
    .mb_none{
        display:none;
    }
    .desktop_none{
        display:block;
    }
    .grid-1_mb{
        grid-template-columns: 1fr;
    }
    .p-0_mb{
        padding:0;
    }
    .m-0_mb{
        margin:0;
    }
}
</style>
<header>
    <div class="top-bar">
		<div class="container">
		    <div class="d-flex flex-end">
		        <div class="d-flex align-center gap-1">
		            <div>
		                <p>
		                    <span style="color: #d42127;">Need Help?: </span> 
		                    <a class="link-header" href="tel:+611300317328">
		                        <svg style="margin-bottom: -0.1rem;" fill="#d42127"  width="20" height="20"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 431.579 431.579" xml:space="preserve"><g><path d="M374.052,366.976v-89.005c0-40.229-25.7-74.354-61.543-87.122v-43.24c0-15.75-12.791-28.52-28.537-28.52 c-15.771,0-28.555,12.77-28.555,28.52c0,0,2.943,37.793-35.075,37.793c-38.042,0-42.058-37.793-42.058-37.793 c0-15.75-12.755-28.52-28.528-28.52c-15.761,0-28.537,12.77-28.537,28.52v44.803c-33.585,13.89-57.216,46.95-57.216,85.552v89.749 c-6.783,3.896-11.419,11.101-11.419,19.482c0,12.43,10.095,22.514,22.508,22.514h289.214c12.454,0,22.538-10.084,22.538-22.514 C386.849,378.265,381.6,370.616,374.052,366.976z M219.024,327.976c-27.807,0-50.36-22.543-50.36-50.348 c0-27.816,22.559-50.354,50.36-50.354c27.798,0,50.372,22.537,50.372,50.354C269.396,305.438,246.828,327.976,219.024,327.976z M245.469,277.309c0,14.931-12.094,27.013-27.027,27.013c-14.919,0-27.012-12.082-27.012-27.013s12.093-27.023,27.012-27.023 C233.375,250.285,245.469,262.378,245.469,277.309z M430.754,137.212l0.047,0.018c-0.112,0.521-0.225,1.005-0.319,1.52 c-0.177,0.913-0.36,1.755-0.538,2.58c-0.082,0.337-0.147,0.694-0.23,1.058c-1.081,4.43-2.109,7.01-2.109,7.01 s-0.071-0.068-0.16-0.136c-7.654,19.201-24.535,31.239-41.653,24.988l-37.864-15.767c-20.428-7.454-33.349-35.216-28.897-62.016 l0.366-2.175c-46.316-12.886-138.714-17.898-207.562,1.581l0.84,5.098c4.457,26.799-8.497,54.55-28.901,61.995L45.93,174.822 c-19.919,7.271-39.531-5.556-44.626-31.153c-4.74-15.058-7.492-117.674,199.772-121.652 C419.564,17.812,436.298,104.522,430.754,137.212z"/></g></svg>
		                        1300 317 328
		                    </a>
		                </p>
		            </div>
		            <div class="d-flex align-center gap-_25">
                        <a class="social-icon" href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i class="footer-icon">
                                <img src="./assets/facebook.svg" alt="facebook" width="25" height="25">
                            </i>
                        </a>
                        <a class="social-icon" href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i class="footer-icon">
                                <img src="./assets/instagram.svg" alt="instagram" width="25" height="25">
                            </i>    
                        </a>
		            </div>
		        </div>
		    </div>
        </div>
	</div>
	<div class="logo-bar">
		<div class="container mobile_nav">
	        <div class="d-flex align-center justify-between gap-1">
	            <div class="custom-logo">
                    <a href="#" class="custom-logo-link" rel="home" aria-current="page">
                        <img class="img-auto" width="220" height="81" src="#" class="custom-logo" alt="Your Website Logo">
                    </a>
	            </div>
	            <div>
                    <ul class="mb_none top-details p-1 p-0_mb m-0_mb">
                        <li class="d-flex align-center gap-_25">
        	                <div>
        	                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#d42127" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        	                </div>
                            <strong>Mon – Sat: 07:00 – 17:00</strong>
                        </li>
                        <li class="text-right">
                            Emergency service 24/7
                        </li>
                    </ul>
                    <button class="button_mb desktop_none" onclick="toggleActiveClass()">
                        ☰
                    </button>
	            </div>
	        </div>
        </div>
	</div>
	<div class="navigation-bar">
	    <div class="container">
    	    <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-class', // Add a CSS class to style the menu
                    // You can add more parameters as needed
                ));
            ?>
	    </div>
	</div>
    <script>
        function toggleActiveClass() {
          var menuContainer = document.querySelector('.menu-main-menu-container');
          menuContainer.classList.toggle('active');
        }
    </script>
</header>