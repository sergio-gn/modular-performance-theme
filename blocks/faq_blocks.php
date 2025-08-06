<?php
$faq = get_sub_field('faq_text');
?>
<section class="faq_blocks">
    <div class="container">
        <div class="faq_text">
            <?php echo $faq;?>
        </div>
        <div class="accordion v1">
            <?php 
            $accordion_count = 0;
            <?php if (have_rows('repeater_faq')): ?>
                <?php while (have_rows('repeater_faq')): the_row(); ?>
                    <div class="a-container">
                        <p class="a-btn"><?php the_sub_field('question'); ?><span></span></p>
                        <div class="a-panel">
                            <p><?php the_sub_field('answer'); ?></p>
                        </div>
                    </div>
                    <?php $accordion_count++;?>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
        <?php if ($accordion_count > 7):?>
            <button id="show-more-btn" class="show-more">Show More</button>
        <?php endif; ?>
    </div>
</section>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var showMoreBtn = document.getElementById('show-more-btn');
    var accordions = document.querySelectorAll('.accordion .a-container');
    
    if (showMoreBtn) {
        // Hide extra accordions
        for (var i = 7; i < accordions.length; i++) {
            accordions[i].style.display = 'none';
        }

        showMoreBtn.addEventListener('click', function() {
            var isShowingMore = this.classList.toggle('show-less');

            if (isShowingMore) {
                // Show all accordions
                for (var i = 7; i < accordions.length; i++) {
                    accordions[i].style.display = 'block';
                }
                this.textContent = 'Show Less';
            } else {
                // Hide extra accordions
                for (var i = 7; i < accordions.length; i++) {
                    accordions[i].style.display = 'none';
                }
                this.textContent = 'Show More';
            }
        });
    }
});
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
