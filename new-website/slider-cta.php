<style>
    .sticky-tab {
        font-family: system-ui;
        box-sizing: border-box;
        background-color: #333;
        position: fixed;
        width: 31.25rem;
        height: 65vh;
        padding: 0 1rem 1rem 1rem;
        text-align: center;
        right: -31.25rem;
        top: 50%;
        transform: translateY(-50%);
        transition: all 200ms linear;
        cursor: pointer;
        z-index: 999;
        line-height: 1 !important; 
    }

    .sticky-tab h2,
    .sticky-tab p,
    .sticky-tab div {
        color: #fff !important;
    }

    .sticky-tab-title {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        position: absolute;
        top:0;
        bottom:0;
        margin: auto 0;
        left: -3rem;
        background: #333333;
        padding: 1rem;
        color: #fff;
        height: 10rem;
		border: 3px solid #fff;
    }
    .sticky-tab label{
        display:none;
    }
    .sticky-tab input, select,textarea{
        width:100%;
        padding: 1rem;
        box-sizing: border-box;
    }
    .sticky-tab textarea{
        padding: 1rem;
        height: 80px;
    }
    .gfield_description{
        padding: .5rem 0;
    }
    .sticky-tab-dad {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
    }
    .sticky-tab-x{
        padding: 1rem;
    }
    .gform_title{
        margin:0;
    }
    .gform_required_legend{
        display:none;
    }
    div#gform_fields_3 {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.25rem;
    }
    .gform_footer input[type="submit"]{
        background: #d42127;
        border-radius: 5px;
        padding: 8px;
        color: #fff;
        cursor: pointer;
        border: none;
    }
    .gfield--type-honeypot{
        display:none;
    }
    @media only screen and (min-width: 768px){
        #field_3_5, #field_3_11 {
            padding-right: 0!important;
        }
        #field_3_6, #field_3_10 {
            padding-left: 0!important;
        }
    }
    @media(max-width:1100px){
        .sticky-tab{
            width: 31.25rem;
            height: 450px;
        }
    }
    </style>
    <div class="sticky-tab" id="stickyTab">
        <div class=sticky-tab-dad>
            <div class="sticky-tab-x" id="closeTab">X</div>
        </div>
        <p class="sticky-tab-title" id="stickytitleTab">Get a Quote</p>
        <?php echo do_shortcode('[gravityform id="3" title="true"]'); ?>
    </div>

<script>
    const stickyTab = document.getElementById('stickyTab');
    const stickyTabTitle = document.getElementById('stickytitleTab');
    const closeTab = document.getElementById('closeTab');

    // 1. Set the sticky-tab to right:0 when the sticky-tab-title is hovered
    stickyTabTitle.addEventListener('mouseenter', function () {
        stickyTab.style.right = '0';
        if (window.innerWidth <= 1100) {
            // Apply width: 100% when hovered
            stickyTab.style.width = '100%';
        }
    });

    stickyTab.addEventListener('mouseleave', function () {
        stickyTab.style.right = '-31.25rem';
        if (window.innerWidth <= 1100) {
            // Reset width when not hovered
            stickyTab.style.width = '';
        }
    });
    
    // 2. Remove the right:0 when closeTab is hovered
    closeTab.addEventListener('click', function () {
        stickyTab.style.right = '';
        stickyTab.style.width = '';
    });
</script>