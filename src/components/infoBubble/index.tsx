import * as React from 'react'
import SkyLight from 'react-skylight'

import './index.css'

interface Props {}

export default class InfoBubble extends React.Component<Props> {
  simpleDialog: any

  constructor(props: Props) {
    super(props)
  }
  render() {
    const style = {
      color: 'black',
    }

    return (
      <div>
        <div className='info-bubble' onClick={() => this.simpleDialog.show()}>
          ?
        </div>
        <SkyLight
          dialogStyles={style}
          hideOnOverlayClicked
          ref={(ref: any) => (this.simpleDialog = ref)}
        >
          <p>
            This tool was created by{' '}
            <a href='https://github.com/Outpox' target='_blank'>
              Outpox
            </a>{' '}
            (<code>Outpox#9257</code> on Discord) for the Miscreated community.
          </p>
          <p>
            This is a work in progress, I've got a few ideas in mind such as
            pasting your own config, adding a faction generator helper,
            installation guides, improving the user experience and the design
            and more. If you wish to report a bug, suggest a new feature or even
            participate on the codebase please{' '}
            <a
              href='https://github.com/Outpox/miscreated-config-generator/issues/new'
              target='_blank'
            >
              open an issue on Github
            </a>
            .
          </p>
          <p>
            Keep in mind that I'm doing this on my free time when I'm not
            playing games.
          </p>
          <p>
            Sources are available on{' '}
            <a
              href='https://github.com/Outpox/miscreated-config-generator'
              target='_blank'
            >
              Github
            </a>
            .
          </p>
          <p>
            <strong>
              This site is in no way affiliated with Entrada Interactive.
            </strong>
            <br />
            I'm just a random developper having fun.
          </p>
        </SkyLight>
      </div>
    )
  }
}
