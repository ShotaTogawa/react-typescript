import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <UserSearch />
      <GuestList />
      <EventComponent />
      <UserSearch />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)