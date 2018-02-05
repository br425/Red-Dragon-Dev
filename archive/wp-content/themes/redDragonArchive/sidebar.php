				<div id="sidebar" class="sidebar" role="complementary">

					<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>

						<?php dynamic_sidebar( 'sidebar1' );?>
                        
                        <h2>Filter</h2>

						<ul>
							<?php wp_list_categories( array(
                               'orderby' => 'name',
                               'child_of' => 14,
                               'title_li' => '<h3>' . __( 'Location', 'textdomain' ) . '</h3>',
                               'use_desc_for_title' => true
                           ) ); 
                            wp_list_categories( array(
                               'orderby' => 'name',
                               'child_of' => 15,
                               'title_li' => '<h3>' . __( 'Content', 'textdomain' ) . '</h3>',
                               'use_desc_for_title' => true
                           ) ); 
                            wp_list_categories( array(
                               'orderby' => 'name',
                               'child_of' => 16,
                               'title_li' => '<h3>' . __( 'Author', 'textdomain' ) . '</h3>',
                               'use_desc_for_title' => true
                           ) ); ?> 
                       </ul>

					<?php else : ?>

						<?php
							/*
							 * This content shows up if there are no widgets defined in the backend.
							*/
						?>

						<div class="no-widgets">
							<p><?php _e( 'This is a widget ready area. Add some and they will appear here.', 'bonestheme' );  ?></p>
						</div>

					<?php endif; ?>

				</div>
