import { PageScenario, createFindFirstExtension } from '..'
import { ClientScenario, ClientScenarioExtender } from '../..'
import { getDOM } from '../../../getDOM'
import { Scenario } from '../../../scenarioBase'

export type InnerExtention = () => Scenario<string>
export const createInnerExtention =
  (pageScenario: PageScenario): InnerExtention =>
  () =>
  async () => {
    const element = await pageScenario()
    return element.innerHTML
  }

export type AttrExtention = (name: string) => Scenario<string | null>
export const createAttrExtention =
  (pageScenario: PageScenario): AttrExtention =>
  (name) =>
  async () => {
    const element = await pageScenario()
    return element.getAttribute(name)
  }

// export const createDownloadExtention =

export type OpenLinkExtention = () => ClientScenarioExtender
export const createOpenLinkExtention =
  (pageScenario: PageScenario): OpenLinkExtention =>
  () => {
    const clientScenario: ClientScenario = async () => {
      const element = (await pageScenario()) as HTMLAnchorElement
      const url = element.href
      console.log('Go to link: ' + url)
      return getDOM(url)
    }

    return {
      findFirst: createFindFirstExtension(clientScenario)
    }
  }
