const Navigation = ({ currentSection, setCurrentSection }) => {
    return (
      <nav>
        <ul>
          {['AboutMe', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <li
              key={section}
              className={currentSection === section ? 'active' : ''}
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navigation;
  