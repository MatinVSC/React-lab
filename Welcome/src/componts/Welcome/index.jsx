import "./index.css";


const WelcomePage = () => {
   
    
    return (
<>
<main className="main">
  <aside className="sidebar">
    <nav className="nav">
      <ul>
        <li className="active"><a href="#">Welcome</a></li>
        <li><a href="#">Who We Are</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </nav>
  </aside>

  <section className="twitter">
    <div className="container">
      <a target="_blank" href="https://github.com/MatinVSC">
        <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-128.png" />
      </a>
      <p>Follow me</p>
      <p>on gitHub!</p>
    </div>
  </section>
</main>
</>
    );
};

export default WelcomePage;