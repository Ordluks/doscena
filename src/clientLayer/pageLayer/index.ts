import { ClientScenario } from '..'
import {
  AttrExtention,
  InnerExtention,
  OpenLinkExtention,
  createAttrExtention,
  createInnerExtention,
  createOpenLinkExtention
} from './elementLayer'
import { Scenario } from '../../scenarioBase'

export interface PageScenarioExtender {
  inner: InnerExtention
  attr: AttrExtention
  // download: () => AsyncScenarioEndpoin
  openLink: OpenLinkExtention
}

export type PageScenario = Scenario<Element>

export type FindFirstExtension = (query: string) => PageScenarioExtender
export const createFindFirstExtension =
  (clientScenario: ClientScenario): FindFirstExtension =>
  (query) => {
    const pageScenario: PageScenario = async () => {
      const document = await clientScenario()
      const element = document.querySelector(query)
      if (element === null) {
        throw Error('Can not to found element ' + query)
      }

      return element
    }

    return {
      inner: createInnerExtention(pageScenario),
      attr: createAttrExtention(pageScenario),
      openLink: createOpenLinkExtention(pageScenario)
    }
  }
