import React from 'react'
import { LuSchool2 } from "react-icons/lu";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <div className='Education-container'>
     <h1>Education</h1> 
     <VerticalTimeline lineColor='#000'>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<LuSchool2 />}
  >
    <h3 className="vertical-timeline-element-title">High School from State Board</h3>
    <h4 className="vertical-timeline-element-subtitle">Udai Pratap inter college</h4>
    <p>
      Marks 78.3 percentage
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< FaSchool  />}
  >
    <h3 className="vertical-timeline-element-title">Intermediate from State Board</h3>
    <h4 className="vertical-timeline-element-subtitle">Udai Pratap inter college</h4>
    <p>
      Marks 68.4 percentage
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2021 - 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<IoSchoolSharp/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science from CS</h3>
    <h4 className="vertical-timeline-element-subtitle">Jeevandeep Mahavidayalaya, Varanasi</h4>
    <p>
      Marks 60.4 percentage
    </p>
  </VerticalTimelineElement>


    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaStarHalfAlt />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Using Mern</h4>
    <p>
      Full Stack Web developer(Frontend + Backend)
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GiSkills  />}>
  <h3 className="vertical-timeline-element-title">My Development Skills</h3>
   <p>Frontend (HTML,CSS,Javacsript,ReactJs, React-Bootstrap, Material-Ui, Tailwind CSS)</p>
   <p>Backend  (NodeJs,ExpressJs,MongoDB,SQL-Server,RestApi)</p>
    </VerticalTimelineElement>
     </VerticalTimeline>
    </div>
  )
}

export default Education
