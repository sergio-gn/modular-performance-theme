<?php $use_global_faq = get_sub_field('use_global_faq');?>
<section class="faq_blocks container">
    <div class="faq_text">
        <?php 
            $faqGlobal = get_field('faq_text', 'option');
            $faq = get_sub_field('faq_text');
            if($use_global_faq && in_array('use_global', $use_global_faq)){
                echo $faqGlobal;
            }else{
                echo $faq;
            }
        ?>
    </div>
    <div class="accordion v1">
        <?php 
        $accordion_count = 0; // Initialize counter
    
        if ($use_global_faq && in_array('use_global', $use_global_faq)): ?>
            <?php if (have_rows('repeater_faq_global', 'option')): ?>
                <?php while (have_rows('repeater_faq_global', 'option')): the_row(); ?>
                    <div class="a-container">
                        <p class="a-btn"><?php the_sub_field('question'); ?><span></span></p>
                        <div class="a-panel">
                            <p><?php the_sub_field('answer'); ?></p>
                        </div>
                    </div>
                    <?php $accordion_count++; // Increment counter ?>
                <?php endwhile; ?>
            <?php endif; ?>
        <?php else: ?>
            <?php if (have_rows('repeater_faq')): ?>
                <?php while (have_rows('repeater_faq')): the_row(); ?>
                    <div class="a-container">
                        <p class="a-btn"><?php the_sub_field('question'); ?><span></span></p>
                        <div class="a-panel">
                            <p><?php the_sub_field('answer'); ?></p>
                        </div>
                    </div>
                    <?php $accordion_count++; // Increment counter ?>
                <?php endwhile; ?>
            <?php endif; ?>
        <?php endif; ?>
    </div>
    
    <?php if ($accordion_count > 7): // Show button only if there are more than 7 accordions ?>
        <button id="show-more-btn" class="show-more">Show More</button>
    <?php endif; ?>
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
