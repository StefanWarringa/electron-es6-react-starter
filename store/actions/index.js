
export const ActionTypes = {
  SELECT_LANGUAGE : 10
};

export function SelectLanguage(locale){
  return {
    type: ActionTypes.SELECT_LANGUAGE,
    payload: locale
  };
}
