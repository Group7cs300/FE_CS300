import { Container } from "react-bootstrap"
import { PopularCategories, PopularCourses } from "../../components"
import './LearnEverything.css'

export default function LearnEverything() {
    return (
        <Container className="learn_everything">
            <h1>Learn Everything You Need</h1>
            <PopularCategories />
            <PopularCourses />
        </Container>
    )
}