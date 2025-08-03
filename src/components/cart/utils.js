export function makeIdsParam(cartData = []) {
  return cartData.length ? cartData.map((i) => i.photoId).join(",") : null;
}

export function calcSubtotal(cartData = [], photosContent = []) {
  return cartData.reduce((sum, item) => {
    const photo = photosContent.find((p) => p.id === item.photoId);
    const detail = photo?.photoDetails.find(
      (d) => d.id === item.photoDetailsId
    );
    return sum + (detail?.price || 0);
  }, 0);
}
