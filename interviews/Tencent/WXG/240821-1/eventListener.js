class EventBus {
  static listeners = {};

  static addListener(eventKey, callback) {
    if (!this.listeners[eventKey]) {
      this.listeners[eventKey] = [];
    }
    const listener = {
      id: Symbol("id"),
      callback,
    };
    this.listeners[eventKey].push(listener);
    return {
      remove: () => {
        this.listeners[eventKey] = this.listeners[eventKey].filter(
          (l) => l.id !== listener.id
        );
      },
    };
  }

  static emit(eventKey, payload) {
    if (this.listeners[eventKey]) {
      this.listeners[eventKey].forEach((listener) =>
        listener.callback(payload)
      );
    }
  }
}

// Example usage
const listener = EventBus.addListener("someKey", (payload) => {
  console.log("Event received with payload:", payload);
});
EventBus.emit("someKey", {
  data: "some payload data",
});
listener.remove();
