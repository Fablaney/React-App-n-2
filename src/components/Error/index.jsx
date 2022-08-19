import { Link } from "react-router-dom"
import '../../styles/style.css'

function Error()
{
    return (
        <div>

            <h1>Oups 🙈 Cette page n'existe pas</h1>

            <Link to="/">Retour à la apge d'Accueil</Link>

        </div>
    )
}
 
export default Error