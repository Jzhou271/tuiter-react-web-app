const renderPost = (post) => {
  return (post.articleTitle && post.articleContent) ? `
      <div> 
            <img src = ${post.image} class="rounded-top border border-secondary" style="width: 100%;">
            <div class = "rounded-bottom p-2 border border-secondary">
                <div class="p-1"> ${post.articleTitle}</div>
                <div class="p-1 text-secondary"> ${post.articleContent}</div>
            </div>
      </div>`
      :
      `<div>
            <img src = ${post.image} class="rounded border border-secondary" style="width: 100%;">
      </div>`;
}

const PostItems = (post) => {
  return (`
    <li class="list-group-item bg-black">
      <div class="d-flex pt-2">
        <img src="${post.profileImg}" class="rounded-pill" style="height: 50px">
      <div>
        <div class="ps-3">
          <div class="row">
            <span><i class="fa fa-ellipsis-h float-end fa-lg text-secondary mt-3"></i></span>
                <div class="col-10 d-flex text-white">${post.userName}
                    <i class="fa fa-check-circle ms-2 me-2"></i>
                    <div class="text-secondary">@${post.handle} · ${post.time}</div>
                </div>
          </div>
          <div class="text-white mb-3">${post.title}</div>
          ${renderPost(post)}

            <div class="row mt-3 mb-2">
            <div class="col-3">
                <i class="fa-regular fa-comment text-secondary"></i>
                <span class="text-secondary ps-2">${post.comments}</span></div>
            <div class="col-3">
                <i class="fas fa-retweet text-secondary"></i>
                <span class="text-secondary ps-2">${post.forwards}</span></div>    
            <div class="col-3">
                <i class="fa-regular fa-heart text-secondary"></i>
                <span class="text-secondary ps-2">${post.likes}</span></div>
            <div class="col-3">
                <i class="fa-solid fa-arrow-up-from-bracket text-secondary"></i></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    `);
}
export default PostItems;
