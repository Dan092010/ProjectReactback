import '../assets/css/main.scss';
import Searchbar from '../components/SearchBar/SearchBar';

function Home() {
  return (
	<div>
		<main>           
			
			<section className="section-cards">
				<header className="section-cards__header">
					<h1>Welcome to Car Deluxe</h1>
					<h2>Tenga en cuenta que los artículos a la venta están en USD:</h2>
					<Searchbar/>
				</header>
					
			</section>

							

		</main>
	</div>
    
  );
}

export default Home;