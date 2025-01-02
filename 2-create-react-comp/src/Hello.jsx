/*
  learn about dynamic content
  using {}, we can embed any js expression directly within JSX. This includes variables, function calls, and more.
 */

function Hello() {

  let name = 'Ezhar';
  let getFullName = () => {
    return 'Ezhar Ansari';
  }

  return <p>
    Hello from the future. I am <span>{name}</span> My name is {getFullName()}
  </p>
}

export default Hello;