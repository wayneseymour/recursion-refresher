const countDown = (x) => {
  if (x === 0) return;
  console.log(x);
  countDown(--x)
}

export default countDown;
