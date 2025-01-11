import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { items } = useContext(TodoItemsContext);

  return items.length === 0 && <p className={style.welcome}>Enjoy your day</p>;
};

export default WelcomeMessage;
