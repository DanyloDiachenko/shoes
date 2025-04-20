export const Accordion = () => {
    return (
        <div class="accordion accordion-rounded" id="accordion-1">
					    <div class="card card-box card-sm bg-light">
					        <div class="card-header" id="heading-1">
					            <h2 class="card-title">
					                <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
					                    How will my parcel be delivered?
					                </a>
					            </h2>
					        </div>
					        <div id="collapse-1" class="collapse show" aria-labelledby="heading-1" data-parent="#accordion-1">
					            <div class="card-body">
					                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. 
					            </div><!-- End .card-body -->
					        </div><!-- End .collapse -->
					    </div><!-- End .card -->

					    <div class="card card-box card-sm bg-light">
					        <div class="card-header" id="heading-2">
					            <h2 class="card-title">
					                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
					                    Do I pay for delivery?
					                </a>
					            </h2>
					        </div><!-- End .card-header -->
					        <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordion-1">
					            <div class="card-body">
					                Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
					            </div><!-- End .card-body -->
					        </div><!-- End .collapse -->
					    </div><!-- End .card -->

					    <div class="card card-box card-sm bg-light">
					        <div class="card-header" id="heading-3">
					            <h2 class="card-title">
					                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
					                    Will I be charged customs fees?
					                </a>
					            </h2>
					        </div><!-- End .card-header -->
					        <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordion-1">
					            <div class="card-body">
					                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
					            </div><!-- End .card-body -->
					        </div><!-- End .collapse -->
					    </div><!-- End .card -->

					    <div class="card card-box card-sm bg-light">
					        <div class="card-header" id="heading-4">
					            <h2 class="card-title">
					                <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
					                    My item has become faulty
					                </a>
					            </h2>
					        </div><!-- End .card-header -->
					        <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordion-1">
					            <div class="card-body">
					                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
					            </div><!-- End .card-body -->
					        </div><!-- End .collapse -->
					    </div><!-- End .card -->
					</div>
    )
}