import { Col, Container, Image, Row } from "solid-bootstrap"
import profile from '../../assets/profile.png'
import { BsGithub } from "solid-icons/bs"
import { RiDeviceAirplayLine } from "solid-icons/ri"

function About() {
    return (
        <Container fluid>
            <Row class="mt-5">
                <Col>
                    <Image src={profile} roundedCircle alt="Tyler Karle" width="200" height="200" />
                </Col>
                <Col>
                    <BsGithub size={32} /> <a href="https://github.com/kalamalahala">Tyler karle</a>
                    <RiDeviceAirplayLine size={32} /> <a href="https://tylerkarle.com">tylerkarle.com</a>
                </Col>
            </Row>
        </Container>
    )
}

export default About