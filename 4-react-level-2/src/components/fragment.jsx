import React from "react";

// react fragment is used for return multiple html component without overlapping other component
// we can use React.Fragment form React library or this tag ("<> </>")
function CustomFragment() {
  return (
    <React.Fragment>
      <h1>Health Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </React.Fragment>
  );
}

export default CustomFragment;
