<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
    <?php $gtag = get_field('google_tag','option'); if (isset($gtag) && !empty($gtag)){echo $gtag;}?>
</head>
<style>
  /*******  globals *********/
    <?php 
        $websitePalette = get_field('website_palette','option');
        if($websitePalette):
    ?>
        :root{
        --main_colour: <?php echo $websitePalette['main_colour'] ?>;
        --main_colour_darker: <?php echo $websitePalette['main_colour_darker'] ?>;
        --secondary_colour: <?php echo $websitePalette['secondary_colour'] ?>;
        --background_colour: <?php echo $websitePalette['background_colour'] ?>;
        --font_gradient_left: <?php echo $websitePalette['font_gradient_colour_1'] ?>;
        --font_gradient_right: <?php echo $websitePalette['font_gradient_colour_2'] ?>;
        --white_tone:<?php echo $websitePalette['white_tone'] ?>;
        --white_tone_darker: <?php echo $websitePalette['white_tone_darker'] ?>;
        --black_tone: <?php echo $websitePalette['black_tone'] ?>;
        --grey_tone: <?php echo $websitePalette['grey_tone'] ?>;
        --light_grey_tone: <?php echo $websitePalette['light_grey_tone'] ?>;
        }
    <?php endif;?> 
    
    ::selection {
        background: var(--main_colour);
        -webkit-text-fill-color: var(--white_tone);
    }
  @media screen and (max-width: 600px) {
      #wpadminbar {
          position: fixed !important;
      }
  }
  body{
      margin: 0;
      font-family: system-ui;
  }
  .text-primary{
      color: var(--main_colour);
  }
  .custom-logo img {
      height: auto;
      max-height: 3rem;
  }
  /* Custom Buttons */
  .cta_button{
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      display: flex!important;
      align-items: center;
      gap: 0.35rem;
      display: block;
      width: fit-content;
      border-radius: 10rem;
      padding: 0.75rem 1rem;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      display: flex!important;
      gap: 0.35rem;
      width: fit-content;
      border-radius: 10rem;
      padding: 0.75rem 1rem;
      text-decoration:none;
      --tw-bg-opacity: 1;
      --tw-text-opacity: 1;
      transition-duration: 1s;
      transition-property: all;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      overflow: hidden;
      height: 2rem;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
  }
  .cta_button_text{
      position: relative;
      z-index: 1;
  }
  .cta_button_primary {
      background-color: var(--main_colour);
      color: var(--white_tone);
      fill: var(--white_tone);
  }
  .cta_button_primary:before {
      --tw-bg-opacity: 1;
      background-color: var(--main_colour_darker);
      content: "";
      height: 0;
      left: 0;
      outline: none;
      position: absolute;
      top: 0;
      transition: all .8s ease;
      width: 0;
      z-index: 1;
  }
  .cta_button_primary:hover {
      --tw-shadow: 4px 4px #ffae35;
      --tw-shadow-colored: 4px 4px;
  }
  .cta_button_primary:hover:before {
      --tw-text-opacity: 1;
      border-radius: 50px;
      color: rgb(255 255 255);
      height: 30px;
      transform: scale(36.5);
      width: 30px;
  }

  .cta_button_secondary {
      background-color: var(--white_tone);
      color: var(--main_colour);
      fill: var(--main_colour);
      border: 1px solid var(--white_tone);
  }
  .cta_button_secondary:before {
      --tw-bg-opacity: 1;
      background-color: var(--main_colour);
      content: "";
      height: 0;
      left: 0;
      outline: none;
      position: absolute;
      top: 0;
      transition: all .8s ease;
      width: 0;
      z-index: 1;
  }
  .cta_button_secondary:hover {
      --tw-shadow: 4px 4px #ffae35;
      --tw-shadow-colored: 4px 4px;
      color: var(--white_tone);
  }
  .cta_button .cta_button_secondary {
      transition: fill 1.5s ease;
  }
  .cta_button:hover .cta_button_secondary{
      fill: var(--white_tone);
  }
  .cta_button_secondary:hover:before {
      --tw-text-opacity: 1;
      border-radius: 50px;
      color: var(--white_tone);
      height: 30px;
      transform: scale(36.5);
      width: 30px;
  }
  
  /* Custom Buttons */

    .light{
        background-color: var(--white_tone);
    }
    .medium{
        background-color: var(--light_grey_tone);
    }
    .dark{
        background-color: var(--black_tone);
    }

    .small-padding{
        padding: 1.5rem 0;
    }
    .medium-padding{
        padding: 2.5rem 0;
    }
    .large-padding{
        padding: 3.5rem 0;
    }

  /* Contact Form */
  .wpcf7{
      width: 40vw;
  }
  .wpcf7-form input, .wpcf7-form textarea {
      background: var(--white_tone);
      padding: 1rem;
      border-radius: 1rem;
      border: none;
      color: var(--black_tone);
      width: 100%;
      box-sizing: border-box;
      box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.3);
      border: solid 1px #cfcfcf;
  }
  .wpcf7-form input[type="submit"]{
      background: var(--main_colour);
      padding: 1rem;
      border-radius: 1rem;
      border:none;
      width:100%;
      color: var(--white_tone);
      box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.3);
      cursor: pointer;
  }
  .wpcf7-form label{
      color: var(--main_colour);
  }
  @media(max-width:1100px){
      .wpcf7{
          width: 100vw;
      }
  }
  /* Contact Form */
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
          max-width: 1100px;
      }
  }

  /* Responsive fixed width container for extra large screens */
  @media (min-width: 1200px) {
      .container {
          max-width: 1400px;
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
      z-index: 90;
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
  .nav-class ul {
      list-style: none;
      display: flex;
      gap: 1rem;
  }
  .ast-menu-toggle{
      display:none;
  }
  .icon-arrow{
      display:none;
  }
  .menu-item-has-children .sub-menu {
      display: none;
      transition: display 0.5s ease-in-out;
      list-style: none;
      padding: 0;
      background: var(--white_tone);
      border-radius:1rem;
  }
  .menu-item-has-children:hover .sub-menu {
      display: block;
      position: absolute;
      transition-duration: 1s;
  }
  .menu-item-has-children div > a:after{
      content: '⌵';
      padding: 0 0 0 0.5rem;
  }
  .sub-menu-toggle{
      display:none;
  }
  .menu-item-has-children .icon-arrow{
      display:unset;
  }
  .navigation ul.nav-class {
      display:flex;
      justify-content: space-between;
      list-style-type: none;
      margin: 0;
      padding: 0;
  }
  .navigation li a {
      padding:1rem;
      display:block;
      color:var(--main_colour_darker);
      font-weight: bold;
      font-size:1rem;
      text-decoration: none;
  }
  .navigation li a:hover {
      color: var(--main_colour);
  }
  .navigation ul.nav-class li ul.sub-menu {
      display: none;
      position: absolute;
      background-color: #fff;
      box-shadow: rgb(0 0 0 / 15%) 7px 8px 8px 0px;
      padding: 0;
      z-index:999;
      overflow:hidden;
  }
  .navigation ul.nav-class li ul.sub-menu li {
      display: block;
  }
  .navigation ul.nav-class li:hover > ul.sub-menu {
      display: block;
  }
  .menu-item-has-children .sub-menu li a{
      padding:1rem;
      text-decoration: none;
      display:block;
      color: var(--main_colour);
      min-width: 10rem;
  }
  .menu-item-has-children .sub-menu li a:hover{
      background: var(--main_colour);
      color: var(--white_tone);
      transition-duration: 0.5s;
  }
  .navigation .menu-item-has-children .sub-menu li a:hover {
      background: var(--main_colour);
      color: var(--white_tone);
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
  .heading_raw h1, .heading_raw h2,.heading_raw h3,.heading_raw h4,.heading_raw h5,.heading_raw h6{
      margin: 0;
      line-height: 1;
  }
  @media(max-width:1100px){
      .menu-item-has-children div > a:after{
          display:none;
      }
      .sub-menu-toggle{
          display:block;
          background: var(--black_tone);
          color: var(--white_tone);
          border: none;
          border-radius: 1rem;
          padding: 0.25rem 0.5rem;
      }
      .menu_item_wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      .navigation ul.nav-class li ul.sub-menu{
          position: unset;
          background-color: #ececec;
          box-shadow: rgb(196 202 198) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      }
      .cta_buttons_nav{
          display:none;
      }
      .navigation{
          display:none;
      }
      .navigation{
          display:none;
      }
      .mobile_nav{
          padding: 0.7rem;
      }
      .button_mb{
          background: var(--black_tone);
          color:var(--white_tone);
          border: none;
          padding: 0.5rem 1rem;
          border-radius:1rem;
      }
      .navigation ul.nav-class{
          flex-direction: column;
      }
      .navigation.active {
          display: block;
          position: absolute;
          right: 0;
          z-index: 1;
          width: 100%;
          top: 4rem;
          background: var(--white_tone);
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
