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
    .menu-item a{
        text-decoration: none;
        color: #000;
        font-weight: 600;
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
    .grid-4{
        grid-template-columns: 1fr 1fr 1fr 1fr;
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
    /*******  navbar-bar *********/
    .navbar-bar{
        position: relative;
        z-index: 1;
    }

    .top-details li{
        list-style: none;
    }
    /*******  navigation bar *********/
    .nav-class{
        display:flex;
        list-style: none;
        gap: 1rem;
    }
    .ast-menu-toggle{
        display:none;
    }
    .icon-arrow{
        display:none;
    }
    .menu-item-has-children .sub-menu{
        display:none
    }
    .menu-item-has-children .sub-menu {
        display: none;
        transition: display 0.3s ease-in-out;
        list-style: none;
        padding: 0;
    }
    .menu-item-has-children:hover .sub-menu {
        display: block;
        position: absolute;
    }
    .menu-item-has-children:after{
        content: '⌵';
    }
    .menu-item-has-children .icon-arrow{
        display:unset;
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
        .navigation{
            display:none;
        }
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
	<div class="navbar-bar">
		<div class="container mobile_nav">
	        <div class="d-flex align-center justify-between gap-1">
	            <div class="custom-logo">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="custom-logo-link" rel="home" aria-current="page">
                        <?php
                            $custom_logo_id = get_theme_mod( 'custom_logo' );
                            $custom_logo_url = wp_get_attachment_image_url( $custom_logo_id, 'full' );
                            if ( $custom_logo_url ) {
                                echo '<img src="' . esc_url( $custom_logo_url ) . '" alt="' . get_bloginfo( 'name' ) . '">';
                            } else {
                                echo '<img src="' . esc_url( get_template_directory_uri() . '/path-to-default-logo.png' ) . '" alt="' . get_bloginfo( 'name' ) . '">';
                            }
                        ?>
                    </a>
	            </div>
                <div class="navigation">
                    <div class="container">
                        <?php
                            wp_nav_menu(array(
                                'theme_location' => 'primary_menu',
                                'menu_class' => 'nav-class', // Add a CSS class to style the menu
                                // You can add more parameters as needed
                            ));
                        ?>
                    </div>
                </div>
	            <div>
                    <?php echo do_shortcode('[custom_buttons]') ?>
	            </div>
	        </div>
        </div>
	</div>
    <script>
        function toggleActiveClass() {
          var menuContainer = document.querySelector('.menu-main-menu-container');
          menuContainer.classList.toggle('active');
        }
    </script>
</header>