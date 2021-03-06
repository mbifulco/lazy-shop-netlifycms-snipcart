import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />

        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          id="snipcart"
          data-api-key="YzRkZDU4NTUtMzQ1MC00NTA3LWIzNDUtNTNiZjI0MmMyYTg3NjM2OTA2OTkzMDk5MTg4NTA5"
        />

        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
        {props.headComponents}
        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
