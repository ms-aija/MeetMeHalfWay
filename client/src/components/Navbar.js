import Lottie from 'react-lottie';
import animationData from '../lotties/airplane-dots.json';

const Navbar = () => {
  // -- Setup for Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className='Navbar'>
      <div className="navbar-title-animation">
        <h1>MeetMeHalfWay</h1>
        <div>
          <Lottie
            options={defaultOptions}
            height={30}
            width={123}
          />
        </div>
      </div>
      <p>Discover common destinations served by direct flights</p>
    </section>
  )
}

export default Navbar