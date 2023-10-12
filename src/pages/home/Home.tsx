import { Button } from "solid-bootstrap"

function Home() {
    
    return (
        <div>
            <h1>Home</h1>
            <p>Home page</p>
            <Button textContent={"Click me!"} onClick={() => console.log('yeet')} href="/about" />
        </div>
    )
}

export default Home