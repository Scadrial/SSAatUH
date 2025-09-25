
function Header(){
    return(
        <header>
            <h1 style={{display:'flex', justifyContent:'center', color: 'white'}}>Secular Student Alliance at the University Of Houston</h1>
            <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ul style={{listStyle: 'none', display: 'flex', gap: '20px', padding: 0, margin: 0}}>
                    <li className='navBarLink'><a href = '#'>Home</a></li>
                    <li className='navBarLink'><a href = '#'>About Us</a></li>
                    <li className='navBarLink'><a href = '#'>Contact</a></li>
                    <li className='navBarLink'><a href = '#'>Join Us</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header;