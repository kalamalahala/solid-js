/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './index.css'
import 'bootstrap/scss/bootstrap.scss'
import 'solid-bootstrap'

import App from './App'

const root = document.getElementById('root')

render(() => <Router><App /></Router>, root!)
