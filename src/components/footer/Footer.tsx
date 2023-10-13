import { Container } from "solid-bootstrap"
import './Footer.css'
import { A } from "@solidjs/router"
import { TbMail } from "solid-icons/tb"

function AppFooter() {
    const currentYear = new Date().getFullYear()
    return (
        <footer class="bg-dark text-center text-lg-start" id="appfooter">
            <Container>
                <div class="text-center p-3 text-light">
                    © {currentYear} <A href="https://github.com/kalamalahala" target="_blank" rel="noopener nofollow">Tyler Karle</A> | <a href="mailto:admin@tkml.dev"><TbMail size={16} /> admin@tkml.dev</a>
                </div>
            </Container>
        </footer>
    )
}

export default AppFooter