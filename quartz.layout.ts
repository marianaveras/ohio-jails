import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(),
  ],
  left: [
    Component.Explorer(),
  ],
  right: [],
  pageBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.PageTitle(),
    Component.Content(),
  ],
  beforeFooter: [
    Component.Graph(),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Search(),
  ],
  left: [
    Component.Explorer(),
  ],
  right: [],
  pageBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.PageTitle(),
    Component.Content(),
  ],
  beforeFooter: [
    Component.Graph(),
  ],
}