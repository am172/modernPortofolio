import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { projectDetailsData } from '../../source';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectDetailsData.find((p) => p.id === id);
    const [lang, setLang] = useState<'en' | 'ar'>('en');
    const [showAll, setShowAll] = useState(false);

    if (!project) return <div style={{ padding: '2rem' }}>Project not found.</div>;

    const displayedImages = showAll ? project.images : project.images.slice(0, 2);

    return (
        <>
            <style>
                {`
       #navbar{
       display:none;
       }
      `}
            </style>
            <div className="project-details container">
                <div className="lang-toggle">
                    <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
                    <button onClick={() => setLang('ar')} className={lang === 'ar' ? 'active' : ''}>ع</button>
                </div>
                <div className="thumbnail">
                    <img src={project.thumbnail[0]} alt="project logo" className="project-icon" />
                </div>

                <h1 className="title">
                    {project.name[lang as keyof typeof project.name]}
                </h1>
                <div className="description" dangerouslySetInnerHTML={{ __html: project.description[lang as keyof typeof project.description] }} />

                <div className="images">
                    {displayedImages.map((img, idx) => (
                        <img key={idx} src={img} alt={`screenshot-${idx}`} />
                    ))}

                    {project.images.length > 2 && (
                        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
                            {showAll
                                ? (lang === 'en' ? "Show Less" : "عرض أقل")
                                : (lang === 'en' ? "Show More" : "عرض المزيد")}
                        </button>
                    )}
                </div>
                <div className="teck">
                    <h3 className='hTeck'>{lang === 'en' ? "Technologies Used" : "التقنيات المستخدمة"}</h3>
                    <br />
                    <div className='spotlight'></div>

                    <div className="column stacks__container">
                        {project.tech.map((tech, i) => (
                            <div
                                className="flex__center btn stack"
                                key={i}
                                style={{
                                    border: '1px solid #a780ff',
                                    backgroundColor: 'rgba(36, 3, 45, 0.12)',
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
