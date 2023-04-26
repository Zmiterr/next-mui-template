import { combineReducers } from 'redux'
import sidebarReducer from 'store/sidebar/slice'
import userReducer from 'store/user/slice'

import { reducer as i18nReducer } from 'lib/i18n'

export const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer,
  i18n: i18nReducer,
})
