import { IWebSocket } from "../types/types";
import { Middleware } from "redux";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: IWebSocket
): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parseData = JSON.parse(data);
          const { success, ...restData } = parseData;
          if (
            restData.message === "Invalid or missing token" ||
            restData.message === "jwt expired"
          ) {
            dispatch({ type: onError, payload: restData.message });
          } else {
            dispatch({ type: onMessage, payload: restData });
          }
        };
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
