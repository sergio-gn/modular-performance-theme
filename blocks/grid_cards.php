<style>
    .grid_text h1, .grid_text h2, .grid_text h3 {
        font-weight: 900;
        font-size: 2.5rem;
        color:#000;
        margin:0;
    }
    .grid_text h4, .grid_text h5, .grid_text h6,{
        font-weight: 900;
        color: #d42127;
        font-size: 1.2rem;
    }
    .grid_text p{
        font-size:1.1rem;
    }
    .front-grid_card-img-wrap{
        position: relative;
        overflow: hidden;
        width: 4rem;
        border-radius: 2rem;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .grid-square{
        border: 4px double #ccc;
        position:relative;
        padding: 1rem;
        background: #fff;
    }
    .grid-square:hover{
        border: 4px solid #D42127;
    }
    .grid-square:before{
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        left: 0px;
        bottom: 0px;
        border-bottom: 40px solid #5D5E5E;
        border-right: 40px solid transparent;
    }
    .grid-square:after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        right: 0px;
        top: 0px;
        border-top: 40px solid #d42127;
        border-left: 40px solid transparent;
    }
    .gridtitle h1, .gridtitle h2, .gridtitle h3, .gridtitle h4, .gridtitle h5, .gridtitle h6{
        color:#000;
        font-size: 1.2rem;
        font-weight:800;
    } 
    .view-more-button{
        margin: 1rem;
        background: #D42127;
        font-size: 17px;
        padding: 16px 30px;
        color: #fff;
        cursor: pointer;
        border:none;
    }
    .view-more-button:hover{
        background: #aa1b1c;
    }
    .front-grid-2{
        grid-template-columns: 1fr 1fr;
    }
    .front-grid-3{
        grid-template-columns: 1fr 1fr 1fr;
    }
    .front-grid-4{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .front-grid-5{
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media(max-width:1100px){
        .front-grid_mb{
            grid-template-columns: 1fr;
        }
    }
</style>

<section class="front-grid d-flex_newcss justify-center_newcss blocks-padding">
    <div class="container">
        <div class="grid_text">
            <?php echo get_sub_field('grid_text')?>
        </div>
        <?php $gridNumber = get_sub_field('grid_column_number');?>
        <?php if( have_rows('grid_images') ): ?>
            <div class="front-grid-<?php echo $gridNumber; ?> front-grid_mb d-grid_newcss gap_1">
                <?php $count = 0; ?>
                <?php while( have_rows('grid_images') ): the_row(); 
                    $link = get_sub_field('link');
                    $image = get_sub_field('image');
                    $gridContent = get_sub_field('content');
                    $gridTitle = get_sub_field('title');
                ?>
                    <div class="grid-square <?php if ($count >= 6) echo 'extra'; ?>" <?php if ($count >= 6) echo 'style="display:none;"'; ?>>
                        <?php if (!empty($link) && isset($link['url'])): ?>
                            <a href="<?php echo esc_url($link['url']); ?>">
                        <?php endif; ?>
                        <div class="d-flex_newcss justify-center_newcss align-center_newcss">
                            <?php if (!empty($image) && isset($image['url'])): ?>
                                <div class="front-grid_card-img-wrap">
                                    <img class="img__thumb" loading="lazy" src="<?php echo $image['url'] ?>" alt="<?php echo $image['alt'] ?>">
                                </div>
                            <?php endif; ?>
                            <div class="gridtitle">
                                <h2>
                                    <?php echo $gridTitle ?>
                                </h2>
                            </div>
                        </div>
                            <div class="text_grid text-center">
                                <?php echo $gridContent ?>
                            </div>
                        <?php if (!empty($link) && isset($link['url'])): ?>
                            </a>
                        <?php endif; ?>
                    </div>
                    <?php $count++; ?>
                <?php endwhile; ?>
                <!-- View More Button -->
            </div>
            <div class="d-flex_newcss justify-center_newcss">
                <button class="view-more-button" onclick="toggleExtraGrid()">View More</button>
            </div>
        </div>
    </section>
    <script>
        function toggleExtraGrid() {
            var extraGrid = document.querySelectorAll('.grid-square.extra');
            extraGrid.forEach(function(grid) {
                grid.style.display = (grid.style.display === 'none' || grid.style.display === '') ? 'block' : 'none';
            });
        }
    </script>


<?php endif; ?>