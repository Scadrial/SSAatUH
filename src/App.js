import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import tempPic from './logo192.png';

function App() {
  return(
    <>
      <div style={{backgroundColor:'red', minHeight: '100vh'}}>
        <Header></Header>
        <div style={{justifyContent: 'center', alignItems:'center', display:'flex'}}>
          <Card
            name = "George Meadows"
            image = {tempPic}
            position = "President"
          />
          <Card
            name="Vice President"
            image ={tempPic}
            position="Vice President"
          />
          <Card
            name="Financial Officer"
            image={tempPic}
            position="Financial Officer"
          />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
