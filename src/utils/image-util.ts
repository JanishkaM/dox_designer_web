function getImageUrl(imageName:string) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

export { getImageUrl };