const status = "";

export default function reducer(state = status, action) {
  const { type, payload } = action;

  switch (type) {
    case "APPROVED":
      return (state = payload);
    case "EDITED":
      return (state = payload);
    case "MISSING":
      return (state = payload);
    default:
      return state;
  }
}
