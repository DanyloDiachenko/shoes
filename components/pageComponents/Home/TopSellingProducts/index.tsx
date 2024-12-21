export const TopSellingProducts = () => {
    return (
        <div class="container">
                <div class="heading heading-center mb-3">
                    <h2 class="title-lg mb-2">Top Selling Products</h2>

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
                                                <img src="assets/images/demos/demo-10/products/product-5.jpg" alt="Product image" class="product-image" />
                                            </a>

                                            <div class="product-countdown-container">
                                                <span class="product-contdown-title">offer ends in:</span>
                                                <div class="product-countdown countdown-compact" data-until="2019, 11, 3" data-compact="true"></div>
                                            </div>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>
                                        </figure>

                                        <div class="product-body">
                                            <div class="product-cat">
                                                <a href="#">Men’s</a>,
                                                <a href="#">Sneakers</a>
                                            </div>
                                            <h3 class="product-title"><a href="product.html">ASICS Tiger Gel-Lyte MT</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">Now $77.99</span>
                                                <span class="old-price">$130.00</span>
                                            </div>
                                        </div>

                                        <div class="product-footer">
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                                                </div>
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div>

                                            <div class="product-nav product-nav-dots">
                                                <a href="#" class="active" style="background: #af5f23;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #806f55;"><span class="sr-only">Color name</span></a>
                                                <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                            </div>

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-container text-center mt-5">
                    <a href="category.html" class="btn btn-outline-lightgray btn-more btn-round"><span>View more products</span><i class="icon-long-arrow-right"></i></a>
                </div>
            </div>
    )
}