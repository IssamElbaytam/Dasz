'use strict'

require('./Hello.scss')
var React = require('react')

const Hello = (props) => {
  return (
    <div className="hello widget">
      <div className="title">Hello!</div>
      <div className="contents">
        I'm just a sample component. Please replace me with something more useful :-)
      </div>
    </div>
  )
}

module.exports = Hello
