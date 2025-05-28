const titre= "la maison des jungles";

const prix_monstera=8;
const prix_lierre=10;
const prix_fleurs=15;

function Header(){
    return( <h1>{toUpperCase.titre}</h1>)
}

function Description() {
    return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
}

function Cart() {
    return (<p>
        <ul>
        <li>Monstera : {prix_monstera}</li>
        <li>lierre : {prix_lierre}</li>
        <li>Bouquet de fleurs : {prix_fleurs}</li>
        </ul>
    </p>)
}

function Banner() {
    return (<div>
        <Header />
        <Cart />
        <Description />
        <p>Prix total : {prix_monstera + prix_lierre + prix_fleurs}</p>
    </div>)
}