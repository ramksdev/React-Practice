
// These are all 'components' that can serve towards modularizing our HTML. Each component returns content (HTML). 
// Lastly, we use component syntax in react to form our page. 
// Note, our content in each component must be under one div, or absolute parent. 


//Main page where all components are being instatiated 
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function MainContent() {
    return (
        <div>

            <h1>Reasons why I want to learn react</h1>
            <ul>
                <li> Contribute to Phitnest</li>
                <li>Help the cause succeed</li>
                <li>Happy to make software that helps people</li>
            </ul>

        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>
                Ⓒ2022 Sharma inc. All rights reserved.
            </small>
        </footer>
    )
}


function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="react logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li> Pricing </li>
                    <li> About  </li>
                    <li> Contact </li>
                </ul>
            </nav>
        </header>
    )
}

//ReactDOM - which is a global variable renders our content that is within 'page' into div with id 'root'
ReactDOM.render(
    <Page />,
    document.getElementById("root")
)
