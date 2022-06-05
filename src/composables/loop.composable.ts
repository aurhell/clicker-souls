import { useSoulsStore } from '@/stores/souls'

export const useLoop = () => {
  const souls = useSoulsStore()

  setInterval(() => {
    if (souls.soulsPerSecond > 0) {
      souls.addSouls(souls.soulsPerSecond)
    }
    return true
  }, 1000)
}
