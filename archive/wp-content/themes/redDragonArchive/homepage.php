<?php
/*
 Template Name: Homepage Template
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

                    <?php get_sidebar(); ?>

                    <div class="categoriy-icons">

                          <h1>Search by Category</h1>

                          <div class="location-category">
                            <a href="">
                              <div class="category-england">
                          	    <img src="<?php echo get_template_directory_uri();?>/library/images/england.png">
                          	    <p>England</p>
                              <!-- svg line -->
                              </div>
                            </a>
                            <a href="">
                              <div class="category-sierraLeone">
                                <img src="<?php echo get_template_directory_uri();?>/library/images/sierraLeone.png">
                                <p>Sierra Leone</p>
                                <!-- svg line -->
                              </div>
                            </a>
                            <a href="">
                              <div class="category-rioDeLaPlata">
                                <img src="<?php echo get_template_directory_uri();?>/library/images/rioDeLaPlata.png">
                                <p>Rio De La Plata</p>
                              <!-- svg line -->
                              </div>
                            </a>
                            <a href="">
                              <div class="category-salvador">
                                <img src="<?php echo get_template_directory_uri();?>/library/images/salvador.png">
                                <p>Salvador</p>
                                <!-- svg line -->
                              </div>
                            </a>
                          </div> <!-- location category -->
                          <div class="content-category">
                            <a href="">
                              <div class="category-manuscript">
                                <img src="<?php echo get_template_directory_uri();?>/library/images/manuscripts.png">
                                <p>Manuscripts</p>
                                <!-- svg line -->
                              </div>
                            </a>
                            <a href="">
                              <div class="category-map">
                                <img src="<?php echo get_template_directory_uri();?>/library/images/maps.png">
                                <p>Maps</p>
                                <!-- svg line -->
                              </div>
                            </a>
                          </div> <!-- content-category -->

                    </div> <!-- categories -->

						</main>

				</div>

			</div>


<!-- <?php get_footer(); ?> -->
