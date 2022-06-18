import { defineStore } from 'pinia'

export type SoulsState = {
  souls: number,
  soulsPerSecond: number,
}

export const useSoulsStore = defineStore({
  id: 'souls',
  state: () => ({
    souls: 0,
    soulsPerSecond: 0,
  } as SoulsState),
  getters: {
    doubleSouls: (state): number => state.souls * 2,
    canTrain: (state): boolean => state.souls >= 10,
  },
  actions: {
    addSouls(nbSouls: number): void {
      this.souls = Number(this.souls) + Number(nbSouls)
    },
    setSouls(nbSouls: number): void {
      this.souls = nbSouls
    },
    addSoulsPerSecond(nbSouls: number): void {
      this.souls = Number(this.souls) - 10
      this.soulsPerSecond = Number(this.soulsPerSecond) + Number(nbSouls)
    },
    setSoulsPerSecond(nbSouls: number): void {
      this.soulsPerSecond = nbSouls
    },
  },
})
