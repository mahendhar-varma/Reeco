export const ApproveAction = (value) => async (dispatch) => {
  dispatch({
    type: "APPROVED",
    payload: value,
  });
};

export const MissingAction = (value) => async (dispatch) => {
  dispatch({
    type: "MISSING",
    payload: value,
  });
};

export const EditedAction = (value) => async (dispatch) => {
  dispatch({
    type: "EDITED",
    payload: value,
  });
};
