import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import { useCheatStore } from '@/stores/cheat'

export const useCheatMode = () => {
  const route: RouteLocationNormalizedLoaded = useRoute()
  const cheatStore = useCheatStore()

  // TODO: find why this is not a boolean 
  if (route.query.cheatMode === 'true') {
    cheatStore.setCheatMode(true)
  } else {
    cheatStore.setCheatMode(false)
  }
  
  return {
    isEnabled: cheatStore.isCheatModeEnabled,
  }
}
