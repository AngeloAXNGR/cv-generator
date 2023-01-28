import { useEffect, useState, useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";
import { PreviewUL } from "./PreviewStyle";

const Skills = () => {
	const {formData} = useContext(FormDataContext);
	const [skills, setSkills] = useState<string[]>([]);

	useEffect(() => {
		setSkills(formData.skills.split(','));
	},[formData.skills])


	const skillList = skills.map((skill) => {return <li>{skill}</li>})
	return (
		<div>
			<h1>Skills</h1>
			<PreviewUL>
				{skillList}
			</PreviewUL>
		</div>
	)
}

export default Skills;