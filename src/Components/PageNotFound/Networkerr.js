import React from 'react'
// import { Link } from 'react-router-dom'

export const Networkerr = () => {
  return (
    <section className='center'>
      <div className='body'>
        <div className="icon"></div>
        <div className="text">
          <h2>Hmmm... can't reach this page</h2>
          <p className='api'><h2> Check your Internet connection...</h2></p>
          <h3>Try:</h3>
          <ul>
            <li>Search the web for <a href="https://www.google.com/search?q=thisisnotawebsite&source=hp&ei=-0F1YurhJeuJytMP1tW54A0&iflsig=AJiK0e8AAAAAYnVQC9ak2yqe0Mg25wODACiydF9tdCPx&ved=0ahUKEwiqy8awm8v3AhXrhHIEHdZqDtwQ4dUDCAk&uact=5&oq=thisisnotawebsite&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOg4IABCPARDqAhCMAxDlAjoLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOhEILhCABBCxAxCDARDHARCjAjoICC4QsQMQgwE6CwguELEDEIMBENQCOgsILhCABBCxAxDUAjoICAAQgAQQsQM6CwguEIAEELEDEIMBOggIABCxAxCDAToICC4QgAQQ1AI6CAgAEIAEEMkDOgUIABCSAzoECAAQAzoKCAAQgAQQsQMQCjoNCC4QgAQQsQMQgwEQCjoHCAAQgAQQCjoKCAAQsQMQgwEQCjoECAAQCjoHCC4QgAQQCjoECC4QClC1JFjHRGDySGgCcAB4AYABoQGIAdcIkgEEMTUuMpgBAKABAbABCg&sclient=gws-wiz">thisisnotawebsite</a></li>
            <li>Checking the connection</li>
            <li><a href="#">Checking the proxy and the firewall</a></li>
            <li><a href="#">Running windows network diagnostics</a></li>
          </ul>
          <div className="err">ERR_CONNECTION_TIMED_OUT</div>
        </div>

      </div>
    </section>
  )
}
