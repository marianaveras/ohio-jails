 import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)

export const defaultContentPageLayout: PageLayout = {
 
  left: [
    Component.Explorer(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
        Component.Search(),
    Component.Darkmode(),
  
  ],
  pageBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.PageTitle(),

  ],
}
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
 
  left: [
    Component.Explorer(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
        Component.Search(),
    Component.Darkmode(),
  
  ],
  pageBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.PageTitle(),

  ],
}
