import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'

const socials = [
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/santi-riera/"},
    {icon: <FaGithub/>, path: "https://github.com/santiagoRiera"},
]

function Social({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link 
                    key={index} 
                    href={item.path} 
                    className={iconStyles}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social