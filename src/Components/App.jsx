import Main from '../App';
import { connect } from "react-redux"

function mapStateToProps (state){
    return {
        allPhotos: state
    }
}

const App = connect(mapStateToProps)(Main)

export default App;