// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
import {Component} from 'react'
class Skills extends Component {
    skills = ["HTML", "CSS", "JavaScript", "React", "Node"];
    
     
    render(){
        return (<ul className='skills'>
            {this.skills.map((skill)=>(
                <li key={skill} className='skill'>{skill}</li>
            ))}
        
        </ul>)
    }

}
export default Skills;
