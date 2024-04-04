<style>
    .footer-background {
        background: #000;
        width: 100%; /* Set the width of the container */
        height: 100%; /* Set the height of the container */
        overflow: hidden; /* Hide overflow content */
        position: relative; /* Establishes a positioning context for absolute positioning */
    }
        
    .footer-background img {
      position: absolute; /* Position the image absolutely within its container */
      width: 100%; /* Set the width of the image to fill the container */
      height: 100%; /* Set the height of the image to fill the container */
      top: 0; /* Position the image at the top */
      left: 0; /* Position the image at the left */
      object-fit: repeat; /* Repeat the image */
    }
    .site-footer {
        font-family: system-ui;
    }
    .z-1{
        position:relative;
        z-index:1;
    }
    .footer-bottom{
        background-color: #d42127;
        font-family: system-ui;
    }
    .widget-title-1 {
        font-size: 24px !important;
        font-weight: 600 !important;
        color: #D42127 !important;
        padding-left: 0px !important;
    }
    .site-primary-footer-wrap{
        padding: 3rem;
    }
    .site-primary-footer-wrap a {
        color: #5d5e5e;
        text-decoration: none;
    }
    .site-primary-footer-wrap a:hover {
        color: #D42127 !important;
    }
    .site-footer .menu-item{
        position: relative;
        padding: 0.5rem 0;
        list-style:none;
    }
    .site-footer .menu-item:before {
        content: '>';
        display: block;
        font-family: cursive;
        position: absolute;
        left: -1rem;
        font-weight: 900;
        color: #D42127;
    }
    .footer-icon {
        background: #d42127;
        box-shadow: 4px 4px 0 0 #000000;
        border-radius: 5px;
        height: 2rem;
        width: 2rem;
        padding: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer-ques {
        background: #3A3A3A;
        padding: 50px 35px;
        outline: 1px dashed #888;
        outline-offset: -15px;
        text-align: center;
        color: #fff;
        font-weight:bold;
    }
    .footer-ques:hover {
        background: #D42127;
        transition: 0.5s;
        outline-color: #fff !important;
    }
    .footer-ques a {
        color: #fff;
        font-weight: bold;
    }
    .footer-ques a:hover {
        color: #000!important;
    }
    .footer-rec{
        color: white;
        text-align: center;
        font-size: 2rem;
        margin: 0;
    }
    .footer-payment{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .footer-payment li{
        list-style:none;
    }
    .footer-payment li img {
        width: 70px;
        height:auto;
        padding-right: 3px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .footer-hours{
        color:#fff;
        margin:0;
    }
</style>
<footer style="background:#000" class="site-footer z-1" id="colophon" itemtype="https://schema.org/WPFooter" itemscope="itemscope" itemid="#colophon">
	<div class="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-5-equal ast-builder-grid-row-tablet-5-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
	    <div class="ast-builder-grid-row-container-inner">
			<div class="d-grid grid-5 grid-1_mb gap-2">
				<div class="site-footer-primary-section-1 site-footer-section site-footer-section-1">
					<aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
			            <section id="media_image-2" class="widget widget_media_image">
			                <a href="#">
			                    <img width="238" height="89" src="#" class="image wp-image-447  attachment-full size-full" alt="white-logo" style="max-width: 100%; height: auto;" decoding="async" loading="lazy">
			                </a>
			            </section>		
			        </aside>
				</div>
				<div class="site-footer-primary-section-2 site-footer-section site-footer-section-2">
					<aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-4" aria-label="Footer Widget 4">
			            <section id="custom_html-12" class="widget_text widget widget_custom_html">
			                <div class="textwidget custom-html-widget">	
			                    <p class="widget-title-1">#</p>
			                </div>
			            </section>
			            <section id="nav_menu-4" class="widget widget_nav_menu">
			                        <?php
                                        wp_nav_menu( array(
                                            'theme_location' => 'footer-1',
                                            'container'      => false,
                                            'menu_class'     => 'footer-menu-list',
                                        ) );
                                    ?>
			            </section>		
			        </aside>
				</div>
				<div class="site-footer-primary-section-3 site-footer-section site-footer-section-3">
					<aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-2" aria-label="Footer Widget 2">
			            <section id="custom_html-17" class="widget_text widget widget_custom_html">
			                <div class="textwidget custom-html-widget">	
			                    <p class="widget-title-1">
			                        Services
			                    </p>
			                </div>
			            </section>
			            <section id="nav_menu-8" class="widget widget_nav_menu">
			                        <?php
                                        wp_nav_menu( array(
                                            'theme_location' => 'footer-2',
                                            'container'      => false,
                                            'menu_class'     => 'footer-menu-list',
                                        ) );
                                    ?>
			            </section>
			            <section id="custom_html-20" class="widget_text widget widget_custom_html">
			                <div class="textwidget custom-html-widget">	
    			                <p class="widget-title-1">
    			                    Support
    			                </p>
			                </div>
			            </section>
			            <section id="nav_menu-9" class="widget widget_nav_menu">
			                <?php
                                wp_nav_menu( array(
                                    'theme_location' => 'footer-2',
                                    'container'      => false,
                                    'menu_class'     => 'footer-menu-list',
                                ) );
                            ?>
			            </section>		
			        </aside>
				</div>
			    <div class="site-footer-primary-section-4 site-footer-section site-footer-section-4">
					<aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3">
			            <section id="custom_html-4" class="widget_text widget widget_custom_html">
			                <div class="textwidget custom-html-widget">
			                    <div class="footer-contact">
                                	<p class="widget-title-1">
                                		  Contact Us
                                	</p>
                                	<div class="d-flex gap-1">
                                	    <i class="footer-icon">
                                		    <svg fill="#fff" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"/></svg>
                                	    </i>
                                	    <div>
                                		    <a style="color:#fff;" href="https://goo.gl/maps/NZLBbyXvNxxKSrZZ6" target="_blank" rel="noopener">PO Box 63, 3806 Berwick, Australia </a>
                                	    </div>
                                	</div>
                                	<div class="d-flex gap-1 py-1">
                                    	<div class="d-flex gap-1">
                                    	    <i class="footer-icon">
                                        	    <svg fill="#fff" width="20" height="20" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xml:space="preserve">
                                                    <path d="M32,0C14.328,0,0,14.328,0,32s14.328,32,32,32s32-14.328,32-32S49.672,0,32,0z M42.844,42.844 c-1.566,1.566-4.168,1.488-5.734-0.078l-7.934-7.934c-0.371-0.367-0.664-0.812-0.867-1.305C28.105,33.039,28,32.523,28,32V16 c0-2.211,1.789-4,4-4s4,1.789,4,4v14.344l6.859,6.859C44.426,38.77,44.406,41.281,42.844,42.844z"/>
                                                </svg>
                                    	    </i>
                                    	    <div>
                                                <p class="footer-hours">
                                            		Mon – Sat: 07:00 – 17:00<br>
                                                    Emergency service 24/7
                                                </p>
                                    	    </div>
                                    	</div>
                                	</div>
                                </div>
                            <div class="gmap">
                            	<iframe title="Your Website Map Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17778.03813223835!2d145.3424112741802!3d-38.02979716257975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61984ead12b0b%3A0x2d752b8e2771210!2sDirect%20Point%20Electrical%20Berwick!5e0!3m2!1sen!2sau!4v1710477437281!5m2!1sen!2sau" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            
                            </div>
                        </section>
                    </aside>
				</div>
				<div class="site-footer-primary-section-5 site-footer-section site-footer-section-5">
					<aside class="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner" data-section="sidebar-widgets-footer-widget-5">
				        <section id="custom_html-15" class="widget_text widget widget_custom_html">
				            <div class="textwidget custom-html-widget">
				                <div class="footer-ques">
                                	<p style="font-size: 19px; font-weight: 700; color:white;">
                                		Any Questions?
                                	</p>
                                	<p class="call">
                                	    <div>
                                	        <svg fill="#d42127" width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"/></svg>
                                	    </div>
                                		Call Us 
                                	</p>
                                	<p>
                                		<a href="tel:+611300317328">1300 317 328</a>
                                	</p>
                                </div>
                            </div>
                        </section>
                        <section id="custom_html-22" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">
                                <div class="d-flex gap-1 justify-center py-1">
                                    <div>
                                        <a href="#" target="_blank" rel="noopener">
                                            <i class="footer-icon">
                                                <img src="./assets/facebook.svg" alt="facebook" width="25" height="25">
                                            </i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank" rel="noopener">
                                            <i class="footer-icon">
                                                <img src="./assets/instagram.svg" alt="instagram" width="25" height="25">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="custom_html-16" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">
                                <p class="footer-rec">
                                    REC: 22004
                                </p>
                            </div>
                        </section>
                        <section id="custom_html-9" class="widget_text widget widget_custom_html">
                            <div class="textwidget custom-html-widget">
                                <ul class="footer-payment">
                                    <li>
                                        <img loading="lazy" width="120" height="84" src="visa.png" alt="visa">
                                    </li>
                                    <li>
                                        <img loading="lazy" width="120" height="84" src="msc.png" alt="mastercard">
                                    </li>
                                    <li>
                                        <img loading="lazy" width="120" height="84" src="eftpos.png" alt="eftpos">
                                    </li>
                                    <li>
                                        <img loading="lazy" width="120" height="84" src="zips.jpg" alt="zippzy">
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </aside>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom z-1">
	    <div class="text-center p-1">
	        <p class="text-white">Copyright © <?php echo date("Y"); ?>Website Name.</p>
	    </div>
	</div>
</footer>