require('dotenv').config()
const path = require('path')

exports.createPages = async ({ graphql, reporter, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      entries {
        entries {
          data {
            _id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const entryTemplate = path.resolve(`src/templates/Entry.js`)
  result.data.entries.entries.data.forEach(entry => {
    const path = `/entry/${entry._id}`
    createPage({
      path,
      component: entryTemplate,
      context: {
        id: entry._id
      }
    })
  })
}
