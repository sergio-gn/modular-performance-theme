<style>
    .accordion {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        box-sizing: border-box;
    }
    .accordion .a-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 5px;
    }
    .accordion .a-container .a-btn {
        margin: 0;
        position: relative;
        padding: 15px 30px;
        color: #4d4d4d;
        font-weight: 400;
        display: block;
        font-weight: 500;
        background-color: #f8f8f8;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .15), 0 10px 10px -5px rgba(0, 0, 0, .1) !important;
    }
    .accordion .a-container .a-btn:hover{
        color:#000;
    }
    .accordion .a-container .a-btn span {
        display: block;
        position: absolute;
        height: 14px;
        width: 14px;
        right: 20px;
        top: 18px;
    }
    .accordion .a-container .a-btn span:after {
        content: '';
        width: 14px;
        height: 3px;
        border-radius: 2px;
        background-color: #000;
        position: absolute;
        top: 6px;
    }
    .accordion .a-container .a-btn span:before {
        content: '';
        width: 14px;
        height: 3px;
        border-radius: 2px;
        background-color: #000;
        position: absolute;
        top: 6px;
        transform: rotate(90deg);
        transition: all 0.3s ease-in-out;
    }
    .accordion .a-container .a-panel {
        background: #f8f8f8;
        width: 100%;
        color: #484848;
        transition: all 0.2s ease-in-out;
        opacity: 0;
        height: auto;
        max-height: 0;
        overflow: hidden;
        padding: 0px 10px;
        border-width: 1px;
        border-color: #f0f0f0;
    }
    .accordion .a-container.active .a-btn {
        color: #000;
    }
    .accordion .a-container.active .a-btn span::before {
        transform: rotate(0deg);
    }
    .accordion .a-container.active .a-panel {
        padding: 15px 10px 10px 10px;
        opacity: 1;
        box-sizing: border-box;
        max-height: 500px;
    }
    .faq-text h2{
        font-size: 2.5rem;
        font-weight: 800;
        color:#000;
    }
</style>

<div class="container ">
    <div class="faq-text">
        <?php echo get_sub_field('faq_text'); ?>
    </div>
    <div class="accordion v1">
        <?php if( have_rows('repeater_faq') ): ?>
            <?php while( have_rows('repeater_faq') ): the_row(); ?>
                <div class="a-container">
                    <p class="a-btn"><?php the_sub_field('question'); ?><span></span></p>
                    <div class="a-panel">
                        <p><?php the_sub_field('answer'); ?></p>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>

<script>
    function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
    }
initAcc('.accordion.v1', true);
</script>