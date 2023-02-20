const PostSummaryItem = (post) => {
  return (`
    <a class="list-group-item ps-3" style="130px">
        <div class="row align-items-center">
            <div class="col">
                <div class="text-muted">${post.topic}
                    <img src="${post.image}" class="wd-image mb-5">
                    <div class="wd-title-text">${post.userName}
                        <i class="ps-1 fa-solid fa-square-check"></i>
                        <span class="text-muted wd-text-normal"> - ${post.time} </span>
                    </div>
                    <div class="wd-title-text">
                        ${post.title}
                    </div>
                    <div class="text-muted">${post.tweets}</div>
                </div>
            </div>
        </div>
    </a>
  `);
}
export default PostSummaryItem;