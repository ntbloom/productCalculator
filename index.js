// @format

// validates form
function calculate () {
  const depth = parseFloat(document.querySelector('#product-depth').value)
  const sf = parseFloat(document.querySelector('#square-foot').value)
  let n = Math.ceil(depth * sf * 0.003)
  const para = document.getElementById('results-p')

  // console.log("sf=",sf, "| depth=",depth, "| n=",n);
  if (isNaN(n)) {
    n = 0
  }
  let string = 'You need ' + n + ' cubic yards of product'
  if (n === 1) {
    string = 'You need ' + n + ' cubic yard of product'
  }
  para.innerHTML = string
}
