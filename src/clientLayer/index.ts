import { getDOM } from '../getDOM'
import { Scenario } from '../scenarioBase'
import { FindFirstExtension, createFindFirstExtension } from './pageLayer'

export interface ClientScenarioExtender {
  findFirst: FindFirstExtension
}

export type ClientScenario = Scenario<Document>

export const webPage = (url: string): ClientScenarioExtender => {
  const clientScenario: ClientScenario = () => {
    return getDOM(url)
  }

  return {
    findFirst: createFindFirstExtension(clientScenario)
  }
}
