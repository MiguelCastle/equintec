import './styles/teamMember.css';

type teamMemberInfo = {
    name: string,
    position: string,
    cell: string,
    email: string,
    extension: string,
    additional_info: {linked: string, education: string}
}

export interface TeamMemberProps {
    teamMember: teamMemberInfo
}
 
const TeamMember: React.FC<TeamMemberProps> = ({teamMember}) => {
    return ( 
        <div className="team-member-wrp">
            <div className="team-member-img"></div>
            <div className="team-member-info">
                <ul className="team-member-description">
                    <li style={{color: '#fcb941'}}> <b>{teamMember.name}</b></li>
                    <li>{teamMember.position}</li>
                    <li>celular {teamMember.cell}</li>
                    <li>{teamMember.email}</li>
                    <li>{teamMember.extension}</li>
                    <li>dirrecion</li>
                </ul>
                <div className="team-member-additonal-links">
                    {teamMember.additional_info.linked !== "" ? <i className="fab fa-linkedin"></i> : <i></i>}
                    {teamMember.additional_info.education !== "" ? <p>{teamMember.additional_info.education}</p> : <p></p>}
                </div>
            </div>
        </div>
     );
}
 
export default TeamMember;