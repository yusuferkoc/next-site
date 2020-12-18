import Link from 'next/link'
 
function Navigation() {
  return ( <nav>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <br></br>
        <Link href="/about">
          <a>Hakkımda</a>
        </Link>
      </nav>
    
  );
}

export default Navigation;
