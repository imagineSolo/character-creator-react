export const ACTIVE_WINDOW = "ACTIVE_WINDOW";

export const activeWindowAction = (active) => {
  console.log(active);
  return {
    type: ACTIVE_WINDOW,
    active,
  };
};

export const actions = { activeWindowAction };
