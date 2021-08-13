const styleguideUrl = 'http://host.docker.internal:8081'

module.exports = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 375,
      "height": 677
    },
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    },
  ],
  "scenarios": [
    {
      "label": "Button",
      "url": `${styleguideUrl}/section-elements.html`,
      "referenceUrl": `${styleguideUrl}/section-elements.html`,
      "selectors": ["#kssref-elements-button .kss-modifier__wrapper"],
      "removeSelectors": [".kss-modifier__heading"]
    },
    {
      "label": "Card",
      "url": `${styleguideUrl}/section-elements.html`,
      "referenceUrl": `${styleguideUrl}/section-elements.html`,
      "selectors": ["#kssref-elements-card .kss-modifier__wrapper"],
      "removeSelectors": [".kss-modifier__heading"]
    },
  ],
  "paths": {
    "bitmaps_reference": `backstop_data/bitmaps_reference`,
    "bitmaps_test": `backstop_data/bitmaps_test`,
    "html_report": `backstop_data/html_report`,
  },
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
}
