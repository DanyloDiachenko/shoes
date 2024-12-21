export const TopSellingProducts = () => {
    <div class="container">
                <div class="heading heading-center mb-3">
                    <h2 class="title-lg mb-2">Top Selling Products</h2><!-- End .title-lg text-center -->

                    <ul class="nav nav-pills justify-content-center" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="top-all-link" data-toggle="tab" href="#top-all-tab" role="tab" aria-controls="top-all-tab" aria-selected="true">All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="top-women-link" data-toggle="tab" href="#top-women-tab" role="tab" aria-controls="top-women-tab" aria-selected="false">Women's</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="top-men-link" data-toggle="tab" href="#top-men-tab" role="tab" aria-controls="top-men-tab" aria-selected="false">Men's</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content">
                    <div class="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
                        <div class="products just-action-icons-sm">
                            <div class="row">
                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">30% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-countdown-container">
                                                <span class="product-contdown-title">offer ends in:</span>
                                                <div class="product-countdown countdown-compact" data-until="2019, 11, 3" data-compact="true"></div><!-- End .product-countdown -->
                                            </div><!-- End .product-countdown-container -->

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $77.99</span>
                                                <span class="old-price">$130.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #af5f23;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #806f55;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-6.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Eric Michael Sandra</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $42.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->
                                            
                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-7.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Jessica Simpson Blayke</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #cc6666;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #ccccff;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-8.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #ffca51;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #bb8379;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-9.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">The North Face Raedonda Boot Sneaker</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-10.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $57.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-11.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Splendid Roselyn II</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 3 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #78645f;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #b89474;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">55% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-12.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Marc Jacobs Somewhere Sport Sandal</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $125.99</span>
                                                <span class="old-price">$275.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-13.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Mules</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Crocs Crocband Clog</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $25.75
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 7 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-14.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Vasque Sundowner GTX</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $109.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .products -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="top-women-tab" role="tabpanel" aria-labelledby="top-women-link">
                        <div class="products just-action-icons-sm">
                            <div class="row">
                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-8.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #ffca51;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #bb8379;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-10.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $57.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-11.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Splendid Roselyn II</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 3 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #78645f;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #b89474;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->
                                
                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-6.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Eric Michael Sandra</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $42.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->
                                            
                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">30% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-countdown-container">
                                                <span class="product-contdown-title">offer ends in:</span>
                                                <div class="product-countdown countdown-compact" data-until="2019, 11, 3" data-compact="true"></div><!-- End .product-countdown -->
                                            </div><!-- End .product-countdown-container -->

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $77.99</span>
                                                <span class="old-price">$130.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #af5f23;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #806f55;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-9.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">The North Face Raedonda Boot Sneaker</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-7.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Jessica Simpson Blayke</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #cc6666;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #ccccff;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">55% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-12.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Marc Jacobs Somewhere Sport Sandal</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $125.99</span>
                                                <span class="old-price">$275.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-13.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Mules</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Crocs Crocband Clog</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $25.75
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 7 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-14.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Vasque Sundowner GTX</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $109.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .products -->
                    </div><!-- .End .tab-pane -->
                    <div class="tab-pane p-0 fade" id="top-men-tab" role="tabpanel" aria-labelledby="top-men-link">
                        <div class="products just-action-icons-sm">
                            <div class="row">
                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-10.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $57.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->


                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">30% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-countdown-container">
                                                <span class="product-contdown-title">offer ends in:</span>
                                                <div class="product-countdown countdown-compact" data-until="2019, 11, 3" data-compact="true"></div><!-- End .product-countdown -->
                                            </div><!-- End .product-countdown-container -->

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $77.99</span>
                                                <span class="old-price">$130.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #af5f23;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #806f55;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-11.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Splendid Roselyn II</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 3 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #78645f;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #b89474;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-6.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Sandals</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Eric Michael Sandra</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $42.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->
                                            
                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-7.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Jessica Simpson Blayke</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 2 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #cc6666;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #ccccff;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-8.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Native Shoes Miles Denim Print</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $20.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #ffca51;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #bb8379;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #666666;"><span class="sr-only">Color name</span></a>
                                            </div><!-- End .product-nav -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-9.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">The North Face Raedonda Boot Sneaker</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $97.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-14.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Boots</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Vasque Sundowner GTX</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $109.99
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">Sale</span>
                                            <span class="product-label label-sale">55% off</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-12.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Heels</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Marc Jacobs Somewhere Sport Sandal</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $125.99</span>
                                                <span class="old-price">$275.00</span>
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 0 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->

                                <div class="col-6 col-md-4 col-lg-3 col-xl-5col">
                                    <div class="product product-3 text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-primary">New</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-10/products/product-13.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div><!-- End .product-action-vertical -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Women’s</a>,
                                                <a href="#">Mules</a>
                                            </div><!-- End .product-cat -->
                                            <h3 class="product-title"><a href="product.html">Crocs Crocband Clog</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $25.75
                                            </div><!-- End .product-price -->
                                        </div><!-- End .product-body -->

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 40%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 7 Reviews )</span>
                                            </div><!-- End .rating-container -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div><!-- End .product-action -->
                                        </div><!-- End .product-footer -->
                                    </div><!-- End .product -->
                                </div><!-- End .col-6 col-md-4 col-lg-3 -->
                            </div><!-- End .row -->
                        </div><!-- End .products -->
                    </div><!-- .End .tab-pane -->
                </div><!-- End .tab-content -->

                <div class="more-container text-center mt-5">
                    <a href="category.html" class="btn btn-outline-lightgray btn-more btn-round"><span>View more products</span><i class="icon-long-arrow-right"></i></a>
                </div><!-- End .more-container -->
            </div>
}