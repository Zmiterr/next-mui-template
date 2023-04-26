import { appLanguages } from 'helpers/constants/appLanguages'

const actionTypes = {
  SetLanguage: 'i18n/SET_LANGUAGE',
}

export const defaultLocale = appLanguages[0].shortName.toLowerCase()

const initialState = {
  lang: defaultLocale,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetLanguage:
      return { ...state, lang: action.payload.lang }

    default:
      return state
  }
}

export const actions = {
  setLanguageWithoutLocalStore: (lang) => {
    return { type: actionTypes.SetLanguage, payload: { lang } }
  },
  setLanguage: (lang) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18n', lang)
    }

    return { type: actionTypes.SetLanguage, payload: { lang } }
  },
}
