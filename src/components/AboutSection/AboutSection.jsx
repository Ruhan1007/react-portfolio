import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='Ruhan Singh Kharayat' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Ruhan. I'm a passionate Developer who loves solving real-world problems through code and creativity. Currently honing my skills in C, Python, and web development (HTML, CSS), I enjoy building projects that are simple, functional, and meaningful. From working on Arduino-based systems to participating in hackathons, I’m always looking for opportunities to learn, experiment, and grow.

Beyond coding, I’m someone who enjoys exploring new ideas, whether it’s through tech, creative writing, or music. I like challenging myself, improving step by step, and turning curiosity into something tangible. I believe in consistent growth, hands-on learning, and making the most out of every experience I get.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;