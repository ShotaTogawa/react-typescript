import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return <div>
      <Child color={"orange"} onClick={() => {console.log("Click")}} />
      <ChildAsFC color={"orange"} onClick={() => {console.log("Click")}} />
  </div>
}

export default Parent;