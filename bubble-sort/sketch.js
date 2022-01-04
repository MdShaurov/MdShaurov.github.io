// Bubble Sort

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function bubbleSort(list) {
  // make it here!

  let swap = true;
  while (swap) {
    swap = false;

    for (let i=0; i<list.length-1; i++) {
      if (list[i] > list[i+1]) {
        swap = true;
        let temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
      }
    }
    console.log(list);
  }
  return list;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(someList));
}

function draw() {
}