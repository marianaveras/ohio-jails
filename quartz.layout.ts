import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub for Quartz, produced by Jacky Zhao": "https://github.com/jackyzha0/quartz"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [

    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    Component.DesktopOnly(Component.Explorer()),
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),],
  left: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [    Component.DesktopOnly(Component.Explorer()),],
}