<style>
    .main-content{
        margin-top: 2rem;
        margin-bottom:2rem;
    }
    .inner_container{
        justify-content: space-between;
    }
    .content-aside{
        overflow-wrap: break-word;
        width: 30%;
    }
    .content-article h1,.content-article h2,.content-article h3,.content-article h4,.content-article h5,.content-article h6,{
        font-weight: 800;
        color: #000;
    }
    .content-article h1{
        font-size:2rem;
    }
    .content-article h2{
        font-size:1.8rem;
    }
    .content-article h3{
        font-size:1.6rem;
    }
    .content-article h4{
        font-size:1.4rem;
    }
    .content-article h5{
        font-size:1.2rem;
    }
    .content-article h6{
        font-size:1.1rem;
    }
    .content-article{
        overflow-wrap: break-word;
        width: 70%;
    }
    .sidebar_style {
        border: 1px solid #D42127;
        padding: 20px 20px 10px;
    }
    .widget_nav_menu li {
        transition: all .2s linear;
    }
    .content-aside .menu{
        padding: 0;
    }
    .content-aside .menu ul {
        margin: none;
        padding: none;
    }
    .content-aside .menu li {
        list-style-type: none;
    }
    .content-aside .menu a {
        display: block;
        background: #f7f7f7;
        padding: 0.5rem 0.7rem;
        color: #000;
        margin-bottom: 10px;
        position: relative;
        transition: 0.5s;
        text-decoration: none;
    }
    .content-aside .menu a:hover {
        background: #5D5E5E;
        color: #fff;
    }
    .content-aside .current-menu-item a {
        background: #5D5E5E;
        transition: 0.5s;
        color: #fff !important;
    }
    .footer-ques, .service-ques {
        background: #3A3A3A;
        padding: 50px 35px;
        outline: 1px dashed #888;
        outline-offset: -15px;
        text-align: center;
        margin:1rem 0;
    }
    .sidebar_cta-title{
        padding: 15px 0 10px;
        margin: 0;
        color: #d42127;
    }
    .book-btn a {
        background: #D42127;
        color: #fff;
        padding: 17px 30px 19px;
    }
    .book-btn a:hover {
        background: #fff;
        color: #000 !important;
    }
</style>
<main class="main-content container">
    <div class="inner_container d-flex gap-2">
        <aside class="content-aside">
            <div class="sidebar_style">
                <div class="wpb_widgetised_column wpb_content_element">
    		        <div>
        			    <nav class="menu-residential-services-container" aria-label="Menu">
        			        <ul id="menu-residential-services" class="menu">
        			            <li id="menu-item-843" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-843" element-id="1437">
                                    <a href="#" class="menu-link">
                                        Menu 1
                                    </a>
                                </li>
                                <li id="menu-item-845" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-845" element-id="1434">
                                    <a href="#" class="menu-link">
                                        Menu 2
                                    </a>
                                </li>
                                <li id="menu-item-848" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-848" element-id="1431">
                                    <a href="#" class="menu-link">
                                        Menu 3
                                    </a>
                                </li>
                                <li id="menu-item-844" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-844" element-id="1428">
                                    <a href="#" class="menu-link">
                                        Menu 4
                                    </a>
                                </li>
                                <li id="menu-item-842" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-233 current_page_item menu-item-842">
                                    <a href="#" aria-current="page" class="menu-link">
                                        Menu 5
                                    </a>
                                </li>
                                <li id="menu-item-2058" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2058" element-id="1422">
                                    <a href="#" class="menu-link">
                                        Menu 6
                                    </a>
                                </li>
                                <li id="menu-item-2057" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2057" element-id="1419">
                                    <a href="#" class="menu-link">
                                        Menu 7
                                    </a>
                                </li>
                                <li id="menu-item-3986" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3986" element-id="1416">
                                    <a href="#" class="menu-link">
                                        Menu 8
                                    </a>
                                </li>
                                <li id="menu-item-3985" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3985" element-id="1414">
                                    <a href="#" class="menu-link">
                                        Menu 9
                                    </a>
                                </li>
                            </ul>
                        </nav>
                	</div>
                </div>
            </div>
            <div class="service-ques" element-id="1408">
                <i class="fad fa-calendar-alt" aria-hidden="true" element-id="1407"></i>
            	<h6 class="sidebar_cta-title">
            		Get a Quote
            	</h6>
            	<p style=" color: #fff;" element-id="1405">
            		Enter your job details below for a free quote or consultation
            	</p>
                <p style="padding-top: 30px;" class="book-btn" element-id="1404">
                    <a href="../get-a-quote/" element-id="1403">Book Now</a>
                </p>
            </div>
        </aside>
        <article class="content-article">
            <?php echo get_sub_field('content')?>
        </article>
    </div>
</main>