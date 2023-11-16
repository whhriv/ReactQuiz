import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Home from "./views/Home";
import Register from './views/.2-Register';


export default function App() {
    return (
      <BrowserRouter>
      <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/register" element={<Register />} />
                   
                </Routes>
            </Container>
        </BrowserRouter>
    )
    }