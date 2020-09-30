const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/dr/code/open/labs/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-addreport-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/addreport.tsx"))),
  "component---src-pages-analytics-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/analytics.tsx"))),
  "component---src-pages-dashboard-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/dashboard.tsx"))),
  "component---src-pages-expenses-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/expenses.tsx"))),
  "component---src-pages-home-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/home.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/index.tsx"))),
  "component---src-pages-login-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/login.tsx"))),
  "component---src-pages-patientdata-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/patientdata.tsx"))),
  "component---src-pages-setting-tsx": hot(preferDefault(require("/home/dr/code/open/labs/frontend/src/pages/setting.tsx")))
}

