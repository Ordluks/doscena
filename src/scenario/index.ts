import { AsyncScenario } from '../scenarioBase'

interface GlobalScenarioBuilder {
  openPage: (url: string) => AsyncScenario
}

export const scenario = (baseUrl: string): GlobalScenarioBuilder => ({})
