import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = (props) => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <span style={{float:'right', fontStyle: 'italic'}}>This page was rendered on the <b>{props.isServer ? 'server' : 'client'}</b>.</span>
    </div>
)

export default Header