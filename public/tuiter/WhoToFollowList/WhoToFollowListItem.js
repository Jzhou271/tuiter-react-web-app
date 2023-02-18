const WhoToFollowListItem = (who) => {
  return (`
        <li class="list-group-item d-flex">
            <img src=${who.avatarIcon} class="rounded-circle" style="width: 50px">
            <div class="ms-3">
                <span class="fw-bold">${who.userName}</span>
                <i class="ps-1 fa-solid fa-square-check"></i>
                <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="ms-auto my-1 d-flex align-content-center">
                <button type="button" class="btn btn-primary rounded-5">Follow</button>
            </div>
        </li>
  `);
}
export default WhoToFollowListItem;