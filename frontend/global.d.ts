import ru from "./messages/ru.json";

export type Messages = typeof ru;

declare global {
  type IntlMessages = Messages;
}

// declare global {
//   interface IntlMessages extends Messages {}
// }
