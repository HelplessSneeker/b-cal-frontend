import { create } from "zustand"

export enum CalendarView {
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

export interface CalendarEntry {
  id: string;
  startDate: Date
  endDate: Date
  title: string
  wholeDay: boolean
  content?: string
}

interface CalendarState {
  view: CalendarView
  currentDate: Date
  entries: CalendarEntry[]
  setView: (view: CalendarView) => void
  setCurrentDate: (date: Date) => void
  setEntries: (entries: CalendarEntry[]) => void
}

export const useCalendarStore = create<CalendarState>((set) => ({
  view: CalendarView.Month,
  currentDate: new Date(),
  entries: [],
  setView: (view) => set({ view }),
  setCurrentDate: (currentDate) => set({ currentDate }),
  setEntries: (entries) => set({ entries }),
}))
