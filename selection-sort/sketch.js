// Selection Sort

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function selectionSort(list) {
  // make it here!

  let swap = list.length - 1;

  while (swap > 0) {
    let highest = 0;

    for (let current=0; current<=swap; current++) {
      if (list[current] > list[highest]) {
        highest = current;
      }
    }

    let temp = list[swap];
    list[swap] = list[highest];
    list[highest] = temp;

    swap--;
    console.log(list);
  }

  return list;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(someList));
}

function draw() {
}