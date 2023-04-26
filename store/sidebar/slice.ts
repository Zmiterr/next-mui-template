import { createSlice } from '@reduxjs/toolkit'
import { SidebarInitialState, SidebarPrefix } from 'store/sidebar/types'

const initialState: SidebarInitialState = {
  isOpen: true,
  openedSubmenuName: '',
}

const sidebarSlice = createSlice({
  name: SidebarPrefix,
  initialState,
  reducers: {
    setSidebarIsOpen(state, action) {
      state.isOpen = action.payload
    },
    toggleSidebar(state) {
      state.isOpen = !state.isOpen
    },
    setOpenedSubmenuName(state, action) {
      state.openedSubmenuName = action.payload
    },
  },
})

export const { setSidebarIsOpen, setOpenedSubmenuName, toggleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
