import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="row">
        <div class="wd-search-bar mb-3">
            <i class="fa-solid fa-magnifying-glass wd-search-icon"></i>
            <input type="text" placeholder="Search Twitter"
                   class="form-control wd-round-corner ps-5 ms-3">
            <i class="fa-solid fa-gear mx-5"></i>
        </div>
    </div>
    
    <ul class="nav mb-2 nav-tabs">
    <!-- tabs --> 
        <li class="nav-item">
            <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
        </li>
    </ul>
    
    <!-- image with overlaid text -->
    <div class="position-relative">
        <img src="../imgs/starship1.jpeg" class="col-sm-12 mt-2">
        <div class="position-absolute bottom-0">
            <h2 class="fw-bold ms-3 text-white">SpaceX's Starship</h2>
        </div>
    </div>
    
    ${PostSummaryList()} 
`);
}
export default ExploreComponent;