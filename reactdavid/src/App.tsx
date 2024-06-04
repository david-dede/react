
import './App.css'
// import Check from './check'
import Testimonial from './componebts/Testimonial'


function App() {
return (


<Testimonial image='data:image/webp;base64,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' name='davido' testimonial='okok okok okoko okoko kokok '/>

)
}

export default App