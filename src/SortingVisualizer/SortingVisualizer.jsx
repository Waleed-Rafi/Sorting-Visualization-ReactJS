import React, { Component } from "react";
import "./SortingVisualizer.css";

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class SortingVisualizer extends Component {
  state = { array: [] };
  componentDidMount() {
    this.resetArray();
  }

  bubbleSort = () => {
    let array = [...this.state.array];
    let arr = document.getElementsByClassName("array-bar");
    let i = 0;
    let j = 0;
    (function outerLoop() {
      j = i;
      (function innerLoop() {
        if (array[i] > array[j]) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          setTimeout(() => {
            arr[i].style.backgroundColor = "#28B463";
            arr[j].style.backgroundColor = "#28B463";
            arr[i].style.height = `${array[i]}px`;
            arr[j].style.height = `${array[j]}px`;
            setTimeout(() => {
              arr[i].style.backgroundColor = "rgb(255, 78, 108)";
              arr[j].style.backgroundColor = "rgb(255, 78, 108)";
              if (++j < array.length) innerLoop();
              else if (++i < array.length) outerLoop();
              else return;
            }, 50);
          }, 1);
        } else {
          setTimeout(() => {
            arr[i].style.backgroundColor = "blue";
            arr[j].style.backgroundColor = "blue";
            setTimeout(() => {
              arr[i].style.backgroundColor = "rgb(255, 78, 108)";
              arr[j].style.backgroundColor = "rgb(255, 78, 108)";
              if (++j < array.length) innerLoop();
              else if (++i < array.length) outerLoop();
              else return;
            }, 50);
          }, 1);
        }
      })();
    })();
  };

  resetArray() {
    const arr = [];
    for (let index = 0; index < 35; index++) {
      arr.push(randomNumberGenerator(10, 688));
    }
    this.setState({ array: arr });
  }
  render() {
    return (
      <div className="array-container">
        {this.state.array.map((data, index) => {
          return (
            <div
              className={`array-bar`}
              key={index}
              style={{ height: data }}
            ></div>
          );
        })}
        <br />
        <button className="btn btn-1" onClick={() => this.resetArray()}>
          Generate a new Array
        </button>
        <button className="btn btn-2" onClick={() => this.bubbleSort()}>
          Merge Sort
        </button>
        <button className="btn btn-3" onClick={() => this.bubbleSort()}>
          Heap Sort
        </button>
        <button className="btn btn-4" onClick={() => this.bubbleSort()}>
          Quick Sort
        </button>
        <button className="btn btn-5" onClick={() => this.bubbleSort()}>
          Bubble sort
        </button>
      </div>
    );
  }
}

export default SortingVisualizer;
