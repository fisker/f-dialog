/* eslint-disable import/no-extraneous-dependencies */

import Promise from 'es6-promise'
import dialogPolyfill from 'dialog-polyfill'

import env from './core/env'
import assign from './utils/assign'
import exportModule from './core/export-module'

assign(env, {
  Promise,
  dialogPolyfill,
})

export default exportModule()
