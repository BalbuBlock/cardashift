import { combineReducers } from 'redux'

import { loading, LoadingState } from './loading'
import { progressBar, ProgressBarState } from './progressBar'
import { toaster, ToasterState } from './toaster'

export const reducers = combineReducers({
  loading,
  progressBar,
  toaster,
})

export interface State {
  loading: LoadingState
  progressBar: ProgressBarState
  toaster: ToasterState
}
