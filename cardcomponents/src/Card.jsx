import ProfilePic from './assets/download.jpg'

function Card() {

	return(
		<div className="card">
			<img  className="card-image" src={ProfilePic} alt="profile pic"></img>
			<h2 className="card-title">Shadab</h2>
			<p className="card-text">I LOVE TO FIGHT ME</p>
		</div>

	);

}

export default Card