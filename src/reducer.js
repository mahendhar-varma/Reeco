const status = [];

export default function reducer(state = status, action) {
  const { type, payload } = action;

  switch (type) {
    case "DONE":
      const { text, textId, textBg } = payload;

      const check = state.some((item) => item.textId === textId);

      const filteredList = state.map((item) => {
        if (item.textId === textId) {
          return { ...item, text: text, textBg: textBg };
        }
        return item;
      });

      if (check !== true) {
        return (state = [...state, payload]);
      } else {
        return (state = filteredList);
      }
    default:
      return state;
  }
}
