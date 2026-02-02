import { create } from "zustand"

export enum CalendarView {
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

interface CalendarState {
  view: CalendarView
  currentDate: Date
  setView: (view: CalendarView) => void
  setCurrentDate: (date: Date) => void
}

export const useCalendarStore = create<CalendarState>((set) => ({
  view: CalendarView.Month,
  currentDate: new Date(),
  setView: (view) => set({ view }),
  setCurrentDate: (currentDate) => set({ currentDate }),
}))
