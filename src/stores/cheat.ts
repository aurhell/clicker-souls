import { defineStore } from 'pinia'

export type CheatState = {
  isCheatModeEnabled: boolean,
}

export const useCheatStore = defineStore({
  id: 'cheat',
  state: () => ({
    isCheatModeEnabled: false,
  } as CheatState),
  actions: {
    setCheatMode(cheatMode: boolean): void {
      this.isCheatModeEnabled = cheatMode
    },
  }
})
